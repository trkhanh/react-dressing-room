import React, { Component } from "react";
import * as styleInit from '../../mock/initStyle';
import Part from './contains/Part';


const API_GET_INIT_STYLE = 'http://localhost:5000/get_init_style';

export default class Contain extends Component {
    constructor(props) {
        super(props)
        this.state = {
            styles: {
                //TODO: Hoi TAI cai nay
                // ...styleInit
            }
        }
        this.loadStylesFromServer = this.loadStylesFromServer.bind(this)
    }

    loadStylesFromServer() {
        fetch(API_GET_INIT_STYLE)
            .then(response => response.json())
            .then(data => {
                const newStyle = {
                    styles: {
                        ...data
                    }
                }
                console.log('newStyle', newStyle)
                this.setState({ styles: { ...data } })
            });
    }

    componentDidMount() {
        fetch(API_GET_INIT_STYLE)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log('newStyle', result)

                    this.setState({
                        isLoaded: true,
                        styles: { ...result }
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }


    render() {
        const styles = {
            containClass: {
                width: '460px',
                height: '590px',
                margin: '0 auto',
                position: 'relative',
                backgroundRepeat: 'no-repeat'
            }
        };
        console.log('initStyle1', this.state)
        const PartItems = Object.getOwnPropertyNames(this.state.styles).map((style, index) => {

            return <Part styleInit={this.state.styles[style]}
                items={this.props.choosenItem[style]}
                key={index} />
        });

        return (
            <div className='contain' style={styles.containClass}>
                {PartItems}
            </div>
        )
    }
}
