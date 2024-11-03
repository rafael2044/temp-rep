import './styles.css'
export default function Button({text, actionClick, active}){
    return (
        <button className={`btn ${active?"active": ''}`} onClick={actionClick}>{text}</button>
    )
}