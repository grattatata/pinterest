import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Upload from "./pages/Upload";
import PostDetail from "./pages/PostDetail";
import Header from "./components/Header";
import GlobalStyle from "./styles/GlobalStyle";
import { useEffect, useState } from "react";
import Post from "./pages/Post";
import ButtonEle from "./elements/ButtonEle";
import { useSelector, useDispatch } from "react-redux";
import { increase, addItem } from "./store/cartSlice";
import { addList, getList } from "./store/todoReducer";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const dispatch = useDispatch();

  // const onCreate = (e) => {
  //   e.preventDefault();
  // if (inputValue) {
  //   const newList = { content: inputValue };
  //   dispatch(addList(newList));
  // } else {
  //   console.log("적으세요!");
  // }
  // };

  // useEffect(() => {
  //   dispatch(getList());
  // }, []);
  return (
    <div className="App">
      <GlobalStyle />
      <Routes>
        {/* {isLogin ? (
          <Route
            path="/"
            element={<Header isLogin={isLogin} setIsLogin={setIsLogin} />}
          >
            <Route path="post" element={<Post />} />
            <Route path="post/postdetail" element={<PostDetail />} />
            <Route path="upload" element={<Upload />} />
          </Route>
        ) : (
          <Route
            path="/main"
            element={<Header isLogin={isLogin} setIsLogin={setIsLogin} />}
          ></Route>
        )} */}
        <Route path="upload" element={<Upload />} />
      </Routes>
    </div>
  );
}

export default App;
