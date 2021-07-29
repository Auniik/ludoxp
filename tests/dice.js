import { expect } from '@jest/globals';
import board from './../src/API/Board';

describe('Round 1: ', () => {

	test('Check board has current and eligible roller is 0', () => {
		expect(board.eligibleRoller()).toBe(0);
		expect(board.currentRoller).toBe(0);
	});
	
	test('Dice.roll(1) by roller 0 (Won\'t active any pawn)', () => {
		expect(board.rollTheDice(1)).toEqual({ used: [], unused: [] });
		expect(board.currentRoller).toBe(0);
	});
	
	test('Check the eligible roller 1', () => {
		expect(board.eligibleRoller()).toBe(1);
	});
	
	
	it('Dice.roll(6, 5) by roller 1 ', () => {
		board.rollTheDice(6)
		board.rollTheDice(5)
	
		expect(board.dice.getScore()).toEqual({ used: [], unused: [6, 5] });
	
		const pawn0 = board.moveThePawn(6, 0)
	
		expect(pawn0.isActive).toBe(true)
		expect(pawn0.position).toBe(1)
	
		board.moveThePawn(5, 0)
	
		expect(pawn0.isActive).toBe(true)
		expect(pawn0.position).toBe(6)
		
		expect(board.dice.getScore()).toEqual({ used: [6, 5], unused: [] });
	
	});
	
	test('Check the eligible roller 2', () => {
		expect(board.eligibleRoller()).toBe(2);
	});
	
	test('Dice.roll(5) by roller 2 (Won\'t active any pawn)', () => {
		board.rollTheDice(5)
		expect(board.dice.getScore()).toEqual({ used: [], unused: [] });
	});
	
	test('Check the eligible roller 3', () => {
		expect(board.eligibleRoller()).toBe(3);
	});
	
	test('Dice.roll(6, 6, 6) by roller 3 (Won\'t active any pawn)', () => {
		board.rollTheDice(6)
		board.rollTheDice(6)
		const score = board.rollTheDice(6)

		expect(score).toEqual({ used: [], unused: [] });
	});
	
	test('Is Round Completed', () => {
		expect(board.dice.isRoundCompleted).toBe(true);
	})
})


describe('Round 2: ', () => {

	test('Check the Next round and roller 0', () => {
		expect(board.eligibleRoller()).toBe(0);
	});
	
	test('Dice.roll(6, 6, 5) by roller 0 (Will active on board)', () => {
		board.rollTheDice(6)
		board.rollTheDice(6)
		board.rollTheDice(5)
		expect(board.dice.getScore()).toEqual({ used: [], unused: [6, 6, 5] });

		const pawn0 = board.moveThePawn(6, 0)
	
		expect(pawn0.isActive).toBe(true)
		expect(pawn0.position).toBe(1)
	
		board.moveThePawn(5, 0)
	
		expect(pawn0.isActive).toBe(true)
		expect(pawn0.position).toBe(6)

		const pawn1 = board.moveThePawn(6, 1)

		expect(pawn1.isActive).toBe(true)
		expect(pawn1.position).toBe(1)
		
	});
	
	test('Check the eligible roller 1', () => {
		expect(board.eligibleRoller()).toBe(1);
	});
	
	
	it('Dice.roll(6, 5) by roller 1 ', () => {
		board.rollTheDice(6)
		board.rollTheDice(5)
	
		expect(board.dice.getScore()).toEqual({ used: [], unused: [6, 5] });
	
		const pawn1 = board.moveThePawn(6, 1)
	
		expect(pawn1.isActive).toBe(true)
		expect(pawn1.position).toBe(1)
	
		const pawn0 = board.moveThePawn(5, 0)
	
		expect(pawn0.isActive).toBe(true)
		expect(pawn0.position).toBe(11)
		
		expect(board.dice.getScore()).toEqual({ used: [6, 5], unused: [] });
	
	});
	
	test('Check the eligible roller 2', () => {
		expect(board.eligibleRoller()).toBe(2);
	});
	
	test('Dice.roll(5) by roller 2 (Won\'t active any pawn)', () => {
		board.rollTheDice(1)
		expect(board.dice.getScore()).toEqual({ used: [], unused: [] });

	});
	
	test('Check the eligible roller 3', () => {
		expect(board.eligibleRoller()).toBe(3);
	});
	
	test('Dice.roll(6, 1) by roller 3', () => {
		board.rollTheDice(6)
		board.rollTheDice(1)

		const pawn0 = board.moveThePawn(6, 0)
	
		expect(pawn0.isActive).toBe(true)
		expect(pawn0.position).toBe(1)
	
		board.moveThePawn(1, 0)
	
		expect(pawn0.isActive).toBe(true)
		expect(pawn0.position).toBe(2)

		expect(board.dice.getScore()).toEqual({ used: [6, 1], unused: [] });
	});
	
	test('Is Round Completed', () => {
		expect(board.dice.isRoundCompleted).toBe(true);
	})
})


describe('Round 3: ', () => {

	test('Check the Next round and roller 0', () => {
		expect(board.eligibleRoller()).toBe(0);
	});
	
	test('Dice.roll(6, 6, 6) by roller 0 (Will active on board)', () => {
		board.rollTheDice(6)
		board.rollTheDice(6)
		board.rollTheDice(6)
		console.log(board.dice.score);
		expect(board.dice.getScore()).toEqual({ used: [], unused: [] });
	});
	
	test('Check the eligible roller 1', () => {
		expect(board.eligibleRoller()).toBe(1);
	});
	
	
	it('Dice.roll(6, 6, 6) by roller 1 ', () => {

		
		board.rollTheDice(6)
		board.rollTheDice(6)
		board.rollTheDice(6)
		expect(board.dice.getScore()).toEqual({ used: [], unused: [] });
	
	});
	
	// test('Check the eligible roller 2', () => {
	// 	expect(board.eligibleRoller()).toBe(2);
	// });
	
	// test('Dice.roll(5) by roller 2 (Won\'t active any pawn)', () => {
	// 	board.rollTheDice(6)
	// 	board.rollTheDice(6)
	// 	board.rollTheDice(6)
	// 	expect(board.dice.getScore()).toEqual({ used: [], unused: [] });

	// });
	
	// test('Check the eligible roller 3', () => {
	// 	expect(board.eligibleRoller()).toBe(3);
	// });
	
	// test('Dice.roll(6, 6, 6) by roller 3 (Won\'t active any pawn)', () => {
	// 	board.rollTheDice(6)
	// 	board.rollTheDice(6)
	// 	board.rollTheDice(6)
	// 	expect(board.dice.getScore()).toEqual({ used: [], unused: [] });
	// });
	
	// test('Is Round Completed', () => {
	// 	expect(board.dice.isRoundCompleted).toBe(true);
	// })
})