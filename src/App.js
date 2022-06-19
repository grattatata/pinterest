import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Upload from "./pages/Upload";
import PostDetail from "./pages/PostDetail";
import Header from "./components/Header";
import GlobalStyle from "./styles/GlobalStyle";
import { useState } from "react";
import Post from "./pages/Post";
import ButtonEle from "./elements/ButtonEle";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="App">
      <GlobalStyle />

      <Routes>
        {isLogin ? (
          <Route
            path="/"
            element={<Header isLogin={isLogin} setIsLogin={setIsLogin} />}
          >
            <Route path="main" element={<Main />} />
            <Route path="post" element={<Post />} />
            <Route path="post/postdetail" element={<PostDetail />} />
            <Route path="upload" element={<Upload />} />
          </Route>
        ) : (
          <Route
            path="/main"
            element={<Header isLogin={isLogin} setIsLogin={setIsLogin} />}
          ></Route>
        )}
      </Routes>
    </div>
  );
}

export default App;
