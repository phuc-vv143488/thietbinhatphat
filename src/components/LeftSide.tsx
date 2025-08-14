import React from 'react';
import CategoryMenu from './CategoryMenu';
import SupportOnline from './SupportOnline';
import Advertisement from './Advertisement';
import HotNews from './HotNews';
import FacebookBox from './FacebookBox';
import ProjectGallery from './ProjectGallery';

const defaultData = {
    contacts: [
        { name: 'Kinh doanh 1', icon: 'https://thietbinhatphat.com/public/media/files/slide/zalo-icon.png', phone: '0356389883', email: 'baokhanganco.ltd8386@gmail.com' },
        { name: 'Kinh doanh 2', icon: 'https://thietbinhatphat.com/public/media/files/slide/zalo-icon.png', phone: '0356389883', email: 'baokhanganco.ltd8386@gmail.com' },
    ],
    ads: [
        { href: '#', img: '/images/banner/leftside.png', title: 'Ảnh ADV left1' },
    ],
    hotNews: [
        { href: '#1', title: 'Làm thế nào để chọn đúng chiều cao nâng xe nâng người S Boom(phần 2)', img: 'https://thietbinhatphat.com/public/images/105848461d39e767be28_result.jpg', desc: 'Chọn xe nâng người boom cho một dự án là một nhiệm vụ quan trọng...' },
        { href: '#2', title: 'Làm thế nào để chọn đúng chiều cao nâng xe nâng người S Boom(phần 1)', img: 'https://thietbinhatphat.com/public/images/S-125-1.png', desc: 'Xe nâng người boom telescopic, còn được gọi là xe nâng người Z boom...' },
    ],
    // facebookUrl: 'https://www.facebook.com/xenangnguoituhanhnhatphat/',
    facebookUrl: '#',
    projects: [
        { href: '#p1', title: 'Cho thuê xe nâng người tại công ty Pronics kcn Đồng Văn 3', img: 'https://thietbinhatphat.com/public/images/pronics.jpg' },
        { href: '#p2', title: 'Cho thuê xe nâng người tại trường quốc tế Singapore', img: 'https://thietbinhatphat.com/public/images/singapo-5.jpg', desc: 'Bảo Khang An với tiêu chí "nâng cao an toàn cho bạn"...' },
    ],
};

interface LeftSideProps {
    data?: typeof defaultData;
}

const LeftSide: React.FC<LeftSideProps> = () => {
    return (
        <>
            <CategoryMenu/>
            <SupportOnline contacts={defaultData.contacts} />
            <Advertisement ads={defaultData.ads} />
            <HotNews title="Bài viết nổi bật" newsList={defaultData.hotNews} />
            <FacebookBox pageUrl={defaultData.facebookUrl} />
            <ProjectGallery title="Hình ảnh - Dự án" projects={defaultData.projects} />
        </>
    );
};

export default LeftSide;
