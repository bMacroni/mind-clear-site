# Environment Variables Setup

## Step 1: Create Environment File

Create a file named `.env.local` in your project root directory (same level as `package.json`).

## Step 2: Add Your Credentials

Copy the following template into your `.env.local` file and replace the placeholder values:

```env
# Google Sheets API Configuration
GOOGLE_SHEETS_CLIENT_EMAIL="your-service-account@project.iam.gserviceaccount.com"
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY_HERE\n-----END PRIVATE KEY-----\n"
GOOGLE_SPREADSHEET_ID="your-spreadsheet-id-here"
```

## Step 3: Get Your Values

### GOOGLE_SHEETS_CLIENT_EMAIL
- This is the `client_email` field from your downloaded service account JSON file
- Example: `mind-clear-waitlist@your-project.iam.gserviceaccount.com`

### GOOGLE_SHEETS_PRIVATE_KEY
- This is the `private_key` field from your downloaded service account JSON file
- **Important**: Keep the `\n` characters exactly as they are - they represent actual newlines
- The private key should start with `-----BEGIN PRIVATE KEY-----` and end with `-----END PRIVATE KEY-----`

### GOOGLE_SPREADSHEET_ID
- This is the long string in your Google Sheets URL between `/d/` and `/edit`
- Example: `1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms`

## Step 4: Security Notes

- **Never commit `.env.local` to git** - it should already be in your `.gitignore`
- Keep your service account JSON file secure
- Don't share these credentials with anyone

## Step 5: Test Your Setup

1. Run `npm install` to install the new dependencies
2. Start your development server with `npm run dev`
3. Try submitting an email through the waitlist form
4. Check your Google Sheet to see if the email was added

## Troubleshooting

- If you get authentication errors, double-check your credentials
- Make sure the service account has Editor access to your Google Sheet
- Verify that the Google Sheets API is enabled in your Google Cloud project
- Check the browser console and server logs for any error messages

