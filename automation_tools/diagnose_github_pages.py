#!/usr/bin/env python3
"""
GitHub Pages Deployment Diagnosis
Check for common issues that prevent GitHub Pages from working
"""

import os
import subprocess
from pathlib import Path
from datetime import datetime

def run_command(cmd):
    """Run shell command and return output"""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True)
        return result.returncode, result.stdout.strip(), result.stderr.strip()
    except Exception as e:
        return -1, "", str(e)

def check_repository_size():
    """Check repository size and file count"""
    print("🔍 Checking repository size...")
    
    # Get repository size
    code, size_output, _ = run_command("du -sh . 2>/dev/null")
    if code == 0:
        print(f"   Repository size: {size_output.split()[0]}")
    
    # Count total files
    code, file_count, _ = run_command("find . -type f | wc -l")
    if code == 0:
        print(f"   Total files: {file_count}")
    
    # Count HTML files
    code, html_count, _ = run_command("find . -name '*.html' | wc -l")
    if code == 0:
        print(f"   HTML files: {html_count}")
    
    # Check for large files
    print("\n📁 Largest files:")
    code, large_files, _ = run_command("find . -type f -size +10M -exec ls -lh {} + 2>/dev/null | head -10")
    if code == 0 and large_files:
        for line in large_files.split('\n')[:5]:
            if line.strip():
                parts = line.split()
                if len(parts) >= 9:
                    size = parts[4]
                    filename = ' '.join(parts[8:])
                    print(f"   {size} - {filename}")
    else:
        print("   No files larger than 10MB found")

def check_git_status():
    """Check git repository status"""
    print("\n🔄 Checking Git status...")
    
    # Check current branch
    code, branch, _ = run_command("git branch --show-current")
    if code == 0:
        print(f"   Current branch: {branch}")
    
    # Check remote
    code, remote, _ = run_command("git remote -v | head -1")
    if code == 0:
        print(f"   Remote: {remote}")
    
    # Check last commit
    code, last_commit, _ = run_command("git log -1 --oneline")
    if code == 0:
        print(f"   Last commit: {last_commit}")
    
    # Check if there are uncommitted changes
    code, status, _ = run_command("git status --porcelain")
    if code == 0:
        if status:
            print(f"   ⚠️  Uncommitted changes: {len(status.split(chr(10)))} files")
        else:
            print("   ✅ No uncommitted changes")

def check_github_pages_config():
    """Check GitHub Pages configuration files"""
    print("\n⚙️  Checking GitHub Pages configuration...")
    
    # Check for index.html
    if Path("index.html").exists():
        print("   ✅ index.html exists")
        with open("index.html", 'r') as f:
            content = f.read()[:100]
            print(f"   Content preview: {content.strip()}")
    else:
        print("   ❌ index.html missing")
    
    # Check for GitHub workflow
    workflow_path = Path(".github/workflows/deploy-pages.yml")
    if workflow_path.exists():
        print("   ✅ GitHub Pages workflow exists")
    else:
        print("   ❌ GitHub Pages workflow missing")
    
    # Check for _config.yml (Jekyll)
    if Path("_config.yml").exists():
        print("   ℹ️  Jekyll _config.yml found")
    
    # Check for .nojekyll
    if Path(".nojekyll").exists():
        print("   ℹ️  .nojekyll file found (Jekyll disabled)")

def check_common_issues():
    """Check for common GitHub Pages issues"""
    print("\n🚨 Checking for common issues...")
    
    issues = []
    
    # Check repository size
    code, size_output, _ = run_command("du -sh . 2>/dev/null")
    if code == 0:
        size_str = size_output.split()[0]
        if 'G' in size_str:
            size_gb = float(size_str.replace('G', ''))
            if size_gb > 1:
                issues.append(f"Repository very large ({size_str}) - GitHub has 1GB soft limit")
    
    # Check file count
    code, file_count, _ = run_command("find . -type f | wc -l")
    if code == 0:
        count = int(file_count)
        if count > 100000:
            issues.append(f"Too many files ({count:,}) - may cause deployment issues")
    
    # Check for problematic file types
    code, pdf_count, _ = run_command("find . -name '*.pdf' | wc -l")
    if code == 0 and int(pdf_count) > 1000:
        issues.append(f"Many PDF files ({pdf_count}) - consider excluding from deployment")
    
    # Check for broken symlinks
    code, broken_links, _ = run_command("find . -type l ! -exec test -e {} \\; -print 2>/dev/null")
    if code == 0 and broken_links:
        issues.append("Broken symbolic links found")
    
    if issues:
        for issue in issues:
            print(f"   ⚠️  {issue}")
    else:
        print("   ✅ No obvious issues detected")

def generate_recommendations():
    """Generate recommendations to fix GitHub Pages"""
    print("\n💡 Recommendations:")
    
    print("   1. Repository Size:")
    print("      - Your repo is 22GB, way above GitHub's 1GB recommendation")
    print("      - Consider using Git LFS for large files")
    print("      - Exclude PDFs, videos, and large assets from deployment")
    
    print("\n   2. GitHub Actions Workflow:")
    print("      - Check GitHub Actions tab for failed deployments")
    print("      - Workflow excludes large files but may still timeout")
    
    print("\n   3. Immediate fixes:")
    print("      - Visit: https://github.com/pngobiro/pngobiro.github.io/actions")
    print("      - Check if latest workflow run succeeded")
    print("      - If failing, consider reducing deployment size")
    
    print("\n   4. Alternative solutions:")
    print("      - Use GitHub LFS for large files")
    print("      - Split content into multiple repositories")
    print("      - Use external hosting for large assets")

def main():
    print("🔍 GitHub Pages Deployment Diagnosis")
    print("=" * 50)
    print(f"Timestamp: {datetime.now().isoformat()}")
    print()
    
    check_repository_size()
    check_git_status()
    check_github_pages_config()
    check_common_issues()
    generate_recommendations()
    
    print("\n" + "=" * 50)
    print("📋 Next Steps:")
    print("1. Check GitHub Actions: https://github.com/pngobiro/pngobiro.github.io/actions")
    print("2. If workflow is failing, reduce repository size")
    print("3. Consider using Git LFS for large files")
    print("4. Monitor deployment at: https://pngobiro.github.io")

if __name__ == '__main__':
    main()