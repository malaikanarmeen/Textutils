import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner'
import PropTypes from 'prop-types'


export class News extends Component {
  static defaultProps = {
    country: 'ma',
    pageSize: 8,
    category: 'general',
  }

  static propTypes ={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,

  }
  constructor(){
    super();
    this.state = {
      articles: [],
      loading: false,
      page:1

    }
  }
  async updateNews(){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=c357a62d5e0c44df9ef9c14307d18e69&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});let data = await fetch(url);
    let parseData = await data.json()
    this.setState({articles: parseData.articles,
       totalResults: parseData.totalResults,
      loading: false})  

  }
   async componentDidMount(){
    this.updateNews();  
  

  }
  handlePreviousClick = async ()=>{
    
    this.setState({page: this.state.page -1});
    this.updateNews();

  }
  handleNextClick = async ()=>{
    
       this.setState({page: this.state.page +1});
       this.updateNews();
  }

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{margin: '35px 0px;'}}>NewsMonkey - Top Headlines</h1>
        {this.state.loading && <Spinner/>}    
        <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{
           return <div className="col-md-4" key={element.url}>
           <NewsItems  title= {element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
        </div>
          
        })}
        
           
            
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" class="btn btn-dark " onClick={this.handlePreviousClick}> &larr; Previous</button>
        <button disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" class="btn btn-dark " onClick={this.handleNextClick}>Next &rarr;</button>

        

 
        </div>
      </div>
    )
  }
}

export default News

