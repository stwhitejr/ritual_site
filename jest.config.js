module.exports = {
  testPathIgnorePatterns: ['/node_modules/', '/public/'],
  resetModules: true,
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      'identity-obj-proxy',
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },
  setupFiles: ['./jest.setup.js', 'core-js'],
};
