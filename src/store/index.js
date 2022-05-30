import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const storeData = {
	state: {
		test: [
			{ id: 1, name: 'haha' }
		],
		check: false
	},
	mutations:{
		TEST_A(state){
			state.check = !state.check
		}
	}
}

const store = new Vuex.Store(storeData)


export default store