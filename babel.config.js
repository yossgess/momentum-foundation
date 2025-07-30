module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@': './src',
            '@/components': './src/components',
            '@/screens': './src/screens',
            '@/navigation': './src/navigation',
            '@/stores': './src/shared/stores',
            '@/services': './src/shared/services',
            '@/hooks': './src/shared/hooks',
            '@/types': './src/shared/types',
            '@/utils': './src/shared/utils',
            '@/theme': './src/theme',
            '@/config': './src/config',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
