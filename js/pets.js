//class

// each pet should have hunger(1-10), sleepiness(1-10), boredom(1-10), age, name, 
//the increase function should be in object. 

class Pet {
	constructor(name){
		this.name = name 
		this.age = 1
		this.sleepiness = 1
		this.boredom = 1
		this.hunger = 1
		this.alive = true
	}
//those functions are not controlled by the users, thus should be created in the pet class
	initPet(){
		//attach the pet to the screen, 
		// have all the functions below 
		//display the div 
		$("#petdiv").css("display","block")
		$("#message").text(`hi, i'm ${this.name}`)
		$("#age").text(this.age)
		$("#hunger").text(this.hunger)
		$("#boredom").text(this.boredom)
		$("#sleep").text(this.sleepiness)
	}

	getHungrier(){
		this.hunger += 1
		$("#hunger").text(this.hunger)
		if(this.hunger === 5) {
			$("#message").text(`i'm hungry feed meeee!!!!`)
		}
	}

	becomeBored(){
		this.boredom += 1
		$("#boredom").text(this.boredom)
		if(this.boredom === 8) {
			$("#message").text(`come play`)
		}	
	}

	getOlder(){
		this.age += 1
		$("#age").text(this.age)
		$("#message").text(`i'm ${this.age} years old!`)
		this.morphPet()
	}

	morphPet(){ 
		// console.log(this);
		if(this.age === 4){
			$("#petpic").attr("src","pic/petage.png")
			$("#message").text(`new look!`)
		}
	}

	getSleeplier(){
		this.sleepiness += 1
		$("#sleep").text(this.sleepiness)
		if(this.sleepiness === 8){
			$("#message").text(`sleepy!!`)
		}	
	}

	wakeUp(){
		this.sleepiness -= 1 
		$("#sleep").text(this.sleepiness)
	}


	killPet(){
		if (this.hunger === 10 || this.sleepiness === 10 || this.boredom === 10){
			// console.log(this.petObj.sleepiness);
			// console.log($("#sleep").text());
			$("#message").text(`Alas, poor ${this.name}`);
			$("#petpic").attr("src","pic/alas.png")
			alert (`your tomagotchi died.`)
			this.alive = false 
		}
	}

}