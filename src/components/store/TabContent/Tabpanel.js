import React, { Component } from "react";
import Item from './TabPane/Item';

export default class TabPane extends Component {
    render() {
        console.log('TabPane', this.props )
        let elementItem = this.props.ListItem.map((item, index) => {
            // console.log('item',item)
            return item.type === this.props.ButtonArray.type ?
                <Item item={item}
                 key={index}
                 transferItem={this.props.transferItem}></Item> : '';
        })
        return (
            <div className={this.props.id === 0 ? 'tab-panel fade in active' : 'tab-panel fade in'} id={this.props.ButtonArray.tabName}>
                {elementItem}
            </div>
        )
    }
}
