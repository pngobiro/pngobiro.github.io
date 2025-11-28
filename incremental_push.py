import subprocess
import sys

def run_command(command):
    process = subprocess.Popen(command, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    stdout, stderr = process.communicate()
    if process.returncode != 0:
        print(f"Error executing command: {command}")
        print(stderr.decode())
        return False
    return True

def get_commits():
    # Get all commits in reverse order (oldest first)
    result = subprocess.run(['git', 'log', '--reverse', '--format=%H'], stdout=subprocess.PIPE)
    return result.stdout.decode().splitlines()

def incremental_push(step=10):
    commits = get_commits()
    total = len(commits)
    print(f"Found {total} commits to push.")

    for i in range(0, total, step):
        commit = commits[i]
        print(f"Pushing commit {i}/{total}: {commit}")
        if not run_command(f"git push origin {commit}:refs/heads/main --force"):
            print("Push failed. Retrying once...")
            if not run_command(f"git push origin {commit}:refs/heads/main --force"):
                print("Retry failed. Aborting.")
                sys.exit(1)
    
    # Push the final HEAD
    print("Pushing final HEAD...")
    if not run_command("git push origin HEAD:refs/heads/main --force"):
        print("Final push failed.")
        sys.exit(1)
    
    print("Incremental push completed successfully.")

if __name__ == "__main__":
    incremental_push()
