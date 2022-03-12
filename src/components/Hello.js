import { Route, Routes } from "react-router-dom";
export default function Hello() {
  return (
    <div>
      <h1>Hello</h1>
      <p>This is the home page</p>
     <Routes>
        <Route path="world" element={<p>this is world</p>} />
     </Routes>
    </div>
  );
}
