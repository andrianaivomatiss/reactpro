import Fruits from'./Fruits'
export default function Message(){
    function handleClick(){
        console.log("Button Click");
    }
    return <div>
    <button onClick={handleClick}>Click here to get a Message</button>
    </div>
}
