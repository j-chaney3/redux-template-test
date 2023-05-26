import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import PostsList from './features/posts/PostsList';

function App() {
  return (
    <main className="App">
      <PostsList />
    </main>
  );
}

export default App;
