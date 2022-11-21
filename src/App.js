import React, { useState, useEffect, useCallback, useMemo } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { Badge, Button, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeNumber, changeTitle, getData } from "./redux/action";

function App() {
  const [select, setSelect] = useState(null);
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.posts);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("posts"));
    if (!data?.length) {
      dispatch(getData());
    }
  }, []);
 


  return (
    <div className="App">
      {loading ? (
        <Spinner animation="grow" variant="warning" />
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        data.map((item, index) => {
          if (item.id === select) {
            return (
              <div>
                <input
                  value={text}
                  type="text"
                  onChange={(e) => setText(e.target.value)}
                />
                <Button 
                className="ms-2"
                  variant="warning"
                  onClick={() => {
                    dispatch(changeTitle(index, text));
                    setSelect(null);
                  }}
                >
                  edit
                </Button>
              </div>
            );
          } else {
            return (
              <p
                key={item.id}
                onClick={() => {
                  setText(item.title);
                  setSelect(item.id);
                }}
              >
                {item.title}
              </p>
            );
          }
        })
      )}
    </div>
  
  );
}

export default App;
