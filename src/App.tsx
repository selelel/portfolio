import Main from "./Components/Main/Main";
import Navigation from "./Components/Main/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "./Components/Main/Blog";
import ArticleIndi from "./Components/Main/BlogIndi";
import Footer from "./Components/Main/Footer";
import { useEffect } from "react";
import { BlogThunk } from "./Store/Thunks/BlogThunk";
import { useSelector } from "react-redux";
import { useThunk } from "./Hooks/useThunk";
import { blogProps } from "./Types/Slice";

function App() {
  const [fetchBlog] = useThunk(BlogThunk);
  const { blog } = useSelector((state: blogProps) => state.blog);

  useEffect(() => {
    fetchBlog();
  }, [fetchBlog]);

  const blogRoutes = blog.map((post) => (
    <Route
      key={post.id}
      path={`/portfolio/blogs/${post.id}`}
      element={<ArticleIndi props={post} />}
    />
  ));

  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/portfolio" element={<Main />} />
          <Route path="/portfolio/blogs" element={<Blog />} />
          {blogRoutes}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
