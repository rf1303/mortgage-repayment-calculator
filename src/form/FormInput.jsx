import { ErrorField } from './Error-field.jsx'

export const FormInput = ({ 
    label, 
    id, 
    name, 
    value, 
    onChange, 
    error, 
    prefix, 
    suffix,
    inputRef,
    min,
    max,
    step
}) => {
    return (
        <div className='flex flex-col gap-3 w-full'>
            <label htmlFor={id} className='form__label'>{label}</label>
            <div className={`label__inputs ${error ? 'outline-red' : 'outline-slate-500'} justify-between`}>
                {prefix && (
                    <span className={`input__items ${prefix.className}`}>
                        {prefix.content}
                    </span>
                )}
                <input 
                    type="number" 
                    id={id} 
                    name={name} 
                    value={value} 
                    onChange={onChange} 
                    className='inputs__preset'
                    required
                    aria-invalid={error ? 'true' : 'false'}
                    aria-describedby={error ? `error-${name}` : undefined}
                    ref={inputRef}
                    min={min}
                    max={max}
                    step={step}
                />
                {suffix && (
                    <span className={`input__items ${suffix.className}`}>
                        {suffix.content}
                    </span>
                )}
            </div>
            {error && <ErrorField hasError={true} id={`error-${name}`} />}
        </div>
    );
}
