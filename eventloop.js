setImmediate(n => {
  console.log('setImmediate', n)
}, 'hello')

setTimeout(() => {
  console.log('setTimeout')
})

new Promise((res, rej) => {
  console.log('promise', 1)
  res('promise resolve data')
  console.log('promise', 2)
}).then(data => {
  console.log(data)
})

const init = async () => {
  console.log('async', 1)
  await console.log('async', 2)
  console.log('async', 3)
}
init()

console.log('⬆ sync----------------async ⬇')
