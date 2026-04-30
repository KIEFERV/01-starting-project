import './TabButton.css';

export default function TabButton({children, type}){
    function handleClick(){
    console.log('Hello World');

}
//closure
    return(
        <li>
              {type}
            <button onClick={handleClick}>{children} </button>
        </li>
    )
}