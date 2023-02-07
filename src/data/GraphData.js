import gaussian from 'gaussian'

function weightedRandom(mean, variance) {
  var distribution = gaussian(mean, variance)
  // Take a random sample using inverse transform sampling method.
  return distribution.ppf(Math.random())
}

export function generateRandomGraphData(length) {
  return Array(length)
    .fill(0)
    .map((_, index) => ({
      date: new Date(
        new Date(2000, 0, 1).getTime() + 1000 * 60 * 60 * 24 * index
      ),
      value: weightedRandom(10, Math.pow(index + 1, 2)),
    }))
}

export function generateSinusGraphData(length) {
  return Array(length)
    .fill(0)
    .map((_, index) => ({
      date: new Date(index),
      value: Math.sin(index),
    }))
}