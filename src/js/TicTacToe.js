import React from 'react';
import '../css/index.css';
const classNames = require('classnames');

function Square(props) {
	return (
		<button className={props.css} onClick={props.onClick}>
			{props.value}
		</button>
	);
}
class TicTacToe extends React.Component {
	renderSquare(i) {
		const squareClasses = classNames('square', {
			x: this.props.squares[i] === 'X' || this.props.winner === 'X',
			o: this.props.squares[i] === 'O' || this.props.winner === 'O',
			highlight:
				this.props.mustPlaceIn === this.props.id && !this.props.squares[i],
			square: this.props.xIsNext || this.props.winner === 'X',
			circle: !this.props.xIsNext || this.props.winner === 'O',
		});
		return (
			<Square
				css={squareClasses}
				value={this.props.squares[i]}
				onClick={() => this.props.onClick(this.props.id, i)}
			/>
		);
	}

	render() {
		const rows = 3;
		const columns = 3;
		return (
			<div className='game-board'>
				{[...new Array(rows)].map((x, rowIndex) => {
					return (
						<div className='board-row'>
							{[...new Array(columns)].map((y, colIndex) =>
								this.renderSquare(rowIndex * columns + colIndex)
							)}
						</div>
					);
				})}
			</div>
		);
	}
}

export default TicTacToe;