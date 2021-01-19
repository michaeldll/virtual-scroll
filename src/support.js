const getSupport = () => {
  if (process.browser) {
    return {
      hasWheelEvent: "onwheel" in document,
      hasMouseWheelEvent: "onmousewheel" in document,
      hasTouch: "ontouchstart" in document,
      hasTouchWin: navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
      hasPointer: !!window.navigator.msPointerEnabled,
      hasKeyDown: "onkeydown" in document,
      isFirefox: navigator.userAgent.indexOf("Firefox") > -1,
    }
  }
}

export default getSupport
