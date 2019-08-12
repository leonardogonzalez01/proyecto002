import React from 'react';

const Input = ({name, type, text, onChange, value}) => {
    return (
        <div className='d-flex'>
            <label htmlFor={name}>{text}</label>
            <input value={value} onChange={onChange} id={name} className='form-control' type={type} size="sm"/>
        </div>
    );
};

export default Input;