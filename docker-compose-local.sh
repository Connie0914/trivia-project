#!/bin/bash

PWD=$(cd $(dirname $0) && pwd)

# Install node_modules
directory="$PWD/node_modules"
if [ -z "$(ls $directory)" ]; then
    docker run --rm -it --init -v $PWD/:/app -w /app --entrypoint yarn node:16.1.0-alpine install
fi

docker-compose -f .local/docker-compose.yml $@