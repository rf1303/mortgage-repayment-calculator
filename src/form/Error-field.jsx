
export const ErrorField = ({ hasError, fieldId = 'error-rate' }) => {
    if(!hasError) return null;
    return (
        <span className='error text-red text-preset-4' 
              id={fieldId} role="alert">
        This field is required</span>
    );
}
