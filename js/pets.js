//class

// each pet should have hunger(1-10), sleepiness(1-10), boredom(1-10), age, name, 
//the increase function should be in object. 

class Pets {
	constructor(name){
		this.name = name 
		this.age = 1
		this.sleepiness = 1
		this.boredom = 1
		this.hunger = 1
	}
//those functions are not controlled by the users, thus should be created in the pet class
	initPet(){
		//attach the pet to the screen, 
		// have all the functions below 
		//display the div 
		$("#pet").css("display","block")
		$("#message").text(`hi, i'm ${this.name}`)
		$("#age").text(this.age)
		$("#hunger").text(this.hunger)
		$("#boredom").text(this.boredom)
		$("#sleep").text(this.sleepiness)
	}

	increaseHunger(){
		//function should attach this to the html 
		//function should increase its hunger 
	}

	increaseSleepiness(){
		// attach stuff to the screen 
		//increase 
	}

	increaseAge(){
		//morph the age ? 
	}

	increaseBoredom(){

	}

}