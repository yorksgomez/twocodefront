import React, { CSSProperties, useEffect } from 'react';
import { socket } from '.';
import Editor from './components/Editor';
import Icon from './components/Icon';
import Computer from './components/Computer';
import './styles/App.css';

const styles = {
  main: {
    minWidth: "100vw",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#252526"
  } as CSSProperties,
  appHeader: {
    width: '100%',
    height: '120px',
    display: 'flex',
    flexDirection: 'row',
  } as CSSProperties,
  content: {
    minHeight: 'calc(100vh - 120px)',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: "50% 50%",
    gridTemplateRows: "50% 50%",
    fontSize: 'calc(10px + 2vmin)',
    gridAutoColumns: "50%"
  } as CSSProperties
};

function App() {

  useEffect(() => {
    socket.connect();

    return () => { socket.disconnect(); }
  });

  return (
    <div style={styles.main}>
      <header style={styles.appHeader}>
        <Icon></Icon>
      </header>
      <section style={styles.content}>
        <Editor language="html" filename="index.html" hearname="datachange1" writename='write1'></Editor>
        <Editor language="css" filename="index.css" hearname="datachange2" writename='write2'></Editor>
        <Editor language="js" filename="index.js" hearname="datachange3" writename='write3'></Editor>
        <Computer></Computer>
      </section>
    </div>
  );
}

export default App;
