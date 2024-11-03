import { Component } from 'react'
import './styles.css'
import { loadPosts } from '../../utils/load-posts';
import  Posts from '../../components/Posts';
import Pagination from '../../components/Pagination';
import Search from '../../components/Search'

export default class Home extends Component{
  
  state = {
    posts: [],
    allPosts: [],
    postsPerPage: 6,
    firstPage: 0,
    currentPage: 0,
    lastPage: 0,
    lookingForPost: false
  }

  componentDidMount(){
    this.loadPosts();    
  }

  loadPosts = async ()=>{
    const postsAndPhotos = await loadPosts()
    const {postsPerPage, currentPage} = this.state
    this.setState({
      posts: postsAndPhotos.slice(currentPage, postsPerPage),
      allPosts: postsAndPhotos,
      lastPage: Math.trunc(postsAndPhotos.length / postsPerPage)+1
    });
      
  }

  nextPage = (page)=>{
    const {allPosts, postsPerPage, lastPage, currentPage, firstPage} = this.state
    if (page===firstPage){
      this.firstPage()
    }else if (page === lastPage){
      this.lastPage()
    }else if(page !== currentPage){
      this.setState({
        posts: allPosts.slice(page*postsPerPage, (page+1)*postsPerPage),
        currentPage: page
      })  
    }
  }

  firstPage = ()=>{
    const {postsPerPage, allPosts, firstPage} = this.state
    
    this.setState({
      posts: allPosts.slice(firstPage, postsPerPage),
      currentPage: firstPage      
    })  
  }

  lastPage = ()=>{
    const {postsPerPage, allPosts, lastPage} = this.state
    
    this.setState({
      posts: allPosts.slice((lastPage-1)*postsPerPage, lastPage * postsPerPage),
      currentPage: lastPage-1  
    })  
  }

  searchPost = (title)=>{
    if (title){
      const {allPosts} = this.state
      const posts = allPosts.filter(post=> post.title.toLowerCase().includes(title.toLowerCase()))
      
      this.setState({
        posts: posts,
        lookingForPost: true
      })
    }else{
      this.firstPage()
      this.setState({lookingForPost: false})
    }
    
  }

  
  
  
  render(){
    const {posts, lastPage, currentPage, lookingForPost} = this.state
    return(
      <>   
        <Search onSearchPost={this.searchPost}/>
        { posts.length ? 
          
            <Posts posts={posts}/>
          :
            <h2>Nenhum Poste Existente</h2>
        }
        {!lookingForPost && (
          <Pagination onFirstPage={this.firstPage} onNextPage={this.nextPage} onLastPage={this.lastPage} amountPages={lastPage} currentPage={currentPage}/>
        )}
      </>
    )
  }
}

