#!/bin/bash

echo "🔐 使用 Token 推送代码"
echo ""

# 配置 Git 凭据存储
git config --global credential.helper cache

# 清除旧的凭据
git credential-cache exit 2>/dev/null || true

# 设置远程仓库（HTTPS）
git remote remove origin 2>/dev/null || true
git remote add origin https://github.com/htwo666/ich-heritage.git

# 添加并提交
git add .
git commit -m "自动推送 $(date '+%Y-%m-%d %H:%M')" || git commit -m "更新" --allow-empty

# 推送
echo "正在推送到 GitHub..."
echo "⚠️  注意：接下来需要输入凭据"
echo ""
echo "   用户名: htwo666"
echo "   密码: 粘贴你的 Token (ghp_...)"
echo ""
git push -u origin main --force

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ 推送成功！"
    
    # 部署到 GitHub Pages
    echo "部署到 GitHub Pages..."
    npm run deploy
    
    echo ""
    echo "🎉 部署完成！"
    echo "🌐 网站: https://htwo666.github.io/ich-heritage/"
else
    echo ""
    echo "❌ 推送失败"
    echo "可能是 Token 已过期，请创建新的 Token:"
    echo "https://github.com/settings/tokens"
fi
