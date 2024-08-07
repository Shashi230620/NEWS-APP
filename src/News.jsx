import React from "react";
import { useEffect,useState } from "react";
import Sppiner from "./Sppiner";

const News=()=>{
    const [news, setNews] = useState([]);
    const [page,SetPage]=useState(1);
    const[pageSize,setPageSize]=useState(8);
    const[loader,setLoad]=useState(false);


  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoad(true)
        const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=82ecff82bdf1451bbbd48e6bf77ec5f6&page=${page}&pageSize=${pageSize}`;
        const response = await fetch(url);
        const result = await response.json();
        console.log(result.articles)
        setNews(result.articles);
        setLoad(false)
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews(); // Call the async function to fetch data
  }, []);
  const Next=async()=>{
    setLoad(true)
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=82ecff82bdf1451bbbd48e6bf77ec5f6&page=${page}&pageSize=${pageSize}`;
    const response = await fetch(url);
    const result = await response.json();
    console.log(result.articles)
    setNews(result.articles)
    setLoad(false)
    SetPage(page+1);

  }
  const preview=async()=>{
    setLoad(true)
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=82ecff82bdf1451bbbd48e6bf77ec5f6&page=${page}&pageSize=${pageSize}`;
    const response = await fetch(url);
    const result = await response.json();
    console.log(result.articles)
    setNews(result.articles);
    setLoad(false)
    SetPage(page-1)

  }
    return(<>
    { loader&& <Sppiner /> }
    <div className="Container">
    <div className="News_container">
        {news.map((value) => (
          <div className="News_Cards" key={value.url}>
            <div className="Image">
              <img src={!value.urlToImage?"data:image/jpeg;base64,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":value.urlToImage} alt={value.title} /> {/* Use alt attribute for accessibility */} 
              
            </div>
            <div className="Heading">
              <h3>{value.source.name}</h3> 
            </div>
            <div className="Paragraph">
              <p>{value.title}</p> 
            </div>
            <div className="Link">
              <a href={value.url}><button type="button">CLICKS</button></a>
            </div>
          </div>
))}
        <div className="btn">
          <div className="btn1">
            <button onClick={preview} id="btn">Previous</button>
          </div>
          <div className="btn2">
            <button onClick={Next} id="btn">Next</button>
          </div>
        </div>
      </div> 
    </div>
    </>)
}
export default News