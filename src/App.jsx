import { useState } from "react";
import "./App.css";
import Title from "./Components/Title";
import Field from "./Components/Field";

function App() {
  const [text, setText] = useState("");

  const titleHandler = (event) => {
    setText(event.target.value);
  };

  const koders = [
    { id: 1, name: "koder1" },
    { id: 2, name: "koder2" },
    { id: 3, name: "koder3" },
  ];

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <Field fieldHandler={titleHandler} />
            <ul className="list-group">
              {koders.map((koder) => (
                <li key={koder.id} className="list-group-item">
                  {koder.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-12 col-md-6">
            {text === "" ? (
              <div className="alert alert-info" role="alert">
                No tenemos título
              </div>
            ) : (
              <Title text={text} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
