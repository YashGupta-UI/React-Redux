import React from 'react';
import Card from '../card-item/cardItem';
import './cardList.style.css';

const CardList = props => {
	return (
		<div className="card-list">
			{props.monster.map(item => (
				<Card key={item.id} monster={item} />
			))}
		</div>
	);
};

export default CardList;
