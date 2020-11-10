import React from 'react';
import '../stylesheet/layout/App.css';
import wolf from '../images/wolf.png';
import owl from '../images/owl.jpg';
import cat from '../images/bosquenoruega.jpg';
import Card from "./Card";


function App() {
  const cards = [
    {
    id: 1,
    title: "Wolf",
    img: wolf,
    author: 'Unknown',
    date: new Date().toLocaleDateString(),
    tags: ['animal', 'wolf', 'snow'
        ],
    views: 23,
    description: "A happy Wolf."
    },
    {
    id: 2,
    title: "Owl",
    img: owl,
    author: 'Unknown',
    date: new Date().toLocaleDateString(),
    tags: ['animal', 'wolf', 'snow'
        ],
    views: 23,
    description: "A magestic owl with a deep look."
    },
    {
    id: 3,
    title: "Norweian Cat",
    img: cat,
    author: 'Unknown',
    date: new Date().toLocaleDateString(),
    tags: ['animal', 'wolf', 'snow'
        ],
    views: 23,
    description: "A beautiful fluffy Norweian Cat."
    }
]
    return(
      <div className="cards">
        {cards.map (card => (
          <Card
            author = {card.autor}
            date = {card.date}
            img = {card.img}
            key = {card.id}
            tags = {card.tags}
            title = {card.title}
            views = {card.views}
            >
            {card.description}
          </Card>
        ))}
      </div>
    );
  
}

export default App;
