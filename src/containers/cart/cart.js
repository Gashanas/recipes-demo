import React, {useEffect, useState} from 'react';
import {Text} from "../../components/text";
import {Box} from "../../components/box";
import {CartItem} from "./components";
import {Button} from "../../components/button";


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
              <Box key={suggestion.title} p={10}>
                <Box display="flex">
                  <Box>
                    <img height={80} width={110} src={suggestion.img_url}/>
                  </Box>
                  <Box>
                  <Text px={15} fontWeight={600} fontSize={14} pb={"8px"}><a href={suggestion.url} target="_blank">{suggestion.title}</a></Text>
                  <Box display="flex" justifyContent="center"
                       onClick={() => onAddSeveral({items: suggestion.ingredients})}>
                    <Button><Text color="white" fontWeight={600}>Prideti ingridientus</Text></Button>
                  </Box>
                  </Box>
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