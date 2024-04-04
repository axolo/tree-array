export default (prefix = '') => {
  return [prefix, Math.random().toString(36).slice(2)].join('')
}
