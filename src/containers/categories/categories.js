import React from 'react';
import styled from "styled-components";

import {Box} from "../../components/box";
import {Text} from "../../components/text";

import Ads from "../../images/ads.png"


const CATEGORIES = [
  "Prekės", "Mano prekės", "Akcijos", "Eko ir ūkis", "Naujienos", "Receptai"
]

const SUB_CATEGORIES = [
  "Daržpvės ir vaisiai", "Pieno gaminiai ir kiaušiniai", "Duonos gaminiai ir konditerija", "Mėsa, žuvis ir kulinarija", "Bakalėja", "Šaldytas maistas", "Gėrimai", "Kūdykių ir vaikų prekės", "Kosmetika ir higiena", "Šeimos ir gyvūnų prekės", "Namai ir laisvalaikis"
]

const Category = styled.div`
  width: 14.3%;
  min-height: 70px;
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: ${({isSelected}) => isSelected ? '#c21b25' : 'unset'};

  &:hover {
    background-color: #c21b25;
  }
`
const SubCategoryItem = styled.div`
  display: table-cell;
  vertical-align: top;
  line-height: 1.15;
  border-left: 1px solid #ccc;
  cursor: pointer;
  padding: 2px 8px;
  margin: 10px 0;
`

const Pointer = styled.div`
  cursor: pointer;
`

const Categories = () => {
  return (
    <>
      <Box backgroundColor="#e22e39" borderRadius={5} height={70} display="flex" overflow="hidden">
        {CATEGORIES.map((category, index) => (
          <Category isSelected={index === 0} key={category}>
            <Box width="100%">
              <Text fontWeight={800} textAlign="center" fontSize={14} color="white">{category}</Text>
            </Box>
          </Category>
        ))}
      </Box>
      <Box display="flex" justifyContent="flex-start">
        {SUB_CATEGORIES.map(category => (
          <SubCategoryItem key={category}>
            <Text fontSize={12}>
              {category}
            </Text>
          </SubCategoryItem>
        ))}
      </Box>
      <Pointer>
        <img width="100%" src={Ads}/>
      </Pointer>
    </>
  );
};

export default Categories;