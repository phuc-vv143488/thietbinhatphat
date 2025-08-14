/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://baokhangan.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/admin/*', '/api/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/']
      }
    ],
    additionalSitemaps: [
      'https://baokhangan.com/sitemap.xml'
    ]
  },
  /*transform: async (config, path) => {
    // Custom priority and changefreq for different page types
    let priority = 0.7;
    let changefreq = 'weekly';

    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path.includes('/san-pham/')) {
      priority = 0.8;
      changefreq = 'weekly';
    } else if (path.includes('/tin-tuc/')) {
      priority = 0.6;
      changefreq = 'weekly';
    } else if (path === '/gioi-thieu' || path === '/dich-vu' || path === '/lien-he') {
      priority = 0.9;
      changefreq = 'monthly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },*/
  /*additionalPaths: async (config) => {
    // Add dynamic product pages
    const productSlugs = [
      'xe-nang-nguoi-genie-gs-3268',
      'xe-nang-nguoi-genie-z45-25',
      'xe-nang-nguoi-genie-s-125',
      'xe-nang-nguoi-genie-gs-1930',
      'xe-nang-nguoi-genie-gs-2032',
      'xe-nang-nguoi-genie-gs-2046',
      'xe-nang-nguoi-genie-gs-2646',
      'thang-nang-awp-30s',
      'xe-nang-nguoi-jlg-4069'
    ];

    const newsSlugs = [
      'chon-lop-xe-phu-hop-cho-xe-nang-nguoi-boom',
      'cho-thue-xe-nang-nguoi-tai-cong-ty-pronics',
      'chuyen-cung-cap-va-cho-thue-xe-nang-nguoi-lam-viec-tren-cao'
    ];

    const productPaths = productSlugs.map(slug => ({
      loc: `/san-pham/${slug}`,
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    }));

    const newsPaths = newsSlugs.map(slug => ({
      loc: `/tin-tuc/${slug}`,
      changefreq: 'weekly',
      priority: 0.6,
      lastmod: new Date().toISOString(),
    }));

    return [...productPaths, ...newsPaths];
  }*/
};

