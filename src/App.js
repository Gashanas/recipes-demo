import {useState} from "react";

import './App.css';
import {NavBar} from "./containers/nav-bar";
import {Box} from "./components/box";
import {Categories} from "./containers/categories";
import {ProductList} from "./containers/product-list";
import PRODUCTS from "./constants/products";
import {Cart} from "./containers/cart";
import RECIPES from "./constants/recipes";

function App() {

  const [addedItems, setAddedItems] = useState([PRODUCTS[0]]);
  const [suggestions, setSuggestions] = useState({});

  const getSuggestion = ({product}) => {
    setSuggestions({
      productName: product.name,
      suggestions: RECIPES.filter(recipe => recipe.ingredients.find(ingredient => ingredient.name === product.name))
    })
  }

  console.log("suggestions", suggestions);

  return (
    <Box backgroundColor="#f8f4f1" height="100%">
      <NavBar/>

      <Box maxWidth={1334} width={1334} px={10} mx="auto" display="flex">
        <Box py={10} width="72%">

          <Box position="relative">
            <Categories/>
          </Box>

          <ProductList
            products={PRODUCTS}
            onAdd={(item) => {
              setAddedItems(prevState => [...prevState, item]);
              getSuggestion({product: item});
            }}
            suggestions={suggestions}
          />
        </Box>
        <Box width="28%" px={10}>
          <Cart
            items={addedItems}
            onRemove={(name) => setAddedItems(prevState => prevState.filter(item => item.name !== name))}
            onAdd={(name) => setAddedItems(prevState => [...prevState, PRODUCTS.find(product => product.name === name)])}
            onRemoveOne={(name) => setAddedItems(prevState => {
              const a = [...prevState];
              a.splice(prevState.map(product => product.name).indexOf(name), 1)
              return a;
            })}
          />
        </Box>


      </Box>

    </Box>
  );
}

export default App;
