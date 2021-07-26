export default {

    // eligibleUnit: 0,
    // rolledBy: null,
    // sixCarrier: 0,
    // score: {},
    // round: 1,
    // isRoundCompleted: false,

    // roll() {
    //     let count = this.randomCount();

    //     if(this.isRoundCompleted) this.resetScore();
    //     if(this.score[this.eligibleUnit] === undefined) 
    //         this.score[this.eligibleUnit] = [];

    //     this.score[this.eligibleUnit].push(count)
    //     this.rolledBy = this.eligibleUnit;

    //     this.isRoundCompleted = false

    //     if(count == 6) {
    //         this.sixCarrier += 1
            
    //         if(this.sixCarrier == 3) {
    //             this.score[this.eligibleUnit] = [];
    //             this.turnNext()
    //         }
    //         return this.score;
    //     }
        
    //     this.sixCarrier = 0;
    //     this.turnNext()
    //     return this.score;
    // },

    // turnNext() {
    //     if(this.eligibleUnit == 3) {
    //         this.eligibleUnit = 0
    //         this.isRoundCompleted = true
    //         return
    //     }
    
    //     this.eligibleUnit++;
    // },

    // resetScore() {
    //     this.score = {}
    //     this.round++ 
    // },

    // randomCount() {
    //     return Math.ceil(Math.random() * 6)
    // }
}