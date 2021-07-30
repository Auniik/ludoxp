import _ from 'lodash'



export default class Dice {

	score = { 
        0: { used: [], unused: [] }, 
        1: { used: [], unused: [] }, 
        2: { used: [], unused: [] }, 
        3: { used: [], unused: [] } 
    }
    
    eligibleUnit = 0;
    sixCarrier = 0;
	round = 1;
	roller = 0
    isRoundCompleted = false;
	isBreakForNext = false;

    rollerHasActivePawn = false

    roll(mockScore = null, test = '') {

        let count = mockScore || this.randomCount();
        this.roller = this.eligibleUnit
        
        if (this.eligibleUnit == 0) {
            if (!this.score[this.roller].unused.some(e => e == 6)) {
                if (count == 6) {
                    this.resetFullScore(false)
                }
            }
            
        } 
       
        // if (this.isBreakForNext) {
        //     if (this.rollerHasActivePawn) {
        //         if (this.sixCarrier != 3) {
        //             this.isPawnMoveRequired = true;
        //             throw Error('Pawn move required!')
        //         }
        //     } else if (this.sixCarrier) {
        //         this.isPawnMoveRequired = true;
        //         throw Error('Pawn move required!')
        //     }
        // }
        if (this.isPawnMoveRequired()) {
            throw Error('Pawn move required!')
        }

        if (count == 6) {
            this.pushScore(count)
            this.sixCarrier = this.score[this.roller].unused.filter(e => e === 6).length
        }
        
        // Turn next without remarking
    
        // if six carrier has 3 item applicable for active inactive roller
        
        if (this.sixCarrier === 3) {
			this.reInitScore()
			this.sixCarrier = 0;
			this.turnNext();
			this.isBreakForNext = false;
            return count;
        }
        

        // If Roller doesn't have any active pawn  
        if (!this.rollerHasActivePawn) {
            
            
            
            // Determine empty carrier and count is not six move to next roller
            if (!this.sixCarrier && count != 6) {
                this.reInitScore();
                this.turnNext();
                return count;
            }
            else {
                this.sixCarrier = this.score[this.roller].unused.filter(e => e === 6).length;
            }
            

        }
        

         // push score
        if (count != 6) {
            this.pushScore(count)
            this.isBreakForNext = true;
            this.turnNext()
            return count
        }
        
        
    }

    isPawnMoveRequired() {

        // if (this.isBreakForNext) {
        //     if (this.rollerHasActivePawn) {
        //         if (this.sixCarrier != 3) {
        //             this.isPawnMoveRequired = true;
        //             throw Error('Pawn move required!')
        //         }
        //     } else if (this.sixCarrier) {
        //         this.isPawnMoveRequired = true;
        //         throw Error('Pawn move required!')
        //     }
        // }

        if (this.isBreakForNext) {
            if (this.rollerHasActivePawn) {
                if (this.sixCarrier != 3) {
                    return true;
                }
            } else if (this.sixCarrier) {
                return true;
            }
        }
        return false;
    }

    pushScore(count) {
        
        this.score[this.eligibleUnit].unused = [...this.score[this.eligibleUnit].unused, count]
        
	}

	getScore() {
		return this.score[this.roller]
	}

	movePawn(count, pawn) {
		
        let { used, unused } = this.score[this.roller];
        if (count === 6) {
            this.sixCarrier--;
        }
        
		if (!unused.includes(count)) {
			this.isBreakForNext = true;
			throw Error('DON\'T be bad I\'m your dad!');
		}
		

		const index = unused.findIndex(l => l === count);
		used = [ ...used, ...unused.splice(index, 1) ];

		this.isBreakForNext = !!_.size(unused)

        const { position } = pawn.move(count)

        if(! position ) {
            used = unused = [];
        }

		this.score[this.roller] = { used, unused };
        

		return 'Pawn Moved'
	}


    turnNext() {

        if (this.eligibleUnit == 3) {
            this.eligibleUnit = 0;
            this.isRoundCompleted = true;
            return this.isBreakForNext = true;
        }
		this.isRoundCompleted = false;
        this.eligibleUnit++;
        
		this.isBreakForNext = !!_.size(this.getScore()?.unused);
        return;
    }

    resetFullScore(isRountIncrement = true) {
        this.score = { 
            0: { used: [], unused: [] }, 
            1: { used: [], unused: [] }, 
            2: { used: [], unused: [] }, 
            3: { used: [], unused: [] } 
        }
        if(isRountIncrement)
            this.round++;
    }

	reInitScore() {
		this.score[this.eligibleUnit] = {used: [], unused: []};
	}

    randomCount() {
        return [0, 6, 5, 4, 3, 2, 1][Math.ceil(Math.random() * 6)]
    }
}

export const IDice = Dice;