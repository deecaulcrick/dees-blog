interface CalloutProps {
    heading?: string,
    text: string,
    type?: 'audience' | 'info' | 'warning' | 'error' | 'success'
}

export default function Callout({ heading, text, type = 'info' }: CalloutProps) {
    const styles = {
        audience: 'bg-theme-pink/10 border-theme-pink',
        disclaimer: 'bg-theme-orange/10 border-theme-orange',
        definition: 'bg-theme-green/10 border-theme-green',
        info: 'bg-blue-50 border-blue-200 text-blue-900',
        warning: 'bg-yellow-50 border-yellow-200 text-yellow-900',
        error: 'bg-red-50 border-red-200 text-red-900',
        success: 'bg-green-50 border-green-200 text-green-900',
    }
    const headingStyles = {
        audience: 'text-theme-pink',
        disclaimer: 'text-theme-orange',
        definition: 'text-theme-green',
        info: 'text-theme-pink',
        warning: 'text-theme-pink',
        error: 'text-theme-pink',
        success: 'text-theme-pink',
    }

    return (
        <div className={`border-l-8 p-8 my-6 ${styles[type]}`}>
            <h4 className={`font-bold text-xl mb-2 ${headingStyles[type]}`}>{heading}</h4>
            <p>{text}</p>
        </div>
    )
}