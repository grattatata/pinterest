import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Upload from "./pages/Upload";
import PostDetail from "./pages/PostDetail";
import Header from "./components/Header";
import GlobalStyle from "./styles/GlobalStyle";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Header />
      <GlobalStyle />
      <Routes>
        {/* Main 페이지 */}
        <Route path="/main" element={<Main />}></Route>
        {/* Post 페이지 */}
        <Route path="/post" element={<Main />}>
          {/* Postdetail 페이지 */}
          <Route path="postdetail/:id" element={<PostDetail />}></Route>
          {/* Upload 페이지 */}
          <Route path="upload" element={<Upload />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
