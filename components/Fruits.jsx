import Fruit from "./Fruit";
export default function Fruits(){
    const Fruits= [{name:"Latsaka",price:10,emoji:"🤣", soldout:false},
                   {name:"tezitra",price:7,emoji:"😡",soldout:true},
                   {name:"Amoureux",price:2,emoji:"😍",soldout:false},
                   {name:"Menatra",price:5,emoji:"😳",soldout:false},
                   {name:"Vola",price:8,emoji:"🤑",soldout:true}
    ]
    return <> <ol>
    {Fruits.map((fruit)=>
    <li key={fruit.name}>
        <h1>{fruit.name}${fruit.price}{fruit.emoji}</h1>
    </li>
    )}
    </ol>
    </>
}