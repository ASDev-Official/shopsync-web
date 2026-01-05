# Authentication

ShopSync uses Firebase Authentication to secure your data and provide seamless access across devices.

## Sign In Methods

ShopSync supports multiple authentication methods:

### Google Sign-In (Recommended)

The easiest and most secure way to sign in:

1. Click **"Sign in with Google"**
2. Select your Google account
3. Grant necessary permissions
4. You're in!

**Benefits:**

- ✅ No password to remember
- ✅ Fast and secure
- ✅ Works across all platforms
- ✅ Automatic profile picture

### Email and Password

Sign up with your email address:

1. Click **"Sign up with Email"**
2. Enter your email address
3. Create a secure password
4. Verify your email (check spam folder)
5. Sign in with your credentials

**Password Requirements:**

- Minimum 6 characters
- Mix of letters and numbers recommended
- Special characters allowed

## First Time Setup

After your first sign-in:

1. **Welcome Screen** - Brief introduction to ShopSync
2. **Permissions** (Android only)
   - Storage - Save list exports
3. **Profile Setup** - Your name and photo are automatically imported from Google

## Account Management

### View Profile

Access your profile from the home screen:

1. Tap the **profile icon** (top right)
2. View your:
   - Display name
   - Email address
   - Account creation date
   - Profile picture

### Change Display Name

1. Go to **Profile**
2. Tap **Edit Name**
3. Enter your new name
4. Tap **Save**

### Update Profile Picture

With Google Sign-In, your profile picture syncs automatically from your Google account.

To change it:

1. Update your Google account profile picture
2. Sign out of ShopSync
3. Sign back in

## Password Management

### Change Password

If using email/password authentication:

1. Go to **Settings**
2. Tap **Account**
3. Tap **Change Password**
4. Enter current password
5. Enter new password
6. Confirm new password
7. Tap **Update**

### Forgot Password

1. On the sign-in screen, tap **"Forgot Password?"**
2. Enter your email address
3. Tap **Send Reset Link**
4. Check your email for the reset link
5. Click the link and follow instructions
6. Create a new password
7. Sign in with your new password

## Security Features

### Two-Factor Authentication

For Google Sign-In users:

- Enable 2FA on your Google account
- ShopSync inherits this security automatically

### Session Management

- Sessions remain active for 30 days
- Sign out if using a shared device
- Use incognito/private browsing on public computers

### Data Protection

- All data is encrypted in transit (HTTPS)
- Firebase secures data at rest
- Only you can access your private lists
- Shared lists are only visible to invited users

## Sign Out

To sign out of ShopSync:

=== "Mobile App" 1. Open **Settings** 2. Scroll to bottom 3. Tap **Sign Out** 4. Confirm when prompted

=== "Web App" 1. Click your profile picture 2. Click **Sign Out** 3. Confirm when prompted

!!! warning "Offline Data"
When you sign out, locally cached data is cleared. Ensure you're online before signing out to sync all changes.

## Account Deletion

To permanently delete your account:

1. Go to **Settings**
2. Tap **Account**
3. Tap **Delete Account**
4. Review what will be deleted:
   - All your shopping lists
   - All shared lists you own
   - Your profile data
   - List groups and categories
5. Type your email to confirm
6. Tap **Delete My Account**

!!! danger "This Action is Irreversible"
Account deletion is permanent. All your data will be lost and cannot be recovered.

## Multiple Accounts

ShopSync supports one account per device at a time. To switch accounts:

1. Sign out of the current account
2. Sign in with a different account

!!! tip "Family Sharing"
Instead of multiple accounts, consider sharing lists with family members. This way, everyone can use their own account while collaborating on the same lists.

## Troubleshooting

### Can't Sign In with Google

1. **Check Internet Connection**

   - Ensure you have a stable connection
   - Try switching between Wi-Fi and mobile data

2. **Clear App Cache** (Android)

   - Settings → Apps → ShopSync → Storage → Clear Cache
   - Try signing in again

3. **Update Google Play Services** (Android)

   - Open Play Store
   - Search for "Google Play Services"
   - Update if available

4. **Check Account Status**
   - Ensure your Google account is active
   - Try signing into another Google service

### Email Verification Not Received

1. **Check Spam/Junk Folder**

   - Verification emails sometimes end up in spam

2. **Resend Verification Email**

   - Go to sign-in screen
   - Enter your email
   - Tap "Resend verification"

3. **Check Email Address**
   - Ensure you entered the correct email
   - Check for typos

### Password Reset Link Expired

Password reset links expire after 24 hours:

1. Request a new reset link
2. Complete the reset process immediately
3. Check your spam folder if you don't see it

### Account Locked

If you enter the wrong password multiple times:

1. Wait 15 minutes
2. Try again
3. If still locked, use password reset

## Privacy & Security Tips

!!! tip "Best Practices" - **Never share your password** with anyone - **Use a unique password** for ShopSync - **Enable 2FA** on your Google account - **Sign out on shared devices** - **Keep your email secure** - it's your account recovery method - **Review shared lists** regularly and remove collaborators you don't recognize

## Next Steps

Now that you're signed in:

- [Create your first list](managing-lists.md)
- [Add items to your list](working-with-items.md)
- [Share lists with others](sharing.md)
- [Explore all features](../features/index.md)

---

Need help? Check the [FAQ](../faq/index.md) or [report an issue](https://github.com/ASDev-Official/ShopSync/issues).
