import './styles.css'
import Button from '../Button'
export default function Pagination({onFirstPage, onNextPage, onLastPage, amountPages, currentPage}){
    return (
        <div className="content-button">
            <Button text="First Page" actionClick={onFirstPage}/>
            {[...Array(amountPages).keys()].map(n=>(<Button key={n} text={n+1} actionClick={()=>{onNextPage(n)}} active={n==currentPage?true:false}/>))}
            <Button text="Last Posts" actionClick={onLastPage}/>    
        </div>
    )
}