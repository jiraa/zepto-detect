//     Zepto.js
//     (c) 2010-2012 Thomas Fuchs
//     Zepto.js may be freely distributed under the MIT license.
function detect(ua){
  var os = this.os = {}, browser = this.browser = {},
    webkit = ua.match(/WebKit\/([\d.]+)/),
    android = ua.match(/(Android)\s+([\d.]+)/),
    ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
    ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/),
    iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
    webos = ua.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
    touchpad = webos && ua.match(/TouchPad/),
    kindle = ua.match(/Kindle\/([\d.]+)/),
    silk = ua.match(/Silk\/([\d._]+)/),
    blackberry = ua.match(/(BlackBerry).*Version\/([\d.]+)/),
    bb10 = ua.match(/(BB10).*Version\/([\d.]+)/),
    rimtabletos = ua.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
    playbook = ua.match(/PlayBook/),
    chrome = ua.match(/Chrome\/([\d.]+)/) || ua.match(/CriOS\/([\d.]+)/),
    firefox = ua.match(/Firefox\/([\d.]+)/),
    safari = webkit && ua.match(/Mobile\//) && !chrome,
    webview = ua.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/) && !chrome

  if (browser.webkit = !!webkit) browser.version = webkit[1]

  if (android) os.android = true, os.version = android[2]
  if (iphone && !ipod) os.ios = os.iphone = true, os.version = iphone[2].replace(/_/g, '.')
  if (ipad) os.ios = os.ipad = true, os.version = ipad[2].replace(/_/g, '.')
  if (ipod) os.ios = os.ipod = true, os.version = ipod[3] ? ipod[3].replace(/_/g, '.') : null
  if (webos) os.webos = true, os.version = webos[2]
  if (touchpad) os.touchpad = true
  if (blackberry) os.blackberry = true, os.version = blackberry[2]
  if (bb10) os.bb10 = true, os.version = bb10[2]
  if (rimtabletos) os.rimtabletos = true, os.version = rimtabletos[2]
  if (playbook) browser.playbook = true
  if (kindle) os.kindle = true, os.version = kindle[1]
  if (silk) browser.silk = true, browser.version = silk[1]
  if (!silk && os.android && ua.match(/Kindle Fire/)) browser.silk = true
  if (chrome) browser.chrome = true, browser.version = chrome[1]
  if (firefox) browser.firefox = true, browser.version = firefox[1]
  if (safari && (ua.match(/Safari/) || !!os.ios)) browser.safari = true
  if (webview) browser.webview = true

  os.tablet = !!(ipad || playbook || (android && !ua.match(/Mobile/)) || (firefox && ua.match(/Tablet/)))
  os.phone  = !!(!os.tablet && !os.ipod && (android || iphone || webos || blackberry || bb10 ||
    (chrome && ua.match(/Android/)) || (chrome && ua.match(/CriOS\/([\d.]+)/)) || (firefox && ua.match(/Mobile/))))
}

var result = {}

detect.call(result, navigator.userAgent)

module.exports = result
