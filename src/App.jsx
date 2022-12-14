import React from "react";
import ReactDOM from "react-dom";

import Editor from "@monaco-editor/react";

export const App = _ => {
  function handleEditorDidMount(_, editor) {
    console.log(editor.addCommand, editor);
  }

  return (
    <Editor
      editorDidMount={handleEditorDidMount}
      height="90vh"
      language="plaintext"
      value="// ここにソースコードを記述"
      options={{ fontSize: 20 }}
    />
  );
};

