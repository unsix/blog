import React, {Component} from 'react'
import {connect} from 'react-redux'

class InfoBox extends Component{
    constructor() {
        super()
    }

    render() {
        return (
            <div className="main-sidebar">
            </div>
        )
    }
}
export default connect()(InfoBox)
