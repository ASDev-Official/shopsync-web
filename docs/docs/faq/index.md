# FAQ & Troubleshooting

Find answers to common questions and solutions to typical issues.

## General Questions

??? question "Is ShopSync free?"
Yes! ShopSync is completely free and open source under the MIT License. There are no hidden costs, subscriptions, or in-app purchases required for core features.

??? question "What platforms does ShopSync support?"
ShopSync currently supports:

    - ✅ Android (5.0+)
    - ✅ Web (all modern browsers)
    - ✅ WearOS (included with Android app)
    - 🚧 iOS (coming soon)
    - 🚧 Desktop (macOS, Windows, Linux - planned)

??? question "Do I need internet to use ShopSync?"
No! ShopSync works fully offline. You can view, create, and edit lists without internet. Changes sync automatically when you reconnect.

??? question "How many lists can I create?"
There's no hard limit. You can create as many lists as you need. However, for best performance, we recommend archiving or deleting lists you no longer use.

??? question "Can I use ShopSync on multiple devices?"
Yes! Sign in with the same Google account on all your devices, and your lists will sync automatically.

??? question "Is my data secure?"
Yes. All data is encrypted in transit (HTTPS) and secured by Firebase. Only you and people you explicitly share with can access your lists.

## Account & Authentication

??? question "Can I change my email address?"
If using Google Sign-In, your email is tied to your Google account and cannot be changed in ShopSync. For email/password accounts, you'll need to create a new account.

??? question "I forgot my password. How do I reset it?"

    1. Go to the sign-in screen
    2. Tap "Forgot Password?"
    3. Enter your email
    4. Check your email for reset link
    5. Follow the instructions

??? question "Can I delete my account?"
Yes. Go to Settings → Account → Delete Account. This permanently removes all your data and cannot be undone.

??? question "Why can't I sign in with Google?"
Common causes:

    - Outdated Google Play Services (Android)
    - Browser blocking third-party cookies (Web)
    - Temporary Firebase service issue
    - Incorrect time/date on device

    Try updating Google Play Services or signing in with email/password instead.

## Lists & Items

??? question "Can I recover a deleted list?"
Yes, within 30 days. Go to Settings → Recycle Bin and restore the list. After 30 days, lists are permanently deleted.

??? question "How do I reorder items in a list?"
Long-press and drag items to reorder them. You can also enable automatic sorting by category in list settings.

??? question "Can I duplicate a list?"
Yes. Long-press a list on the home screen and select "Duplicate". All items will be copied to a new list.

??? question "Why don't my items have icons?"
Icon suggestions require the Smart Suggestions feature to be enabled. Go to Settings → Lists & Items → Enable Smart Suggestions.

## Sharing & Collaboration

??? question "How many people can I share a list with?"
There's no hard limit, but for best performance, we recommend limiting to 10-15 active collaborators per list.

??? question "Can collaborators delete my list?"
No. Only the list owner can delete the list. Collaborators can only add, edit, and check off items.

??? question "How do I stop sharing a list?"
Open the list, tap the collaborators icon, and remove each person. Or delete the list entirely.

??? question "Why aren't changes syncing in real-time?"
Check that:

    - All devices are online
    - App is up to date
    - You're using the same account
    - Firebase isn't experiencing issues

??? question "Can I transfer list ownership?"
Not currently. The creator always remains the owner. You can duplicate the list and share with the new owner.

## Technical Issues

??? question "App crashes on startup"
Try:

    1. Restart your device
    2. Clear app cache (Settings → Apps → ShopSync → Storage)
    3. Update to the latest version
    4. Reinstall the app
    5. Report issue on GitHub if persistent

??? question "Changes aren't syncing"
**Immediate fixes:**

    - Check internet connection
    - Pull down to manually refresh
    - Sign out and back in
    - Clear app cache

    **If persistent:**

    - Check Firebase Console for service issues
    - Verify security rules allow access
    - Update app to latest version

??? question "High battery usage"
ShopSync is optimized for battery life, but you can:

    - Disable background sync
    - Use WiFi-only sync
    - Disable Smart Suggestions
    - Reduce sync frequency
    - Close app when not in use

??? question "App is slow/laggy"
**Performance tips:**

    - Archive old lists
    - Clear cached data
    - Reduce number of items per list
    - Update to latest version
    - Restart device

## Features

??? question "How do Smart Suggestions work?"
Smart Suggestions use an on-device machine learning model to predict item names, icons, and categories. It learns from your usage and common shopping patterns.

