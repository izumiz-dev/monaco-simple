import Editor from "@monaco-editor/react";

export const App = _ => {
  return (
    <>
      <h1 style={{ padding: '10px' }}>テキストエディタ</h1>
      <Editor
        height="90vh"
        language="plaintext"
        value="// ここにソースコードを記述（内容は保存されません）"
        options={{ fontSize: 20 }}
      />
    </>
  );
};

