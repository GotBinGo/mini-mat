module.exports = {
  root: true,
  env: {
    node: true
  },
  plugins: [
    'svelte3'
  ],
  'extends': [
    'eslint:recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parser: 'babel-eslint'
}
