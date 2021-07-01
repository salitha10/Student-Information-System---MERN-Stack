import React from 'react';

class CounterClass extends React.Component {

    //Constructor
    constructor(){

        super();
        //Bind functions
        this.increment = this.increment.bind(this)

        //State
        this.state = {
            number: 0
        };
    }

    //function to increment value
    increment(){
        this.setState({
            number: this.state.number + 1
        })
    }


    //Render elements
    render(){
        return (

            <div>
                <h1> Counter = {this.state.number} </h1>
                <button onClick={this.increment}>Increment</button>
            </div>

        )
    }

}

export default CounterClass;