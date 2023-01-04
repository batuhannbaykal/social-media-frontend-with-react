import Share from "../share/Share";
import Post from "../post/Post";
import "./feed.css";
import { Posts } from "../../dummyData";

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
      <h5>
        <center>Thanks to Lamadev youtube channel..</center>
      </h5>
    </div>
  );
}
