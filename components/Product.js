export default function Product({name, price}) {
    return (
        <div className="pb-3">
            <span className="font-bold p-2">{name}</span><br/> 
            <span className="font-semibold p-2">{price.formatted_with_symbol}</span>
        </div>
    )
}