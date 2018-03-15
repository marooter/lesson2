import React from 'react'
import Header from './Component/Header'
import Body from './Component/Body'
//import {TableHeaderColumn} from 'react-bootstrap-table';


export default class App extends React.Component{
  render(){
    return(
      <div>
        <Header/>
        <Body/>
       {/* <TodoList items={this.state.items}/>*/ }
      </div>
    )
  }
}


class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: ''
    };
  }

  toggleChange = () => {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  }

  render() {
    return (
      <table>
        <tbody>
         {this.props.items.map(item =>        
        <tr style={{fontSize: 20}} key={item.id}>
        <td> {item.title} </td>
        <td> {item.description}</td>
        <td> {item.duedate} </td>
        </tr>
        )}
       </tbody>    
      </table>
    );
  }
}


