import React from "react";

const Item = props => {
  console.log("itemProps", props);
  return (
    <div
      className="col-md-3"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <h3>{props.item.name}</h3>
      <div style={{ position: 'relative', paddingTop: '125%' }}>
        <img src={props.item.imgSrc_jpg} alt="true" style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover'}} />
      </div>
      <button
        className="btn btn-default"
        onClick={() => props.transferItem(props.item)}
      >
        Change
      </button>
    </div>
  );
};

export default Item;
