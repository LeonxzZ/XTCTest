var app = new Vue({
	el:'#app',
	data:{
		message : 'Hello, Vue!'
	}
});

var app5 = new Vue({
	el:'#app-5',
	data:{
		message5 : 'Hello, Vue!'
	}
});

var app2 = new Vue({
	el:'#app2',
	data:{
		message2 : '页面加载于' + new Date().toLocaleString()
	}
});

var app3 = new Vue({
	el:'#app-3',
	data:{
		todos:[
			{text:'study JavaScript'},
			{text:'study Vue'},
			{text:'Build a fatastic project'}
		]
	}
})

var app4=new Vue({
	el:'#app-4',
	data:{
		message2:'Hello Vue.js!'
	},
	methods:{
		reverseMessage:function(){
			this.message2=this.message2.split('').reverse().join('')
		}
	}
})