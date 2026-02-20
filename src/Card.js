import React from 'react';
import './Card.css';

export default class Card extends React.Component {
  render() {
    let statusClass = 'Card-grey';
    if (this.props.status === 'in-progress') {
      statusClass = 'Card-blue';
    } else if (this.props.status === 'complete') {
      statusClass = 'Card-green';
    }

    return (
      <div className={`Card ${statusClass}`} data-id={this.props.id}>
        <div className="Card-title">{this.props.name}</div>
        <div className="Card-description">{this.props.description}</div>
      </div>
    );
  }
}
