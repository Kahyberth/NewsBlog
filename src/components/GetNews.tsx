import { useEffect, useState } from "react";
import getNews from "../helper/getNews";

export default function GetNews() {
    type NewsItem = {
        title: string;
        urlToImage: string;
        description: string;
        author: string;
        publishedAt: string;
    }
    const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    const callApi = async () => {
      const api = await getNews();
      setNews(api);
    };
    callApi();
  }, []);


  return (
    news.map((item: NewsItem, index: number) => (
      <div className="post" key={index}>
        <div className="image">
            <img src={item.urlToImage} alt="" />
        </div>
        <div className="texts">
            <h2>{item.title}</h2>
            <p className="info">
                <a href="author">{item.author}</a>
                <time>{item.publishedAt}</time>
            </p>
            <p className="summary">{item.description}</p>
        </div>
      </div>
    ))
  )
}
