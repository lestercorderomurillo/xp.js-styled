#!/bin/bash

# colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NO_COLOR='\033[0m'

echo -e "${YELLOW}Running \"release\" script. Loading ENV variables...${NO_COLOR}"

# Check if .env file exists and load environment variables
ENV_FILE=".env"

if [ -f "$ENV_FILE" ]; then
    source "$ENV_FILE"
    echo -e "${YELLOW}File \"$ENV_FILE\" loaded. Make sure it's up to date!${NO_COLOR}"
else
    echo -e "${RED}Fatal: File \"$ENV_FILE\" not found.${NO_COLOR}"
    exit 1
fi

# Check if NPM_AUTH_TOKEN is set and not empty
echo -e "${YELLOW}Step 1: ${NO_COLOR}Setting NPM package token for publish${NO_COLOR}"

if [ -z "$NPM_AUTH_TOKEN" ]; then
    echo -e "${RED}Fatal: NPM_AUTH_TOKEN is not set or empty${NO_COLOR}"
    exit 1
else
    echo "//registry.npmjs.org/:_authToken=${NPM_AUTH_TOKEN}" > ~/.npmrc
    if [ "$NPM_AUTH_TOKEN" == "$(awk -F'=' '/_authToken/{print $2}' ~/.npmrc)" ]; then
        echo -e "${GREEN}Authentication token in ~/.npmrc matches.${NO_COLOR}"
    else
        echo -e "${RED}Fatal: Authentication token in ~/.npmrc does not match.${NO_COLOR}"
        exit 1
    fi
fi

# Check git status
echo -e "${YELLOW}Step 2: ${NO_COLOR}Checking if the git repository is clean.${NO_COLOR}"

echo "Current working directory: $(pwd)"
echo "Git status:"
git status

if ! git diff-index --quiet HEAD --; then
    echo -e "${RED}Warning: Git repository is not clean. Here are the uncommitted changes:${NO_COLOR}"
    git diff-index HEAD --
    echo -e "${YELLOW}Do you want to proceed anyway? (y/n)${NO_COLOR}"
    read -r response
    if [[ "$response" =~ ^([yY][eE][sS]|[yY])$ ]]; then
        echo -e "${YELLOW}Proceeding with release despite uncommitted changes.${NO_COLOR}"
    else
        echo -e "${RED}Release aborted. Please commit or stash your changes.${NO_COLOR}"
        exit 0
    fi
else
    echo -e "${GREEN}Git repository is clean and prepared for the release.${NO_COLOR}"
fi

# Build the project
echo -e "${YELLOW}Step 3: ${NO_COLOR}Building the project${NO_COLOR}"

if yarn build; then
    echo -e "${GREEN}Build successful.${NO_COLOR}"
else
    echo -e "${RED}Fatal: Build failed.${NO_COLOR}"
    exit 1
fi

# Parameterize the version bump type
VERSION_TYPE=$1

if [ -z "$VERSION_TYPE" ] || [ "$VERSION_TYPE" = "same" ]; then
    echo -e "${YELLOW}Keeping the current version.${NO_COLOR}"
    VERSION_TYPE="same"
elif [[ "$VERSION_TYPE" != "patch" && "$VERSION_TYPE" != "minor" && "$VERSION_TYPE" != "major" ]]; then
    echo -e "${RED}Fatal: Invalid version type. Use \"patch\", \"minor\", \"major\", or no argument to keep the same version.${NO_COLOR}"
    exit 1
fi

# Bump the version or keep it the same
echo -e "${YELLOW}Step 4: ${NO_COLOR}Handling version ($VERSION_TYPE)${NO_COLOR}"
if [ "$VERSION_TYPE" != "same" ]; then
    yarn version --$VERSION_TYPE
else
    echo -e "${YELLOW}Keeping the current version.${NO_COLOR}"
fi

# Capture the current version
CURRENT_VERSION=$(grep -oP '"version": "\K[0-9]+\.[0-9]+\.[0-9]+' package.json)

# Check if current version is empty
if [ -z "$CURRENT_VERSION" ]; then
    echo -e "${RED}Fatal: Current version is empty.${NO_COLOR}"
    exit 1
fi

git add .

echo -e "${YELLOW}Pushing changes to remote repository...${NO_COLOR}"
if git push; then
    echo -e "${GREEN}Changes pushed successfully.${NO_COLOR}"
else
    echo -e "${RED}Fatal: Failed to push changes to remote repository.${NO_COLOR}"
    exit 1
fi

echo -e "${YELLOW}Step 5: ${NO_COLOR}Publishing the package to the public repository${NO_COLOR}"

# Publish the package with the current version
if yarn publish --new-version "$CURRENT_VERSION"; then
    echo -e "${GREEN}Package published successfully.${NO_COLOR}"
else
    echo -e "${RED}Fatal: Failed to publish the package.${NO_COLOR}"
    exit 1
fi

echo -e "${GREEN}Release process completed successfully!${NO_COLOR}"