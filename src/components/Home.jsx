import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import task1 from "./task1.png"
import task2 from "./task2.png"
import Task1 from './Task1';
import Task2 from './Task2';
import { Link } from 'react-router';

function Home() {
  return (
    <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",height: "100vh" }}>
        <div><Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={task1}/>
      <Card.Body>
        <Card.Title>Task 1</Card.Title>
        <Card.Text>
          Completed Task one, you can check fro below Link 👇.
        </Card.Text>
        <Button as ={Link}to="/task1" variant="primary">Go to Task-1</Button>
      </Card.Body>
    </Card></div>
    <div><Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={task2}/>
      <Card.Body>
        <Card.Title>Task 2</Card.Title>
        <Card.Text>
          Completed Task two, you can check fro below Link 👇.
        </Card.Text>
        <Button as ={Link}to="/task2" variant="primary">Go to Task-2</Button>
      </Card.Body>
    </Card></div>
    </div>
  );
}

export default Home;