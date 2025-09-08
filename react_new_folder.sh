#!/bin/bash -
# bash script to automaticaly create folder and its structure in react src
if [ "$1"="" ]; then
    echo "Error, no folder name specified."
    exit
fi

echo "Creation of the folder $1"
cd ./frontend/src/features

mkdir "$1"
cd "$1"

mkdir components
mkdir hooks
touch "$1.jsx"