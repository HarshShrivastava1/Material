import { useState } from "react";

const App = () => {
  const [name, setName] = useState("John");
const ClickHandler = (value) => {
  setName(value);
};
  
return (
  <>
    <h1>{name}</h1>
    <button onClick={() => ClickHandler("Anurag")}>Change Name</button>
  </>
);
}



export default App;
