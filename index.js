

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
  var length = points.length
  var result = 0
  points.map(point => {
    result += Math.pow(point.x - point.y, length)
  })
  return Math.pow(result, 1 / length)
}
