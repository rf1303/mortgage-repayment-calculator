
export const ErrorField = ({ hasError, id = 'error-rate' }) => {
    if(!hasError) return null;
    return (
        <span className='error text-red text-preset-4' 
              id={id} role="status">
        This field is required</span>
    );
}
