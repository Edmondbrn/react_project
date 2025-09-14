import os
import uuid
from datetime import datetime, timedelta

def tmp_file(file_content : str) -> str:
    """Function to create a file in a tmp folder

    Args:
        file_content (str): the string to put inside the created file

    Returns:
        str: the filename, could be updated if there is a duplicated file inside tmp folder
    """
    # if tmp folder does not exist
    if not os.path.isdir("tmp"):
        os.mkdir("tmp")
    # if an equivalent file is already created / under preocessing
    file_name = f"tmp/{str(uuid.uuid4())}.txt"
    fh = open(file_name, "w")
    fh.write(file_content)
    fh.close()
    return file_name



def delete_tmp() -> None:
    """Function to clean the tmp folder every day at 3 am
    """

    if not os.path.isdir("tmp"):
        return
    print(("COUCOU " *15) + ("\n=============================="*15))
    current_time = datetime.now()
    for filename in os.listdir("tmp"):
        file_path = os.path.join("tmp", filename)

        if os.path.isfile(file_path):
            file_creation = datetime.fromtimestamp(os.path.getctime(file_path))
            if current_time - file_creation > timedelta(hours = 24):
                try:
                    os.remove(file_path)
                except Exception as e:
                    print(f"Error deleting file {file_path} : {e}", flush = True)
