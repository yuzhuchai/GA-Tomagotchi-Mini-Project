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