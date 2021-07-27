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
	roller = 0
    isRoundCompleted = false;
	isBreakForNext = false;

    rollerHasActivePawn = false

	roll(mockScore = null) {
        
        let count = mockScore || this.randomCount();
        this.roller = this.eligibleUnit
        
        
        if(!this.rollerHasActivePawn && count != 6) {
            if(!_.size(this.getScore()?.unused)) {
                this.turnNext();
                return this.getScore();
            }
            if(this.sixCarrier == 3) {
                this.reInitScore();
                this.turnNext();
                return this.getScore()
            }
        }

        if(!this.rollerHasActivePawn) {
            if(this.isBreakForNext && count == 6) {
                this.isBreakForNext = false;
                if(this.sixCarrier == 3) this.sixCarrier = 0;
            }
        }
        
        
		if (this.isBreakForNext) {
			throw Error('Pawn Move required!');
		}
        
        if(this.isRoundCompleted) 
			this.resetFullScore();

            
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

	pushScore(count) {
		this.score[this.eligibleUnit]['unused'].push(count)
	}

	getScore() {
		return this.score[this.roller]
	}

	movePawn(count, pawn) {
		
		let { used, unused } = this.score[this.roller];

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

        if(this.eligibleUnit == 3) {
            this.eligibleUnit = 0;
            this.isRoundCompleted = true;
            return this.isBreakForNext = true;
        }
		
        this.eligibleUnit++;
		this.isBreakForNext = !!_.size(this.getScore()?.unused);
        return;
    }

    resetFullScore() {
        const e = { used: [], unused: [] }
        this.score = { 0: e, 1: e, 2: e, 3: e }
    }

	reInitScore() {
		this.score[this.eligibleUnit] = {used: [], unused: []};
	}

    randomCount() {
        return [0, 6, 5, 4, 3, 2, 1][Math.ceil(Math.random() * 6)]
    }
}