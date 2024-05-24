# Build the project
yarn build

# Bump the version
npm version patch

# Add all changes to the Git index
git add .

# Commit the changes with the new version as the commit message
NEW_VERSION=$(node -p -e "require('./package.json').version")
git commit -m "release: $NEW_VERSION"

# Push the changes to the remote repository
git push

# Publish the package
npm publish --access=public