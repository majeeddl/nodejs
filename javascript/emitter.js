
const { EventEmitter } = require('events')

const firstEmitter = new  EventEmitter();

firstEmitter.on('myEvent', () => console.log('myEvent was emitted'))


class TicketManager extends EventEmitter {
    constructor(supply) {
        super()
        this.supply = supply
    }

    buy(email,price){
        this.supply--;
        this.emit('buy', email, price, Date.now())
    }
}

module.exports = TicketManager




/*

const TicketManager = require("./ticketManager");

const ticketManager = new TicketManager(10);

ticketManager.on("buy", () => {
    console.log("Someone bought a ticket!");
});
*/