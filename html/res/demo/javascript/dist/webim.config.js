/**
  * webim.config.js 不进git
  * 每人都在本机拷贝粘贴webim.config.js.demo 为 webim.config.js
  * 然后配置自己的config
  * 这样不会影响其他人和线上服务器的config
  *
  */
var WebIM = {};

WebIM.config = {
    /*
     * XMPP server
     */
    xmppURL: 'im-api.easemob.com',
    /*
     * Backend REST API URL
     */
    apiURL: (location.protocol === 'https:' ? 'https:' : 'http:') + '//a1.easemob.com',
    /*
     * Application AppKey
     */
    appkey: 'easemob-demo#chatdemoui',
    /*
     * Whether to use HTTPS
     * @parameter {Boolean} true or false
     */
    https: false,
    /*
     * isMultiLoginSessions
     * true: A visitor can sign in to multiple webpages and receive messages at all the webpages.
     * false: A visitor can sign in to only one webpage and receive messages at the webpage.
     */
    isMultiLoginSessions: false,
    /**
     * Whether to use window.doQuery()
     * @parameter {Boolean} true or false
     */
    isWindowSDK: true,
    /**
     * Whether to console.log in strophe.log()
     * @parameter {Boolean} true or false
     */
    isDebug: false,
    /**
     * 自动登录账户
     */
    autoSignIn: false,
    autoSignInName: 'xxx',
    autoSignInPwd: 'xxx',
    /*
     * Set to auto sign-in
     */
    isAutoLogin: true
};
