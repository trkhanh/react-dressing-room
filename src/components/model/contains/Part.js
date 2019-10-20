import React, { Component } from "react";

export default class Part extends Component {
    constructor(props) {
        super(props);
        this.styles = this.props.styleInit;
    }

    render() {
        let styles = this.styles;
        if (this.props.items) {
            styles = {
                ...styles,
                backgroundImage: `url(${this.props.items.imgSrc_png})`
            }
        }
        return (
            <div style={styles}></div>
        )
    }
}