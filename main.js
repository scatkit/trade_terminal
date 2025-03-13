function getMonthlyPrice(tier){
  switch (tier){
    case "basic":
      return 10_000
    case "premium":
      return 15_000
    case "enterprice":
      return 50_000
    default:
      return 0
 }
}

export { getMonthlyPrice }
