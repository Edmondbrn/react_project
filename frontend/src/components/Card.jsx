import React from 'react';
import { Card as BootstrapCard, Button } from 'react-bootstrap';

function Card({ title, text, buttonText, onClick }) {
  return (
    <BootstrapCard className="mb-4">
      <BootstrapCard.Body>
        <BootstrapCard.Title>{title}</BootstrapCard.Title>
        <BootstrapCard.Text>{text}</BootstrapCard.Text>
        {buttonText && (
          <Button variant="primary" onClick={onClick}>
            {buttonText}
          </Button>
        )}
      </BootstrapCard.Body>
    </BootstrapCard>
  );
}

export default Card;