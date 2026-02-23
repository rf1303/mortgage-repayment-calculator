
export const ErrorField = ({ hasError, id = 'error-rate' }) => {
    return (
        <span 
            className={`error text-red text-preset-4 transition-all duration-300 ease-in-out ${
                hasError ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1 pointer-events-none'
            }`}
            id={id} 
            role="status"
            aria-hidden={!hasError}
        >
            This field is required
        </span>
    );
}
