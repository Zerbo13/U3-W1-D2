import libri from '../data/horror.json'
import { Container, Card, Button } from 'react-bootstrap';


function AllTheBooks() {
  return (
    <Container className="d-flex flex-wrap justify-content-center gap-3">
      {libri.map((horror) => (
        <Card style={{ width: '150px' }}>
          <Card.Img src={horror.img} className='w-100'/>
       <Card.Body className="d-flex flex-column justify-content-between" >
  <div>
    <Card.Title style={{ fontSize: '1rem' }}>{horror.title}</Card.Title>
    <Card.Text>{horror.price}</Card.Text>
  </div>
  <Button variant="primary" size="sm">Aggiungi al carrello</Button>
</Card.Body>
        </Card>
      ))}
    </Container>
  );
}

export default AllTheBooks;
