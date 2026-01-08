#!/bin/bash

echo "🔍 检查更新状态..."
echo ""

echo "1. 检查 types.ts 是否包含新字段:"
grep -n "qrCode\|video" src/types.ts || echo "❌ 未找到新字段"

echo ""
echo "2. 检查 InheritorDetail.tsx 是否更新:"
grep -n "二维码\|video\|播放" src/components/InheritorDetail.tsx | head -5

echo ""
echo "3. 检查 Git 状态:"
git status --short
echo ""
echo "最近一次提交:"
git log --oneline -1

echo ""
echo "4. 检查远程仓库:"
git remote -v
echo ""
git branch -a

echo ""
echo "5. 检查构建输出:"
if [ -d "dist" ]; then
    echo "dist 文件夹存在"
    grep -r "二维码\|QR" dist/ 2>/dev/null | head -2 || echo "未找到二维码相关代码"
else
    echo "❌ dist 文件夹不存在"
fi
