import React from "react";

const Button = (props) => {
    console.log('btnProp',props)
    return (
      
        <div className='btn-group' role='group'>
            <br></br>
            <button
                type='button'
                id='starts'
                className={'btn' + props.class}
                href={`#${props.btn.tabName}`}
                onClick={() => props.changeTab(props.index)}
                data-toggle="tab">
                <div className='hidden-xs'>{
                    props.btn.showName
                }</div>
            </button>
        </div>
    )
}
export default Button; 