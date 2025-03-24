// import logo from './logo.svg';
import './App.css';



function formatName(user) {
  return user.firstName + ' ' + user.lastName+' ' +user.studentID;
}

function GetGreeting(props) {
  if (props && props.firstName && props.lastName && props.studentID) {
    return <h1>Hello, {formatName(props)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

function Mult1(props){
  return (
    <h2>
    {props.op1} * {props.op2} = {props.op1 * props.op2}
    </h2>
  )
}

function Dvision1(props){
  return (
    <h2>
    {props.op1} / {props.op2} = {props.op1 / props.op2}
    </h2>
  )
}

const posts =[
  {id:1, title:'Hello World', content:'Welcome to learning React!'},
  {id:2, title:'Installation', content:'You can install React from npm.'},
  {id:3, title:'Develop a project', content:'You can create a function.'}
]

function Blog(props){
  const content =props.posts.map((post)=>
    <div>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
  return(
    <div>
      {content}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <p>Test1.</p>
      <GetGreeting firstName= 'Huang' lastName= 'Hong Yi'studentID= 'C111156124'/>
      <p>Test2.</p>
      <GetGreeting />
    <Mult1 op1={5} op2={8}/>
   
    <Dvision1 op1={48} op2={8}/>
    <Blog posts={posts}/>
    </div>
  );
}
export default App;