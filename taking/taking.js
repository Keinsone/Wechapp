var app = getApp()
Page({
	data: {
		hidden:false,
		curNav:1,
		curIndex:0,
		cart:[],
		cartTotal:0,
		navList:[
			{
				id:1,
				name:'西式汉堡'
			},
			{
				id:2,
				name:'中华料理'
			},
			{
				id:3,
				name:'日式拉面'
			},
			{
				id:4,
				name:'优惠套餐'
			}
		],
		dishesList:[
			[
				{
					name:"香辣鸡腿汉堡",
					price:38,
					num:1,
					id:1,
					img:'/pages/image/Han.png'
				},
       
				{
					name:"奥尔良鸡腿堡",
					price:58,
					num:1,
					id:22,
          img: '/pages/image/Ar.png'
				},
				{
					name:"吮指原味鸡块",
					price:88,
					num:1,
					id:2,
          img: '/pages/image/Sz.png'
				}
			],
      /*中括号进行区分各个菜点 */
			[
				{
					name:"红烧排骨套餐",
					price:18,
					num:1,
					id:3,
		
				},
				{
					name:"无锡排骨饭",
					price:58,
					num:1,
					id:4,
				
				}
			],
			[
				{
					name:"鲜虾拉面",
					price:18,
					num:1,
					id:5,

				},
				{
					name:"牛肉拉面",
					price:8,
					num:1,
					id:6,
	
				}
			],
			[]
		],
		dishes:[]
	},
	loadingChange () {
		setTimeout(() => {
			this.setData({
				hidden:true
			})
		},500)
	},
	selectNav (event) {
		let id = event.target.dataset.id,
			index = parseInt(event.target.dataset.index);
			self = this;
		this.setData({
			curNav:id,
			curIndex:index
		})
	},
	// 选择菜品
	selectDish (event) {
		let dish = event.currentTarget.dataset.dish;
		let price = event.currentTarget.dataset.price*1;
		let flag = true;
		let	cart = this.data.cart;
		let total = this.data.cartTotal;
		if(cart.length > 0){
			cart.forEach(function(item,index){
				if(item == dish){
					cart.splice(index,1);
					flag = false;
					total -= price;
				}
			})
		}
		if(flag){
			cart.push(dish);
			total += price;
		}
		this.setData({
			cartTotal:total
		})
		this.setStatus(dish)
	},
	setStatus (dishId) {
		let dishes = this.data.dishesList;
		for (let dish of dishes){
			dish.forEach((item) => {
				if(item.id == dishId){
					item.status = !item.status || false
				}
			})
		}
		
		this.setData({
			dishesList:this.data.dishesList
		})
	},
	onLoad () {
		this.loadingChange()
	}
})