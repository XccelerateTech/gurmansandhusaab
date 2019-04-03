const EventEmitter = require('events');

class Timer extends EventEmitter{
    constructor(){
        super();
        this.seconds=0;
        this.counter=0;
        this.interval;
        this.time=0
    
            this.on('start' , (seconds) => {
                if(seconds != undefined){
                    this.seconds=seconds
                }

                
        this.interval = setInterval(emitInterval,1000)
        const that = this;

        function emitInterval()
        {
            let resttime = that.seconds - that.time;

            if (resttime === 0){
                clearInterval(that.interval);
            }
            that.emit('tick', resttime)
            that.time += 1;
        }
    });

    this.on('stop' ,() => {
        clearInterval(this.interval);
        this.seconds=0;
        this.counter=0;
    });
    this.on('pause', ()=>{
        clearInterval(this.interval);
    })
}
}

module.exports = Timer;
