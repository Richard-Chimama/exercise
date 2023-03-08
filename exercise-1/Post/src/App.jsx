import React from "react";
import profilePicture from "./assets/profile-picture.png";
import Post from "./App/Post";
import './App.css'
import CommentSection from "./App/CommentSection";

function App() {
  const [display, setDisplay] = React.useState(false)
  const post = {
    headline: 'Some headline',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos',
    date: new Date(),
    author: {
      fullname: 'John Doe',
      image: profilePicture
    }
  }

  const comment = {
    content: 'Awesome post dude!',
    date: new Date(),
    author: {
      fullname: 'Jane Doe',
      image: profilePicture
    }
  }

  return (
    <div id="container">
      <Post post={post}/>
      <button onClick={()=>setDisplay(!display)}>Show/Hide component</button>
      { display && <CommentSection comment={comment} />}
    </div>
  )
}

export default App
