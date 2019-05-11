# <a name="reference">Abstract</a>

A simple base abstract class to extend, with immutables & type forcing

## <a name="install">Install</a>

`npm i @lcf.vs/abstract`

## <a name="usage">Usage</a>

```js
import Abstract from '@lcf.vs/abstract'

class AbstractApplication extends Abstract {
  constructor (
    constructor = AbstractApplication,
    {router, renderer, server, ...rest},
    ...requirements
  ) {
    super(constructor, {renderer, router, server, ...rest}, ...requirements, {
      renderer: Object,
      router: Object,
      server: Object
    })
  }
}

class Application extends AbstractApplication {
  constructor (router, renderer, server, rest = {}) {
    super(AbstractApplication, {router, renderer, server, ...rest})
  }
}
```

## <a name="api">API</a>

```js
/**
* @param {Abstract=Abstract} constructor
* @param {Object=} immutables
* @param {...Object} requirements
*/
Abstract(constructor = Abstract, immutables = {}, ...requirements)
```

 * `constructor`: The current abstract constructor 
 * `immutables`: The immutable properties
 * `requirements`: The properties's constructors, to validate their types

## <a name="license">License</a>

[MIT](https://github.com/Lcfvs/content-handler/blob/master/licence.md)
