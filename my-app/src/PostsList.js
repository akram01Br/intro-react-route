import { Link } from "react-router-dom";

import { postsContext } from "./contexts/postsContext";
import {  useContext  } from "react";

export default function PostsList(){
    const posts = useContext(postsContext);
    let postList = posts.map((post) => {
        return(
            <Link key={post.id} to={`/posts/${post.id}`}>
                <div  style={{background:"orange", marginTop:"10px", padding:"20px"}}>
                    <h1>{post.title}</h1>
                </div>
</Link> 
        );
});
return ( <>{ postList }</> );
}