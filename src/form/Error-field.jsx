

export const ErrorField = (e) => {
        console.log('e:', e)
    return (
        <span className='error text-red text-preset-4' id="error-rate" aria-hidden="true">This field is required</span>
    );
}
