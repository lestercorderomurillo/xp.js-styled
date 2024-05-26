#!/bin/bash

set -e  # Exit immediately if a command exits with a non-zero status

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'  # No Color

# Check if .env file exists and load environment variables
ENV_FILE=".env"
if [ -f "$ENV_FILE" ]; then
    source "$ENV_FILE"
else
    echo -e "${RED}Error: ${NC}$ENV_FILE not found. Please create it with your NPM authentication token."
    exit 1
fi

# Ensure ~/.npmrc file exists and contains the authentication token
echo -e "${YELLOW}Step 1: ${NC}Setting NPM package token for publish"
echo "//registry.npmjs.org/:_authToken=${NPM_AUTH_TOKEN}" > ~/.npmrc

# Confirm ~/.npmrc file contents
echo -e "${YELLOW}Step 2: ${NC}Verifying token in ~/.npmrc"
if [ "$NPM_AUTH_TOKEN" == "$(awk -F'=' '/_authToken/{print $2}' ~/.npmrc)" ]; then
    echo -e "${GREEN}Authentication token in ~/.npmrc matches.${NC}"
else
    echo -e "${RED}Authentication token in ~/.npmrc does not match.${NC}"
fi

echo -e "${YELLOW}Step 3: ${NC}Building the project"
yarn build

echo -e "${YELLOW}Step 4: ${NC}Adding all changes to the current git commit"
git add .

echo -e "${YELLOW}Step 5: ${NC}Committing changes"
git commit -m "Update: Committing changes before publish"

echo -e "${YELLOW}Step 6: ${NC}Pushing the changes to the remote repository"
git push

echo -e "${YELLOW}Step 7: ${NC}Publishing the package"
yarn publish --access public

echo -e "${YELLOW}Step 8: ${NC}Resetting branch to the current commit"
git reset --hard HEAD

echo -e "${GREEN}Script execution completed successfully!${NC}"
