 //import "./App.css";
// import MyFirstComponent from "./MyFirstComponent";
// import MyForthComponent from "./MyForthComponent";
// import MySecondComponent from "./MySecondComponent";
// import MyThirdComponent from "./MyThirdComponent";
// function App() {
//   const name = "Sheba";
//   const name1 = "Vannu";
//   // const name2="";

//   return (
//     <div className="App">
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}

//       <h1>Hello {name && name.length ? name : "World"}</h1>
//       {/* <h1>Hello {name2 && name2.length ? name2 : "World"}</h1> */}
//       <div>
//         <MyFirstComponent   parentComponentName={"App"}/>
//       </div>
//       <div>
//         <MySecondComponent   parentComponentName={"App"}/>
//       </div>
//       <div>
//         <MyThirdComponent name={name} age={23} parentComponentName={"App"}>
//               <h2>Child of the Third Component </h2>
//               {/* children - anything inside the opening closing betn tags are children  */}

//         </MyThirdComponent>
//       </div>
//       <div>
//         <MyForthComponent name={name1} age={21}   parentComponentName={"App"} />
//       </div>
//     </div>
//   );
// }

// export default App;

// import PropsValidate from "./PropsValidate";
// function App() {
//   const name = "Sheba";
//   return (
//     <div>
//       <PropsValidate name = {"Sheba"} age={24} renderable={"Some String" } rollNumber={10} remark={"Some Remark"} >
//         myArr={[1, 2, 3, 4]}
//         myObject={{name: 'Sheba', age:24, mobile:"8793338642"}}
//         <h1>Hello</h1>


//       </PropsValidate>
//     </div>
//   )
// }
//  export default App;



// function App() {
//   const name="Sheba"; //defining prop here for component1
//   const age=24;
  

//   const name1="Vannu"; //defining prop here for component1
//   const age1=22;
//   return (
//     <div>  
//       <PropsValidate name={"Sheba"} age={24} symbol={'@'} rollnumber={"RN17"} renderable={"some string"}>  
//       <span>Hello I'm Children</span> 
//       </PropsValidate>
      
//     </div>
//   );                     //declaring prop here
// }

// export default App;

//import MyFirstClassComponent from "./MyFirstClassComponent";
//import MySecondClassComponent from "./MySecondClassComponent";
//import PropsValidate from "./PropsValidate";
// function App() {
  
//   return (
//     <div>  
//       <PropsValidate name={"Aniket"} age={24} symbol={'@'} rollnumber={"RN17"} myArr={[1,2,3,4]} 
//       myObj={{name:"ani", age:10, mobile:"1234567890"}} renderable={"some string"}>  
//       <span>Hello I'm Children</span> 
//       </PropsValidate>
//       {/* <h1>Hello {name1 && name1.length? name:"world"}</h1>
//       <MyFirstComponent name={name} age={age}>   
//          <h3>It's React children element 1</h3>
//       </MyFirstComponent>
//       <MySecondComponent name={name1} age={age1}>  
//       <h3>It's React children element 2</h3>
//        </MySecondComponent> */}
//     </div>
//   );                     //declaring prop here
// }
//**** */


// function App() {
// const name = "sheba";
// return (
//   <div> 
//     <MySecondClassComponent name={"Sheba"} age={24} />
//    <MySecondClassComponent name={"Vannu"} age={24} />

//   </div>
// )
// }
// export default App;

//*****
import logo from './logo.svg';
import './App.css';
import SMParentComponent from "./SMParentComponent";
function App() {
  const name = "Vanu";
  return (
    <div> 
      {/* <MySecondClassComponent name={"Sheba"} age={24} /> */}
     {/* <MySecondClassComponent name={"Vannu"} age={24} /> */}
  <SMParentComponent/>
  {/* <SMChild/> */}
    </div>
  );
  };
  export default App;
  





