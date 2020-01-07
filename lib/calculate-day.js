export default lastDay => {
  const firstDay = new Date(lastDay)
  return new Date(firstDay.setDate(firstDay.getDate() - 6))
}