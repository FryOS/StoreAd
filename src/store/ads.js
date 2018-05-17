export default {
  state: {
    ads: [
      {
        title: 'First ad',
        description: 'Hello i am description',
        promo: false,
        imageSrc: 'https://vuetifyjs.com/static/doc-images/carousel/planet.jpg',
        id: '123'
      },
      {
        title: 'Second ad',
        description: 'Hello i am description',
        promo: true,
        imageSrc: 'https://vuetifyjs.com/static/doc-images/carousel/bird.jpg',
        id: '1234'
      },
      {
        title: 'Third ad',
        description: 'Hello i am description',
        promo: true,
        imageSrc: 'https://vuetifyjs.com/static/doc-images/carousel/sky.jpg',
        id: '12345'
      }
    ]
  },
  mutations: {
    createdAd (state, payload) {
      state.ads.push(payload)
    }
  },
  actions: {
    createdAd ({commit}, payload) {
      payload.id = 'qeqewwqe'
      commit('createdAd', payload)
    }
  },
  getters: {
    ads (state) {
      return state.ads
    },
    promoAds (state) {
      return state.ads.filter(ad => {
        return ad.promo
      })
    },
    myAds (state) {
      return state.ads
    },
    adById (state) {
      return adId => {
        return state.ads.find(ad => ad.id === adId)
      }
    }
  }
}
