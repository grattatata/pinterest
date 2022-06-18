import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Upload from "./pages/Upload";
import PostDetail from "./pages/PostDetail";
import Header from "./components/Header";
import GlobalStyle from "./styles/GlobalStyle";
import { useState } from "react";
import Post from "./pages/Post";

function App() {
  return (
    <div className="App">
      <Header />
      <GlobalStyle />
      <Routes>
        {/* Main 페이지 */}
        <Route path="/main" element={<Main />} />
        {/* Post 페이지 */}
        <Route path="/post" element={<Post />} />
        {/* Postdetail 페이지 */}
        <Route path="/post/postdetail" element={<PostDetail />} />
        {/* Upload 페이지 */}
        <Route path="upload" element={<Upload />} />
      </Routes>
    </div>
  );
}

export default App;
