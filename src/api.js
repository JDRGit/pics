import axios from "axios";

const clientId = "vBDfLG26ijbXWgccEA6aYzhJmqhG17Q17EIQFVu5xG0";
const apiUrl = "https://api.unsplash.com/search/photos";

const searchImages = async (term) => {
  const response = await axios.get(apiUrl, {
    headers: {
      Authorization: `Client-ID ${clientId}`,
    },
    params: {
      query: term,
    },
  });
  console.log(response.data);
  return response.data.results;
};

export default searchImages;

