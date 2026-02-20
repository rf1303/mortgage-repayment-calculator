
export const ErrorField = ({ hasError }) => {
    if(!hasError) return null;
    return (
        <span className='error text-red text-preset-4' 
              id="error-rate" role="alert"
              aria-live="polite">
        This field is required</span>
    );
}
