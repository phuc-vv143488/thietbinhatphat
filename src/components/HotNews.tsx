import React from 'react';

const HotNews = ({ title, newsList }) => {
    return (
        <div className="khung1">
            <h4>{title}</h4>
            <div className="box1">
                <ul className="hot">
                    {newsList.map((n, idx) => (
                        <li key={idx}>
                            <div className="text">
                                <a href={n.href} title={n.title}>
                                    <h3>{n.title}</h3>
                                </a>
                            </div>
                            <a href={n.href} title={n.title}>
                                <img src={n.img} alt={n.title} />
                            </a>
                            {n.desc && <p>{n.desc}</p>}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default HotNews;
