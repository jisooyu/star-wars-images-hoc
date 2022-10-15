import { useState, useEffect } from "react";
import fetchData from "./api/fetchData";
import StarWars from "./components/StarWars";
import "./style.css";

/*   
어떤식으로 route를 만들지.. 
초기 화면 - 단순한 Star Wars 이미지와 설명, 역사
navbar에는 characters (display) , search를 만들기 
이렇게 디자인 하면 초기 화면, display 화면, search 화면의 3개가 필요
*/

function App() {
  const [starwars, setStartWars] = useState([]);
  const consoleData = () => {
    console.log("starwars from cb", starwars);
  };
  const getData = async (range, cb) => {
    const starData = await fetchData(range);
    setStartWars(starData);
    cb();
  };
  let fetchNum = 20;
  useEffect(() => {
    getData(fetchNum, consoleData);
    // eslint-disable-next-line
  }, []);

  return <StarWars stars={starwars} />;
}

export default App;
