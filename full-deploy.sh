#!/bin/bash

# 颜色定义
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo "🚀 非遗传承人管理系统完整部署流程"
echo ""

# 1. 检查当前状态
echo "1. 检查当前状态..."
git status --short

# 2. 构建项目
echo ""
echo "2. 构建项目..."
if npm run build 2>&1 | tail -5; then
    echo -e "${GREEN}✅ 构建成功${NC}"
else
    echo -e "${RED}❌ 构建失败${NC}"
    exit 1
fi

# 3. 提交代码
echo ""
echo "3. 提交代码到 GitHub..."
read -p "请输入提交信息 (默认: 系统更新): " commit_msg
commit_msg=${commit_msg:-"系统更新"}

git add .
git commit -m "$commit_msg"

# 4. 推送到 GitHub
echo ""
echo "4. 推送到 GitHub..."
if git push origin main; then
    echo -e "${GREEN}✅ 代码推送成功${NC}"
else
    echo -e "${RED}❌ 推送失败，请检查网络或权限${NC}"
    read -p "是否重试? (y/n): " retry
    if [[ $retry == "y" || $retry == "Y" ]]; then
        git push origin main --force
    else
        exit 1
    fi
fi

# 5. 部署到 GitHub Pages
echo ""
echo "5. 部署到 GitHub Pages..."
if npm run deploy 2>&1 | tail -10; then
    echo -e "${GREEN}✅ 部署成功${NC}"
else
    echo -e "${RED}❌ 部署失败${NC}"
    exit 1
fi

# 6. 显示部署信息
echo ""
echo "🎉 部署完成！"
echo ""
echo "📋 部署信息:"
echo "   网站地址: https://htwo666.github.io/ich-heritage/"
echo "   GitHub仓库: https://github.com/htwo666/ich-heritage"
echo "   部署状态: https://github.com/htwo666/ich-heritage/deployments"
echo ""
echo "🆕 本次更新功能:"
echo "   - 删除防伪溯源码，改为二维码展示"
echo "   - 支持上传传承人二维码图片"
echo "   - 支持增删作品图片"
echo "   - 支持上传和播放作品展示视频"
echo "   - 图片画廊和导航功能"
echo ""
echo "⏳ GitHub Pages 通常需要1-2分钟部署时间"
echo "   请稍后访问网站查看更新"
