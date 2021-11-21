import React ,{Component} from 'react';

export default class Child extends Component {

render(){
const{name , click} = this.props;
return(
<div>

Name is {name}
<button  onClick ={click}>Click</button>


</div>

);

}

}