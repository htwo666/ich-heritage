import React from 'react';
import { Inheritor } from '../types';

interface QRCodeSectionProps {
  qrCode?: string;
}

export const QRCodeSection: React.FC<QRCodeSectionProps> = ({ qrCode }) => {
  return (
    <div className="pt-4 border-t border-gray-200">
      <div className="text-center mb-4">
        <p className="text-[10px] text-gray-400 font-bold mb-2">数字身份二维码</p>
        {qrCode ? (
          <div className="w-full aspect-square rounded-2xl bg-white shadow-inner flex items-center justify-center overflow-hidden border-2 border-gray-100">
            <img 
              src={qrCode} 
              alt="传承人二维码" 
              className="w-full h-full object-contain p-4"
            />
          </div>
        ) : (
          <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center border-2 border-dashed border-gray-300">
            <div className="text-center">
              <div className="text-3xl text-gray-300 mb-2">QR</div>
              <p className="text-[10px] text-gray-400">未上传二维码</p>
            </div>
          </div>
        )}
      </div>
      <p className="text-xs text-gray-500 text-center mt-2">
        扫描二维码查看完整数字档案
      </p>
    </div>
  );
};
