# Exam Manager Configuration Guide

## Version 1.1.0 Changes

### Overview
The hard-coded "Diploma in Health Records and Information Technology" (DHRIT) references have been removed and replaced with a flexible configuration system.

## Configuration File

### Location
Place the configuration file `exam-manager-config.json` in the root directory of your project.

### Creating the Configuration File

#### Option 1: Automatic Creation
Run the following command to create a default configuration file:

```bash
python exam_manager.py create-config
```

This will create `exam-manager-config.json` with default values.

#### Option 2: Manual Creation
Create a file named `exam-manager-config.json` in your project root with the following structure:

```json
{
  "program_name": "Your Program Name",
  "program_short_name": "YPN",
  "program_full_name": "Your Full Program Name",
  "excluded_dirs": [
    "assets",
    "exams-manager",
    "quizzes",
    "starter_kit_temp"
  ]
}
```

### Configuration Parameters

| Parameter | Description | Example |
|-----------|-------------|---------|
| `program_name` | Short name for your program | "DHRIT" or "Academic Resources" |
| `program_short_name` | Abbreviated name (used in UI) | "DHRIT" or "AR" |
| `program_full_name` | Full descriptive name | "Diploma in Health Records and Information Technology" |
| `excluded_dirs` | Directories to exclude from subject scanning | `["assets", "temp"]` |

### Example Configurations

#### For DHRIT Program:
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

#### For Nursing Program:
```json
{
  "program_name": "Nursing Resources",
  "program_short_name": "NR",
  "program_full_name": "Diploma in Nursing - Past Papers Archive",
  "excluded_dirs": [
    "assets",
    "exams-manager",
    "temp"
  ]
}
```

#### For Multi-Program Repository:
```json
{
  "program_name": "Medical Programs",
  "program_short_name": "KMTC",
  "program_full_name": "Kenya Medical Training College - Examination Resources",
  "excluded_dirs": [
    "assets",
    "exams-manager",
    "downloads"
  ]
}
```

## Using a Custom Configuration File

You can specify a custom configuration file location using the `--config` flag:

```bash
python exam_manager.py dashboard --config /path/to/custom-config.json
```

## Where Configuration is Used

The configuration affects:

1. **Dashboard Display**: Program name shown in the header
2. **HTML Generation**: 
   - Page titles
   - Logo text
   - Footer text
   - Meta information
3. **Subject Scanning**: Excluded directories list
4. **Starter Kit**: Documentation and branding

## Migration from Old Version

If you're upgrading from the hard-coded version:

### Step 1: Create Configuration
```bash
python exam_manager.py create-config
```

### Step 2: Edit Configuration
Edit `exam-manager-config.json` to match your program:
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

### Step 3: Regenerate HTML Files
Force regenerate all HTML index files with new branding:
```bash
python exam_manager.py index --force
```

### Step 4: Verify
Check the dashboard to confirm configuration is loaded:
```bash
python exam_manager.py dashboard
```

## Default Behavior

If no configuration file is found:
- The script will use default "Academic Resources" branding
- A warning will be displayed
- You can create a config file at any time using `create-config` action

## Troubleshooting

### Configuration Not Loading
1. Check that `exam-manager-config.json` is in the project root
2. Verify JSON syntax is correct (use a JSON validator)
3. Check file permissions

### Program Name Not Appearing
1. Regenerate HTML files: `python exam_manager.py index --force`
2. Clear browser cache
3. Verify configuration file is valid JSON

### Excluded Directories Not Working
1. Ensure directory names match exactly (case-sensitive)
2. Use relative paths, not absolute paths
3. Restart the script after configuration changes

## Advanced Usage

### Multiple Institutions
You can maintain different configurations for different institutions:

```bash
# For Institution A
python exam_manager.py dashboard --config config-institution-a.json

# For Institution B  
python exam_manager.py dashboard --config config-institution-b.json
```

### Dynamic Branding
The configuration allows you to:
- Rebrand the entire system by editing one file
- Create institution-specific builds
- Maintain multiple program archives with different branding

## New Features in v1.1.0

1. **Flexible Configuration**: No more hard-coded program names
2. **`create-config` Action**: Automatically create configuration files
3. **Custom Config Path**: Use `--config` flag for custom locations
4. **Enhanced Dashboard**: Shows loaded configuration
5. **Better Excluded Dirs**: Configurable list instead of hard-coded

## Best Practices

1. **Version Control**: Include `exam-manager-config.json` in your repository
2. **Documentation**: Document your configuration in project README
3. **Backup**: Keep a backup of working configurations
4. **Testing**: Test configuration changes with `dashboard` before `index --force`

## Summary of Changes

| Old Behavior | New Behavior |
|--------------|--------------|
| Hard-coded "DHRIT" | Configurable via `program_short_name` |
| Hard-coded "Diploma in Health Records..." | Configurable via `program_full_name` |
| Fixed excluded directories | Configurable via `excluded_dirs` array |
| No configuration file | JSON configuration file |
| No create-config command | `create-config` action available |

## Questions?

For issues or questions:
1. Check this documentation
2. Verify configuration file syntax
3. Run with default config first
4. Check the dashboard output for configuration status
