import React from 'react';
import LogoSVG from '../../assets/Logo.svg';

const Logo = ({ height, style, width }) => {
    return (
        <LogoSVG height={height} width={width} style={style} />
    );
};
export default Logo;

