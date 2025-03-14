const tokens = {
  one: 1,
  two: 2,
  thee: 3,
}

const vehicles = {
  "supra": "4g6",
  "evo": "4g63"
}

const all_things = {...tokens, ...vehicles}

console.log(all_things["supra"])

vehicles["supra"] = "rb26"

console.log(all_things["supra"])


