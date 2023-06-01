import { useState } from "react";
import "./App.css";
import Checkbox from "./components/Checkbox";

function App() {
  const [checked, setChecked] = useState(false);

  return (
    <main className="checks">
      <Checkbox onChange={setChecked} checked={checked} />
      <Checkbox onChange={setChecked} checked={checked} />
      <Checkbox onChange={setChecked} checked={checked} />
      <Checkbox onChange={setChecked} checked={checked} />
    </main>
  );
}
export default App;
