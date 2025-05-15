// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import task1 from "./task1.png"
// import task2 from "./task2.png"
// import { Link } from 'react-router';

// function Home() {
//   return (
//     <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",height: "100vh",}}>
//         <div><Card style={{ width: '18rem'}}>
//       <Card.Img variant="top" src={task1}/>
//       <Card.Body>
//         <Card.Title>Task 1</Card.Title>
//         <Card.Text>
//           Completed Task one, you can check fro below Link 👇.
//         </Card.Text>
//         <Button as ={Link}to="/task1" variant="primary">Go to Task-1</Button>
//       </Card.Body>
//     </Card></div>
//     <div><Card style={{ width: '18rem'}}>
//       <Card.Img variant="top" src={task2}/>
//       <Card.Body>
//         <Card.Title>Task 2</Card.Title>
//         <Card.Text>
//           Completed Task two, you can check fro below Link 👇.
//         </Card.Text>
//         <Button as ={Link}to="/task2" variant="primary">Go to Task-2</Button>
//       </Card.Body>
//     </Card></div>
//     </div>
//   );
// }

// export default Home;

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import task1 from "./task1.png";
import task2 from "./task2.png";
import { Link } from 'react-router';

function Home() {
  return (
    <div className="container">
      <div className="row justify-content-center" style={{ marginTop: "50px" }}>
        {/* Task 1 Card */}
        <div className="col-md-4">
          <Card className="custom-card">
            <Card.Img variant="top" src={task1} />
            <Card.Body>
              <Card.Title className="card-title">Task 1</Card.Title>
              <Card.Text>
                Completed Task one, you can check from below link 👇.
              </Card.Text>
              <Button as={Link} to="/task1" variant="primary" className="btn-lg">
                Go to Task-1
              </Button>
            </Card.Body>
          </Card>
        </div>

        {/* Task 2 Card */}
        <div className="col-md-4">
          <Card className="custom-card">
            <Card.Img variant="top" src={task2} />
            <Card.Body>
              <Card.Title className="card-title">Task 2</Card.Title>
              <Card.Text>
                Completed Task two, you can check from below link 👇.
              </Card.Text>
              <Button as={Link} to="/task2" variant="primary" className="btn-lg">
                Go to Task-2
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Home;