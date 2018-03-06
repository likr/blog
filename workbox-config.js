module.exports = {
  'globDirectory': 'public/',
  'globPatterns': [
    '**/*.{js,png,html,json}'
  ],
  'swSrc': './sw.js',
  'swDest': 'public/sw.js',
  'globIgnores': [
    'sw.js',
    '../workbox-cli-config.js'
  ]
}
