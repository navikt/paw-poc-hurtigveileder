export default (daysFromNow) => {
  let status = 'passe'
  if (daysFromNow < 0) {
    status = 'sent'
  }
  if (daysFromNow > 6) {
    status = tidlig
  }
  return status
}