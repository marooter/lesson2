import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  margin: 30px;
`;

const SuperDiv = Div.extend`
text-align: center;
`

const Wrapper = styled.section`
  padding: 1em;
  background: rgb(228, 240, 252);
`;
export default class Body extends React.Component {
    constructor(props) {
      super(props);
       this.state = { items: [], title: '',description:'',duedate:'' };
       //this.handleTitleChange = this.handleTitleChange.bind(this);
       //this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
       //this.handleDuedateChange = this.handleDuedateChange.bind(this);
       //this.handleSubmit = this.handleSubmit.bind(this);
       //this.remove = this.remove.bind(this);
     }
  
    render() {
      return (
        <Wrapper>
         <SuperDiv>
  
          <form>
            <input 
              style={{height:30, width:300,borderRadius: 4}}
              id="title"
              type='text'
              onChange={this.handleTitleChange}
              value={this.state.title}
              placeholder="Title" 
            /> 
            &nbsp; &nbsp;
             <input
             style={{height:30, width:300,borderRadius: 4}}
              id="description"
              onChange={this.handleDescriptionChange}
              value={this.state.description}
              placeholder="description" 
            />
             &nbsp; &nbsp;
             <input
             style={{height:30, width:300,borderRadius: 4}}
              id="duedate"
              type = "date"
              onChange={this.handleDuedateChange}
              value={this.state.duedate}
              placeholder="duedate" 
            />
          </form><br/><br/>
  
            <button
                 style={{borderRadius: 6, height: 40,width: 150,fontSize:20}}
                 onClick={this.handleSubmit}>
                 Add 
            </button>&nbsp; &nbsp;
  
            <button 
              style={{borderRadius: 6, height: 40,width: 150,fontSize:20}}
              onClick={this.remove} >
              Delete
            </button>&nbsp; &nbsp;
            <button  style={{borderRadius: 6, height: 40,width: 150,fontSize:20}}>
              Update 
            </button>
  
            </SuperDiv>
          
        </Wrapper>
      );
    }
  
    handleTitleChange = (e) => {
      this.setState({ title: e.target.value });
    }
    handleDescriptionChange = (e) =>{
      this.setState({description: e.target.value})  
    }
    handleDuedateChange = (e) =>{
      this.setState({duedate: e.target.value})
    }
  
    handleSubmit = (e) => {
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
    remove = (id) =>{
      this.setState(prevState => ({
          title: prevState.title.filter(item => item !== id )}));
    }
  
  }