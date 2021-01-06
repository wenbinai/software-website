/**
 * Mock数据
 * @type {{noticeContent: string, noticeTime: string, noticeTitle: string}[]}
 */
// 通知列表
export const noticeListMock = [
    {
        noticePics: 'https://gitee.com/wenbinai/picture-bed-1/raw/master/imgs/20210103131329.jpg',
        noticeTitle: '歌手-阿敬',
        noticeContent: '她的音乐独立洒脱，藏着干净的吉他弹唱，娓娓道来的歌词和旋律，以及独特的嗓音。再把一些看到的，听到的以及经历的故事写成歌。将美好的，痛苦的，给写进歌里，唱着别人的故事，做着自己的民谣。\n' +
            '听阿敬的歌是在去年的时候，蛐蛐儿沉迷于《七月上》旷达的黄沙海洋里。后来逐渐越听越多，也逐渐的爱上了她的音乐，连同这个干浄温暖执着的姑娘。',
        noticeTime: '21-01-03',
        id: 1
    },
    // {
    //     noticePics: 'https://gitee.com/wenbinai/picture-bed-1/raw/master/imgs/20210103131329.jpg',
    //     noticeTitle: '歌手-阿敬',
    //     noticeContent: '她的音乐独立洒脱，藏着干净的吉他弹唱，娓娓道来的歌词和旋律，以及独特的嗓音。再把一些看到的，听到的以及经历的故事写成歌。将美好的，痛苦的，给写进歌里，唱着别人的故事，做着自己的民谣。\n' +
    //         '听阿敬的歌是在去年的时候，蛐蛐儿沉迷于《七月上》旷达的黄沙海洋里。后来逐渐越听越多，也逐渐的爱上了她的音乐，连同这个干浄温暖执着的姑娘。',
    //     noticeTime: '21-01-03'
    // },
    {
        noticePics: 'https://gitee.com/wenbinai/picture-bed-1/raw/master/imgs/20210103131314.png',
        noticeTitle: '东北林业大学优秀教师-王波老师',
        noticeContent: '她的音乐独立洒脱，藏着干净的吉他弹唱，娓娓道来的歌词和旋律，以及独特的嗓音。再把一些看到的，听到的以及经历的故事写成歌。将美好的，痛苦的，给写进歌里，唱着别人的故事，做着自己的民谣。\n' +
            '听阿敬的歌是在去年的时候，蛐蛐儿沉迷于《七月上》旷达的黄沙海洋里。后来逐渐越听越多，也逐渐的爱上了她的音乐，连同这个干浄温暖执着的姑娘。',
        noticeTime: '21-01-03',
        id: 2
    },
    {
        noticePics: 'https://gitee.com/wenbinai/picture-bed-1/raw/master/imgs/20210103131309.png',
        noticeTitle: '东北林业大学关于寒假寒假通知',
        noticeContent: '她的音乐独立洒脱，藏着干净的吉他弹唱，娓娓道来的歌词和旋律，以及独特的嗓音。再把一些看到的，听到的以及经历的故事写成歌。将美好的，痛苦的，给写进歌里，唱着别人的故事，做着自己的民谣。\n' +
            '听阿敬的歌是在去年的时候，蛐蛐儿沉迷于《七月上》旷达的黄沙海洋里。后来逐渐越听越多，也逐渐的爱上了她的音乐，连同这个干浄温暖执着的姑娘。',
        noticeTime: '21-01-03',
        id: 3
    }
]

