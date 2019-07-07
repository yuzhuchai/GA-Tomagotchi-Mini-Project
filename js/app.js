const myGame = {
	petName: null,
	time: "",
	pet: null,
	interval: null,
	second: 0,
	minute: 0,
	hour:0,
	timerdisplay:"",
	lightOn: true,


	createPet(name){
		this.petName = name 
		$("#inputname").hide()
		this.pet = new Pet(name)
		this.pet.initPet()
		this.timer()
	},

	timer(){
		this.interval = setInterval(() => {
			this.pet.killPet()
			this.stop()
			this.getTime()
			this.displaytime()
			// this.pet.morphPet()
			//your functions here 
			if(this.second%2 === 0 && this.lightOn === true){
				$("#petdiv").css({"width":"250px","height":"150px","margin-top":"68px",})
				console.log($("#petpic").css("margin-bottom"));
				$("#playpic").css("margin-left","-34px")
			}else{
				$("#petdiv").css({"width":"250px","height":"250px","margin-top":"18px"})
				$("#playpic").css("margin-left","34px")
			}

			if(this.second%6 === 0 && this.lightOn === true){
				this.pet.getHungrier()
			} 
			if(this.second%5 === 0 && this.lightOn === true){
				this.pet.becomeBored()
			}
			if(this.second%19=== 0){
				this.pet.getOlder()
			}
			if(this.second%7 === 0 && this.lightOn === true){
				this.pet.getSleeplier()
			}else if(this.lightOn === false && this.second%5 === 0 && this.pet.sleepiness > 1){
				this.pet.wakeUp()
			}
		},1000)
	},

	getTime(){
		this.second ++
		if(this.second === 60){
			this.second = 0
			this.minute += 1
		}
		if(this.minute === 60){
			this.minute =0
			this.hour += 1
		}
	},

	displaytime(){
		let h = ('0'+this.hour).slice(-2)
		let m = ('0'+this.minute).slice(-2)
		let s = ('0'+this.second).slice(-2)
		this.timerdisplay = `${h}:${m}:${s}`
		$("#time").text(this.timerdisplay)
	},

	feedPet(){
		if(this.pet.hunger > 3){
			this.pet.hunger -= 1
			$("#hunger").text(this.pet.hunger)
			$("#message").text(`Thank U yumm`)
			$("#feeddiv").css({"display":"block", "z-index":"1"})
			$("#feeddiv").fadeOut(10000)
		} else {
			$("#message").text(`not hungry yet!`)
		}
	},

	playWithPet(){
		if(this.pet.boredom > 1){
			this.pet.boredom -= 1
			$("#boredom").text(this.pet.boredom)
			$("#message").text("hi friend")
			$("#petdiv").hide()
			$("#playwithpet").css({"display":"block", "z-index":"1"})
			$("#playwithpet").delay(10000).hide(1)
			$("#petdiv").delay(10000).show(1)
			$("#boreddiv").hide()
		}
	},

	controlLight(){
		if (this.lightOn === true){
			if(this.pet.sleepiness > 5){
				this.lightOn = false 
				$("#message").text("gn! ZZZZZzzzz")
				$("#lighttext").text("on")
				$("#lightOffdiv").css({"display":"block","z-index":"1"})
			}else {
				this.lightOn = true 
				$("#lighttext").text("off")
				$("#message").text("not sleepy yet!")
				$("#lightOffdiv").css("display","none")
				$("#petdiv").css("z-index","1")
			}
		}else if(this.lightOn === false){
			if(this.pet.sleepiness <= 5){
				this.lightOn = true
				// console.log(this.lightOn);
				$("#message").text("morning!")
				$("#lighttext").text("off")
				$("#lightOffdiv").css("display","none")
				$("#petdiv").css("z-index","1")
			} else {
				this.lightOn = false 
				$("#lighttext").text("on")
				$("#message").text("need more sleep!")
				$("#lightOffdiv").css({"display":"block","z-index":"1"})
			}
		}
	},

	stop(){
		if(this.pet.alive === false){
			clearInterval(this.interval)
		}
	},

}





$("button").on("click",() => {
	myGame.createPet($("input").val())
	console.log(myGame.pet);
})

$("#buttoncontainer").on("click",(e) => {
	if(e.target.id === "feed"){
		myGame.feedPet()
	}else if(e.target.id === "light"){
		myGame.controlLight()
	}else if(e.target.id === "play"){
		myGame.playWithPet()
	}
})


$("#buttoncontainer").on("mousedown",(e) => {
	if(e.target.className === "buttons"){
		// console.log(e.target);
		$(e.target).css("background-color","rgb(0,255,0)")
	}
})


$("#buttoncontainer").on("mouseup",(e) => {
	if(e.target.className === "buttons"){
		// console.log(e.target);
		$(e.target).css("background-color","black")
	}
})



//instead of hide and show, use z-index and relative position in the petcontainer box. 



