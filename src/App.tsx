import ListGroup from "./components/ListGroup";

function App() {
  let items = ["STL", "Chicago", "New York", "LA", "Seattle"];

  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
