import React from 'react';

const CloudsDivider = ({
    height = 120,
    className = '',
    primaryColor = '#1e293b',
    secondaryColor = '#334155',
    tertiaryColor = '#475569'
}) => {
    return (
        <div className={`relative overflow-hidden ${className}`} style={{ height: `${height}px` }}>
            {/* Back layer - most transparent */}
            <svg
                className="absolute bottom-0 left-0 w-full"
                style={{ height: `${height * 0.8}px`, opacity: 0.4 }}
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
                fill="none"
            >
                <path
                    d="M0 60C150 20 300 80 450 40C600 0 750 60 900 30C1050 0 1200 40 1200 40V120H0V60Z"
                    fill={tertiaryColor}
                />
            </svg>

            {/* Middle layer - medium transparency */}
            <svg
                className="absolute bottom-0 left-0 w-full"
                style={{ height: `${height * 0.9}px`, opacity: 0.7 }}
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
                fill="none"
            >
                <path
                    d="M0 80C200 30 400 90 600 50C800 10 1000 70 1200 40V120H0V80Z"
                    fill={secondaryColor}
                />
            </svg>

            {/* Front layer - fully opaque */}
            <svg
                className="absolute bottom-0 left-0 w-full"
                style={{ height: `${height}px` }}
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
                fill="none"
            >
                <path
                    d="M0 100C100 60 200 100 300 80C400 60 500 100 600 90C700 80 800 110 900 100C1000 90 1100 110 1200 100V120H0V100Z"
                    fill={primaryColor}
                />
            </svg>
        </div>
    );
};

export default CloudsDivider;
