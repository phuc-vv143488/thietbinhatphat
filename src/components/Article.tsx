import React from 'react';

interface ArticleProps {
    title: string;
    date: string;
    content: string;
}

export default function Article(props) : ArticleProps {
    const {title, date, content} = props;
    return (
        <div className="chitiettin">
            <div className="title1">
                <h1>{title}</h1>
                <span></span>
            </div>
            <div className="share_mxh" style={{width: "100%", float: "left", overflow: "hidden"}}>
                <div style={{textAlign: "right", paddingBottom: "5px"}}>
                    {/* Đoạn script chia sẻ mạng xã hội có thể được xử lý riêng nếu cần */}
                    <a href="#">
                        <img
                            src="https://www.etan.org/etan_files/lg-share-en.gif"
                            width="125"
                            height="16"
                            alt="Bookmark and Share"
                            style={{border: 0}}
                        />
                    </a>
                </div>
            </div>
            <div className="clear"></div>
            <p className="date">{date}</p>
            <div className="chitiet1">
                {/* Sử dụng dangerouslySetInnerHTML để render HTML thô */}
                <div dangerouslySetInnerHTML={{__html: content}}/>
            </div>
            <div className="tags">
                <p>Tags:</p>
                <ul></ul>
            </div>
        </div>
    );
}
