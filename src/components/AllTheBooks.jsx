import Card from 'react-bootstrap/Card';
import libri from '../data/horror.json'
import { Container } from 'react-bootstrap';


function AllTheBooks() {
  return (
    <Container className="d-flex flex-wrap justify-content-center gap-3">
      {libri.map((horror) => (
        <Card style={{ width: '150px' }}>
          <Card.Img src={horror.img} className='w-100'/>
        </Card>
      ))}
    </Container>
  );
}

export default AllTheBooks;
