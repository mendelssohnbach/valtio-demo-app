import { useState } from 'react';
import { useSnapshot } from 'valtio';
import styles from '../styles/Home.module.css';
import { addItem, state } from '../state/state';
import Link from 'next/link';
import { NextPage } from 'next';

const About: NextPage = () => {
  const { todoList } = useSnapshot(state);

  const [todo, setTodo] = useState<string>('');

  return (
    <div className={styles.container}>
      <Link href="/">Index</Link>
      <h1>About Page</h1>
      <h3>TodoList</h3>
      <input
        type="text"
        onChange={(e) => setTodo(e.target.value)}
      />
      <input
        type="submit"
        value="追加"
        onClick={() => addItem(todo)}
      />
      {todoList.map((todo) => {
        return <p key={todo}>・{todo}</p>;
      })}
    </div>
  );
};

export default About;
