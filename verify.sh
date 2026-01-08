#!/bin/bash

echo "🔍 验证部署状态..."
echo ""

echo "1. 检查 GitHub Actions 状态:"
echo "   访问: https://github.com/htwo666/ich-heritage/actions"
echo "   查看最新工作流是否成功运行"
echo ""

echo "2. 检查 GitHub Pages 状态:"
echo "   访问: https://github.com/htwo666/ich-heritage/deployments"
echo "   查看部署是否成功"
echo ""

echo "3. 检查网站内容:"
echo "   等待 3 分钟后访问:"
echo "   https://htwo666.github.io/ich-heritage/?t=\$(date +%s)"
echo ""

echo "4. 如果网站显示空白或错误:"
echo "   - 检查浏览器控制台 (F12)"
echo "   - 查看 GitHub Actions 构建日志"
echo "   - 确保 dist 文件夹已生成"
echo ""

echo "📊 时间线:"
echo "   - 代码推送: 立即"
echo "   - GitHub Actions 构建: 约 2 分钟"
echo "   - GitHub Pages 部署: 约 1 分钟"
echo "   - 总计: 约 3-5 分钟"
