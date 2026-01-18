import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Create from "./Create";
import Display from "./pages/Display";
import Edit from "./pages/Edit";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Create/>} />
        <Route path="/display" element={<Display/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
