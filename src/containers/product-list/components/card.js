import * as React from 'react';
import styled from "styled-components";

import {Box} from "../../../components/box";
import {Text} from "../../../components/text";
import {Suggestions} from "./suggestions";
import {Button} from "../../../components/button";
import theme from "../../../theme";

const OldPrice = styled(Text)`
  text-decoration: line-through;
`

const Card = ({product, onAdd, onAddSeveral, suggestions}) => {
  return (
    <Box width="calc(100%/4)">
      <Box maxHeight={415} pl={10} pr={10} pb={20}>
        <Box backgroundColor="white" p={10}>
          <Box pt={23}>
            <img height={148} width="100%" src={product.imageUrl}/>
            <Box height={72}>
              <Text fontSize={15} textAlign="center">{product.name}</Text>
            </Box>
            <Box height={54}>
              <Box display="flex" alignItems="center" justifyContent="center">
                <OldPrice as="span" fontWeight={600} color="#999999" fontSize={15}>{product.oldPrice && `€${product.oldPrice}`}</OldPrice>
                <Text as="span" color={theme.colors.primary} fontWeight={600} fontSize={26}>€{product.price}</Text>
              </Box>
              <Text textAlign="center" lineHeight="12px" color="#999999" fontSize={11}>{product.pricePerKg && `€${product.pricePerKg}`}
              </Text>
            </Box>
            <Box mt={20} display="flex" alignItems="center" justifyContent="center">
              <Button onClick={() => onAdd({item: product})}><Text color="white" fontWeight={600}>Į krepšelį</Text></Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Suggestions suggestionsObject={suggestions} productName={product.name} onAddSeveral={onAddSeveral}/>
    </Box>

  );
};

export default Card;