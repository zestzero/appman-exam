import React from 'react';
import './button.scss';

const Button = ({text, submitHandler}) => {
    return (
        <button className="Button--default" onClick={submitHandler}>{text}</button>
    );
};

Button.propTypes = {
    text: React.PropTypes.string.isRequired,
    submitHandler: React.PropTypes.func.isRequired,
};

Button.displayName = "Button";
export default Button;
