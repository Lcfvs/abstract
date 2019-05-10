# <a name="reference">Abstract</a>

A simple base abstract class to extend, with immutables & type forcing

## <a name="install">Install</a>

`npm i @lcf.vs/abstract`

## <a name="usage">Usage</a>

```js
import Abstract from '@lcf.vs/abstract'

class AbstractApplication extends Abstract {
  constructor (router, renderer, server) {
    super(AbstractApplication, {renderer, router, server}, {
      renderer: Object,
      router: Object,
      server: Object
    })
  }
}

class Application extends AbstractApplication {
}
```

## <a name="api">API</a>

```js
Abstract(constructor = Abstract, immutables = {}, requirements = {})
```

 * `constructor`: The current abstract constructor 
 * `immutables`: The immutable properties
 * `requirements`: The properties's constructors, to validate their types

## <a name="license">License</a>

[MIT](https://github.com/Lcfvs/content-handler/blob/master/licence.md)
