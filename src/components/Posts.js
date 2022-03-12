import { Link } from "react-router-dom";


const posts = [
  {name : "Post One", id:"1"},
  {name : "Post Two", id:"2"},
  {name : "Post Three", id:"3"},
]

export default function Posts() {
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {
          posts.map((data, index) => (
          <li key={index}>
            <Link to={`/posts/${data.id}`}>{data.name}</Link>
          </li>
          ))
        }
       
        
      </ul>
    </div>
  );
}
