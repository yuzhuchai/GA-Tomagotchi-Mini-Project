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
	currentTimeArr: [],
	currentTime: "",

	createPet(){
		this.getPetName()
		//name should be a prompt 
		// instatiate our pet class
		const myPet = new Pets(this.petName)
		myPet.initPet()
		this.petObj = myPet
	},

//user can input pet name and use the value to instatiate the pet class
	getPetName(){
		const name = prompt("name you pet here!")
		console.log(name);
		this.petName = name
	},

	feedPet(){

	},

	controlLight(){

	},

	playWithPet(){

	},

	getCurrentTime(){
		this.currentTimeArr.push(new Date().getHours())
		this.currentTimeArr.push(new Date().getMinutes())
		this.currentTimeArr.push(new Date().getSeconds())
		this.currentTime = this.currentTimeArr.join(":")
		$("#time").text(this.currentTime)
	},
//function that sets interval starts every time the pet gets initated. 
	setInterval(){

	}

}

game.createPet()

//event listener 
//create buttons and check if it works 
$("#buttoncontainer").on("click",(e) => {
	if(e.target.id === "feed"){
		console.log("do sth to decrease hunger, and animations");
	}else if(e.target.id === "light"){
		console.log("turn off the light animation and decrease the sleepness");
	}else if(e.target.id === "play"){
		console.log("do sth to decreaasee bordom");
	}
})
