import { useNavigate, useParams } from "react-router-dom";
export default function Post() {
  const params = useParams();
  const navigate = useNavigate();
  
  const handleGoBack = () => {
      // navigate('/posts',{
      //   replace:true,
      // })

      //one-step-back
      navigate(-1)
  }

  return (
    <div>
      <h1>Post</h1>
      <p>Post id is {params.postId}</p>
      <button type="button" onClick={handleGoBack}> Go to posts </button>
    </div>
  );
}
