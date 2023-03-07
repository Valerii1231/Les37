import React from "react";
import Hello from "./componets/Hello";
function App() {
  return (
    <div style={{ backgroundColor: '#46B1DE' }} className="wrapper">
      <Hello></Hello>
      <button onClick={() => console.log('Click on button')}>Button</button>
    </div>
    );
}
export default App;