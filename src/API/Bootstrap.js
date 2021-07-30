let board = require('./Board').default


if (localStorage.getItem('_board')) {
	
	var blueprint = JSON.parse(localStorage.getItem('_board'));

	Object.setPrototypeOf(blueprint, board.__proto__);

	Object.setPrototypeOf(blueprint.dice, board.dice.__proto__);

	const pawnPrototype = board.rollers[0][0].__proto__;

	blueprint.rollers.forEach(pawns => {
		pawns.forEach(pawn => {
			Object.setPrototypeOf(pawn, pawnPrototype)
		})
	});

	board = blueprint;

} else {

	updateBoard(board);

}


export const updateBoard = (board) => {
	localStorage.setItem('_board', JSON.stringify(board));
}

export const resetBoard = () => {
	localStorage.setItem('_board', JSON.stringify(require('./Board').default));
}



export default board;