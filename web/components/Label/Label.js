import React from 'react';

const Label = ({text, shouldHide, isError}) => {
    return (
        <span className={`Label--${isError ? 'error' : 'default'} ${shouldHide ? 'hide' : ''}`}>{text}</span>
    );
};

Label.propTypes = {
    text: React.PropTypes.string.isRequired
};

Label.displayName = "Label";
export default Label;
