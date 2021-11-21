// // import React, { Component } from "react";
// // class MySecondClassComponent extends Component {
// //     state = {
// //         balance: 0,
// //     };

// //     balanceIncrement = (value) => {
// //         this.setState({ balance: this.state.balance + value});
// //     };

// //     // onProfitClickHandler = () => {
// //     //     console.log("I am clicked now");
// //     //     this.balanceIncrement(1);
// //     // };

// //     render() {

// //         const { name, age } = this.props;
// //         return (
// //             <h1>
// //                 Family balance is{this.state.balance} In account
// //                 {this.props.accountNumber}
// //             </h1>
// //         )
        
// //     }
// // }
// // export default MySecondClassComponent;

// import React ,{Component} from 'react';


// class SecondClassComponent extends Component{
//     state ={
//         balance:0,
//     };

    
//     balanceIncrement = (value)=>{
//         this.setState({
//             balance:this.state.balance +value,
//         })
//     }

//     onProfitClickHandle =()=>{
//         this.balanceIncrement(1);
//     }

//     onDoubleProfitClick =()=>{
//         this.balanceIncrement(100);
//     }
//      render(){

//           const{name} = this.props;
//           console.log(this.state.balance);
//          return(
          
       
//              <div>
                 
//                   <h2> My name is {this.props.name}</h2>
//                   <h2>My acc balance is {this.state.balance}</h2>
//                   <button onClick={this.onProfitClickHandle}>Click Me </button>
//                   <br></br>
//                   <button onClick = {this.onDoubleProfitClick}>Double profit</button>

//                   {/* <ChildOne name ={"Vannu"} click={this.click} ></ChildOne> */}
//             </div>
           
//          );

         
//      }
//  } 
//  export default SecondClassComponent;