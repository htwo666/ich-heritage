#!/bin/bash

echo "=== 当前状态检查 ==="
echo ""

echo "1. GitHub 仓库状态："
curl -s -o /dev/null -w "HTTP状态码: %{http_code}\n" https://github.com/htwo666/ich-heritage

echo ""
echo "2. 网站状态："
curl -s -o /dev/null -w "HTTP状态码: %{http_code}\n" https://htwo666.github.io/ich-heritage/

echo ""
echo "3. 本地 Git 状态："
git status --short

echo ""
echo "4. 远程仓库配置："
git remote -v

echo ""
echo "5. 本地文件："
ls -la | grep -E "\.(tsx|ts|json|html)$"
