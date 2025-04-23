import Image, { ImageProps } from 'next/image';
import { CSSProperties } from 'react';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
  style?: CSSProperties;
  fill?: boolean;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
}

const ResponsiveImage = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  sizes = '100vw',
  style,
  fill = false,
  objectFit = 'contain',
}: ResponsiveImageProps) => {
  // If width and height are provided, use regular Image component with those dimensions
  if (width && height && !fill) {
    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes}
        className={className}
        style={{
          maxWidth: '100%',
          height: 'auto',
          ...style
        }}
      />
    );
  }

  // If fill mode is requested or no dimensions are provided, use fill mode
  return (
    <div className={`relative ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        style={{ 
          objectFit,
          transition: 'transform 0.4s',
          ...style
        }}
      />
    </div>
  );
};

export default ResponsiveImage;