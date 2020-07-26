import React from 'react';

const MediaCard = props => {
      return(
       <div className="App">
         <div className="card">
           <div className="card-profile">
             <img className="card-image" src= {props.img}/>
             <div>
               <p className="card-profile-name">
                 {props.name}
               </p>
               <p className="card-profile-date">
                 {props.date}
               </p>
             </div>
           </div>
           <div className="card-text">
             <p>{props.text}</p>
           </div>
           <div className="card-more">
             <p>{props.more}</p>
             <p> {props.likes} </p>
             <i> {props.heart}</i>
           </div>
         </div>
        </div>
      );
       
  }
export default MediaCard;
