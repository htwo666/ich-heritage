#!/bin/bash

echo "🔧 部署问题排查"
echo ""

echo "1. 检查本地文件:"
ls -la src/components/InheritorDetail.tsx
ls -la src/types.ts
ls -la src/constants.tsx

echo ""
echo "2. 检查 Git 状态:"
git status --short
git log --oneline -3

echo ""
echo "3. 检查远程分支:"
git branch -r

echo ""
echo "4. 检查 GitHub Actions 状态:"
echo "   访问: https://github.com/htwo666/ich-heritage/actions"

echo ""
echo "5. 检查 GitHub Pages 设置:"
echo "   访问: https://github.com/htwo666/ich-heritage/settings/pages"

echo ""
echo "6. 常见问题:"
echo "   - 如果网站显示旧版本，清除浏览器缓存 (Ctrl+Shift+R)"
echo "   - 如果 404 错误，等待 2-3 分钟再试"
echo "   - 如果样式错乱，检查网络是否加载了 Tailwind CSS"
