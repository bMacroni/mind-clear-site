import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

// Email validation function
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Initialize Google Sheets API
async function initializeSheets() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const sheets = google.sheets({ version: 'v4', auth });
  return sheets;
}

// Check if email already exists in the sheet
async function checkDuplicateEmail(sheets: any, spreadsheetId: string, email: string): Promise<boolean> {
  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: 'A:A', // Check column A (Email column)
    });

    const rows = response.data.values || [];
    return rows.some((row: string[]) => row[0]?.toLowerCase() === email.toLowerCase());
  } catch (error) {
    console.error('Error checking for duplicate email:', error);
    return false; // If we can't check, allow the submission
  }
}

// Add email to the sheet
async function addEmailToSheet(sheets: any, spreadsheetId: string, email: string): Promise<void> {
  const timestamp = new Date().toISOString();
  const source = 'Website Waitlist';

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: 'A:C', // Append to columns A, B, C
    valueInputOption: 'RAW',
    requestBody: {
      values: [[email, timestamp, source]],
    },
  });
}

export async function POST(request: NextRequest) {
  try {
    // Check if required environment variables are set
    if (!process.env.GOOGLE_SHEETS_CLIENT_EMAIL || 
        !process.env.GOOGLE_SHEETS_PRIVATE_KEY || 
        !process.env.GOOGLE_SPREADSHEET_ID) {
      console.error('Missing required environment variables');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Parse request body
    const body = await request.json();
    const { email } = body;

    // Validate email
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Initialize Google Sheets
    const sheets = await initializeSheets();
    const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID!;

    // Check for duplicate email
    const isDuplicate = await checkDuplicateEmail(sheets, spreadsheetId, email);
    if (isDuplicate) {
      return NextResponse.json(
        { error: 'This email is already on the waitlist' },
        { status: 409 }
      );
    }

    // Add email to sheet
    await addEmailToSheet(sheets, spreadsheetId, email);

    return NextResponse.json(
      { message: 'Successfully added to waitlist!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Waitlist API error:', error);
    return NextResponse.json(
      { error: 'Failed to add email to waitlist. Please try again.' },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}

