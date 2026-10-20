import { type PreRenderedAsset } from 'rolldown';

const imageChecker = (name: string): boolean => {
  const extType = name.split('.').at(1) ?? '';
  return /png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType);
};
const fontChecker = (name: string): boolean => {
  const extType = name.split('.').at(1) ?? '';
  return /woff|woff2/.test(extType);
};
const cssChecker = (name: string): boolean => {
  return name.endsWith('.css');
};

const assetFileNames = (chunkInfo: PreRenderedAsset): string => {
  if (chunkInfo.names) {
    if (chunkInfo.names.some(imageChecker)) {
      return 'assets/images/[name]-[hash][extname]';
    }
    if (chunkInfo.names.some(fontChecker)) {
      return 'assets/fonts/[name]-[hash][extname]';
    }
    if (chunkInfo.names.some(cssChecker)) {
      return 'css/[name]-[hash].css';
    }
  }

  return 'assets/[name]-[hash][extname]';
};

export default assetFileNames;
