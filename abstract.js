function error (message) {
  throw new TypeError(message)
}

function has ([name, type]) {
  const constructor = this.constructor

  if (!this.hasOwnProperty(name)) {
    error(`Missing required member ${name} of class "${constructor.name}"`)
  }

  if (!isPrototypeOf(type, this[name])) {
    error(`Member ${name} of class "${constructor.name}" must be a ${type.name}`)
  }
}

function all (requirements) {
  Object.entries(requirements).forEach(has, this)
}

function isPrototypeOf (constructor, value) {
  return constructor.prototype.isPrototypeOf(value) && !Number.isNaN(value)
}

function set ([name, value]) {
  Object.defineProperty(this, name, {
    enumerable: true,
    value
  })
}

export default class Abstract {
  constructor (constructor = Abstract, immutables = {}, ...requirements) {
    const name = this.constructor.name

    if (this.constructor === constructor) {
      error(`Abstract class "${name}" cannot be instantiated directly`)
    }

    if (!isPrototypeOf(constructor, this)) {
      error(`Illegal invocation of abstract class "${name}"`)
    }

    Object.entries(immutables).forEach(set, this)
    requirements.slice().reverse().forEach(all, this)
  }
}
