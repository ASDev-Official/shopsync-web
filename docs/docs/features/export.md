# Export & Backup

Export your shopping lists for backup, sharing, or migration to other apps.

## Export Formats

ShopSync supports multiple export formats:

| Format   | Use Case               | Includes                            |
| -------- | ---------------------- | ----------------------------------- |
| **JSON** | Backup, migration      | Everything (items, notes, metadata) |
| **CSV**  | Spreadsheets, printing | Items, quantities, prices           |
| **PDF**  | Printing, sharing      | Formatted list with categories      |
| **TXT**  | Simple sharing         | Plain text list                     |

## Exporting a Single List

### Via List Options

1. Open the list
2. Tap **⋮** (more options)
3. Select **Export**
4. Choose format
5. Select destination

### Quick Export

Long-press a list → **Share** → Choose format

## Exporting All Lists

For complete backup:

1. Go to **Settings** → **Data & Backup**
2. Tap **Export All Lists**
3. Choose format (JSON recommended)
4. Select destination
5. Wait for export to complete

!!! tip "Automatic Backups"
Enable automatic weekly backups in **Settings** → **Backup** → **Auto Backup**

## Import Options

### From File

1. Go to **Settings** → **Data & Backup**
2. Tap **Import**
3. Select file (JSON, CSV, or TXT)
4. Review import preview
5. Confirm import

### Merge vs Replace

When importing:

- **Merge**: Add to existing lists
- **Replace**: Delete all and import
- **Skip Duplicates**: Don't import existing items

## Format Details

### JSON Format

Complete backup with all metadata:

```json
{
  "lists": [
    {
      "id": "list_123",
      "name": "Grocery List",
      "created": "2024-01-15T10:30:00Z",
      "items": [
        {
          "id": "item_456",
          "name": "Milk",
          "quantity": 2,
          "unit": "gallons",
          "checked": false,
          "category": "Dairy",
          "price": 4.99,
          "notes": "Organic whole milk"
        }
      ]
    }
  ]
}
```

### CSV Format

Spreadsheet-compatible:

```csv
List Name,Item Name,Quantity,Unit,Category,Price,Notes,Checked
Grocery List,Milk,2,gallons,Dairy,4.99,Organic whole milk,false
Grocery List,Bread,1,loaf,Bakery,3.49,,false
```

### Plain Text

Simple format:

```
Grocery List
============
- [ ] Milk (2 gallons) - $4.99
- [ ] Bread (1 loaf) - $3.49
- [x] Eggs (1 dozen) - $5.99

Hardware List
=============
- [ ] Hammer
- [ ] Nails (box)
```

## Cloud Backup

### Firebase Backup

Automatic backup to your Firebase account:

1. **Settings** → **Data & Backup**
2. Enable **Cloud Backup**
3. Choose backup frequency
4. All lists sync automatically

### Google Drive Integration

Export to Google Drive:

1. Export list or all lists
2. Choose **Google Drive** as destination
3. Select folder
4. Files auto-organize by date

## Scheduled Backups

Set up automatic backups:

1. **Settings** → **Data & Backup** → **Auto Backup**
2. Enable auto backup
3. Set frequency (Daily, Weekly, Monthly)
4. Choose destination (Local, Drive, Dropbox)
5. Set retention (Keep last 5, 10, or 30 backups)

## Sharing Exports

### Share as Link

1. Export list
2. Choose **Share Link**
3. Select recipient
4. Set expiration (1 day to never)
5. Send

### Print-Friendly Export

1. Export as PDF
2. Enable **Print Layout**
3. Choose page size
4. Add checkboxes
5. Print or save

## Privacy & Security

### Encrypted Exports

For sensitive lists:

1. Enable **Encrypt Exports**
2. Set password
3. Export as usual
4. Share password separately

### Data Removal

Exported files contain:

✅ **List names and items**  
✅ **Quantities and prices**  
✅ **Notes and categories**  
✅ **Timestamps**

❌ **No personal information**  
❌ **No account details**  
❌ **No location data**

## Troubleshooting

### Export Failed

- Check available storage space
- Ensure write permissions granted
- Try smaller batch sizes
- Check file format support

### Import Failed

- Verify file format is correct
- Check file isn't corrupted
- Ensure file size under 10MB
- Try different import mode

### Missing Data

- Ensure you exported complete backup (JSON)
- Check file wasn't edited externally
- Verify import completed successfully
- Contact support if data critical

## Best Practices

### Regular Backups

- Export weekly to Google Drive
- Keep multiple backup copies
- Test restore occasionally
- Archive old exports

### Migration

When switching devices:

1. Export all lists as JSON
2. Transfer file to new device
3. Import on new device
4. Verify all data present
5. Delete old exports securely

### Sharing with Others

- Use PDF for printable lists
- CSV for collaborative editing
- TXT for quick shares
- Encrypted for sensitive data

!!! warning "Backup Before Major Changes"
Always export a backup before:

    - Updating the app
    - Changing devices
    - Deleting many items
    - Importing from another source

---

See also: [Settings](../user-guide/settings.md) | [Sharing](../user-guide/sharing.md)
