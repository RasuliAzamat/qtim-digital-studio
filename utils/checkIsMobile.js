// export default function iOS() {
//   return [
//     'iPad Simulator',
//     'iPhone Simulator',
//     'iPod Simulator',
//     'iPad',
//     'iPhone',
//     'iPod'
//   ].includes(navigator.platform)
//   // iPad on iOS 13 detection
//   || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
// }
export default function() {
  const ua = navigator.userAgent;
  return (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua))
};