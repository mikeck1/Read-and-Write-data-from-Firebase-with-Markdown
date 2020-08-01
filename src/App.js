import React from 'react';
import logo from './logo.svg';
import './App.css';
import Blog from "./components/blog";
import MEDitor from "@uiw/react-md-editor";
import db from "./utils/firestore"

function App() {
  const mkdStr = `# Markdown Editor for React

**Hello world!!!**

\`\`\`javascript
import React from "react";
import ReactDOM from "react-dom";
import MEDitor from '@uiw/react-md-editor';

export default function App() {
  const [value, setValue] = React.useState("**Hello world!!!**");
  return (
    <div className="container">
      <MEDitor
        value={value}
        onChange={setValue}
      />
      <MDEditor.Markdown source={value} />
    </div>
  );
}
\`\`\`
`;
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const dbb = db.firestore()
      const data = await dbb.collection("test_collection").get()
      setPosts(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    }
    fetchData()
  }, [])

  const [body, setBody] = React.useState(mkdStr);
  const onCreate = () => {
    const dbb = db.firestore()
    console.log(body)
    dbb.collection('test_collection').add({ body: body })
  }

  return (
    <div className="App">

      <div className="container">
        <button onClick={onCreate}>Submit</button>
        <MEDitor height={200} value={body} onChange={setBody} />
        <div style={{ padding: "50px 0 0 0" }} />
        <MEDitor.Markdown source={body} />
      </div>
Stuff from Firebase
      {posts.map(post => (
        <div>
          <MEDitor.Markdown source={post.body} />
        </div>
      )
      )}

    </div>
  );
}

export default App;
