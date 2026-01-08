#!/bin/bash

echo "🔄 检查部署状态..."
echo ""

echo "1. 本地构建状态:"
if npm run build 2>&1 | grep -q "built in"; then
    echo "✅ 本地构建成功"
else
    echo "❌ 本地构建失败"
fi

echo ""
echo "2. GitHub 仓库状态:"
echo "   仓库地址: https://github.com/htwo666/ich-heritage"
echo "   代码更新: 检查 main 分支是否已更新"

echo ""
echo "3. GitHub Pages 部署:"
echo "   部署状态: https://github.com/htwo666/ich-heritage/deployments"
echo "   Pages设置: https://github.com/htwo666/ich-heritage/settings/pages"

echo ""
echo "4. 网站访问测试:"
SITE_URL="https://htwo666.github.io/ich-heritage/"
echo "   网站地址: $SITE_URL"
echo "   测试命令: curl -I $SITE_URL 2>/dev/null | head -1"

echo ""
echo "5. 新功能验证:"
echo "   请访问网站并检查:"
echo "   - 二维码展示区域是否正常"
echo "   - 作品图片是否支持多张切换"
echo "   - 视频播放功能是否可用"
