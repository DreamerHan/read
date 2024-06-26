function throttle(fn, wait) {
  let timer

  const throttleFn = () => {
    let _this = this
    let args = arguments

    if (timer) return
    timer = setTimeout(() => {
      fn.apply(this, ...args)
      timer = null
    }, wait)
  }

  return throttleFn
}

window.write_throttle = throttle