import React from 'react';

const Image = (props) => {
    const { src, alt, ...rest } = props;
    return (
        <img src={`${process.env.PUBLIC_URL}/images/${src}`} alt={alt} {...rest} />
    );
}

export default Image;
