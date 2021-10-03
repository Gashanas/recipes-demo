import React, {useEffect, useState} from 'react';
import {Text} from "../../components/text";
import {Box} from "../../components/box";
import {CartItem} from "./components";



const Cart = ({items, onRemove, onAdd, onRemoveOne}) => {

  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const uniqueItems = items.filter((x, i, a) => a.indexOf(x) === i);
    setFilteredItems(uniqueItems.map(uniqueItem => ({...uniqueItem, quantity: items.filter(originalItem => originalItem.name === uniqueItem.name).length })))
  }, [items])
  return (
    <Box position="sticky" pt={10} top={77} mx={10} backgroundColor="#f6f6f8" boxShadow="0 2px 4px rgb(0 0 0 / 7%)"
         height="calc(100vh - 87px)">
      <Text fontSize={13} fontWeight={600} px={16} pt={16}>
        Krepšelis
      </Text>
      <Box p={16}>
        <Box borderRadius={5} overflow="hidden" width="100%" backgroundColor="white">
          {filteredItems.map((item, index) => (
            <CartItem key={item.name + index} item={item} onRemove={onRemove} onAdd={onAdd} onRemoveOne={onRemoveOne}/>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Cart;