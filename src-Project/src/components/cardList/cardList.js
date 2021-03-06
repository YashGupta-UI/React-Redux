import React from 'react';
import Card from '../card/card';
import './card-list.styles.css';

const CardList = props => (
  <div className="card-list">
    {props.monster.map(monster => (
        <Card key={monster.id} monster={monster} />
    ))}
  </div>
);

export default CardList;