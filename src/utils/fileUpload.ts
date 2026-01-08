/**
 * 将文件转换为Base64 Data URL
 */
export const fileToDataURL = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

/**
 * 验证图片文件
 */
export const validateImageFile = (file: File): { valid: boolean; message?: string } => {
  const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
  const maxSize = 5 * 1024 * 1024; // 5MB

  if (!validTypes.includes(file.type)) {
    return { 
      valid: false, 
      message: '只支持 JPG、PNG、GIF、WebP 格式的图片' 
    };
  }

  if (file.size > maxSize) {
    return { 
      valid: false, 
      message: '图片大小不能超过 5MB' 
    };
  }

  return { valid: true };
};

/**
 * 验证视频文件
 */
export const validateVideoFile = (file: File): { valid: boolean; message?: string } => {
  const validTypes = ['video/mp4', 'video/webm', 'video/ogg'];
  const maxSize = 50 * 1024 * 1024; // 50MB

  if (!validTypes.includes(file.type)) {
    return { 
      valid: false, 
      message: '只支持 MP4、WebM、OGG 格式的视频' 
    };
  }

  if (file.size > maxSize) {
    return { 
      valid: false, 
      message: '视频大小不能超过 50MB' 
    };
  }

  return { valid: true };
};
