# trailpack-annotations
:package: Add annotation support for Tails.js applications

## Intallation
With yo : 

```
npm install -g yo generator-trails
yo trails:trailpack trailpack-annotations
```

With npm (you will have to create config file manually) :
 
`npm install --save trailpack-annotations`

## Configuration
```js
// config/annotations.js
module.exports = {
  policy: true,//enable policy annotations
  route: true,//enable route annotations
  pathToScan: './api/controllers'//or ./api for hmvc
    
}
```

## Usage

### Route 
A route added with annotation will replace any previous route set under `config/routes.js` (for a same path).
```
module.exports = class DefaultController extends Controller {

  /**
   * Return some info about this application
   * @Route("GET /default/info") or @Route({method: ["GET"], path: "/default/info"}) 
   */
  info (request, reply) {
    reply.json(this.app.services.DefaultService.getApplicationInfo())
  }
}
```

### Policy 
A policy added with annotation will be added to policies set under `config/policies.js`.
```
module.exports = class DefaultController extends Controller {

  /**
   * Return some info about this application
   * @Policy("Default.auth") or @Policy(["Default.auth", "Default.acl"])
   */
  info (request, reply) {
    reply.json(this.app.services.DefaultService.getApplicationInfo())
  }
}
```
