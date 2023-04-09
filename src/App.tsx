import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <Alert>"Check it out"</Alert>
      <Button color="danger" onClick={() => console.log("Clicked")}>
        My Button
      </Button>
    </div>
  );
}

export default App;
