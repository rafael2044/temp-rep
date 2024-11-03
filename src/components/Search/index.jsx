import './styles.css'

const Search = ({onSearchPost})=>{
    
    return (
        <div className='content-search'>  
            <label htmlFor="namePost">Pesquisar Post: </label>
            <input type="text" id='namePost' className='inputName' onChange={(e)=>onSearchPost(e.target.value)} />
        </div>
    )
}

export default Search