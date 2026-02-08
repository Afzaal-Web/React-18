/*
function ListGroup() {
  return (
    // h1 gives error because a component can not return more than one element
    // <h1>List Group</h1> // React.CreateElement('h1')
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
  constitems = ["Lahore", "karachi", "Islamabad", "Gujrat", "Pindi"];
  return (
    <>
      <h1>List Group</h1>
      <ul className="list-group">
        items.map((item) => (
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
  letitems = ["Lahore", "karachi", "Islamabad", "Gujrat", "Pindi"];
items = [];

  if items.length === 0) return <> <h1>List</h1><p>No item found!</p>;</>
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
*/

/*
function ListGroup() {
  letitems = ["Lahore", "karachi", "Islamabad", "Gujrat", "Pindi"];
items = [];

  const getMessage = () => {
    returnitems.length === 0 ? <p>No item found!</p> : null;
  };

  return (
    <>
      <h1>List</h1>
      {getMessage()}
      <ul className="list-group">
        items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
*/

// Events
/*
function ListGroup() {
  letitems = ["Lahore", "karachi", "Islamabad", "Gujrat", "Pindi"];

  return (
    <>
      <h1>List</h1>
      items.length === 0 && <p>No item found!</p>}
      <ul className="list-group">
        items.map((item, index) => (
          <li
            className="list-group-item"
            key={item}
            onClick={() => console.log(item, index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
*/

/*
import { MouseEvent } from "react";

function ListGroup() {
  letitems = ["Lahore", "karachi", "Islamabad", "Gujrat", "Pindi"];

  // Event handler
  const handleClick = (e: MouseEvent) => console.log(e);

  return (
    <>
      <h1>List</h1>
      items.length === 0 && <p>No item found!</p>}
      <ul className="list-group">
        items.map((item, index) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
*/

/*
import { useState } from "react";

function ListGroup() {
  letitems = ["Lahore", "karachi", "Islamabad", "Gujrat", "Pindi"];
  let selectedIndex = -1;

  return (
    <>
      <h1>List</h1>
      items.length === 0 && <p>No item found!</p>}
      <ul className="list-group">
        items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => (selectedIndex = index + 1)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
*/

/*
import { useState } from "react";

function ListGroup() {
  letitems = ["Lahore", "karachi", "Islamabad", "Gujrat", "Pindi"];

  // Hook : A hook is a function that allow us to tap into built in feature in react
  useState(-1)
  arr[0] // variable selectedIndex
  arr[1] // update function

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List</h1>
      items.length === 0 && <p>No item found!</p>}
      <ul className="list-group">
        items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
*/

/*

// props
// items: [], heading: string}
interface Props {
  items: string[];
  heading: string;
}
import { useState } from "react";

function ListGroup({ items, heading }: Props) {
  // Hook : A hook is a function that allow us to tap into built in feature in react
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found!</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
*/

/*
// passing function via props

interface Props {
  items: string[];
  heading: string;
  // (item: string) => void
  onSelectItem: (item: string, index: number) => void;
}
import { useState } from "react";

function ListGroup({ items, heading, onSelectItem }: Props) {
  // Hook : A hook is a function that allow us to tap into built in feature in react
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found!</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item, index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
*/

// Difference between Props and Stats
/*
// Props                              State
 input passed to a component          Data managed by the component
  Smilar to func args                 smilar to local vars
 immutable                            mutable
 */

// Passing children

import { useState } from "react";
// import styles from "./ListGroup.module.css";
import styled from "styled-components";

const List = styled.ul`
  padding: 20px 50px;
  list-style: none;
`;

interface ListItemProps {
  $active: boolean;
}
const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${(props) => (props.$active ? "#e8bd3c" : "none")};
  color: black;
`;

interface Props {
  items: string[];
  heading: string;
  // (item: string) => void
  onSelectItem: (item: string, index: number) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // Hook : A hook is a function that allow us to tap into built in feature in react
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found!</p>}
      {/* inline style */}
      <List style={{ border: "1px solid red" }}>
        {items.map((item, index) => (
          <ListItem
            $active={index === selectedIndex}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item, index);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
