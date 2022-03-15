import React, { Component } from 'react'

class TitleBar01 extends Component{

    constructor() {
        super(...arguments);
        // no VS this.state.no

        // this.no = 0;
        this.state = {
            no: 0
        }
    }

    onclickHandler(){
        // no VS this.state.no

        // this.no++;
        // console.log(`TitleBar01 Clicked! ${this.no}`);
        
        // setState안에 render가 있어서 화면의 숫자가 바뀐다.
        // this.setState({
        //     no: this.state.no + 1
        // })

        // 숫자는 올라가지만 rendering은 되지않는다.
        this.state.no = this.state.no + 1;
        console.log(`TitleBar01 Clicked! ${this.state.no}`);
    }

    render() {
        return (
            <h1
                style={{cursor : 'pointer'}}
                onClick={this.onclickHandler.bind(this)}>
                ex03: Function Event Handler(Class Component)
                <br/>
                {
                    // no VS this.state.no

                    // this.no
                    this.state.no
                }
            </h1>
        )
    }
}

export default TitleBar01