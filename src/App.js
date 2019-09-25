import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
// import AddTodo from './components/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';
import Footer from './components/Footer';
import './App.css';
import AddTodo from './containers/AddTodo';

function App() {
  return (
      <Provider store={store}>
        <div className="App">
          <h1>Welcome to the TODO App</h1>
            {/*<AddTodo/>*/}
            <VisibleTodoList/>
            <AddTodo/>
            <Footer/>
        </div>
      </Provider>
  );
}

export default App;