// export const newsListMock = [
//     {
//         newsTitle: '',
//         newsContent: '',
//         newsTime: ''
//     }
// ]
// 友情链接
export const linkListMock = [
    {
        linkIcon: 'el-icon-setting',
        link: 'http://122.9.36.233:8080/#/login',
        linkDesc: '后台管理系统'
    },
    {
        linkIcon: 'el-icon-link',
        link: 'http://acm.nefu.edu.cn/',
        linkDesc: 'ACM测评中心'
    },
    {
        linkIcon: 'el-icon-mobile-phone',
        link: 'https://jwc.nefu.edu.cn/index/jwglxt.htm',
        linkDesc: '东北林业大学教务管理系统'
    },
    {
        linkIcon: 'el-icon-thumb',
        link: 'https://i.webvpn.nefu.edu.cn/dcp/forward.action?path=/portal/portal&p=home&ticket=ST-34957-JxMKeBeBgwUZBDiejTJD-cas',
        linkDesc: '数字东林'
    },
    {
        linkIcon: 'el-icon-position',
        link: 'https://www.nefu.edu.cn/',
        linkDesc: '东北林业大学官网'
    },
    {
        linkIcon: 'el-icon-map-location',
        link: 'http://map.nefu.edu.cn/',
        linkDesc: '校园地图'
    }

]
// 联系
export const connectListMock = {
    // 联系
    email: {
        desc: '邮箱',
        link: 'https://mail.nefu.edu.cn',
        linkDesc: '东北林业大学信息与计算机工程学院--邮箱',
        icon: 'el-icon-message'
    },
    weibo: {
        desc: '微博',
        link: 'https://weibo.com/nefuwb?sudaref=cn.bing.com&display=0&retcode=6102&is_all=1',
        linkDesc: '东北林业大学信息与计算机工程学院--微博',
        icon: 'el-icon-user'
    },
    phone: {
        desc: '电话',
        link: 'http://tel.nefu.edu.cn/',
        linkDesc: '东北林业大学信息与计算机工程学院--电话',
        icon: 'el-icon-phone'
    },
    weixin: {
        desc: '微信',
        link: 'https://mp.weixin.qq.com/profile?src=3&timestamp=1609592312&ver=1&signature=OjxrWwiSVBc04ZO35ZjkUnDl4qa9ZMD2sxKvi6LyUtS7bAD9Oo5nmsbwA21IqHEENkW1DVKkJ4TgY1IFIpb1XQ==',
        linkDesc: '东北林业大学信息与计算机工程学院--微信',
        icon: 'el-icon-chat-dot-round'
    }
}
//教授
export const professorListMock = [
    {
        name: '苏键名',
        desc: '',
        pic: ''
    }
]
// 讲师列表
export const lectureListMock = [
    {
        name: '王波',
        desc1: '职称：讲师',
        desc2: '所在学科：软件工程 软件工程（专业学位）',
        desc3: '研究方向: 计算数学',
        pic: 'http://114.116.213.241/2018224412/img/%E7%8E%8B%E6%B3%A2_%E8%AE%B2%E5%B8%88.jpg',
        id: 1
    },
    {
        name: '李琰',
        desc1: '职称：讲师',
        desc2: '所在学科：软件工程 软件工程（专业学位）',
        desc3: '研究方向:计算数学',
        pic: 'http://114.116.213.241/2018214256/image/teacher/Lecture-2.jpg',
        id: 2
    },
    {
        name: '李琰',
        desc1: '职称：讲师',
        desc2: '所在学科：软件工程 软件工程（专业学位）',
        desc3: '研究方向:计算数学',
        pic: 'http://114.116.213.241/2018214256/image/teacher/Lecture-2.jpg',
        id: 3
    },
    {
        name: '李琰',
        desc1: '职称：讲师',
        desc2: '所在学科：软件工程 软件工程（专业学位）',
        desc3: '研究方向:计算数学',
        pic: 'http://114.116.213.241/2018214256/image/teacher/Lecture-2.jpg',
        id: 4,
    },
    {
        name: '王波',
        desc1: '职称：讲师',
        desc2: '所在学科：软件工程 软件工程（专业学位）',
        desc3: '研究方向: 计算数学',
        pic: 'http://114.116.213.241/2018224412/img/%E7%8E%8B%E6%B3%A2_%E8%AE%B2%E5%B8%88.jpg',
        id: 5
    }
]

// 新闻图片列表
export const newsListMock = [
    {
        link: 'http://114.116.213.241/2018214256/image/challengecup.jpg',
        name: '图片1',
        id: 1
    },
    {
        link: 'http://114.116.213.241/2018214256/image/challenge2.jpg',
        name: '图片2',
        id: 2
    },
    {
        link: 'http://114.116.213.241/2018214256/image/winter.gif',
        name: '图片3',
        id: 3
    }
]
