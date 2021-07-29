const _ = require('lodash')

class Dice {

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
        
        if (this.isBreakForNext && this.rollerHasActivePawn) {
            throw Error('Pawn move required!')
        }

        let count = mockScore || this.randomCount();
        this.roller = this.eligibleUnit


        if (count == 6) {
            this.pushScore(count)
            this.sixCarrier = this.score[this.roller].unused
                .filter(e => e === 6).length
            
            
        } 
    
        
        // Turn next without remarking
    
        // if six carrier has 3 item applicable for active inactive roller
        
        if (this.sixCarrier === 3) {
            this.reInitScore()
            this.turnNext();
            return;
        }

      

       
        
        // If Roller doesn't have any active pawn  
        if (!this.rollerHasActivePawn) {
            // Determine empty carrier and count is not six move to next roller
            if (!this.sixCarrier && count != 6) {
                this.reInitScore();
                
                this.turnNext();
                
                return;
            }
            else {
                this.sixCarrier = this.score[this.roller].unused
                    .filter(e => e === 6).length
            }

        }

         // push score
        if (count != 6) {
            this.pushScore(count)
            return this.turnNext()
        }
        
    
    }

    pushScore(count) {
        const { unused } = this.score[this.eligibleUnit];
        this.score[this.eligibleUnit].unused = [...unused, count]
        
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
            this.resetFullScore(true)
            return this.isBreakForNext = true;
        }
		this.isRoundCompleted = false;
        this.eligibleUnit++;
        
		this.isBreakForNext = !!_.size(this.getScore()?.unused);
        return;
    }

    resetFullScore(isRountIncrement = true) {
        const e = { used: [], unused: [] }
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


class Pawn {
    
    isActive = false;
    isInSafeZone = false;
    position = 0;

    constructor(roller, id) {
        this.color = ['red', 'green', 'blue', 'yellow'][roller];
        this.id = id;
    }

    move(count) {
        if (!this.isActive) {
            this.position = count == 6 ? 1 : 0;
            this.isActive = !!(this.position && true);
            this.isInSafeZone = !!(this.position && true);
            return this.query();
        }

        this.position += count;
        this.isActive = true;
        this.isInSafeZone = [1, 8, 13, 21, 26, 34, 39, 48, 52].includes(this.position);
        return this.query();
    }
    
    query() {
        return {
            isActive: this.isActive,
            isSafe: this.isInSafeZone,
            position: this.position,
        }
    }
}

class Board {

    constructor(dice) {
        this.dice =  dice;

        this.rollers = [
            ...[0, 1, 2, 3].map(index => [0, 1, 2, 3].map(i => new Pawn(index, i)))
        ];
    }

    safe = [ 1, 8, 13, 21, 26, 34, 39, 48, 52 ];

    currentRoller = 0;

    rollerHasActivePawn() {
        return this.rollers[this.currentRoller].some(pawn => pawn.isActive);
    }

    rollerDoesntHaveActivePawn() {
        return !this.rollerHasActivePawn();
    }

    allPawnIsActive() {
        return this.rollers[this.currentRoller].every(pawn => pawn.isActive);
    }

    allPawnIsNotActive() {
        return this.rollers[this.currentRoller].every(pawn => !pawn.isActive);
    }

    rollTheDice(mock, test) {
        this.currentRoller = this.dice.eligibleUnit;
        this.dice.rollerHasActivePawn = this.rollerHasActivePawn();
        this.dice.roll(mock, test)
        
        return this.dice.getScore()
        
    }

    moveThePawn(count, pawnId) {
        const pawn = this.rollers[this.currentRoller].find(p => p.id === pawnId)

        this.dice.movePawn(count, pawn);

        return pawn
    }

    eligibleRoller() {
        return this.dice.eligibleUnit;
    }
}

const board = new Board(new Dice);

console.log(board.eligibleRoller());

// 0
console.log(board.rollTheDice(1));
console.log(board.eligibleRoller());

// 1
console.log(board.rollTheDice(6));
console.log(board.rollTheDice(5));

console.log(board.moveThePawn(6, 0));
console.log(board.moveThePawn(5, 0));

// 2
console.log(board.eligibleRoller());

console.log(board.rollTheDice(5));
console.log(board.eligibleRoller());

console.log(board.rollTheDice(6));
console.log(board.rollTheDice(6));
console.log(board.rollTheDice(5));

console.log(board.dice.score); 
console.log(board.eligibleRoller());


// console.log(board.rollTheDice(6)); 
// console.log(board.rollTheDice(6));
// console.log(board.rollTheDice(5));

// console.log(board.moveThePawn(6, 0));
// console.log(board.moveThePawn(6, 0));
// console.log(board.moveThePawn(5, 0));

console.log(board.eligibleRoller());
console.log(board.rollTheDice(6)); 
console.log(board.rollTheDice(3));
console.log(board.dice.score); 


// console.log(board.moveThePawn(6, 1));
// console.log(board.moveThePawn(5, 1));

// console.log(board.eligibleRoller());
// console.log(board.dice);

// console.log(board.rollTheDice(3, 'test'));

// console.log(board.dice.score); 
// console.log(board.rollTheDice(6)); 
// console.log(board.rollTheDice(6));


// console.log(board.rollTheDice(6)); 
// console.log(board.rollTheDice(6)); 
