import React, { Component } from 'react';
import ButtonGroup from './ButtonGroup';
import TabContent from './TabContent';

export default class Store extends Component {
    render() {
        console.log('propStore', this.props)
        return (
            <div>
                <ButtonGroup></ButtonGroup>
                <div className='well'>
                    <TabContent transferItem={this.props.transferItem}></TabContent>
                </div>
            </div>
        )
    }
}