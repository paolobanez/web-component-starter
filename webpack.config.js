module.exports = ({ mode }) => {
  return {
    mode,
    devtool: mode === 'development' ? 'source-map' : 'none',
  };
};
