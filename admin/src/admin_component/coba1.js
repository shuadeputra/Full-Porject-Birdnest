import React, { Component } from 'react'
import axios from 'axios';
 class coba1 extends Component {
  
  state = {
    todos:[],
    currentPage: 1,
    todosPerPage: 3,
    coba:[]
  };


  componentDidMount() {
    var self = this;
    axios.get('http://localhost:3001/getproduct')
      .then((response) => {

        var nama = []
        var price = []
        for (let i = 0; i < response.data.length; i++) {
          nama.push(response.data[i].nama)
          price.push(response.data[i].price)
        }
        
        self.setState({ todos: nama })
        self.setState({ newprice: price })
        self.setState({ coba: response.data })
      })
  };



  handleClick = event => {
    this.setState({
      currentPage: Number(event.target.id)
    });
  };

  render() {


    const { coba,todos, currentPage, todosPerPage } = this.state;

    // Logic for displaying current todos
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = coba.slice(indexOfFirstTodo, indexOfLastTodo);

var renderTodos = currentTodos.map((todo, index) => {
  var price = todo.price;
  var name = todo.nama; 
  var desc = todo.description; 
  return(
  <tr>
    <th key={index}>{price}</th>
    <th key={index}>{name}</th>
    <th key={index}>{desc}</th>
  </tr>
  )
})



    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li key={number} id={number} onClick={this.handleClick}>
          {number}
        </li>
      );
    });





    return (
      <div>

          <table >
            <tr>
              <th> name</th>
              <th> price</th>
            </tr>
            {renderTodos}
        </table>
        
        <ul id="page-numbers">{renderPageNumbers}</ul>
      </div>
    )
  }
}
export default coba1
