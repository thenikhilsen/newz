import React from "react";

const NewsItem = ({ title, description, url, urlToImage }) => {
  if(urlToImage==null){
    urlToImage="https://media.istockphoto.com/id/1056033100/vector/breaking-news-background.jpg?s=612x612&w=0&k=20&c=_LGo0WUlTgZOyqrf83UdvsaYIpjyiyucquETOj29e2I=";
  }
  return (
    <div className="card bg-dark text-light mb-3 d-flex justify-content-center align-items-center my-3 mx-3 px-2 py-2" style={{width: "18rem"}}>
      <img src={urlToImage} style={{maxHeight: "200px",height: "180px", width: "100%"}} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0,50)}</h5>
        <p className="card-text">
          {description?description.slice(0,90):"News is a report of a current event. It it information about something that has just happened."}
        </p>
        <a href={url} className="btn btn-primary">
          Full Article
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
