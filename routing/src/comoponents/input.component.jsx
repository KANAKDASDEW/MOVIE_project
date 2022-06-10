import React, { Component } from 'react';

const Input = ({ label, name, id, type , email, value , onChange,errors}) => {
    return ( 
        <>
        <label  className="form-label" htmlFor={id}> { label}</label>
        <input
                value={value}
                type={type}
                className="form-control"
                name={name}
                id={id}
                email={email}
                onChange={onChange}
                />

            {errors[name] && <div className="alert alert-danger">{errors[name]} </div>}
        </>
     );
}
 
export default Input;