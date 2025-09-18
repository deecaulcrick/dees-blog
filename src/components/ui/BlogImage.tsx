import NextImage from 'next/image';

interface ImageProps {
    src: string;
    alt?: string;
    type?: 'regular' | 'screenshot' | 'diagram';
}

function BlogImage({ src, alt = '', type = 'regular' }: ImageProps) {
    const styles = {
        regular: '',
        screenshot: 'shadow-lg border border-gray-300 dark:border-gray-700',
        diagram: 'shadow-lg'
    };

    return (
        <div className={type == 'diagram' ? `border border-gray-300 dark:border-gray-700 p-10 mb-6` : ``} >
            <NextImage
                src={src}
                alt={alt}
                className={`w-full h-auto rounded-lg mb-6 ${styles[type]}`}
                width={800}
                height={600}
                style={{ width: '100%', height: 'auto' }}
            />
            <p className='text-center'>{alt}</p>
        </div >
    );
}

export default BlogImage