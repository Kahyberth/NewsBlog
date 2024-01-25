import axios from 'axios';

const getNews = async () => {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_APIKEY}&pageSize=10`);
    return response.data.articles;
}


export default getNews;