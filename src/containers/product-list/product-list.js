import React from 'react';
import {Card} from "./components";
import {Text} from "../../components/text";
import {Box} from "../../components/box";

const ProductList = ({products, onAdd, onAddSeveral, suggestions}) => {
  return (
    <Box mt={20}>
      <Text fontSize={18} fontWeight={600} my={12}>Ypatingi pasiūlymai</Text>
      <Box mx="-10px" display="flex" flexWrap="wrap" position="relative">
        {products.slice(0, 4).map((product, id) => (
            <Card product={product} onAdd={onAdd} onAddSeveral={onAddSeveral} key={product.name + id} suggestions={suggestions}/>
        ))}
      </Box>
      <Box mx="-10px" display="flex" flexWrap="wrap" position="relative">
        {products.slice(4, 8).map((product, id) => (
          <Card product={product} onAdd={onAdd} onAddSeveral={onAddSeveral} key={product.name + id} suggestions={suggestions}/>
        ))}
      </Box>
      <Box mx="-10px" display="flex" flexWrap="wrap" position="relative">
        {products.slice(8, 12).map((product, id) => (
          <Card product={product} onAdd={onAdd} onAddSeveral={onAddSeveral} key={product.name + id} suggestions={suggestions}/>
        ))}
      </Box>
    </Box>
  );
};

export default ProductList;