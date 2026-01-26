# Course Starter Kit

Use this kit to initialize a new educational content repository.

## Setup Steps

1. **Initialize Directory**:
   Copy all files from this kit into your new project root.

2. **Configure Structure**:
   Edit `scripts/structure_config.sh`.
   - Update `COLLEGES` (e.g., "Engineering Dept").
   - Update `SUBJECTS` (e.g., "Thermodynamics", "Fluid Mechanics").
   - Update `CATEGORIES` if needed (default: CATs, FQE, etc.).

3. **Generate Structure**:
   Run the structure generator:
   ```bash
   ./scripts/create_structure.sh
   ```
   This creates the folders and `index.html` files.

4. **Install Assets**:
   Move the `assets` folder to your project root if not already there.
   Ensure `assets/css/styles.css` is present.

5. **Manage Content**:
   - Use `tools/exam_manager.py` to track PDF files.
   - Use `scripts/update_all.sh` to refresh HTML indexes after adding content.

## Tools Included
- **exam_manager.py**: Dashboard for tracking PDF processing status.
- **analyze_pdf.py**: Helper to inspect PDF content for splitting.
- **fix_content_paths.py**: Fixes CSS/JS links if you move HTML files.
