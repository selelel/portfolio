import React from "react";
import Main from "./Components/Main/Main";
import { Provider } from "./Context/Context";
import Nav from "./Components/Main/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "./Components/Main/Blog";
import ArticleIndi from "./Components/Main/BlogIndi";
import Footer from "./Components/Main/Footer";

function App() {
  return (
    <>
      <Provider>
        <Router>
          <Nav />
          <Routes>
            <Route path="/portfolio" element={<Main />} />
            <Route path="/portfolio/blogs" element={<Blog />} />
            <Route path="/portfolio/blogs/:id" element={<ArticleIndi />} />
          </Routes>
          <Footer />
        </Router>
      </Provider>
    </>
  );
}

export default App;
