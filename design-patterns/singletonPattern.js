

// The singleton pattern is a way to create a single object that have shared amongst a bunch of different parts of your application

class Fancylogger{
    constructor(){
        if(Fancylogger.instance == null){
            this.logs = []
            Fancylogger.instace = this
        }
        return Fancylogger.instance
    }

    log(message){
        this.logs.push(message)
        console.log(`FANCY ; ${message}`)
    }

    numberLogs(){
        return this.logs.length
    }

    printLogCount(){
        console.log(`${this.logs.length} Logs`)
    }
}

const logger = new Fancylogger()
Object.freeze(logger)


module.exports = logger