import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SharedLayout, Home, Repos, Repo, NotFound } from "./pages"
import { Error } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout/>}>
          <Route index element={<Home />} />
          <Route path="repos" element={<Repos />} />
          <Route path="repos/:repoName" element={<Repo />} />
          <Route path="forbidden" element={<Error />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;