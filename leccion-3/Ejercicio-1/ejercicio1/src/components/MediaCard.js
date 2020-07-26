import React from 'react';

class MediaCard extends React.Component {
  render() {
      return(
       <div className="App">
         <div className="card">
           <div className="card-profile">
             <img className="card-image" src= {this.props.img}/>
             <div>
               <p className="card-profile-name">
                 {this.props.name}
               </p>
               <p className="card-profile-date">
                 {this.props.date}
               </p>
             </div>
           </div>
           <div className="card-text">
             <p>{this.props.text}</p>
           </div>
           <div className="card-more">
             <p>{this.props.more}</p>
             <p> {this.props.likes} </p>
             <i> {this.props.heart}</i>
           </div>
         </div>
        </div>
      );
    }   
  }
export default MediaCard;
