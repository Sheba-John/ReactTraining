import React, { Component } from "react";
import SMChild from "./SMChild";
export default class SMParentComponent extends Component {
    state = {
        balance: 0,
    };
    onProfit = () => {
        this.setState({ balance: this.state.balance + 1});
    };
        onLoss = () => {
            this.setState({ balance: this.state.balance - 1});


};
    render() { 
        return<><h1>Parent: {this.state.balance}</h1>
        <button onClick= {this.onProfit}>Family Profit</button>
        <button onClick= {this.onLoss}>Family Loss</button>
        <SMChild name ={"sheba"} onProfit = {this.onProfit} onLoss = {this.onLoss}/>
        <SMChild name ={"vannu"} onProfit = {this.onProfit} onLoss = {this.onLoss}/>

        </>;
    }
    }
