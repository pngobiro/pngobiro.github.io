# Exam Manager v1.1.0 - Configuration Update

## What's New?

This update removes **all hard-coded references** to "DHRIT" (Diploma in Health Records and Information Technology) and introduces a **flexible configuration system** that allows you to use the Exam Manager for **any academic program**.

## Quick Start

### For Existing DHRIT Users

**Option 1: Automatic Migration (Recommended)**
```bash
# Run the migration helper
python migrate_to_dhrit.py
```

**Option 2: Manual Configuration**
```bash
# Create configuration
python exam_manager.py create-config

# Edit the file and change values to DHRIT
# Then regenerate HTML
python exam_manager.py index --force
```

### For New Users

```bash
# 1. Create a configuration file
python exam_manager.py create-config

# 2. Edit exam-manager-config.json with your program details

# 3. Run the dashboard
python exam_manager.py dashboard

# 4. Generate HTML index files
python exam_manager.py index
```

## Files Included

| File | Description |
|------|-------------|
| `exam_manager.py` | Updated main script (v1.1.0) |
| `exam-manager-config.json` | Sample configuration file |
| `CONFIGURATION_GUIDE.md` | Complete configuration documentation |
| `CHANGES_SUMMARY.md` | Detailed list of changes |
| `migrate_to_dhrit.py` | Quick migration helper for DHRIT users |
| `README.md` | This file |

## What Changed?

### Removed Hard-Coded Values

**Before:**
- Program name: "DHRIT" (hard-coded)
- Full name: "Diploma in Health Records and Information Technology" (hard-coded)
- Excluded directories: Fixed list in code

**After:**
- Program name: Configurable via JSON
- Full name: Configurable via JSON  
- Excluded directories: Configurable array

### New Features

1. **Configuration File Support**
   - JSON-based configuration
   - Easy to edit without touching code
   - Version control friendly

2. **`create-config` Action**
   - Automatically creates configuration file
   - Interactive prompts
   - Safe overwrite protection

3. **Custom Config Path**
   - Use `--config` flag for custom locations
   - Support multiple configurations

4. **Enhanced Dashboard**
   - Shows loaded configuration
   - Better program identification

## Configuration File

### Structure

```json
{
  "program_name": "Your Program Name",
  "program_short_name": "YPN",
  "program_full_name": "Your Full Program Name Here",
  "excluded_dirs": [
    "assets",
    "exams-manager",
    "temp"
  ]
}
```

### Parameters

- **program_name**: Short name for your program (used in general contexts)
- **program_short_name**: Abbreviated name (used in logos, headers)
- **program_full_name**: Full descriptive name (used in titles, descriptions)
- **excluded_dirs**: List of directories to ignore when scanning for subjects

### Example Configurations

#### DHRIT Configuration
```json
{
  "program_name": "DHRIT",
  "program_short_name": "DHRIT",
  "program_full_name": "Diploma in Health Records and Information Technology",
  "excluded_dirs": [
    "assets",
    "exams-manager",
    "KMTC",
    "DHRIT Diploma in Health Records & Information Technology Curriculum"
  ]
}
```

#### Generic Academic Repository
```json
{
  "program_name": "Academic Resources",
  "program_short_name": "AR",
  "program_full_name": "Academic Resources Repository",
  "excluded_dirs": [
    "assets",
    "exams-manager"
  ]
}
```

#### Nursing Program
```json
{
  "program_name": "Nursing Resources",
  "program_short_name": "NR",
  "program_full_name": "Diploma in Nursing - Past Papers Archive",
  "excluded_dirs": [
    "assets",
    "exams-manager"
  ]
}
```

## Usage Examples

### Basic Commands (Same as Before)

```bash
# View dashboard
python exam_manager.py dashboard

# Scan for new files
python exam_manager.py scan

# Process files with OCR
python exam_manager.py process

# List all subjects
python exam_manager.py list

# Generate HTML index files
python exam_manager.py index
```

### New Commands

```bash
# Create default configuration
python exam_manager.py create-config

# Use custom configuration
python exam_manager.py dashboard --config /path/to/custom-config.json

# Force regenerate HTML with new branding
python exam_manager.py index --force
```

### Advanced Usage

