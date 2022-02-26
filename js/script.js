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

document.write("<hr>")