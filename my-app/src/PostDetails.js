import {useParams}  from"react-router-dom";
import { useContext  } from "react";
import { postsContext } from "./contexts/postsContext";

export default function PostDetails(){
    const {postId} = useParams();
    const posts = useContext(postsContext);
    const post = posts.find((p) =>{
        return p.id == postId;
    })
console.log(post);
if (post)
{
return (
<>
<h2>Post Details Page</h2>
<h1>{post.title}</h1> 

<p>{post.body}</p>
</>


);
}else
{
return(
    <>
    
    <h1> The Post With  Id  :{postId} Not Existe</h1>
    
    </>
)

}


}