```bash
# Fix all asset paths in HTML files
python exam_manager.py fix-paths

# Create starter kit with current configuration
python exam_manager.py pack --out starter-kit.zip

# Analyze a PDF file
python exam_manager.py analyze --file exam.pdf

# Split a PDF into parts
python exam_manager.py split --file exam.pdf --pages "1-5,10-15,20" --out split_output/

# Initialize structure for a new college
python exam_manager.py init-structure --college "New College Name"
```

## Migration Guide

### Step-by-Step Migration

1. **Backup Your Current Setup**
   ```bash
   # Create a backup of your current HTML files
   cp -r . ../backup
   ```

2. **Update the Script**
   ```bash
   # Replace exam_manager.py with the new version
   cp exam_manager.py /path/to/your/project/
   ```

3. **Create Configuration**
   
   **For DHRIT Users:**
   ```bash
   python migrate_to_dhrit.py
   ```
   
   **For Other Programs:**
   ```bash
   python exam_manager.py create-config
   # Then edit exam-manager-config.json
   ```

4. **Verify Configuration**
   ```bash
   python exam_manager.py dashboard
   # Check that your program name appears correctly
   ```

5. **Regenerate HTML Files**
   ```bash
   python exam_manager.py index --force
   ```

6. **Test**
   - Open index.html in your browser
   - Check that branding is correct
   - Verify all links work
   - Test on mobile devices

## Troubleshooting

### Configuration Not Loading

**Problem**: Dashboard shows "Academic Resources" instead of your program name

**Solution**:
1. Check that `exam-manager-config.json` exists in project root
2. Verify JSON syntax is valid
3. Check file permissions
4. Try specifying config explicitly: `--config exam-manager-config.json`

### HTML Still Shows Old Branding

**Problem**: Generated HTML still shows "DHRIT" or old program name

**Solution**:
```bash
# Force regenerate all HTML files
python exam_manager.py index --force
```

### Invalid JSON Error

**Problem**: Error when loading configuration file

**Solution**:
1. Validate JSON at https://jsonlint.com/
2. Check for:
   - Missing commas
   - Unclosed brackets
   - Unquoted keys
   - Trailing commas

### Migration Script Fails

**Problem**: `migrate_to_dhrit.py` doesn't work

**Solution**:
1. Make it executable: `chmod +x migrate_to_dhrit.py`
2. Run with Python: `python migrate_to_dhrit.py`
3. Check you're in the correct directory

## Benefits of This Update

### 1. Flexibility
- ✅ Use for any academic program
- ✅ Support multiple institutions
- ✅ Easy rebranding

### 2. Maintainability
- ✅ No need to edit Python code
- ✅ Single source of configuration
- ✅ Version control friendly

### 3. Professional
- ✅ Clean separation of config and code
- ✅ Industry best practices
- ✅ Easy to share/deploy

### 4. Scalable
- ✅ Multiple programs with different configs
- ✅ Institution-specific builds
- ✅ Environment-specific settings

## Backward Compatibility

- ✅ All existing commands work unchanged
- ✅ Default configuration provides generic branding
- ✅ No breaking changes to directory structure
- ✅ Existing HTML files remain valid until regenerated

## Documentation

For more detailed information, see:
- **CONFIGURATION_GUIDE.md** - Complete configuration reference
- **CHANGES_SUMMARY.md** - Detailed changelog
- **Source code** - Inline comments and docstrings

## Support

### Common Questions

**Q: Do I need to regenerate all my HTML files?**
A: Only if you want the new branding to appear. Existing files will continue to work.

**Q: Can I use this for multiple programs?**
A: Yes! Create different config files and use `--config` flag.

**Q: What if I don't create a configuration file?**
A: The script will use default "Academic Resources" branding.

**Q: Is this compatible with the old version?**
A: Yes, but you'll need to create a configuration file to match your old branding.

### Getting Help

1. Check the documentation files
2. Verify your configuration JSON is valid
3. Run with default config first to test
4. Check the dashboard output for configuration status

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.1.0 | 2026-01 | Configuration system, removed hard-coded DHRIT |
| 1.0.0 | 2025-12 | Initial release with hard-coded DHRIT |

## License

This tool is provided as-is for educational purposes.

## Contributing

To suggest improvements:
1. Test your changes thoroughly
2. Update documentation
3. Ensure backward compatibility
4. Follow existing code style

---

**Made with ❤️ for academic excellence**

For questions or issues, refer to the documentation files or contact your system administrator.
