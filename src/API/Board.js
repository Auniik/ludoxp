import Dice from './Dice'
import Pawn from './Pawn'


class Board {

    constructor(dice) {
        this.dice =  dice;

        this.rollers = [
            ...[0, 1, 2, 3].map(index => [0, 1, 2, 3].map(i => new Pawn(index, i)))
        ];
    }

    safe = [ 1, 9, 14, 22, 27, 35, 40, 49, 53, 54, 55, 56 ];

    currentRoller = 0;
    currentRollScore = [];

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

    rollTheDice(mock) {

        this.currentRoller = this.dice.eligibleUnit;

        this.dice.rollerHasActivePawn = this.rollerHasActivePawn();
        
        this.currentRollScore = this.dice.roll(mock)
        
        
        return this.dice.getScore()
        
    }

    getScore() {
        return this.dice.getScore()
    }


    getRoundScore() {
        return this.dice.score;
    }

    moveThePawn(count, pawnId) {
        const pawn = this.rollers[this.currentRoller].find(p => p.id === pawnId)

        this.dice.movePawn(count, pawn);

        return pawn
    }

    eligibleRoller() {
        return this.dice.eligibleUnit;
    }

    isPawnMoveRequired() {
        return this.dice.isPawnMoveRequired();
    }

    currentRound() {
        return this.dice.round;
    }
}

export default new Board(new Dice)