@echo off
setlocal

cd /d "%~dp0"

echo.
echo user98 deploy helper
echo.
set /p COMMIT_MSG=Commit message: 

if "%COMMIT_MSG%"=="" (
  echo.
  echo No escribiste ningun mensaje. Cancelado.
  pause
  exit /b 1
)

echo.
echo Staging changes...
git add .
if errorlevel 1 goto :fail

echo.
echo Creating commit...
git commit -m "%COMMIT_MSG%"
if errorlevel 1 goto :fail

echo.
echo Pushing to origin main...
git push origin main
if errorlevel 1 goto :fail

echo.
echo Deploy enviado. Vercel deberia publicar en unos minutos.
pause
exit /b 0

:fail
echo.
echo Algo fallo durante el deploy.
pause
exit /b 1
