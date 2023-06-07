import React from "react";

function List(props) {
  const Items = props.list || [];
  const listItems = Items.map((item) => <li>{item}</li>);
  return <ul>{listItems}</ul>;
}
export default List;
