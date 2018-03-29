
const curry = (f, arr = []) => (...args) => (a => a.length === f.length ? f(...a) : curry(f, a))([...arr, ...args])

const compose = (...fs) => x => fs.reduceRight((p, c) => c(p), x)
