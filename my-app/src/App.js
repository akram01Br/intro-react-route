import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Hello from "./Hello";
import Home from "./Home";
import PostsList from "./PostsList";
import PostDetails from "./PostDetails";
import { postsContext } from "./contexts/postsContext";
import NotFound from "./NotFound";
import NewPost from "./NewPost";
import DeletePost from "./DeletePost";
import PostLayout from "./PostLayout";
function App() {
  let postsData = [
    {
      id: 1,
      title: "Hello world ",
      body: "sdqdksqdjqsdjqsdqsdqsdq",
    },
    {
      id: 2,
      title: "second post ",
      body: "sdqdksqdjqsdjqsdqsdqsdq",
    },
    {
      id: 3,
      title: "third post ",
      body: "sdqdksqdjqsdjqsdqsdqsdq",
    },
  ];
  return (
    <postsContext.Provider value={postsData}>
      <div className="App">
        {/* Routes */}
        <div style={{ fontSize: "30px" }}>
          <Link to="/home">
            <button style={{ fontSize: "30px" }}>Home</button>
          </Link>
          <Link to="/posts">
            <button style={{ fontSize: "30px" }}>post</button>
          </Link>
          <Link to="/hello">
            <button style={{ fontSize: "30px" }}>hallo</button>
          </Link>
        </div>
        <Routes>
          <Route path="/hello" element={<h1>{<Hello />}</h1>} />
          
          <Route path="/posts" element={<PostLayout/>}>
            <Route index element={<PostsList />} />
            <Route path=":postId" element={<PostDetails />} />
            <Route path="new" element={<NewPost />} />
            <Route path="delete" element={<DeletePost />} />
          </Route>

          <Route path="/" element={<h2>{<Home />}</h2>} />
          <Route path="/home" element={<h2>{<Home />}</h2>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </postsContext.Provider>
  );
}

export default App;
