#!/bin/bash

echo "🎯 终极部署方案"
echo ""

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m' # No Color

# 检查目录
if [ ! -f "package.json" ]; then
    echo -e "${RED}错误：不在项目目录${NC}"
    exit 1
fi

# 1. 检查仓库状态
echo "1. 检查GitHub仓库..."
if curl -s -o /dev/null -w "%{http_code}" https://github.com/htwo666/ich-heritage | grep -q "200"; then
    echo -e "${GREEN}✅ 仓库已存在${NC}"
else
    echo -e "${RED}❌ 仓库不存在${NC}"
    echo "请在浏览器中创建: https://github.com/new"
    echo "仓库名: ich-heritage"
    read -p "按回车继续，确认已创建仓库..."
fi

# 2. 选择认证方式
echo ""
echo "2. 选择认证方式:"
echo "   [1] SSH（推荐）"
echo "   [2] HTTPS + Token"
read -p "请选择 (1-2): " auth_choice

# 3. 清理并重新初始化
echo ""
echo "3. 清理旧配置..."
rm -rf .git dist node_modules/.cache
git init
git config user.name "htwo666"
git config user.email "htwocz@gmail.com"

# 4. 设置远程仓库
echo ""
echo "4. 设置远程仓库..."
case $auth_choice in
    1)
        # SSH方式
        git remote add origin git@github.com:htwo666/ich-heritage.git
        echo "测试SSH连接..."
        if ssh -T git@github.com 2>/dev/null; then
            echo -e "${GREEN}✅ SSH连接成功${NC}"
        else
            echo -e "${RED}❌ SSH连接失败${NC}"
            echo "请先设置SSH密钥: https://github.com/settings/keys"
            exit 1
        fi
        ;;
    2)
        # HTTPS方式
        git remote add origin https://github.com/htwo666/ich-heritage.git
        echo -e "${GREEN}✅ 使用HTTPS${NC}"
        ;;
    *)
        echo -e "${RED}❌ 无效选择${NC}"
        exit 1
        ;;
esac

# 5. 确保配置文件正确
echo ""
echo "5. 更新配置文件..."
cat > package.json << 'PKGEOF'
{
  "name": "非遗传承人作品征集与展示系统",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "homepage": "https://htwo666.github.io/ich-heritage",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "dependencies": {
    "react": "^19.2.3",
    "react-dom": "^19.2.3"
  },
  "devDependencies": {
    "@types/node": "^22.14.0",
    "@vitejs/plugin-react": "^5.0.0",
    "gh-pages": "^6.3.0",
    "typescript": "~5.8.2",
    "vite": "^6.2.0"
  }
}
PKGEOF

# 6. 推送代码
echo ""
echo "6. 推送代码..."
git add .
git commit -m "部署: $(date '+%Y-%m-%d %H:%M:%S')" > /dev/null 2>&1 || git commit -m "Initial deploy"
git branch -M main

if [ $auth_choice -eq 1 ]; then
    # SSH推送
    git push -u origin main --force
else
    # HTTPS推送（会要求输入凭据）
    echo ""
    echo "⚠️  接下来需要输入GitHub凭据:"
    echo "   用户名: htwo666"
    echo "   密码: 使用Personal Access Token"
    echo ""
    git push -u origin main --force
fi

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ 代码推送成功${NC}"
else
    echo -e "${RED}❌ 推送失败${NC}"
    exit 1
fi

# 7. 部署到GitHub Pages
echo ""
echo "7. 部署到GitHub Pages..."
npm install --save-dev gh-pages > /dev/null 2>&1
npm run build > /dev/null 2>&1
npm run deploy > /dev/null 2>&1

echo ""
echo -e "${GREEN}🎉 部署完成！${NC}"
echo ""
echo "🌐 网站地址: https://htwo666.github.io/ich-heritage/"
echo "📦 GitHub仓库: https://github.com/htwo666/ich-heritage"
echo "⚙️  设置页面: https://github.com/htwo666/ich-heritage/settings/pages"
echo ""
echo "📋 后续更新:"
echo "   git add . && git commit -m '更新描述' && git push && npm run deploy"
echo ""
