# 函数式编程

> 纯函数

- 返回结果只依赖于它的参数
- 执行过程没有副作用

> functor

```
class Container {
  constructor (x) {
    this.__value = x
  }
  static of (x) {
    return new Container(x)
  }
  map (f) {
    return Container.of(f(this.__value))
  }
}
```

> Maybe

```
class Maybe extends Container {
  static of (x) {
    return new Maybe(x)
  }
  map (f) {
    return [null, undefined].includes(this.__value)
      ? Maybe.of(null)
      : Maybe.of(f(this.__value))
  } 
}
```
