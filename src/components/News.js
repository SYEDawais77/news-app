import React, { useEffect, useState, useContext } from 'react'
import NewItem from './NewItem'
import Spinner from './spinner';
import PropTypes from 'prop-types'
import "../App.css"
import InfiniteScroll from "react-infinite-scroll-component";
import { ThemeContext } from '../App';


const News = (props) => {
  const styles = useContext(ThemeContext)
  const Capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResult, setTotalResult] = useState(0);

  const UpdateNews = async () => {
    props.setProgress(10)
    console.log(page)
    const apiKey = process.env.REACT_APP_NEWS_API_KEY;
    const newApiUrl = process.env.REACT_APP_NEWS_API_URL;
    const url = `${newApiUrl}top-headlines?country=${props.country}&category=${props.category}&apiKey=${apiKey}&page=${page}&pageSize=${props.pageSize}`;
    console.log(url);
    let response = await fetch(url)
    props.setProgress(30)
    let parsedData = await response.json()
    props.setProgress(50)
    setArticles(parsedData.articles)
    setTotalResult(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100)
  }

  useEffect(() => {
    document.title = `Global News - ${Capitalize(props.category)}`;
    UpdateNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const fetchMoreData = async () => {
    console.log(page)
    const apiKey = process.env.REACT_APP_NEWS_API_KEY;
    const newApiUrl = process.env.REACT_APP_NEWS_API_URL;
    const url = `${newApiUrl}top-headlines?country=${props.country}&category=${props.category}&apiKey=${apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
    console.log(url);
    if (articles.length <= 100) {
      let response = await fetch(url)
      if (response.ok) {
        let parsedData = await response.json()
        setArticles(articles.concat(parsedData.articles))
        setPage(page + 1)
        setLoading(false)
      } else {
        console.log("there is an error")
      }
    } else {
      console.log("error")
    }
  }
  return (
    <>
      <h1 className="text-center " style={{ backgroundColor: `${styles === "light" ? "white" : "#2b0340"}`, color: `${styles === "light" ? "black" : "white"}` }}>Global News - Top {Capitalize(props.category)} Headlines</h1>
      {loading && <Spinner />}
      <InfiniteScroll style={{ backgroundColor: `${styles === "light" ? "white" : "#2b0340"}` }}
        dataLength={articles.length}
        hasMore={articles.length !== totalResult}
        next={fetchMoreData}
        loader={loading && <Spinner />}
        endMessage={<h4 style={{ color: `${styles === "light" ? "black" : "white"}` }} className='text-center my-4'>You catch all {Capitalize(props.category)} Headlines</h4>}
      >
        <div className="container">
          <div className="row mx-auto">
            {articles.map((element, index) => (
              <div className="col-md-4" key={index}>
                <NewItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  url={element.url}
                  author={element.author}
                  dateTime={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </>
  )
}

News.defaultProps = {
  country: 'us',
  pageSize: 30,
  category: 'general',
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News