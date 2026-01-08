#!/bin/bash

echo "🚀 开始部署非遗传承人管理平台..."

# 1. 检查当前状态
echo "1. 检查 Git 状态..."
git status

# 2. 添加所有文件
echo ""
echo "2. 添加文件到 Git..."
git add .

# 3. 提交更改
echo ""
echo "3. 提交更改..."
git commit -m "部署：非遗传承人管理平台完整应用" || echo "提交失败或无更改"

# 4. 推送到 GitHub
echo ""
echo "4. 推送到 GitHub..."
git push origin main

# 5. 检查是否需要构建
echo ""
echo "5. 检查构建配置..."
if [ -f "package.json" ]; then
    echo "   ✅ 发现 package.json，需要构建"
    echo "   项目将使用 GitHub Pages 自动构建部署"
fi

echo ""
echo "✅ 部署流程已启动！"
echo ""
echo "📋 接下来:"
echo "1. 访问 https://github.com/htwo666/ich-heritage/actions"
echo "   查看自动构建状态"
echo "2. 等待 2-3 分钟构建完成"
echo "3. 访问 https://htwo666.github.io/ich-heritage/"
echo "4. 如果部署失败，检查 GitHub Actions 日志"
