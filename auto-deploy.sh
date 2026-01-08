#!/bin/bash

echo "🚀 开始自动部署..."
echo ""

# 1. 清理并重新初始化
echo "步骤1: 清理旧配置..."
rm -rf .git
git init
git config user.name "htwo666"
git config user.email "htwocz@gmail.com"

# 2. 设置远程仓库（使用SSH，避免密码问题）
echo "步骤2: 设置SSH远程仓库..."
git remote add origin git@github.com:htwo666/ich-heritage.git

# 3. 测试SSH连接
echo "步骤3: 测试SSH连接..."
ssh -T git@github.com

# 4. 添加文件
echo "步骤4: 添加文件..."
git add .

# 5. 提交
echo "步骤5: 提交代码..."
git commit -m "非遗传承人管理系统部署 $(date '+%Y-%m-%d %H:%M')"

# 6. 推送（使用SSH）
echo "步骤6: 推送到GitHub..."
git branch -M main
git push -u origin main --force

# 7. 部署到GitHub Pages
echo "步骤7: 部署到GitHub Pages..."
npm install --save-dev gh-pages 2>/dev/null
npm run build
npm run deploy

echo ""
echo "✅ 部署完成！"
echo "🌐 网站地址: https://htwo666.github.io/ich-heritage/"
