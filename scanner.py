import os

def scan_all_files(directory, ignore_folders=None):
  """
  Scan all files in the given directory and its subdirectories, ignoring specified folders.
  
  :param directory: The root directory to start scanning from.
  :param ignore_folders: A list of folder names to ignore.
  """
  if ignore_folders is None:
    ignore_folders = []

  print(f"Scanning directory: {directory}")
  for root, dirs, files in os.walk(directory):
    # Modify dirs in-place to remove ignored folders
    dirs[:] = [d for d in dirs if d not in ignore_folders]
    print(f"Scanning directory: {root}")
    for file in files:
      if ' ' in file:
        print(f"File with space found: {os.path.join(root, file)}")
        continue
      print(f"File found: {os.path.join(root, file)}")


def write_json_to_file(data, file_path):
    """
    Write JSON data to a file.
    
    :param data: The data to write to the JSON file.
    :param file_path: The path to the JSON file.
    """
    try:
        with open(file_path, 'w') as json_file:
            json.dump(data, json_file, indent=4)
        print(f"Data successfully written to {file_path}")
    except Exception as e:
        print(f"Error writing to {file_path}: {e}")


def main ():
  project_directory = "."
  ignore_folders = ["node_modules", ".git", ".vscode", "results", ".sonar"]
  scan_all_files(project_directory, ignore_folders)

# Example usage
# project_directory = "."
# ignore_folders = ["node_modules", ".git", ".vscode", "results", ".sonar"]
# scan_all_files(project_directory, ignore_folders)

main()