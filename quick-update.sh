#!/bin/bash
echo "快速更新..."
git add .
git commit -m "更新 $(date '+%m-%d %H:%M')"
git push origin main
npm run deploy
echo "✅ 更新完成！等待1分钟生效。"
