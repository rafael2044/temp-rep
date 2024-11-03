import './styles.css'
const Post = ({id, title, body, cover})=> (
    <div className='post-content'>
        <img src={cover} alt={title}/>
        <p className='title'>{title}</p>
        <p className='body'>{body}</p>
        <span className="numPost"><p>{id}</p></span>
    </div>
)

export default Post
