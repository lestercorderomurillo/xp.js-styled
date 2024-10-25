@echo off

REM colors
set GREEN=[32m
set YELLOW=[33m
set RED=[31m
set NO_COLOR=[0m

echo %YELLOW%Running "release" script. Loading ENV variables...%NO_COLOR%

REM Check if .env file exists and load environment variables
set ENV_FILE=.env

if exist %ENV_FILE% (
    for /f "delims=" %%x in (%ENV_FILE%) do (set "%%x")
    echo %YELLOW%File "%ENV_FILE%" loaded. Make sure it's up to date!%NO_COLOR%
) else (
    echo %RED%Fatal: File "%ENV_FILE%" not found.%NO_COLOR%
    exit /b 1
)

REM Check if NPM_AUTH_TOKEN is set and not empty
echo %YELLOW%Step 1: %NO_COLOR%Setting NPM package token for publish%NO_COLOR%

if "%NPM_AUTH_TOKEN%"=="" (
    echo %RED%Fatal: NPM_AUTH_TOKEN is not set or empty%NO_COLOR%
    exit /b 1
) else (
    echo //registry.npmjs.org/:_authToken=%NPM_AUTH_TOKEN%> %USERPROFILE%\.npmrc
    for /f "delims=" %%x in ('findstr /c:"_authToken" %USERPROFILE%\.npmrc') do set npmrc_token=%%x
    if "%npmrc_token:~11%"=="%NPM_AUTH_TOKEN%" (
        echo %GREEN%Authentication token in %USERPROFILE%\.npmrc matches.%NO_COLOR%
    ) else (
        echo %RED%Fatal: Authentication token in %USERPROFILE%\.npmrc does not match.%NO_COLOR%
        exit /b 1
    )
)

REM Check git status
echo %YELLOW%Step 2: %NO_COLOR%Checking if the git repository is clean.%NO_COLOR%

echo Current working directory: %cd%
echo Git status:
git status

for /f %%i in ('git diff-index --quiet HEAD -- ^& echo $?') do set GIT_STATUS=%%i
if %GIT_STATUS% neq 0 (
    echo %RED%Warning: Git repository is not clean. Here are the uncommitted changes:%NO_COLOR%
    git diff-index HEAD --
    echo %YELLOW%Do you want to proceed anyway? (y/n)%NO_COLOR%
    set /p response=
    if /i "%response%"=="y" (
        echo %YELLOW%Proceeding with release despite uncommitted changes.%NO_COLOR%
    ) else (
        echo %RED%Release aborted. Please commit or stash your changes.%NO_COLOR%
        exit /b 0
    )
) else (
    echo %GREEN%Git repository is clean and prepared for the release.%NO_COLOR%
)

REM Build the project
echo %YELLOW%Step 3: %NO_COLOR%Building the project%NO_COLOR%

call yarn build
if %errorlevel% neq 0 (
    echo %RED%Fatal: Build failed.%NO_COLOR%
    exit /b 1
) else (
    echo %GREEN%Build successful.%NO_COLOR%
)

REM Parameterize the version bump type
set VERSION_TYPE=%1

if "%VERSION_TYPE%"=="" set VERSION_TYPE=same
if "%VERSION_TYPE%"=="same" (
    echo %YELLOW%Keeping the current version.%NO_COLOR%
) else if "%VERSION_TYPE%"=="patch" (
    REM Valid version type
) else if "%VERSION_TYPE%"=="minor" (
    REM Valid version type
) else if "%VERSION_TYPE%"=="major" (
    REM Valid version type
) else (
    echo %RED%Fatal: Invalid version type. Use "patch", "minor", "major", or no argument to keep the same version.%NO_COLOR%
    exit /b 1
)

REM Bump the version or keep it the same
echo %YELLOW%Step 4: %NO_COLOR%Handling version (%VERSION_TYPE%)%NO_COLOR%
if "%VERSION_TYPE%"=="same" (
    echo %YELLOW%Keeping the current version.%NO_COLOR%
) else (
    call yarn version --%VERSION_TYPE%
)

REM Capture the current version
for /f "delims=" %%x in ('findstr /r "\"version\":\\s*\"[0-9]*\\.[0-9]*\\.[0-9]*\"" package.json') do set CURRENT_VERSION=%%x
set CURRENT_VERSION=%CURRENT_VERSION:~11,-1%

REM Check if current version is empty
if "%CURRENT_VERSION%"=="" (
    echo %RED%Fatal: Current version is empty.%NO_COLOR%
    exit /b 1
)

git add .

echo %YELLOW%Pushing changes to remote repository...%NO_COLOR%
git push
if %errorlevel% neq 0 (
    echo %RED%Fatal: Failed to push changes to remote repository.%NO_COLOR%
    exit /b 1
) else (
    echo %GREEN%Changes pushed successfully.%NO_COLOR%
)

echo %YELLOW%Step 5: %NO_COLOR%Publishing the package to the public repository%NO_COLOR%

REM Publish the package with the current version
call yarn publish --new-version %CURRENT_VERSION%
if %errorlevel% neq 0 (
    echo %RED%Fatal: Failed to publish the package.%NO_COLOR%
    exit /b 1
) else (
    echo %GREEN%Package published successfully.%NO_COLOR%
)

echo %GREEN%Release process completed successfully!%NO_COLOR%