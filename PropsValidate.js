// import PropTypes from 'prop-types'
// function PropsValidate(props)
// {
//     const {name, age } = props;
//     return (
//         <>
//         <h2>Name: {name}</h2>
//         <h2>After 5 years my age will be: {age +5}</h2>
//         </>
//     );
// }
// PropsValidate.propsTypes = {
//     name: PropTypes.string,
//     age: PropTypes.number.isRequired,
//     children: PropTypes.element.isRequired,
//     renderable: PropTypes.node,
//     rollNumber: PropTypes.oneOfType([PropTypes, string, PropTypes.number]),
//     remark: PropTypes.any, 
//    myArr : PropTypes.arrayOf([PropTypes.string.PropTypes.number]),
//     myObject: PropTypes.exact({ name:PropTypes.string, age:PropTypes.number,}),
    


    

// }; 
// export default PropsValidate;

import PropTypes from "prop-types";


function PropsValidate(props){
    const{name, age, children,symbol,rollnumber,myArr,myObj}=props;
    return(
        <>
        <h2>Name:{name}</h2>
        <h2>Age:{age}</h2>
        <h2>After 5 years my age will be:{age+5}</h2>
        <h2>{children}</h2>
        <h2>MySymbol:{symbol}</h2>
        <h2>My Roll No:{rollnumber}</h2>
        <h2>myArray:{myArr}</h2>
        {/* <h2>myObject:{myObj}</h2> */}
        </>
    );
    
}
//here we are using "prop-types" package for validation
PropsValidate.propTypes={
    name:PropTypes.string,    //here we are declared that name must be "String"
    age:PropTypes.number.isRequired, //here we are declared that age must be "number" and made it as required fiel
    children:PropTypes.element.isRequired,
    renderable:PropTypes.node,
    symbol:PropTypes.symbol,
    rollnumber:PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    myArr:PropTypes.arrayOf(PropTypes.number),
    myObj:PropTypes.shape({
        name:PropTypes.string,
        age:PropTypes.number
    }) //it will allow new properties in array
    
    // myObj:PropTypes.exact({
    //     name:PropTypes.string,
    //     age:PropTypes.number
    // }) //it will NOT  allow new properties in array
};                           
export default PropsValidate;

