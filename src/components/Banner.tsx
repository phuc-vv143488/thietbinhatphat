import React from 'react';

const Banner = ({ backgroundUrl }) => {
    const bannerStyle = {
        background: `rgba(0, 0, 0, 0) url("${backgroundUrl}") no-repeat scroll 0 0 / 100% 100%`,
        color: '#fff',
        fontFamily: 'menu',
        fontSize: '45px',
        lineHeight: '280px',
        marginTop: 0,
        textAlign: 'center',
        textTransform: 'uppercase',
        width: '100%',
        float: 'left',
        // height: "700px"
    };

    return (
        <div id="company1" style={bannerStyle}>Sản phẩm</div>
    );
};

export default Banner;

