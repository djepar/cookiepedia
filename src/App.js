import './App.css';
import FilterableIngredientTable from "./components/FilterableIngredientTable"
import cookie from './assets/cookie.jpg'

const INGREDIENTS = [
  { category: "dry", name:"flour",quantity: "225g", stocked: true},
  { category: "dry", name:"baking powder",quantity: "5ml", stocked: true},
  { category: "dry", name:"baking soda",quantity: "5ml", stocked: false},
  { category: "wet", name:"mashed ripe bananas",quantity: "3-4 or 125ml", stocked: true},
  { category: "wet", name:"lime juice",quantity: "15ml", stocked: true},
  { category: "wet", name:"unsalted butter",quantity: "115g", stocked: false},
  { category: "other", name:"sugar",quantity: "210g", stocked: true},
  { category: "other", name:"egg",quantity: "1", stocked: true}
  
  
  
]

export default function App(){
  return(
    <div>
      <h1>
        Cookie
      </h1>
      <img
        height={200}
        src={cookie}
        alt="A cookie"
       />
      <FilterableIngredientTable ingredients={INGREDIENTS} />

    </div>
    
  ) }
