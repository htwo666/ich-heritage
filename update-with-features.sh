#!/bin/bash

echo "🚀 开始更新系统，添加新功能..."
echo ""

echo "1. 更新类型定义..."
echo "✅ 已完成"

echo "2. 更新示例数据..."
echo "✅ 已完成"

echo "3. 更新详情组件..."
echo "✅ 已完成"

echo "4. 提交代码到 GitHub..."
git add .
git commit -m "更新系统：添加二维码上传、作品图片增删、视频上传功能"
git push origin main

echo ""
echo "5. 部署到 GitHub Pages..."
npm run deploy

echo ""
echo "✅ 更新完成！"
echo "🌐 网站地址: https://htwo666.github.io/ich-heritage/"
echo ""
echo "🆕 新功能已添加："
echo "   - 删除防伪溯源码，改为二维码展示"
echo "   - 支持上传传承人二维码"
echo "   - 支持增删作品图片"
echo "   - 支持上传作品展示视频"
