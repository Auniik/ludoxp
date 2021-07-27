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
		let {used, unused} = board.rollTheDice(5)
	
		expect(unused).toEqual([6, 5]);
		expect(used).toEqual([]);
	
		const pawn = board.moveThePawn(6, 0)
	
		expect(pawn.isActive).toBe(true)
		expect(pawn.position).toBe(1)
	
		board.moveThePawn(5, 0)
	
		expect(pawn.isActive).toBe(true)
		expect(pawn.position).toBe(6)
		
		expect(board.dice.getScore().used).toEqual([6, 5]);
		expect(board.dice.getScore().unused).toEqual([]);
	
	});
	
	test('Check the eligible roller 2', () => {
		expect(board.eligibleRoller()).toBe(2);
	});
	
	test('Dice.roll(5) by roller 2 (Won\'t active any pawn)', () => {
		board.rollTheDice(5)
	
		expect(board.dice.getScore().used).toEqual([]);
		expect(board.dice.getScore().unused).toEqual([]);
	
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
	
	test('Check the Next round and roller 0', () => {
		expect(board.eligibleRoller()).toBe(0);
	});
})

