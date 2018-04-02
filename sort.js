// 冒泡
function bubble (a) {
  let i, j, l = a.length - 1
  for (i = 0; i < l; i++) {
    for (j = 0; j < l - i; j++) {
      a[j] > a[j+1] && ([a[j], a[j+1]] = [a[j+1], a[j]])
    }
  }
}

// 快速排序
function q (a, start, end) {
  if (start >= end) return
  let temp = a[start], i = start, j = end
  while (i < j) {
    while (a[j] >= temp && i < j) j--
    while (a[i] <= temp && i < j) i++
    i < j && ([a[i], a[j]] = [a[j], a[i]])
  }
  a[start] = a[i]
  a[i] = temp
  q(a, start, i-1)
  q(a, i+1, end)
}
const quick = a => q(a, 0, a.length - 1)

// 简单插入
function insert (a) {
  let i, j, l = a.length, temp
  for (i = 1; i < l; i++) {
    temp = a[i]
    for (j = i - 1; j >= 0, temp < a[j]; j--) {
      a[j+1] = a[j]
    }
    a[j+1] = temp
  }
}

// 二分插入
function bs (a, left, right, temp) {
  if (left > right) return right
  const mid = ~~((left + right) / 2)
  if (temp > a[mid]) {
    return bs(a, mid + 1, right, temp)
  } else {
    return bs(a, left, mid - 1, temp)
  }
}

function binarySort (a) {
  let i, j, k, temp, l = a.length
  for (i = 1; i < a.length; i++) {
    temp = a[i]
    k = bs(a, 0, i - 1, temp)   
    for(j = i; j > k; j--) { 
      a[j] = a[j - 1]
    }
    a[k + 1] = temp
  }
}

// 选择排序
function selectSort(a) {
  let i, j, min, len = a.length
  for (i = 0; i < len - 1 ; i++) {
    min = i
    for (j = i + 1; j < len; j++) {
      a[min] > a[j] && (min = j)
    }
    i !== min && ([a[i], a[min]] = [a[min], a[i]])
  }
}

let xs = Array.from({length: 10}, i => ~~(Math.random() * 100))
let rst = xs.slice().sort((a, b) => a - b)
binarySort(xs)
console.log(rst.toString() === xs.toString())
