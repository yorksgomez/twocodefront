import React, { CSSProperties, useEffect, useRef } from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';
import { socket } from '..';

const styles = {
  editorParent: {
    overflowY: "scroll",
    maxHeight: "calc(50vh - 60px)",
    position: "relative"
  } as CSSProperties,
  editor: {
    minHeight: "100%",
    fontSize: 12,
    backgroundColor: "#1E1E1E",
    fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
  } as CSSProperties,
  filename: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 10,
    width: 80,
    height: 25,
    backgroundColor: "#121212",
    color: "#EFEFEF",
    fontSize: 12,
    display: "flex",
    justifyContent: "center", 
    alignItems: "center"
  } as CSSProperties
};

interface Props {
  filename: string,
  language: string
}

function Editor(props : Props) {
  const [saveWrite, setSaveWrite] = React.useState<ReturnType<typeof setTimeout>>();
  const [code, setCode] = React.useState('');
  const doSave = (code : string) => {
    socket.emit('write', code);
  };

  useEffect(() => {
    socket.on('datachange', (data) => {
      setCode(data);
    });

    return () => { socket.removeAllListeners() };
  });
  
  return (
    <div style={styles.editorParent}>
      <div style={styles.filename}>{props.filename}</div>
      <CodeEditor
        value={code}
        language={props.language}
        placeholder="Enter your code"
        onKeyUp={(event) => {
          const code = event.currentTarget.value;

          clearTimeout(saveWrite);
          setSaveWrite(setTimeout(doSave, 1500, code));
        }}
        padding={35}
        data-color-mode="dark"
        style={styles.editor}
      />
    </div>
  );
}
  
export default Editor;