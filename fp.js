const curry = (f, arr = []) => (...args) => (a => a.length === f.length ? f(...a) : curry(f, a))([...arr, ...args])

const compose = (...fs) => x => fs.reduceRight((p, c) => c(p), x)

const memoize = f => {
  let cache = {}
  return (...args) => {
    let key = JSON.stringify(args)
    cache[key] = cache[key] || f.apply(f, ...args)
    return cache[key]
  }
}

const pp = (p, x) => x[p]
const up = x => x.toUpperCase()
const cc = (b, x) => x.concat(b)
const mh = (reg, x) => x.match(reg)
const mp = (f, fun) => fun.map(f)
// props :: s => o => a
const prop = curry(pp)
// concat :: a -> a -> a
const concat = curry(cc)
// match :: reg -> s -> [a]
const match = curry(mh)
// map :: Funtor f => (a -> b) -> f a -> f b
const map = curry(mp)

/* --------------------------------------------------------------------------------- */
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

/* --------------------------------------------------------------------------------- */
const a = Container.of('hello')
const b = Container.of({name: 'woody'})
const ra = a.map(up)
const rb = b.map(prop('name')).map(concat(' teng'))
console.log(ra)
console.log(rb)

/* --------------------------------------------------------------------------------- */
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

/* --------------------------------------------------------------------------------- */
const c = Maybe.of('hello woody')
const d = Maybe.of()
const rc = c.map(match(/e/ig))
const rd = d.map(match(/e/ig))
console.log(rc)
console.log(rd)

// 常用： 函数可能无法成功返回结果
const safeHead = xs => Maybe.of(xs[0])
const getName = compose(map(prop('name')), safeHead, prop('list'))
const re = getName({list: []})
const rf = getName({list: [{name: 'tom', age: 25}]})
console.log(re)
console.log(rf)
/* --------------------------------------------------------------------------------- */


/////////////////////////////////// 斐波那契 //////////////////////////////////////////

/***
1 1 2 3 5 8 13 ...
***/

const fq = (pre, next, n) => n === 0 ? pre : fq(next, pre + next, --n)
const cfq = curry(fq)(1, 1)
cfq(5) // 8


//////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////// 杨辉三角 //////////////////////////////////////////

/***
1
1 1
1 2 1
1 3 3 1
1 4 6 4 1
1 5 10 10 5 1
...
***/

const point = (row, col) => (col === 0 || row === col) ? 1 : (point(row - 1, col - 1) + point(row - 1, col))

const getYH = n => Array.from({length: n}, (v, i) => new Array(i + 1).fill(0)).map((row, i) => row.map((v, j) => point(i, j)))

const a = getYH(12)

for (let i = 0, len = a.length; i< len; i++) {
  console.log(a[i])
}

//////////////////////////////////////////////////////////////////////////////////////
