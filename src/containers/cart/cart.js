import React, {useEffect, useState} from 'react';
import {Text} from "../../components/text";
import {Box} from "../../components/box";
import {CartItem} from "./components";
import {Button} from "../../components/button";
import {PieChart} from "../../components/charts";
import PRODUCTS from "../../constants/products";


const Cart = ({items, highlightedItems, onRemove, onAdd, onAddSeveral, onRemoveOne, suggestion}) => {

  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    // filtering unique items:
    const uniqueProductNames = [...new Set(items.map(item => item.name))];
    const uniqueItems = uniqueProductNames.map(name => items.find(item => item.name === name));
    setFilteredItems(uniqueItems.map(uniqueItem => ({
      ...uniqueItem,
      quantity: items.filter(originalItem => originalItem.name === uniqueItem.name).length
    })))
  }, [items])
  return (
    <Box position="sticky" pt={10} top={77} mx={10} backgroundColor="#f6f6f8" boxShadow="0 2px 4px rgb(0 0 0 / 7%)"
         height="calc(100vh - 87px)">
      <Text fontSize={13} fontWeight={600} px={16} pt={16}>
        Krepšelis
      </Text>
      <Box display="flex" flexDirection="column">
        <Box p={16}>
          <Box borderRadius={5} overflow="hidden" width="100%" backgroundColor="white">
            {filteredItems.map((item, index) => (
              <Box key={item.name + index} borderTop={index > 0 ? "2px solid #f2f2f3" : "unset"}>
                <CartItem isHighlighted={highlightedItems?.find(({name}) => item.name === name)} item={item}
                          onRemove={onRemove} onAdd={onAdd} onRemoveOne={onRemoveOne}/>
              </Box>
            ))}
          </Box>
        </Box>
        <Box p={16}>
          {suggestion && (
            <Box width="100%" border="2px solid #ccc">
              <Box p={"8px"} borderBottom="2px solid #ccc">
                Jūsų krepšelį atitinkantys receptai:
              </Box>
              <Box key={suggestion.title}>
                <Box borderBottom="2px solid #ccc" display="flex" p={10}>
                  <Box>
                    <img height={80} width={110} src={suggestion.img_url}/>
                  </Box>
                  <Box>
                    <Text px={15} fontWeight={600} fontSize={14} pb={"8px"}><a href={suggestion.url}
                                                                               target="_blank">{suggestion.title}</a></Text>
                    <Box display="flex" justifyContent="center"
                         onClick={() => {
                           // Remapping ingredients replacing it's props with items props in order to not override amount value which differs in ingredients
                           // TODO Still not working as expected. Kolkas kaip workArounda naudoju PRODUCTS constantas cia.
                           // Mes iteruojam per ingridientus, kurie turi kita ammounto property nei produktai, tad reikia
                           // permatinti juos su PRODUCTS is constatu, negalim tiesiog settinti visu objekt is ingredients, turetume setinti is produkts. Tai arba
                           // perdaryti onAddSeveral callbacko funkcija, ir paduoti tik name'us ir jau teve isifiltruoti pagal pavadinima is PRODUCTS
                           // TODO paskaityti viska. Issikelti logika is cia, i atskira funkcija arba komponenta arba isvis i teva.
                           let products = [];
                           suggestion.ingredients.forEach(
                             ingredient => {
                               const productFromProductList = PRODUCTS.find(item => item.name === ingredient.name);
                               const productInCart = filteredItems.find(item => item.name === ingredient.name);
                               const amountNeeded = ingredient.amount;
                               const quantityInCart = productInCart?.quantity || 0;
                               const amountInCart = productFromProductList?.amount * quantityInCart || 0;
                               const missingItemsCount = amountInCart < amountNeeded ? Math.ceil(amountNeeded / productFromProductList?.amount) - quantityInCart : 0;

                               const missingItems = Array(missingItemsCount).fill(productFromProductList);

                               products = products.concat(missingItems);
                             }
                           )
                           products.forEach(product => {
                             suggestion.ingredients.find(ingredient => ingredient.name === product.name);
                           })
                           onAddSeveral({
                             items: products
                           })
                         }
                         }>
                      <Button><Text color="white" fontWeight={600}>Prideti ingridientus</Text></Button>
                    </Box>
                  </Box>
                </Box>
                <Box display="flex" mx="8px">
                  {suggestion.ingredients.map(ingredient => {
                    const itemInCart = filteredItems.find(item => item.name === ingredient.name)
                    return (
                      <Box key={ingredient.name} my={10} mx="2px">
                        <PieChart
                          amount={itemInCart && itemInCart.amount * itemInCart.quantity}
                          requiredAmount={ingredient.amount}
                          imageUrl={ingredient.imageUrl}
                        />
                      </Box>
                    )
                  })}
                </Box>
              </Box>
            </Box>
          )
          }
        </Box>
      </Box>

    </Box>
  );
};

export default Cart;