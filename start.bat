@echo off
echo 正在启动教学成果奖专栏网站...
echo.
echo 请确保已安装 Node.js 和 npm
echo.

REM 检查是否已安装依赖
if not exist "node_modules" (
    echo 正在安装依赖包...
    npm install
    echo.
)

echo 启动开发服务器...
echo 项目将在浏览器中自动打开 http://localhost:3000
echo.
echo 按 Ctrl+C 停止服务器
echo.

npm start
