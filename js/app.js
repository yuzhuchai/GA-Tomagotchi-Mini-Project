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
	petObj: [],
	currentTimeArr: ["","",""],
	currentTime: "",

	createPet(){
		this.getPetName()
		//name should be a prompt 
		// instatiate our pet class
		const myPet = new Pets(this.petName)
		myPet.initPet()
		this.petObj = myPet
		this.displayTime()
	},

//user can input pet name and use the value to instatiate the pet class
	getPetName(){
		const name = prompt("name you pet here!")
		console.log(name);
		this.petName = name
	},

	feedPet(){
		console.log("do sth to decrease hunger, and animations");
	},

	controlLight(){
		console.log("turn off the light animation and decrease the sleepness");
	},

	playWithPet(){
		console.log("do sth to decreaasee bordom");
	},

	getCurrentTime(){
		// console.log(this);
		this.currentTimeArr[0]=(new Date().getHours())
		this.currentTimeArr[1]=(new Date().getMinutes())
		this.currentTimeArr[2]=(new Date().getSeconds())
		this.currentTime = this.currentTimeArr.join(":")
		$("#time").text(this.currentTime)
	},
//function that sets interval starts every time the pet gets initated. 
	displayTime(){
		const time = setInterval(this.getCurrentTime.bind(this), 1000)
		console.log(this);
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
