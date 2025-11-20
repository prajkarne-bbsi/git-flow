var React = require('react');
require('./TodoList.css');

function TodoList() {
  var todosState = React.useState([
    { id: 1, text: 'Buy groceries', completed: false },
    { id: 2, text: 'Read book', completed: true },
    { id: 3, text: 'Write code', completed: false }
  ]);
  var todos = todosState[0];
  var setTodos = todosState[1];

  var inputState = React.useState('');
  var input = inputState[0];
  var setInput = inputState[1];

  var addTodo = function() {
    if (input.trim() === '') return;
    setTodos(function(prev) {
      return prev.concat({ id: Date.now(), text: input, completed: false });
    });
    setInput('');
  };

  var toggleTodo = function(id) {
    setTodos(function(prev) {
      return prev.map(function(todo) {
        return todo.id === id 
          ? Object.assign({}, todo, { completed: !todo.completed })
          : todo;
      });
    });
  };

  var deleteTodo = function(id) {
    setTodos(function(prev) {
      return prev.filter(function(todo) { return todo.id !== id; });
    });
  };

  return React.createElement(
    'div',
    { className: 'todo-container' },
    React.createElement('h1', null, 'Todo List'),
    React.createElement(
      'div',
      { className: 'input-section' },
      React.createElement('input', {
        value: input,
        onChange: function(e) { setInput(e.target.value); },
        placeholder: 'Add new todo...'
      }),
      React.createElement('button', { onClick: addTodo }, 'Add')
    ),
    React.createElement(
      'ul',
      null,
      todos.map(function(todo) {
        return React.createElement(
          'li',
          { key: todo.id, className: todo.completed ? 'completed' : '' },
          React.createElement('span', { onClick: function() { toggleTodo(todo.id); } }, todo.text),
          React.createElement('button', { onClick: function() { deleteTodo(todo.id); } }, 'Delete')
        );
      })
    )
  );
}

module.exports = TodoList;