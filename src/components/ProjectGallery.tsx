import React from 'react';

const ProjectGallery = ({ title, projects }) => {
    return (
        <div className="khung1">
            <a href="/project-gallery" title={title}>
                <h4>{title}</h4>
            </a>
            <div className="box1">
                <ul className="hot">
                    {projects.map((p, idx) => (
                        <li key={idx}>
                            <div className="text">
                                <a href={p.href} title={p.title}>
                                    <h3>{p.title}</h3>
                                </a>
                            </div>
                            <a href={p.href} title={p.title}>
                                <img src={p.img} alt={p.title} />
                            </a>
                            {p.desc && <p>{p.desc}</p>}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProjectGallery;
