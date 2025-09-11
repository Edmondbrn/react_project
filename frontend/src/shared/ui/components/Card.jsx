import { Card as BootstrapCard, Button } from 'react-bootstrap';

function Card({ title, subTitle = null,  bodyContent, footerContent = null }) {
  return (
    <BootstrapCard className="mb-4">

      <BootstrapCard.Header as = "h3" className='text-center' >
        {title}
      </BootstrapCard.Header>

      {/* sous menu dans le header <BootstrapCard.Header>
  <ul className="nav nav-tabs card-header-tabs">
    <li className="nav-item">
      <a className="nav-link active" href="#">Données</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Graphiques</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Exportation</a>
    </li>
  </ul>
</BootstrapCard.Header> */}


      <BootstrapCard.Body>
        {subTitle && <BootstrapCard.Title>{subTitle}</BootstrapCard.Title>}
        <BootstrapCard.Text>{bodyContent}</BootstrapCard.Text>
      </BootstrapCard.Body>


    {footerContent && <BootstrapCard.Footer>
      {footerContent}
    </BootstrapCard.Footer>}

    </BootstrapCard>
  );
}

export default Card;