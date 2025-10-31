# Google Sheets API Setup Instructions

## Step 1: Create Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click "Select a project" → "New Project"
3. Name your project (e.g., "Mind Clear Waitlist")
4. Click "Create"

## Step 2: Enable Google Sheets API

1. In your new project, go to "APIs & Services" → "Library"
2. Search for "Google Sheets API"
3. Click on it and press "Enable"

## Step 3: Create Service Account

1. Go to "APIs & Services" → "Credentials"
2. Click "Create Credentials" → "Service Account"
3. Fill in:
   - Service account name: `mind-clear-waitlist`
   - Service account ID: `mind-clear-waitlist` (auto-generated)
   - Description: `Service account for waitlist email collection`
4. Click "Create and Continue"
5. Skip the "Grant access" step (click "Continue")
6. Click "Done"

## Step 4: Generate Service Account Key

1. In "Credentials", find your service account
2. Click on the service account email
3. Go to "Keys" tab
4. Click "Add Key" → "Create new key"
5. Choose "JSON" format
6. Click "Create" - this downloads a JSON file
7. **Keep this file secure!** This is your private key

## Step 5: Create Google Sheet

1. Go to [Google Sheets](https://sheets.google.com/)
2. Create a new spreadsheet
3. Name it "Mind Clear Waitlist"
4. Set up columns in row 1:
   - A1: `Email`
   - B1: `Timestamp`
   - C1: `Source`
5. Note the spreadsheet ID from the URL (the long string between `/d/` and `/edit`)

## Step 6: Share Sheet with Service Account

1. In your Google Sheet, click "Share" (top right)
2. Add the service account email (from the JSON file, field: `client_email`)
3. Give it "Editor" permissions
4. Click "Send"

## Step 7: Get Your Credentials

From the downloaded JSON file, you'll need:
- `client_email` (service account email)
- `private_key` (the long private key string)

## Step 8: Add to Environment Variables

Create a `.env.local` file in your project root with:

```env
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY_HERE\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEETS_CLIENT_EMAIL="your-service-account@project.iam.gserviceaccount.com"
GOOGLE_SPREADSHEET_ID="your-spreadsheet-id-here"
```

**Important Notes:**
- Replace the actual values with your credentials
- For the private key, keep the `\n` characters as they are
- Never commit the `.env.local` file to git
- The `.env.local` file should be added to `.gitignore`

## Troubleshooting

- If you get permission errors, make sure the service account email has Editor access to the sheet
- If the API isn't working, verify the Google Sheets API is enabled
- Double-check that your environment variables are correctly formatted

