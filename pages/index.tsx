import { useState } from 'react';
import { useSnapshot } from 'valtio';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { addItem, state } from '../state/state';
import { NextPage } from 'next';

const Home: NextPage = () => {
  const snap = useSnapshot(state);

  const [todo, setTodo] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleClick = () => {
    addItem(todo);
  };

  return (
    <div className={styles.container}>
      <Link href="/about">About</Link>
      <h1>Index Page</h1>
      <h3>TodoList</h3>
      <input
        type="text"
        onChange={handleChange}
      />
      <input
        type="submit"
        value="追加"
        onClick={handleClick}
      />
      {snap.todoList.map((todo) => {
        return <p key={todo}>・{todo}</p>;
      })}
    </div>
  );
};

export default Home;
