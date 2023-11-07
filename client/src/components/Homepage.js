import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CardContainer from "./CardContainer";

function Homepage () {

const cardDetails = [
  {url: "/stars",photoUrl:"https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80", className:"card1", name:"Aim for the stars!", paragraph:"Astonishing pictures of the Universe"},
  {url: "/music",photoUrl:"https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", className:"card2", name:"Music", paragraph:"Music for programming, stay focused, sleep, and relaxation"},
  {url: "/guided-meditation",photoUrl:"https://images.unsplash.com/photo-1607551848581-7ee851bf978b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80", className:"card3", name:"Guided meditation", paragraph:"Try immersive guided meditation"},
  {url: "/breathwork",photoUrl:"https://images.unsplash.com/photo-1502139214982-d0ad755818d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", className:"card4", name:"Breathwork exercises", paragraph:"Holotropic breathwork, Wim Hof Technique"},
  {url: "/sacred-geometry",photoUrl:"https://images.unsplash.com/photo-1561148493-89acae53e6a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", className:"card5", name:"Sacred Geometry", paragraph:"Visualization power of mandalas"},
  {url: "/story-sharing",photoUrl:"https://images.unsplash.com/photo-1617575521317-d2974f3b56d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80", className:"card6", name:"StorySharing", paragraph:"Join the SiderealMind community and share your experience"},
  {url: "/about-us",photoUrl:"https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", className:"card7", name:"About SiderealMind", paragraph:"Learn more about us"}
]

return (
  <div className="App">
    <div className='card-container'>
      {cardDetails.map((card, i) => (
        <Link to={card.url} key={i} className={card.className}>
          <CardContainer
            picture={card.photoUrl}
            className={card.className}
            name={card.name}
            paragraph={card.paragraph}
          />
        </Link>
      ))}
    </div>
  </div>
);}
export default Homepage;