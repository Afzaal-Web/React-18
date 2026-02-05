// import ListGroup from "./components/ListGroup";
// import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  // let items = ["Lahore", "karachi", "Islamabad", "Gujrat", "Pindi"];
  // const handleSelectItem = (item: string, index: number) => {
  //   console.log(item, index);
  // };
  // return (
  //   <div>
  //     <ListGroup
  //       items={items}
  //       heading="Citites"
  //       onSelectItem={handleSelectItem}
  //     />
  //   </div>
  // );

  //   return (
  //     <div>
  //       <Alert>
  //         <h1>afzal</h1>
  //       </Alert>
  //     </div>
  //   );
  // }

  return (
    <div>
      <Button onClick={() => alert("clicked")}>My button</Button>
    </div>
  );
}

export default App;
