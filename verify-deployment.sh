#!/bin/bash

echo "🔍 验证部署状态..."
echo ""

# 获取当前时间
echo "开始验证时间: $(date '+%Y-%m-%d %H:%M:%S')"
echo ""

# 1. 检查网站是否可访问
echo "1. 检查网站可访问性..."
SITE_URL="https://htwo666.github.io/ich-heritage/"
if curl -s -o /dev/null -w "%{http_code}" $SITE_URL | grep -q "200"; then
    echo "✅ 网站可访问 (HTTP 200)"
else
    echo "⚠️  网站可能正在部署中，请等待1-2分钟再试"
fi

echo ""
echo "2. 检查新功能:"
echo "   请手动访问以下链接验证功能:"
echo "   $SITE_URL"
echo ""
echo "   需要验证的项目:"
echo "   - [ ] 二维码展示区域是否显示"
echo "   - [ ] 作品图片是否可以切换"
echo "   - [ ] 图片缩略图画廊是否显示"
echo "   - [ ] 视频播放功能是否可用"
echo "   - [ ] 所有按钮和链接是否正常"

echo ""
echo "3. 分享链接:"
echo "   将以下链接分享给其他人:"
echo "   $SITE_URL"
echo ""
echo "   二维码分享链接:"
echo "   https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=$SITE_URL"

echo ""
echo "✅ 验证完成！"
echo "如有问题，请检查:"
echo "1. https://github.com/htwo666/ich-heritage/deployments"
echo "2. https://github.com/htwo666/ich-heritage/actions"
