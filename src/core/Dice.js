const _ = require('lodash')


class Dice {

	eligibleUnit = 0;

    sixCarrier = 0;

    score = { 
		0: { used: [], unused: [] }, 
		1: { used: [], unused: [] }, 
		2: { used: [], unused: [] }, 
		3: { used: [], unused: [] }
	};

	round = 1;

	roller = 0

    isRoundCompleted = false;

	roll(mockScore = null) {

		if(this.eligibleUnit != this.roller) {
			return 'Mama pore maro!'
		}

		let count = mockScore || this.randomCount();

		// if(count != 6) {
		if (!this.canBeRolled(count)) {
			return 'Pawn Move required!';
		}
		// }

		
        if(this.isRoundCompleted) 
			this.resetFullScore();

        if(this.score[this.eligibleUnit] === undefined) 
            this.reInitScore()

        this.pushScore(count)

        this.isRoundCompleted = false

        if(count == 6) {
            this.sixCarrier += 1
            
            if(this.sixCarrier == 3) {
                this.reInitScore()
                this.turnNext()
            }
            return this.getScore();
        }
        
        this.sixCarrier = 0;
        this.turnNext()
        return this.getScore();
    }

	setRoller(roller) {
		this.roller = roller;
		return this;
	}

	pushScore(count) {
		this.score[this.eligibleUnit]['unused'].push(count)
	}

	canBeRolled(count) {
		const {used, unused} = this.getScore()

		if(!_.size(used) && !_.size(unused)) {
			return true;
		}

		if(unused.every(e => e === 6)) {
			return true;
		}

		// if(6 in scoresOfRoller) {
		// 	return true;
		// }

		// const isFalse = Object.values(scoresOfRoller).filter(e => e)
		
		// return !!_.size(isFalse)
	}

	getScore() {
		return this.score[this.roller]
	}

	moveableScores() {
		return Object.keys(this.getScore());
	}

	movePawn(count) {
		if (!count in this.getScore()) {
			console.log('DON\'T be bad I\'m your dad!');
			return;
		}

		this.score[this.roller] = {...this.getScore(), ...{[count]: true}}
		return 'Pawn Moved'
	}

    turnNext() {
        if(this.eligibleUnit == 3) {
            this.eligibleUnit = 0
            this.isRoundCompleted = true
            return
        }
    
        this.eligibleUnit++;
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

dice.setRoller(0)

console.log(dice.roll(6));

console.log(dice.roll(6));

console.log(dice.roll(6));


dice.setRoller(1);

console.log(dice.roll(6));

console.log(dice.roll(6));

console.log(dice.roll(2));

console.log(dice.roll(2));


dice.setRoller(2);


console.log(dice.roll(6));

console.log(dice.roll(1));

console.log(dice.roll(3));

console.log(dice.roll(4));


dice.setRoller(3);

console.log(dice.eligibleUnit);

console.log(dice.roll(5));

console.log(dice.roll(6));

console.log(dice.roll(1));

console.log(dice.roll(2));



// console.log(diceOfRoller1.roll(2));

const moveWith = diceOfRoller1.moveableScores()

console.log(moveWith);




