import React, { Component, createRef } from "react";
import Fcomponent from "./Fcomponent";
import PureComponent from "./PureCompo";

class ParentComponent extends Component {
    constructor() {
        super();
        this.myInput = createRef();
    }
    componentDidMount() {
        this.myInput.current.focus();
    }
    render() {
        return (
            <div>
                {/* <PureComponent ref={this.componentRef} />
                <button onClick={this.handleChangeCompoName} className="btn btn-danger">test</button> */}
                <Fcomponent ref={this.myInput}/>
            </div>
        )
    }
}

export default ParentComponent;