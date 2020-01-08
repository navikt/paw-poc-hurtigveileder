const url = window && window.location && window.location.href
    ? window.location.href
    : ''

export default () => {
  return /nav.no/.test(url)
}
