import { Navigate,  Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Hello from "./components/Hello";
import Post from "./components/Post";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" exact element={<Navigate to='/hello' />}/>
        <Route path="/hello" element={<Hello />} />
        <Route path="/posts" exact element={ <Posts />} />
        <Route path="/posts/:postId" element={ <Post />} />
      </Routes>
    </div>
  );
}

export default App;
