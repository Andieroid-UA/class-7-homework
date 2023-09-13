/*
function createObservable() {
//Need commas because these are objects
   return {
    subscribers: [],

    subscribe(f) {
        this.subscribers.push(f);
    },

    unsubscribe(f) {
        this.subscribers = this.subscribers.filter(item => item !== f);
    },

    broadcast(data) {
        for(let i=0; i< this.subscribers.length; i++) {
            this.subscribers[i](data);
        }
    },
  };
}

const observable = createObservable();

const f = (data) => {
    console.log("Callback was executed with data", data);
};

observable.subscribe(f);

observable.broadcast("Hello from the observable!");
*/




/*
class Observable {
    constructor() {
        this.observers = [];
    }

    subscribe(f) {
        this.subscribers.push(f);
    }

    unsubscribe(f) {
        this.subscribers = this.subscribers.filter(item => item !== f);
    }

    broadcast(data) {
        for(let i=0; i< this.subscribers.length; i++) {
            this.subscribers[i](data);
        }
    }
}

const observable = new Observable();

const f = (data) => {
    console.log("Callback was executed with data", data);
};

observable.subscribe(f);

observable.broadcast("Hello from the observable!");
*/