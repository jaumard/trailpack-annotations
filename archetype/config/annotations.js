/**
 * Annotations Configuration
 * (app.config.annotations)
 *
 * Configure route, policy annotations, add custom annotation
 *
 * @see {@link https://github.com/jaumard/trailpack-annotations}
 */
module.exports = {
  policy: true,//Enable @Policy
  route: true,//Enable @Route
  pathToScan: './api/controllers',//Where to search controllers
  customAnnotations: {}//Custom annotations here
}
