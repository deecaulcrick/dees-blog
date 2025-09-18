'use client';
import { useSpring, animated } from 'react-spring';

const SPRING_CONFIG = {
    tension: 300,
    friction: 16,
};
interface Props {
    size?: number;
    isBooped?: boolean;
}

function IconArrowBullet({
    size = 20,
    isBooped = false,
}: Props) {
    const shaftProps = useSpring({
        x2: isBooped ? 23 : 18,
        config: SPRING_CONFIG,
    });
    const tipProps = useSpring({
        points: isBooped
            ? '17 6 24 12 17 18'
            : '12 5 19 12 12 19',
        config: SPRING_CONFIG,
    });

    return (
        <svg
            fill="none"
            width={size / 16 + 'rem'}
            height={size / 16 + 'rem'}
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
        >
            <animated.line
                x1="5"
                y1="12"
                y2="12"
                {...shaftProps}
            />
            <animated.polyline {...tipProps} />
        </svg>
    );
}

export default IconArrowBullet;