#!/bin/bash

echo "🔧 配置 GitHub Pages..."

# 创建 GitHub Actions 工作流
mkdir -p .github/workflows
cat > .github/workflows/deploy.yml << 'YAML'
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Setup Pages
        uses: actions/configure-pages@v4
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'
  
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
YAML

echo "✅ 已创建 GitHub Actions 工作流"
echo ""
echo "📋 部署流程:"
echo "1. 推送代码到 GitHub"
echo "2. GitHub Actions 自动构建"
echo "3. 自动部署到 GitHub Pages"
echo ""
echo "⚠️  注意: 需要在 GitHub 仓库设置中启用 Pages"
echo "   设置路径: Settings → Pages → Build and deployment"
echo "   Source: GitHub Actions"
