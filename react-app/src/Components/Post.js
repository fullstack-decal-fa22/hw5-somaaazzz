import Comments from "./Comments";

const Post = ({ title, body, comments, id }) => {
  console.log(id);
  return (
    <div style={{ textAlign: "left", marginBottom: "12px" }}>
      <h3>{title}</h3>
      <p>{body}</p>
      {<Comments comments={comments} postId={id} />}
    </div>
  );
};

export default Post;