??? question "Can I use ShopSync offline?"
Yes! ShopSync is offline-first. All features work without internet. Changes sync automatically when you reconnect.

??? question "What's the difference between List Groups and Categories?" - **List Groups**: Organize multiple shopping lists (e.g., "Grocery Stores" group) - **Categories**: Organize items within a list (e.g., "Produce", "Dairy")

??? question "Can I export my lists?"
Yes. Open a list, tap menu → Export. Choose text or CSV format, then share via any app.

??? question "Does ShopSync have widgets?"
Yes, on Android! Long-press your home screen, select Widgets, find ShopSync, and add to home screen.

??? question "Can I use ShopSync on my smartwatch?"
Yes! If you have the Android app installed, a WearOS companion app will automatically install on your paired smartwatch.

## Privacy & Data

??? question "What data does ShopSync collect?"
ShopSync collects:

    - ✅ Account info (name, email)
    - ✅ Shopping lists and items
    - ✅ Anonymous usage statistics (optional)
    - ❌ NO tracking for ads
    - ❌ NO selling of data
    - ❌ NO sharing with third parties

??? question "Where is my data stored?"
Your data is stored in:

    - **Cloud**: Firebase Firestore (encrypted)
    - **Local**: Your device (encrypted in transit)

    You can export or delete your data anytime.

??? question "Can ShopSync developers see my lists?"
No. Your data is private and encrypted. Developers cannot access individual user data. All access is controlled by Firebase security rules.

??? question "What happens to my data if I uninstall?"
Local data is deleted, but cloud data remains. You can sign in again on any device to access your lists.

## Troubleshooting Common Errors

### "Failed to connect to Firebase"

**Causes:**

- No internet connection
- Firebase service outage
- Incorrect Firebase configuration

**Solutions:**

1. Check internet connection
2. Visit [Firebase Status](https://status.firebase.google.com)
3. Update app to latest version
4. Reinstall if persistent

### "Permission Denied"

**Causes:**

- Not signed in
- Security rules prevent access
- Account lacks permissions

**Solutions:**

1. Sign in to your account
2. Verify you're using correct account
3. Check list sharing permissions
4. Contact support if you should have access

### "Sync Failed"

**Causes:**

- Offline mode
- Large number of pending changes
- Network timeout

**Solutions:**

1. Ensure you're online
2. Try manual sync (pull down)
3. Wait and retry
4. Check Settings → Storage for pending items

### "Item Already Exists"

**Causes:**

- Duplicate item added
- Sync conflict

**Solutions:**

1. Check if item is already in list
2. Delete duplicate
3. Refresh list

## Getting More Help

### Still Need Assistance?

<div class="grid cards" markdown>

- :material-github:{ .lg .middle } **GitHub Issues**

  ***

  Report bugs or request features

  [:octicons-arrow-right-24: Open Issue](https://github.com/ASDev-Official/ShopSync/issues)

- :material-forum:{ .lg .middle } **Discussions**

  ***

  Ask questions and get help from the community

  [:octicons-arrow-right-24: Join Discussion](https://github.com/ASDev-Official/ShopSync/discussions)

- :material-book:{ .lg .middle } **Documentation**

  ***

  Browse comprehensive guides

  [:octicons-arrow-right-24: Read Docs](../index.md)

- :material-email:{ .lg .middle } **Contact**

  ***

  Reach out directly for support

  [:octicons-arrow-right-24: Send Feedback](../user-guide/settings.md)

</div>

## Reporting Issues

When reporting an issue, please include:

1. **Device/Platform**: Android, Web, WearOS
2. **App Version**: Settings → About → Version
3. **Steps to Reproduce**: How to trigger the issue
4. **Expected Behavior**: What should happen
5. **Actual Behavior**: What actually happens
6. **Screenshots**: If applicable
7. **Logs**: Any error messages

## Performance Tips

!!! tip "Optimize Performance" - Keep lists under 500 items for best performance - Archive completed/old lists - Clear cache periodically - Update to latest version - Use WiFi for large syncs - Close unused apps

## Best Practices

!!! tip "Use ShopSync Effectively" - **Organize with groups** - Keep lists organized - **Use categories** - Shop more efficiently - **Share wisely** - Only with active users - **Sync regularly** - Keep data up to date - **Backup important lists** - Export periodically

---

Can't find your answer? [Open an issue](https://github.com/ASDev-Official/ShopSync/issues) or [start a discussion](https://github.com/ASDev-Official/ShopSync/discussions)!
