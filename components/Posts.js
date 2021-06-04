import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import Post from "./Post";

function Posts({posts}) {
  const [realTimePosts] = useCollection(
    db.collection("posts").orderBy("timestamp", "desc")
  );

  return <div> 
 
  {realTimePosts ? (

      realTimePosts?.docs.map(post =>(
          <Post
          key={post.id}
          name={post.data().name}
          email={post.data().email}
          image={post.data().image}
          message={post.data().message}
          postImage={post.data().postImage}
          timestamp={post.data().timestamp}
          />
      ))
   
      
 
  ):(
    posts.map(post =>(
      <Post
      key={post.id}
      name={post.name}
      email={post.email}
      image={post.image}
      message={post.message}
      postImage={post.postImage}
      timestamp={post.timestamp}
      />
  ))
  )} 
  </div>
}

export default Posts;
