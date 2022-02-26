// Japanese Restaurant "Vassabi"

class Restaurant {
    constructor(name, cuisineType, served=0) {
        this.name = name;
        this.cuisineType = cuisineType;
        this.served = served;
    }
  
    showInfo() {
        document.write(` Our Restaurant is: ${this.name}<br> Cuisine Type is: ${this.cuisineType}. <br>`);
    }
    setStatus(status) {
        this.isOpen = status;
    }

    serve() {
        return this.served++;
    }

    setServed(numberOfServed){
       document.write(`Total served: ${this.served += numberOfServed}. <br>`);
    }

    isOpen() {
        let currentHour = new Date().getHours();
        if (currentHour > 9 && currentHour < 22) {
            document.write(`Our Restaurant ${this.name} is open. <br>` );
        } else {
            document.write(`Our Restaurant ${this.name} is closed. <br>`);
        }
    }

    showTotalServed(){
        document.write(`Restaurant customers: ${this.served}<br>`);
    }
}

const vassabi = new Restaurant('Vassabi', 'Japanese');
vassabi.showInfo();
vassabi.isOpen();
vassabi.setStatus(false);
vassabi.serve();
vassabi.showTotalServed();
vassabi.setServed(15);

document.write("<hr>");



// Info about Cars

class Cars {
    constructor(model, year, power, color) {
      this.model = model;
      this.year = year;
      this.power = power + "hp";
      this.color = color;
    }

  
    showInfo() {
        document.write(`Model is: ${this.model}<br> Year of issue is: ${this.year}<br> Power is: ${this.power}<br> Color is: ${this.color}<br>`)
    }
}

class ElectroCars extends Cars {
    constructor(model, year, power, color, battery) {
      super(model, year, power, color);
      this.battery = battery;
    }

    showInfo() {
        super.showInfo();
        document.write(`Battery range up to: ${this.battery} kilometers <br>`);
    }

    promote() {
        document.write(`Buy ${this.model} and safe the planet!`)
    }

  }
  
const bmw = new Cars('BMW X6', 2019, 617, 'Black <br> <hr>');
bmw.showInfo();

const tesla = new ElectroCars("Tesla Model 3", 2022, 283, 'Silver', 593);
tesla.showInfo();
tesla.promote();