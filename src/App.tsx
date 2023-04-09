import ListGroup from "./components/ListGroup";
import "./App.css";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  let items = ["STL", "New York", "Denver"];
  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectedItem}
      />
      {/* <Alert>"Check it out"</Alert>
      <Button color="danger" onClick={() => console.log("Clicked")}>
        My Button
      </Button> */}
    </div>
  );
}

export default App;
