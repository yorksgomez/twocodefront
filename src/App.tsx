import React, { CSSProperties, useEffect } from 'react';
import { socket } from '.';
import Editor from './components/Editor';
import Icon from './components/Icon';
import './styles/App.css';

const styles = {
  appHeader: {
    
  } as CSSProperties,
  main: {
    minWidth: "100vw",
    minHeight: "100vh",
    display: "flex",
    backgroundColor: "#252526"
  } as CSSProperties,
  aside: {
    width: '20%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',

  } as CSSProperties,
  content: {
    minHeight: '100vh',
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)'
  } as CSSProperties
};

function App() {

  useEffect(() => {
    socket.connect();
  });

  return (
    <div>
      <header style={styles.appHeader}>
      </header>
      <section style={styles.main}>
        <section  style={styles.aside}>
          <Icon></Icon>
        </section>
        <section style={styles.content}>
          <Editor></Editor>
        </section>
      </section>
    </div>
  );
}

export default App;
