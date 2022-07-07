export const state = () => ({
  currentVideoSrc: null,
  currenVideoTime: '00:00'
})

export const mutations = {
  setCurrentVideoSrc(state, src) {
    state.currentVideoSrc = src
  },
  setCurrentVideoTime(state, time) {
    state.currenVideoTime = time
  }
}