const { alias } = require('react-app-rewire-alias')

module.exports = function override(config) {
  alias({
    '@Components': 'src/Components',
    '@Containers': 'src/Containers',
    '@Assets': 'src/Assets',
    '@Redux': 'src/Redux'
  })(config)

  return config
}