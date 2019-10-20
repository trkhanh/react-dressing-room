import React, { Component } from 'react';
import Tabpanel from "./TabContent/Tabpanel";
import dressingRoom from "../../mock/GetData";
import buttonArr from '../../mock/buttonArray';


const TabContent = (props) => {
    console.log('propsTabContent', props)
    let elementTabPane = buttonArr.map((btn, index) => {
       return <Tabpanel transferItem={props.transferItem}
            ListItem={dressingRoom.ListOfItems}
            ButtonArray={btn}
            key={index}
            id={index}></Tabpanel>
    })
    return (
        <div className='tab-content row'>
            {elementTabPane}
        </div>
    )
}

export default TabContent;