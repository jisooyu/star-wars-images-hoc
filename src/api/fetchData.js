import axios from "axios";

const fetchData = async (range) => {
  let starData = [];
  try {
    for (let i = 1; i <= range; i++) {
      const data = await axios.get(
        `https://akabab.github.io/starwars-api/api/id/${i}.json`
      );
      const result = await data.data;
      starData.push(result);
    }
  } catch (error) {
    console.log("some errors are occured");
  }
  return starData;
};

export default fetchData;
