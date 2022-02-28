import React from 'react';
import styled from "styled-components";

import {Box} from "../../components/box";
import {Text} from "../../components/text";

import Ads from "../../images/ka-valgom-bg.jpeg"
import theme from "../../theme";


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
  background-color: ${({isSelected}) => isSelected ? theme.colors.primary : 'unset'};

  &:hover {
    background-color: ${theme.colors.primary_80};
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
      <Box backgroundColor={theme.colors.primary_60} borderRadius={5} height={70} display="flex" overflow="hidden">
        {CATEGORIES.map((category, index) => (
          <Category isSelected={index === 0} key={category}>
            <Box width="100%">
              <Text fontWeight={800} textAlign="center" fontSize={14} color={theme.colors.secondary}>{category}</Text>
            </Box>
          </Category>
        ))}
      </Box>
      {/*<Box display="flex" justifyContent="flex-start">*/}
      {/*  {SUB_CATEGORIES.map(category => (*/}
      {/*    <SubCategoryItem key={category}>*/}
      {/*      <Text fontSize={12}>*/}
      {/*        {category}*/}
      {/*      </Text>*/}
      {/*    </SubCategoryItem>*/}
      {/*  ))}*/}
      {/*</Box>*/}
      <Pointer>
        <Box mt={24} backgroundImage={`url(${Ads})`} height={400} backgroundPosition="center"/>
      </Pointer>
    </>
  );
};

export default Categories;