import React, { Component } from "react";
import classNames from 'classnames';
import Item from "./TabPane/Item";

export default class TabPane extends Component {
  render() {
    const { ListItem, id, ButtonArray, transferItem } = this.props;
   
    const classWrapper = classNames({
      "tab-pane fade row": true,
      "in active": id === 0,
    });

    return (
      <div className={classWrapper} id={ButtonArray.tabName}>
        {ListItem.map((item, index) => {
          return item.type === ButtonArray.type ? (
            <Item item={item} key={index} transferItem={transferItem}></Item>
          ) : (
            ""
          );
        })}
      </div>
    );
  }
}
