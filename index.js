

/**
 * Calculate euclidean p norm distance between points
 * in an euclidean space.
 *
 * The norm is given by the number or arguments. A point
 * is given with its x and y coordinates.
 *
 * @return {Number}
 */

module.exports = function(...points) {
  var result = 0
  points.map(point => {
    result += Math.pow(point.x - point.y, 2)
  })
  return Math.pow(result, 1 / points.length)
}
