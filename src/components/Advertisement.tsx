import React from 'react';

interface AdItem {
    href: string;
    title: string;
    img: string;
}

interface AdvertisementProps {
    ads: AdItem[];
}

const Advertisement: React.FC<AdvertisementProps> = ({ ads }) => {
    return (
        <div className="adv_home">
            <ul>
                {ads.map((ad, idx) => (
                    <li key={idx}>
                        <a href={ad.href} title={ad.title}>
                            <img src={ad.img} alt={ad.title} title={ad.title} />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Advertisement;
