import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  margin: 100px;
  text-align: center;
`;

const Todo = styled.p`
text-align: left;
padding: 20px;
text-size: 50px

`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], title: '',description:'',duedate:'' };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleDuedateChange = this.handleDuedateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.remove = this.remove.bind(this);
  }

  render() {
    return (
      <Div>
        <h3>Basic-TODO</h3>
        
        <form>
        
          <input
            id="title"
            onChange={this.handleTitleChange}
            value={this.state.title}
            placeholder="Title" 
          /> &nbsp; &nbsp;
           <input
            id="description"
            onChange={this.handleDescriptionChange}
            value={this.state.description}
            placeholder="description" 
          />
           &nbsp; &nbsp;
           <input
            id="duedate"
            type = "date"
            onChange={this.handleDuedateChange}
            value={this.state.duedate}
            placeholder="duedate" 
          />
        </form>
        <br/>
          <br/>
          <button block onClick={this.handleSubmit}>
            Add 
          </button>
          &nbsp; &nbsp;
          <button onClick={this.remove} >
           Delete
          </button>
          &nbsp; &nbsp;
          <button>
            Update 
          </button>
      
        <TodoList items={this.state.items}/>
      
      </Div>
    );
  }

  handleTitleChange(e) {
    this.setState({ title: e.target.value });
  }
  handleDescriptionChange(e){
    this.setState({description: e.target.value})  
  }
  handleDuedateChange(e){
    this.setState({duedate: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.title && !this.state.description && !this.state.duedate) {
      return;
    }
    const newItem = {
      title: this.state.title,
      description: this.state.description,
      duedate: this.state.duedate,
      id: Date.now()
    };
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      title: '',
      description:'',
      duedate:''
    }));
  }

  remove(id){
    this.setState(prevState => ({
        title: prevState.title.filter(item => item !== id )
    }));
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
      <Todo>
      
        {this.props.items.map(item => 
          <li key={item.id}><input 
          type="checkbox"
          checked={this.state.isChecked}
          onChange={this.toggleChange}
          /> &nbsp; &nbsp;
          {item.title} &nbsp;&nbsp; &nbsp;
          {item.description} &nbsp; &nbsp; &nbsp;
          {item.duedate}<br/>
          </li>
        )}
      
      </Todo>
    );
  }
}

export default App;
