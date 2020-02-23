import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      id: 1,
      name: 'ujang'
    },
    target: [
      {
        id: 1,
        day: 7,
        page: 100
      }
    ],
    implementTarget: [
      [
        {
          id: 1,
          targetId: 1,
          day: 1,
          page: 20
        },
        {
          id: 2,
          targetId: 1,
          day: 2,
          page: 10
        }
      ]
    ],
    completion: [
      {
        text: 'Keep going, you just past 25% of your completion target to read!',
        percent: 25
      },
      {
        text: 'Whoa, just a half of your target being done!',
        percent: 50
      },
      {
        text: "Hey dude, you're almost your reading target. Just a bit of reading!",
        percent: 75
      },
      {
        text: "Congratulations! You've completed your reading target",
        percent: 100
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
