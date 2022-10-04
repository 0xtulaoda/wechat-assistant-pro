import { WechatyBuilder } from 'wechaty';
import { WechatyWebPanelPlugin } from 'wechaty-web-panel';

const name = 'wechat-assistant-pro';
let bot = '';

console.log('默认使用uos web版微信协议');
bot = WechatyBuilder.build({
  name, // generate xxxx.memory-card.json and save login data for the next login
  puppetOptions: {
    uos: true,
  },
  puppet: 'wechaty-puppet-wechat',
});

bot.use(
  WechatyWebPanelPlugin({
    apiKey: '1a0a72ffe0c983fa77f405ada50a019c8351d70a',
    apiSecret: 'dc8f10e08910d42249aabb5b148ff09260d71cc2',
  })
);
bot.start().catch((e) => console.error(e));
