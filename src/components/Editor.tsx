import React, { CSSProperties, useEffect } from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';
import { socket } from '..';

const styles = {
  editorParent: {
    width: "100%",
    height: "100%"
  } as CSSProperties,
  editor: {
    width: "100%",
    height: "100%",
    fontSize: 12,
    backgroundColor: "#1E1E1E",
    fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
  } as CSSProperties
};

function Editor() {

  const [code, setCode] = React.useState(``);

  useEffect(() => {

    socket.on('datachange', (data) => {
      setCode(data);
    });

  });

  return (
    <div style={styles.editorParent}>
      <CodeEditor
        value={code}
        language="js"
        placeholder="Enter your code"
        onKeyDown={(event) => {
          const code = event.currentTarget.value;
          setCode(code);
          socket.emit('write', code);
        }}
        padding={15}
        data-color-mode="dark"
        style={styles.editor}
      />
    </div>
  );
}
  
export default Editor;