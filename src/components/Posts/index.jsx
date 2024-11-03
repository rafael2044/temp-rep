import Post from "../Post"
import './styles.css'

const Posts = ({posts})=>(
    <div className='posts'>
          {posts.map(post=>(
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
              cover={post.cover}
            />
          ))}
    </div>
)

export default Posts
