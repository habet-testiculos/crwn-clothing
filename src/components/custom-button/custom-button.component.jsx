import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...parameters }) => (
    <button className={`
         ${inverted ? 'inverted' : ''} 
         ${isGoogleSignIn ? 'google-sign-in' : ''}
        custom-button`} {...parameters}>
        {children}
    </button>
);

export default CustomButton;