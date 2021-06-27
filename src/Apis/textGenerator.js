import axios from 'axios';
export const getRandomText = () => {
  const options = {
    method: 'GET',
    url: 'https://montanaflynn-lorem-text-generator.p.rapidapi.com/paragraph',
    params: { length: '3', count: '1' },
    headers: {
      'x-rapidapi-key': '38294d1a91msh0ba02fc5efc0285p1d60d9jsn513ce3fd72bc',
      'x-rapidapi-host': 'montanaflynn-lorem-text-generator.p.rapidapi.com',
      'Access-Control-Allow-Origin': '*',
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};
