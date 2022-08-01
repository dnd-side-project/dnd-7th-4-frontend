/* eslint-disable no-undef */
const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@Assets': path.resolve(__dirname, 'src/assets'),
      '@Components': path.resolve(__dirname, 'src/components'),
      '@Hooks': path.resolve(__dirname, 'src/hooks'),
      '@Pages': path.resolve(__dirname, 'src/pages'),
      '@Recoil': path.resolve(__dirname, 'src/recoil'),
      '@Routes': path.resolve(__dirname, 'src/routes'),
      '@Stories': path.resolve(__dirname, 'src/stories'),
      '@Styles': path.resolve(__dirname, 'src/styles'),
    },
  },
};
