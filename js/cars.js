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
        document.write(`Battery range up to ${this.battery} kilometers <br>`);
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