
const curry = (f, arr = []) => (...args) => (a => a.length === f.length ? f(...a) : curry(f, a))([...arr, ...args])

const compose = (...fs) => x => fs.reduceRight((p, c) => c(p), x)

///////////////////////////////////////////////////////////////////////////////////
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

///////////////////////////////////////////////////////////////////////////////////
