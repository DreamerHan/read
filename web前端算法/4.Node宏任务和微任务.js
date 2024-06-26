Promise.resolve('3333').then(data => {
  console.log(data)

  Promise.resolve('Promise.resolve.resolve').then(data => {
    console.log(data)
  })

  setTimeout(() => {
    console.log('Promise.resolve setTimeout')
  }, 0)
})


setTimeout(() => {
  console.log(22222)

  Promise.resolve('setTimeout Promise.resolve').then(data => {
    console.log(data)
  })

  setTimeout(() => {
    console.log('setTimeout setTimeout')
  }, 0)
}, 0)


setImmediate(function A() {
  console.log('setImmediate');
  setImmediate(function B() { console.log('setImmediate setImmediate'); });

  process.nextTick(function () {
    console.log('setImmediate process.nextTick')
  })
});


process.nextTick(function A() {
  console.log('process.nextTick');

  process.nextTick(function B() { console.log('process.nextTick process.nextTick'); });

  setImmediate(function () {
    console.log('process.nextTick setImmediate')
  })
});



console.log('111111')