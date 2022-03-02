import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [item, setItem] = useState([]);
  const [visible, setVisible] = useState(3);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        setItem(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const showMoreItem = () => {
    setVisible((prevValue) => prevValue + 3);
  };
  return (
    <div className="App">
      {item.slice(0, visible).map((item) => (
        <div className="card">
          <div className="id">
            <span>{item.id}</span>
          </div>
          <p>{item.title}</p>
          <p>{item.setItem}</p>
          <img src={item.thumbnailUrl} alt="" />
        </div>
      ))}
      <button onClick={showMoreItem}>Load More</button>
    </div>
  );
}

export default App;
