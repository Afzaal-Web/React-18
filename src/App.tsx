import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Lahore", "karachi", "Islamabad", "Gujrat", "Pindi"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Citites"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
