import './App.css';
import { useState} from 'react'

function FilterableIngredientTable({ ingredients}) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);
  
  return(
    <div>
      <SearchBar
      filterText={filterText}
      inStockOnly={inStockOnly} 
      onFilterTextChange={setFilterText}
      onInStockOnlyChange={setInStockOnly}/>
      <IngredientTable 
      ingredients={ingredients} 
      filterText={filterText}
      inStockOnly={inStockOnly}  />
    </div>
  );
}
function IngredientCategoryRow({ category }){
  return (
    <tr>
      <th colSpan="2">
        {category}
      </th>
    </tr>
  );
}

function IngredientRow({ingredient}){
  const name = ingredient.stocked ? ingredient.name :
  <span style={{ color: "red"}}>
    {ingredient.name}
  </span>;

  return (
    <tr>
      <td>{name}</td>
      <td>{ingredient.quantity}</td>
    </tr>
  );
}

function IngredientTable({ ingredients, filterText, inStockOnly }){
  const rows = []
  let lastCategory = null;

  ingredients.forEach((ingredient) => {
    if (
      ingredient.name.toLowerCase().indexOf(
        filterText.toLowerCase()
      ) === -1
    ) {
      return;
    }
    if (inStockOnly && !ingredient.stocked){
      return;
    }
    if (ingredient.category !== lastCategory){
      rows.push(
        <IngredientCategoryRow
        category={ingredient.category} 
        key={ingredient.category}/>
      );
    }
    rows.push(
      <IngredientRow
        ingredient={ingredient}
        key={ingredient.name} />
    );
    lastCategory = ingredient.category;
  });
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange
}){
  return(
    <form>
      <input
       type="text" 
       value={filterText}  placeholder="Search..."
       onChange={(e) => onFilterTextChange(e.target.value)}  />
      <label>
        <input 
        type="checkbox"
        checked={inStockOnly}
        onChange={(e) => onInStockOnlyChange(e.target.checked)} />
        {' '}
        Only show ingredients in stock
      </label>
    </form>
  );
}
const INGREDIENTS = [
  { category: "dry", name:"flour",quantity: "225g", stocked: true},
  { category: "dry", name:"baking powder",quantity: "5ml", stocked: true},
  { category: "dry", name:"baking soda",quantity: "5ml", stocked: false},
  { category: "wet", name:"mashed ripe bananas",quantity: "3-4 or 125ml", stocked: true},
  { category: "wet", name:"lime juice",quantity: "15ml", stocked: true},
  { category: "wet", name:"unsalted butter",quantity: "115g", stocked: false},
  { category: "other", name:"sugar",quantity: "210g", stocked: true},
  { category: "other", name:"egg",quantity: "1", stocked: true},
  { category: "dry", name:"vanilla extract",quantity: "5ml", stocked: true},
  
  
  
]

export default function App(){
  return <FilterableIngredientTable ingredients={INGREDIENTS} />
}
