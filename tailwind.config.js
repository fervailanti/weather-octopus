module.exports = {
  future: {
    purgeLayersByDefault: true
  },
  purge: {
    content: ['public/*.html', './src/**/*.html', './src/**/*.tsx']
  },
  theme: {
    inset: {
      0: 0,
      '1/2': '50%',
      auto: 'auto'
    }
  },
  variants: {
    opacity: ['responsive', 'hover', 'focus', 'active', 'group-hover']
  }
}
