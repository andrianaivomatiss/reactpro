export default function Fruit ({name,price,emoji,soldout}){
    return  <div>
        <li>
            { price>5 ? <h3>{emoji} {name} {price}</h3>:""};
        </li>
    </div>
};