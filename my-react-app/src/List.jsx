import PropTypes from "prop-types";

function List(props){

    /*
    const fruits = [{id: 1, name: "apple", calories: 95}, 
                    {id: 2, name: "orange", calories: 45}, 
                    {id: 3, name: "banana", calories: 105}, 
                    {id: 4, name: "coconut", calories: 159}, 
                    {id: 5, name: "pineapple", calories: 37}];
    */

    // fruits.sort((a, b) => a.name.localeCompare(b.name)); // Alphabetical
    // fruits.sort((a, b) => b.name.localeCompare(a.name)); // REVERSE Alphabetical
    // fruits.sort((a, b) => a.calories - b.calories); // Numeric
    // fruits.sort((a, b) => b.calories - a.calories); // REVERSE Numeric
    
    /*
    const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

    const listItems = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id}>
                                                {lowCalFruit.name}: &nbsp;
                                                <b>{lowCalFruit.calories}</b></li>);
    */

    /*
    const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

    const listItems = highCalFruits.map(highCalFruit => <li key={highCalFruit.id}>
                                                {highCalFruit.name}: &nbsp;
                                                <b>{highCalFruit.calories}</b></li>);

    return(<ol>{listItems}</ol>);
    
    */

    const category = props.category;
    const itemList = props.items

    const listItems = itemList.map(item => <li key={item.id}>
                                        {item.name}: &nbsp;
                                    <b>{item.calories}</b></li>);

    return(<>
        <h3 className="list-category">{category}</h3>
        <ol className="list-items">{listItems}</ol>
    </>);
}

List.PropTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, 
                                                name: PropTypes.string,
                                                calories: PropTypes.number}))
}

List.defaultProps = {
    category: "Category",
    items: []
}

export default List