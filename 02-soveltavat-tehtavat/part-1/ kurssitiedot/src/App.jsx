const Header = (props) => {
  console.log(props);
  return <h1>{props.course}</h1>;
};
const Content = (props) => {
  console.log(props);

  return (
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  );
};
const Total = (props) => {
  return <div>Number of exercises {props.num}</div>;
};

const App = () => {
  // const-määrittelyt
  const course = "Half Stack application development";
  const exercises1 = 10;
  const exercises2 = 7;
  const exercises3 = 14;
  const part1 = "Fundamentals of React";
  const part2 = "Using props to pass data";
  const part3 = "State of a component";

  return (
    <div>
      <Header course={course} />
      <Content part={part1} exercises={exercises1} />
      <Content part={part2} exercises={exercises2} />
      <Content part={part3} exercises={exercises3} />
      <Total num={exercises1 + exercises2 + exercises3} />
    </div>
  );
};
export default App;
