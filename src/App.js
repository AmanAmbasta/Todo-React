import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Todo from "./Todo";
import todoData from "./todoData";

// function App() {
//   const todoItems = todoData.map(item => <Todo key={item.id} item={item} />)
//   return (
//     <div className="todo-list">
//        {todoItems}
//     </div>
//   );
// }

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todoData
    }
    this.handleChange = this.handleChange.bind(this);
  }

  // handleChange(id) {
  //   this.setState((prevState) => {
  //     const uptodo = prevState.todos.map(todo => {
  //       if (todo.id === id) {
  //         todo.completed = !todo.completed;
  //       }
  //       console.log(todo);
        
  //       return todo;
  //     }
  //     );
  //     return { todos: uptodo } ;
  //   })
  //  }
  handleChange(id) {
    this.setState(prevState => {
        const updatedTodos = prevState.todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        })
        return {
            todos: updatedTodos
        }
    })
}
//   render() {
//     const todoItems = this.state.todos.map(item => <Todo
//       key={item.id}
//       item={item}
//       handleChange={this.handleChange}/>);
//     return (
//       <div className="todo-list">
//         {todoItems}
//       </div>
//     );
//   }
// }

render() {
  const todoItems = this.state.todos.map(item => <Todo key={item.id} item={item} handleChange={this.handleChange}/>)
  
  return (
      <div className="todo-list">
          {todoItems}
      </div>
  )    
}
}


export default App;

