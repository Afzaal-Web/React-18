/*
function ListGroup() {
  return (
    // h1 gives error because a component can not return more than one element
    // <h1>List Group</h1>
      <ul className="list-group">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
      </ul>
   
  );
}
*/

/*
import { Fragment } from "react/jsx-runtime";

function ListGroup() {
  return (
    // to use multiple elements we can use fragment
    <Fragment>
      <h1>List Group</h1>
      <ul className="list-group">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
      </ul>
    </Fragment>
  );
}
*/

// shorter way to use fragment
/*
function ListGroup() {
  return (
    <>
      <h1>List Group</h1>
      <ul className="list-group">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
      </ul>
    </>
  );
}
*/

/*
// Rendering List

function ListGroup() {
  const items = ["Lahore", "karachi", "Islamabad", "Gujrat", "Pindi"];
  return (
    <>
      <h1>List Group</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
*/

/*
// Conditional Rendering

function ListGroup() {
  let items = ["Lahore", "karachi", "Islamabad", "Gujrat", "Pindi"];
  items = [];

  if (items.length === 0) return <><h1>List</h1><p>No item found!</p>;</>
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
*/

/*
function ListGroup() {
  let items = ["Lahore", "karachi", "Islamabad", "Gujrat", "Pindi"];
  items = [];

  const getMessage = () => {
    return items.length === 0 ? <p>No item found!</p> : null;
  };

  return (
    <>
      <h1>List</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
*/

function ListGroup() {
  let items = ["Lahore", "karachi", "Islamabad", "Gujrat", "Pindi"];
  items = [];

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found!</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
