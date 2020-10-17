import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false;
Vue.filter('formatDate', (time) => {
	const nTime = new Date(time);
	var year = nTime.getFullYear();
	const month = nTime.getMonth();
	const date = nTime.getDate();
	return year + '-' + month + '-' + date;
})

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
