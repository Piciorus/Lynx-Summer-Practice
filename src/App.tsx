import Layout from "./components/layout/Layout";
import TopicsPage from "./components/pages/topics/TopicsPage";
import HomePage from "./components/pages/topics/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CertainTopicPage from "./components/pages/topics/CertainTopicPage";
import SearchPage from "./components/pages/topics/SearchPage";
import ErrorPage from "./components/pages/topics/ErrorPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Layout children={<HomePage />} />} />
          <Route
            path="/topics"
            element={<Layout children={<TopicsPage />} />}
          />
          <Route
            path="/search"
            element={<Layout children={<SearchPage />} />}
          />
          <Route
            path="/t/:id"
            element={<Layout children={<CertainTopicPage />} />}
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
