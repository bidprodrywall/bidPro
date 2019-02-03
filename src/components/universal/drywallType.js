export class DrywallType {//ecmascript 6 class for drywall types. my thought is eventualy we can allow people to add sizes on the fly
    amount = 0;//the count of how many boards
    incrementAmount = 1;//standerd amount to increment, why add this and not use one; because what if by default user wants to count by fives.
    cost = 0;// not currently used, but possibly in the futere
    constructor(name, value) {//for instantiating a new instance of class
        this.name = name;//display value
        this.value = value;//total footage by board
    }
    getTotal = () => {//this function will return the total board footage for this size
        return this.value * this.amount;
    }
    // @params: inc: number/null will adjust how much the increase function increments, possibly not necessary
    increase = (inc) => {//will increase amount of this size
        if (!inc) {//if inc is not provided, use base incrementAmount
            inc = this.incrementAmount;
        }
        this.amount = parseInt(this.amount) + parseInt(inc);//this adds
    }
    // @params: inc: number/null = will adjust how much to change size
    decrease = (inc) => {
        if (!inc) {
            inc = this.incrementAmount;
        }
        if (this.amount !== 0) {
            this.amount = parseInt(this.amount) - parseInt(inc);//this subtracts
          }
    }
}