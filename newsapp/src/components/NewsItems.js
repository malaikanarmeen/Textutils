import React, { Component } from 'react'

export class NewsItems extends Component {
  
  render() {
    let {title, description, imageUrl, url} = this.props;
    return (
      <div className="my-3">
        <div className="card" >
  <img src={!imageUrl?"https://aujourdhui.ma/wp-content/uploads/2023/01/Institut-arts-et-cultures-pour-le-developpement-Marrakech.jpg":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <a rel="noreferrer" href={url} target="_blank" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItems