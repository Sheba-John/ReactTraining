import React, { Component } from "react";
class MyFirstClassComponent extends Component {
    state = {
        balance: 0,
    };
    balanceIncrement = (value) => {
        this.setState({ balance: this.state.balance + value});
    };

    onProfitClickHandler = () => {
        console.log("Profit");
        this.balanceIncrement(1);
    };
    ondoubleProfitClickHandler = () => {
        console.log("double profit");
        this.balanceIncrement(100);
    };
    

    render() {
        const { name, age } = this.props;
        return <>
            <h1>
                Hello i am {name}, {age} years old and my balance is{this.state.balance} In account
                {this.props.accountNumber}
            </h1>

            <button onClick= {this.onProfitClickHandler}> Profit
            </button>
            <button onClick= {this.ondoubleProfitClickHandler}> Double Profit 
            </button>
            </>
            
        
       // return <h1>Heallo from MyFirstClassComponent</h1>;
    }
}
export default MyFirstClassComponent;