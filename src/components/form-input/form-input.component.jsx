import React from 'react';
import './form-input.styles.scss';

const FormInput = ({ label, handleChange, ...parameters }) => (
    <div className="group">
        <input className="form-input" onChange={handleChange} {...parameters} />
        {
            label ? <label className={`${parameters.value.length ? 'shrink' : ''} form-input-label`}>{label}</label> : null
        }
    </div>
);


export default FormInput;
