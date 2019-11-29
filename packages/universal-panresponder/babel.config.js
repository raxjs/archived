module.exports = function(api) {
  // Cache the returned value forever and don't call this function again.
  if (api) api.cache(true);

  return {
    'presets': [
      '@babel/preset-env',
    ],
    'ignore': [
      'src/generator/templates',
      '__mockc__',
      'dist'
    ]
  };
};
