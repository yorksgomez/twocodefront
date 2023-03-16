import React, { CSSProperties, KeyboardEvent } from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';

const editor:CSSProperties = {
  width: 800, 
  height:400, 
  backgroundColor: "#1E1E1E", 
  color: '#FEF', 
  textAlign: "left",
  padding: 5
};

function Editor() {

  const [code, setCode] = React.useState(
    `function add(a, b) {\n  return a + b;\n}`
  );

  return (
    <div className="EditorParent">
      <CodeEditor
        value={code}
        language="js"
        placeholder="Please enter JS code."
        onChange={(evn) => setCode(evn.target.value)}
        padding={15}
        data-color-mode="dark"
        style={{
          width: "80vw",
          height: "100vh",
          fontSize: 12,
          backgroundColor: "#1E1E1E",
          fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
        }}
      />
    </div>
  );
}
  
export default Editor;