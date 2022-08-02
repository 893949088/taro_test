export default defineAppConfig({
  pages: [
    'pages/home/index/index',
    'pages/meeting/index/index',
    'pages/shop/index/index',
    'pages/my/index/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    custom: true,
    color: '#7D7E80',
    selectedColor: '#7D7E80',
    backgroundColor: '#ffffff',
    list: [
      {
        pagePath: 'pages/home/index/index',
        selectedIconPath: 'assets/images/toolbar/home_active.png',
        iconPath: 'assets/images/toolbar/home.png',
        text: '首页'
      },
      {
        pagePath: 'pages/meeting/index/index',
        selectedIconPath: 'assets/images/toolbar/meeting_active.png',
        iconPath: 'assets/images/toolbar/meeting.png',
        text: '会议预定'
      },
      {
        pagePath: 'pages/shop/index/index',
        selectedIconPath: 'assets/images/toolbar/shop_active.png',
        iconPath: 'assets/images/toolbar/shop.png',
        text: '商城'
      },
      {
        pagePath: 'pages/my/index/index',
        selectedIconPath: 'assets/images/toolbar/my_active.png',
        iconPath: 'assets/images/toolbar/my.png',
        text: '我的'
      }
    ]
  }
})
