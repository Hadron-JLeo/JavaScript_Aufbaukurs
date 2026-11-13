class Logistics {

    createTransport() {};
}


class ShipLogistics extends Logistics {

    static createTransport() {
        console.log("Es wird ein Schiff erstellt");
        return new ShipLogistics();
    };


}

class CarLogistics extends Logistics {

    static createTransport() {
        console.log("Es wird ein Auto erstellt");
        return new CarLogistics();
    };
}


function doDelivery(deliverer){
    vehicle = deliverer.createTransport();
}

doDelivery(ShipLogistics);
doDelivery(CarLogistics);


