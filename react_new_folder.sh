#!/bin/bash -
# bash script to automaticaly create folder and its structure in react src
if [ -z "$1" ]; then
    echo "Error, no folder name specified."
    exit 1
fi

echo "Creation of the folder $1"
cd ./frontend/src/features || exit

mkdir "$1"
cd "$1" || exit

mkdir components
mkdir hooks
touch "$1.jsx"