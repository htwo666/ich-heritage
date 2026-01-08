#!/bin/bash

echo "🧪 测试新功能"
echo ""

echo "1. 检查文件是否更新..."
if [ -f "src/types.ts" ]; then
  echo "✅ types.ts 存在"
  grep -q "qrCode" src/types.ts && echo "✅ 包含 qrCode 字段" || echo "❌ 缺少 qrCode 字段"
  grep -q "video" src/types.ts && echo "✅ 包含 video 字段" || echo "❌ 缺少 video 字段"
fi

echo ""
echo "2. 检查组件是否更新..."
if [ -f "src/components/InheritorDetail.tsx" ]; then
  echo "✅ InheritorDetail.tsx 存在"
  grep -q "二维码" src/components/InheritorDetail.tsx && echo "✅ 包含二维码功能" || echo "❌ 缺少二维码功能"
  grep -q "video" src/components/InheritorDetail.tsx && echo "✅ 包含视频功能" || echo "❌ 缺少视频功能"
fi

echo ""
echo "3. 检查示例数据..."
if [ -f "src/constants.tsx" ]; then
  echo "✅ constants.tsx 存在"
  grep -q "qrCode" src/constants.tsx && echo "✅ 示例包含二维码" || echo "❌ 示例缺少二维码"
  grep -q "video" src/constants.tsx && echo "✅ 示例包含视频" || echo "❌ 示例缺少视频"
fi

echo ""
echo "✅ 所有文件检查完成！"
echo "现在访问 https://htwo666.github.io/ich-heritage/ 查看更新"
