// import ListGroup from "./components/ListGroup";

// import { useState } from "react";
// import Alert from "./components/Alert";
// import Button from "./components/Button";
import ExpandableText from "./components/ExpandableText";

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

  // return (
  //   <div>
  //     <Button onClick={() => alert("clicked")}>My button</Button>
  //   </div>
  // );

  // const [alertVisibility, setAlertVisibility] = useState(false);

  // return (
  //   <div>
  //     {alertVisibility && (
  //       <Alert onClose={() => setAlertVisibility(false)}>
  //         <strong>Hello World</strong>
  //       </Alert>
  //     )}
  //     <Button onClick={() => setAlertVisibility(true)}>My button</Button>
  //   </div>
  // );

  return (
    <ExpandableText maxChar={100}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque dolores,
      itaque officiis earum quam unde odio molestias facere iusto velit sint
      commodi enim assumenda sed dolore labore recusandae vero nobis animi non
      sit laudantium voluptate! A vitae ea exercitationem quibusdam at
      laudantium, est quod architecto iusto, et consequatur rerum eligendi eos
      minus tempora! Modi molestias voluptas delectus, doloribus omnis
      laboriosam beatae aut obcaecati adipisci est quod dolores expedita aliquid
      cupiditate culpa quisquam nemo sint laudantium porro quam? Beatae quam
      quia optio illum cum, sequi commodi ducimus dicta sunt odio, veritatis
      unde eligendi quod veniam quae aperiam praesentium quaerat. Voluptas,
      unde.
    </ExpandableText>
  );
}

export default App;
