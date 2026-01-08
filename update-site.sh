#!/bin/bash

echo "🔄 更新非遗传承人管理系统"
echo ""

# 1. 提交代码到 GitHub
echo "1. 提交代码..."
git add .
git commit -m "更新: $(date '+%Y-%m-%d %H:%M:%S')" || echo "没有更改"
git push origin main

# 2. 部署到 GitHub Pages
echo "2. 部署到 GitHub Pages..."
npm run deploy

echo ""
echo "✅ 更新完成！"
echo "🌐 网站地址: https://htwo666.github.io/ich-heritage/"
echo ""
echo "📊 查看部署状态: https://github.com/htwo666/ich-heritage/deployments"
