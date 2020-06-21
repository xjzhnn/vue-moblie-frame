// index.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
	  activeTab:0
  },
  mutations:{
	  setActiveTab(state,val){
		  state.activeTab=val
	  }
  }
})