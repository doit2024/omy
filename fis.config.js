/**
 * 依赖:
 * fis-parser-node-sass
 * fis3-preprocessor-autoprefixer
 * fis3-parser-typescript
 * fis-parser-babel-5.x
 * fis3-postpackager-loader
 *
 * 服务器相关操作      fis3 server -h
 * 启动服务器          fis3 server start
 * 开发环境-热更新      fis3 release debug -wL
 * debug -> test -> build
 */

// fis3 release test
// 远程发布到内网
// 需配套 http://192.168.1.205:8080/receiver.php
// https://github.com/fex-team/fis-command-release/blob/master/tools/receiver.php
fis.media('test').match('*', {
  deploy: fis.plugin('http-push', {
    receiver: 'http://192.168.1.205:8080/receiver.php',
    to: '/web/test'
  }),
  release: '/deng/$0'
})

// fis3 release build -d ../dist
// 生成文件发布到外网服务器下的目录tongjishuju中
fis.media('build').match('*', {
  url: '/tongjishuju$0'
})

fis.match('image', {
  useHash: true
});

fis.match('*.{ts,css,less,scss}', {
  useHash: true
});

fis.match('*.less', {
  parser: fis.plugin('less'),
  rExt: '.css'
});

fis.match('*.scss', {
  parser: fis.plugin('node-sass'),
  rExt: '.css'
});

fis.match('::package', {
  spriter: fis.plugin('csssprites'),
  postpackager: fis.plugin('loader', {
    allInOne: true
  })
});

fis.match('*.{css,less,scss}', {
  packTo: '/css/concat.css',
  optimizer: fis.plugin('clean-css'),
  preprocessor: fis.plugin('autoprefixer', {
    "browsers": ["Android >= 2.1", "iOS >= 4", "ie >= 8", "firefox >= 15"],
    "cascade": true
  })
})

fis.match('/js/*.js', {
  packTo: '/js/concat.js',
  useHash: true,
  parser: fis.plugin('babel-5.x'),
  optimizer: fis.plugin('uglify-js')
});

fis.match('*.ts', {
  parser: fis.plugin('typescript'),
  rExt: '.js',
  optimizer: fis.plugin('uglify-js')
})

fis.match('*.png', {
  optimizer: fis.plugin('png-compressor')
});

fis.media('debug').match('*', {
  useHash: false
});

fis.match('*conf.js', {
  release: false
})

fis.set('project.ignore', [
  'output/**',
  'node_modules/**',
  '.git/**',
  '.svn/**'
]);
