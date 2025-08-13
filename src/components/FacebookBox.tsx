import React from 'react';

const FacebookBox = ({ pageUrl }) => {
    return (
        <div className="khung1">
            <h4>Chúng tôi qua facebook</h4>
            <div className="adv_home" style={{ padding: '10px' }}>
                <iframe
                    src={`http://www.facebook.com/plugins/likebox.php?href=${encodeURIComponent(pageUrl)}&width=320&height=280&colorscheme=light&show_faces=true&header=false&stream=false&show_border=false`}
                    scrolling="no"
                    frameBorder="0"
                    style={{border: 'none', overflow: 'hidden', height: '225px', width: '100%', paddingBottom: '10px'}}
                />
            </div>
        </div>
    );
};

export default FacebookBox;
