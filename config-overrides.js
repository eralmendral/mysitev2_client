const { alias } = require('react-app-rewire-alias')

module.exports = function override(config) {
  alias({
    '@Components': 'src/Components',
    '@Assets': 'src/Assets',
    '@Redux': 'src/Redux'
  })(config)

  return config
}