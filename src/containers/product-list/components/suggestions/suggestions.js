import React from 'react';
import {Box} from "../../../../components/box";
import {Text} from "../../../../components/text";
import {Button} from "../../../../components/button";
import theme from "../../../../theme";

const Suggestions = ({suggestionsObject, productName, onAddSeveral}) => {
  const {suggestions} = suggestionsObject;
  return (
    suggestionsObject.productName === productName && suggestions.length ? (
      <Box mt={-20} mx={10}>
        <Box p="5px" backgroundColor={theme.colors.success} width="calc((100%/4) -40px)">
          <Text color="white" fontWeight={600}>Rekomenduojami receptai</Text>
        </Box>
        <Box height={170}>
          <Box border={`3px solid ${theme.colors.success}`} position="absolute" backgroundColor="white" top={408} left="10px" width="940px"
               height={160}>
            <Box display="flex">
              {suggestions.slice(0, 3).map(suggestion => (
                <Box key={suggestion.title} height={138} border="1px solid #ccc" p={10} width="calc(100%/3)">
                  <Box display="flex">
                    <Box>
                      <img height={100} width={150} src={suggestion.img_url}/>
                    </Box>
                    <Text px={15} fontWeight={600}>{suggestion.title}</Text>
                  </Box>
                  <Box display="flex" justifyContent="center" onClick={() => onAddSeveral({items: suggestion.ingredients})}>
                    <Button><Text color="white" fontWeight={600}>Prideti ingridientus</Text></Button>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    ) : null
  );
};

export default Suggestions;