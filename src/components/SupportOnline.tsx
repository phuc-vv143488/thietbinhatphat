import React from 'react';

const SupportOnline = ({ contacts }) => {
    return (
        <div className="support_online">
            <h4>Hỗ trợ trực tuyến</h4>
            <ul>
                {contacts.map((c, idx) => (
                    <li key={idx}>
                        <p>
                            <span>{c.name}</span>:
                            <img src={c.icon} alt={c.name} title={c.name} />
                            <a href={`tel:${c.phone}`} title={c.phone}><b>{c.phone}</b></a>
                        </p>
                        <p>
                            Email: <a href={`mailto:${c.email}`} title={c.email}>{c.email}</a>
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SupportOnline;
