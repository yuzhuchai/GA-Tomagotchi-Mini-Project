//game object 

//initiate the pet, in the game object. 
//start game by naming the pet with prompt and initiate the pet. 
//buttons feed, light on and off, play each should update the pet. 
//pet died if any of the scale hits 10 
//increase the age. 
//morph the pet at certain age.


//user interactivity with the game
const game = {
	//is the time the player object? 
	petName: "",
	petObj: {},
	currentTimeArr: ["","",""],
	currentTime: "",
	second: 0,
	minute: 0,
	hour:0,
	timer:"",
	petAlive: true,
	interval: null,

	createPet(){
		this.getPetName()
		//name should be a prompt 
		// instatiate our pet class
		const myPet = new Pets(this.petName)
		myPet.initPet()
		this.petObj = myPet
		this.haveInterval()
	},

//user can input pet name and use the value to instatiate the pet class
	getPetName(){
		const name = prompt("name you pet here!")
		console.log(name);
		this.petName = name
	},

	increaseHunger(){
		// console.log(this.currentTimeArr[2]);
		if(this.second%10 === 0 && this.petAlive === true){
			this.petObj.hunger += 1
			$("#hunger").text(this.petObj.hunger)
		}
		if(this.petObj.hunger === 5) {
			$("#message").text(`i'm hungry feed meeee!!!!`)
		}
	},

	feedPet(){
		this.petObj.hunger -= 1
		$("#hunger").text(this.petObj.hunger)
		$("#message").text(`Thank U`)
		// console.log("do sth to decrease hunger, and animations");
	},

	increaseSleepiness(){
		if(this.second%3 === 0 && this.petAlive === true){
			this.petObj.sleepiness += 1
			$("#sleep").text(this.petObj.sleepiness)
		}
		if(this.petObj.sleepiness === 8) {
			$("#message").text(`sleepy~~ lights off plz`)
		}
	},

	controlLight(){
		this.petObj.sleepiness -= 5
		$("#sleep").text(this.petObj.sleepiness)
		$("#message").text(`THX! ZZZzzzz`)

		// console.log("turn off the light animation and decrease the sleepness");
	},

	increaseBordem(){
		if(this.second%2 === 0 && this.petAlive === true){
			this.petObj.boredom += 1
			$("#boredom").text(this.petObj.boredom)
		}
		if(this.petObj.boredom === 7){
			$("img").attr("src","pic/bored.png")
			$("#message").text(`come play`)
		} 
	},

	playWithPet(){
		this.petObj.boredom -= 1
		$("#boredom").text(this.petObj.boredom)
		console.log("do sth to decreaasee bordom");
	},

	increaseAge(){
		if(this.second%60 === 0 && this.petAlive === true){
			this.petObj.age += 1
			$("#age").text(this.petObj.age)
		}
		this.morphPet()
	},

	morphPet(){
		// console.log(this);
		if(this.petObj.age === 4){
			$("img").attr("src","pic/petage.png")
			$("#message").text(`hey i'm ${this.petObj.age} years old!`)
		}
	},

	killPet(){
		if (this.petObj.hunger === 10 || this.petObj.sleepiness === 10 || this.petObj.boredom === 10){
			// console.log(this.petObj.sleepiness);
			// console.log($("#sleep").text());
			$("#message").text(`Alas, poor ${this.petName}`);
			$("img").attr("src","pic/alas.png")
			alert (`your tomagotchi died.`)
			this.petAlive = false 
		}

	},


	animatePet(){
		if(this.second%2 === 0 && this.petAlive === true){
			$("#pet").css({
				"width":"220px",
				"height":"220px"
			})
	    }else {
	    	$("#pet").css({
				"width":"250px",
				"height":"250px"
			})
	    }
	},
//this is a timer function by using the current time. 

/*
	getCurrentTime(){
		// console.log(this);
		this.currentTimeArr[0]=(new Date().getHours())
		this.currentTimeArr[1]=(new Date().getMinutes())
		this.currentTimeArr[2]=(new Date().getSeconds())
		this.currentTime = this.currentTimeArr.join(":")
		$("#time").text(this.currentTime)
	},
*/

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
		this.timer = `${h}:${m}:${s}`
		$("#time").text(this.timer)
	},

	upDateChanges(){
		this.killPet()
		this.stop()
		this.getTime()
		this.displaytime()
		this.increaseHunger()
		this.increaseAge()
		this.increaseBordem()
		this.increaseSleepiness()
		this.animatePet()
	},

	stop(){
		if(this.petAlive === false){
			clearInterval(this.interval)
		}
	},

//function that sets interval starts every time the pet gets initated. 
	haveInterval(){
		this.interval = setInterval(this.upDateChanges.bind(this), 1000)
		// const time = setInterval(this.getCurrentTime.bind(this), 1000)
		// console.log(this);
		// console.log(timee);
		}
	}


game.createPet()

//event listener 
//create buttons and check if it works 
$("#buttoncontainer").on("click",(e) => {
	if(e.target.id === "feed"){
		game.feedPet()
	}else if(e.target.id === "light"){
		game.controlLight()
	}else if(e.target.id === "play"){
		game.playWithPet()
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