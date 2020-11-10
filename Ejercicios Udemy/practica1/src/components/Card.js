import React from 'react';

const Card = ({author, date, img, key, title, views, children}) =>(
  
    <div className="card">
      <small>{key}</small>
      <h2 className="title">{title}</h2>
      <img className ="image" src={img} alt={title}></img>
      <h3> {author}</h3>
      <small>{date}</small>
      <p className="description"> {children}</p>
    </div>
  );

  export default Card;