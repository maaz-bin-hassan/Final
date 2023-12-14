import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Footer() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./Assets/img/IMG3.png" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
         
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Footer;