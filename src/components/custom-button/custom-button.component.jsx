import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, ...parameters }) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...parameters}>
        {children}
    </button>
);

export default CustomButton;