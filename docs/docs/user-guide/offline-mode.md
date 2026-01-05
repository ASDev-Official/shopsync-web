# Offline Mode

ShopSync is built with an offline-first architecture, allowing you to use all core features without an internet connection.

## How Offline Mode Works

### Automatic Detection

ShopSync automatically detects your connection status:

- **Online** - Green indicator, real-time sync enabled
- **Offline** - Orange indicator, changes saved locally

### Local Storage

When offline, all data is stored on your device:

- View all your lists
- Add new items
- Edit existing items
- Check off items
- Create new lists
- Delete items (moved to local recycle bin)

### Automatic Sync

When you reconnect:

- All local changes automatically sync to cloud
- Changes from other devices download
- Conflicts resolved automatically
- Sync status shown briefly

## What Works Offline

### ✅ Available Features

| Feature         | Offline Support      |
| --------------- | -------------------- |
| View lists      | ✅ Full support      |
| View items      | ✅ Full support      |
| Add items       | ✅ Full support      |
| Edit items      | ✅ Full support      |
| Check off items | ✅ Full support      |
| Delete items    | ✅ Full support      |
| Create lists    | ✅ Full support      |
| Edit list names | ✅ Full support      |
| Categories      | ✅ Full support      |
| List groups     | ✅ Full support      |
| Search          | ✅ Local search only |

### ❌ Limited Features

| Feature           | Why Limited                        |
| ----------------- | ---------------------------------- |
| Sharing lists     | Requires internet to send invites  |
| Accepting shares  | Needs cloud verification           |
| Google Sign-In    | Authentication requires connection |
| Smart suggestions | ML model needs initial download    |
| Profile updates   | Sync with Firebase required        |

## Using ShopSync Offline

### Best Practices

!!! tip "Prepare for Offline Use"

    1. **Open lists while online** - Ensure they're cached
    2. **Sync before going offline** - Latest data downloaded
    3. **Don't sign out offline** - You won't be able to sign back in
    4. **Make changes freely** - Everything syncs when back online

### Viewing Offline Status

The offline indicator appears:

- **Top of home screen** - Connection status banner
- **List view** - Sync status per list
- **Settings** - Last sync timestamp

### Managing Local Data

Check local storage usage:

1. Go to **Settings** → **Storage**
2. See:
   - Total local data size
   - Number of cached lists
   - Number of pending sync items
   - Last successful sync time

## Conflict Resolution

### How Conflicts Happen

Conflicts occur when:

- You edit offline
- Another user edits the same item online
- You reconnect before syncing

### Automatic Resolution

ShopSync uses intelligent conflict resolution:

1. **Last Write Wins** - Most recent change takes precedence
2. **Field-Level Merging** - Different fields don't conflict
3. **Addition Priority** - New items always added
4. **Check Status Preserved** - Checked items stay checked

### Manual Resolution

If automatic resolution isn't possible:

1. The list shows a conflict status
2. View both versions
3. Choose which to keep
4. Or merge manually

## Offline Storage Limits

### Storage Capacity

- **Android**: Up to 100 MB local storage
- **Web**: Up to 50 MB (browser dependent)
- **WearOS**: Up to 10 MB

### When Storage is Full

1. Oldest cached data is cleared first
2. Active lists are prioritized
3. Storage status shows when you're near the limit

### Clearing Offline Data

To free up space:

1. Go to **Settings** → **Storage**
2. Tap **Clear Cache**
3. Select what to clear:
   - Cached images
   - Old deleted items
   - Unused list data
4. Tap **Clear**

!!! warning "Active Lists Protected"
Recently accessed lists won't be cleared to prevent data loss.

## Sync Status Indicators

### List-Level Status

Each list shows sync status:

- ☁️ **Synced** - Up to date with cloud
- 🔄 **Syncing** - Currently uploading changes
- 📴 **Offline** - Changes pending sync
- ⚠️ **Conflict** - Manual resolution needed
- ❌ **Error** - Sync failed, will retry

### Item-Level Status

Items show if they have pending changes:

- 📝 **Modified** - Local edits not synced
- ➕ **New** - Created offline
- 🗑️ **Deleted** - Marked for deletion
- ✅ **Synced** - Up to date

## Troubleshooting Offline Mode

### Changes Not Syncing

1. **Check connection** - Ensure WiFi/cellular is active
2. **Force sync** - Pull down on home screen to refresh
3. **Restart app** - Close and reopen ShopSync
4. **Check storage** - Ensure device has space
5. **Update app** - Latest version may fix issues

### Items Disappeared

1. **Wait for sync** - Items may be downloading
2. **Check recycle bin** - May have been deleted
3. **Verify account** - Ensure correct account signed in
4. **Contact support** - If data seems lost

### Duplicate Items

Sometimes items appear twice after sync:

1. Usually resolves automatically
2. Delete duplicate manually if it persists
3. Report if issue continues

### Slow Sync

If syncing takes too long:

1. Check internet speed
2. Reduce number of pending changes
3. Close other apps using network
4. Try syncing on WiFi instead of cellular

## Offline Mode Settings

### Configure Offline Behavior

1. Go to **Settings** → **Offline & Sync**
2. Configure:
   - **Auto-sync** - Sync when online (recommended)
   - **Sync frequency** - How often to check for updates
   - **WiFi only** - Don't sync on cellular data
   - **Background sync** - Sync even when app is closed
   - **Cache size** - How much storage to use

### Sync Preferences

=== "Automatic (Recommended)" - Syncs immediately when online - Best for real-time collaboration - Uses more battery/data

=== "Manual" - You control when to sync - Better for limited data plans - Pull down to refresh manually

=== "WiFi Only" - Only syncs on WiFi - Saves cellular data - Good for large lists

## Data Safety

### Backup Strategy

ShopSync uses multiple layers of protection:

1. **Local cache** - On your device
2. **Cloud storage** - Firebase Firestore
3. **Sync queue** - Pending changes tracked
4. **Conflict copies** - Versions preserved

### Data Loss Prevention

- Changes saved immediately to local storage
- Sync queue persists even if app closes
- Failed syncs automatically retry
- Cloud backup protects against device loss

## Best Practices for Offline Use

!!! tip "Offline Shopping Tips" - **Sync before entering store** - Update with latest changes - **Use airplane mode strategically** - Save battery while shopping - **Make all changes freely** - Don't worry about conflicts - **Sync after shopping** - Upload your changes when done - **Check pending items** - Verify everything synced

!!! tip "Traveling Without Internet" - **Download lists beforehand** - Open each list while online - **Create lists offline** - They'll sync when you connect - **Don't sign out** - Stay logged in during trip - **Monitor storage** - Keep some space available

## Technical Details

### Caching Strategy

ShopSync uses intelligent caching:

- Recently accessed lists cached with high priority
- Images lazy-loaded and cached
- Shared lists pre-fetched
- Stale data refreshed in background

### Sync Algorithm

1. Detect connection state change
2. Collect pending local changes
3. Upload changes to Firestore
4. Download remote changes
5. Resolve any conflicts
6. Update local cache
7. Mark sync as complete in the app

## Next Steps

- [Real-time Sync](../features/real-time-sync.md)
- [Sharing & Collaboration](sharing.md)
- [Settings & Preferences](settings.md)

---

Questions? Check the [FAQ](../faq/index.md) for more information.
