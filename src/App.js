import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import PostsList from './features/posts/PostsList';

function App() {
  return (
    <div className="App">
      <PostsList />
    </div>
  );
}

export default App;
