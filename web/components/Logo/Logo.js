import React from 'react';

const Logo = ({style, imageUrl, isSpinning}) => {
    return (
        <img style={style} className={`${isSpinning ? 'logo-spin' : ''}`} src={imageUrl} />
    );
};

Logo.propTypes = {
    style: React.PropTypes.object.isRequired,
    imageUrl: React.PropTypes.string.isRequired,
    isSpinning: React.PropTypes.bool.isRequired,
};

Logo.displayName = "Logo";
export default Logo;
