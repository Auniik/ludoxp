const _ = require('lodash')


class Dice {


	score  = { 
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

	roll(mockScore = null) {

		this.roller = this.eligibleUnit

		let count = mockScore || this.randomCount();

		if (this.isBreakForNext) {
			return 'Pawn Move required!';
		}

		
        if(this.isRoundCompleted) 
			this.resetFullScore();

        if(this.score[this.eligibleUnit] === undefined) 
            this.reInitScore()

        this.pushScore(count)

        this.isRoundCompleted = false

        if(count == 6) {
            this.sixCarrier += 1
            
            if(this.sixCarrier == 3) {
                this.reInitScore();
                this.turnNext();
            }
            return this.getScore();
        }
        
        this.sixCarrier = 0;

        this.turnNext();
        return this.getScore();
    }

	setRoller(roller) {
		this.roller = roller;
		return this;
	}

	pushScore(count) {
		this.score[this.eligibleUnit]['unused'].push(count)
	}

	getScore() {
		return this.score[this.roller]
	}

	moveableScores() {
		//return Object.keys(this.getScore());
	}

	movePawn(count) {
	
		let { used, unused } = this.score[this.roller];

		if (!unused.includes(count)) {
			return 'DON\'T be bad I\'m your dad!';
		}

		const index = unused.findIndex(l => l === count);
		used = [ ...used, ...unused.splice(index, 1) ];

		this.isBreakForNext = !!_.size(unused)

		this.score[this.roller] = { used, unused };

		return 'Pawn Moved'
	}

    turnNext() {
		const {unused} = this.getScore();
		

        if(this.eligibleUnit == 3) {
            this.eligibleUnit = 0;
            this.isRoundCompleted = true;
            return this.isBreakForNext = false;
        }
		
    
        this.eligibleUnit++;
		return this.isBreakForNext = !!_.size(unused);
    }

    resetFullScore() {
        this.score = { 
			0: { used: [], unused: [] }, 
			1: { used: [], unused: [] }, 
			2: { used: [], unused: [] }, 
			3: { used: [], unused: [] }
		}
        this.round++ 
    }

	reInitScore() {
		this.score[this.eligibleUnit] = {used: [], unused: []};
	}

    randomCount() {
        return [0, 6, 5, 4, 3, 2, 1][Math.ceil(Math.random() * 6)]
    }
}
const dice = new Dice()


console.log(dice.roll(1));

console.log(dice.roll(2));

console.log(dice.movePawn(6));
console.log(dice.movePawn(5));



console.log(dice.roll(6));

console.log(dice.eligibleUnit);

console.log(dice.roll(6))


// console.log(dice.roll(6));

console.log(dice.roll(2));


console.log(dice.roll(2));
// console.log(dice.roll(2));
// console.log(dice.roll(3));


// console.log(dice.score);

// console.log(dice.roll(6));

// console.log(dice.roll(1));

// console.log(dice.roll(3));

// console.log(dice.roll(4));



// console.log(dice.roll(5));

// console.log(dice.roll(6));

// console.log(dice.roll(1));

// console.log(dice.roll(2));



// console.log(diceOfRoller1.roll(2));

// const moveWith = diceOfRoller1.moveableScores()

// console.log(moveWith);




