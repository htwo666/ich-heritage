#!/bin/bash

echo "🔄 强制更新系统..."

# 1. 确保所有文件已添加
echo "1. 添加所有文件..."
git add -A

# 2. 提交更改
echo "2. 提交更改..."
git commit -m "强制更新：修复二维码和视频功能 $(date '+%Y-%m-%d %H:%M:%S')" || echo "没有新更改"

# 3. 强制推送到 GitHub
echo "3. 强制推送到 GitHub..."
git push origin main --force

# 4. 重新安装依赖
echo "4. 重新安装依赖..."
rm -rf node_modules package-lock.json
npm install

# 5. 重新构建
echo "5. 重新构建..."
npm run build

# 6. 重新部署
echo "6. 重新部署到 GitHub Pages..."
npm run deploy

echo ""
echo "✅ 强制更新完成！"
echo "等待2分钟，然后访问: https://htwo666.github.io/ich-heritage/"
echo "如果还有问题，请清除浏览器缓存 (Ctrl+Shift+R)"
