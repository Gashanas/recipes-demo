import {Box} from "../../../components/box";
import {Text} from "../../../components/text";
import trashBin from "../../../images/trash-bin.png";
import theme from "../../../theme";

const CartItem = ({item, isHighlighted, onRemove, onRemoveOne, onAdd}) => (
  <>
    <Box
      px={isHighlighted ? "7px" : 10}
      py={isHighlighted ? 13 : 16}
      display="flex" minHeight={68}
      border={isHighlighted ? `3px solid ${theme.colors.success}` : "unset"}
    >
      <Box display="flex" alignItems="center">
        <img height={50} src={item.imageUrl} alt="product"/>
      </Box>
      <Box width="55%" ml={10} display="flex" alignItems="start" flexDirection="column" justifyContent="space-between">
        <Text fontSize={12} fontWeight={600}>{item.name}</Text>
        <Box display="flex" minHeight={25} width="80%" mt="8px">
          <Box size="20%" display="flex" justifyContent="center" height="100%" border="1px solid #c6c6c6"
               borderBottomLeftRadius="50%" borderTopLeftRadius="50%" onClick={() => onRemoveOne(item.name)}>
            <Text fontWeight={600}>-</Text>
          </Box>
          <Box size="60%" borderTop="1px solid #c6c6c6" borderBottom="1px solid #c6c6c6" display="flex" height="100%"
               justifyContent="center" alignItems="center">
            <Text mb="3px" as="span" fontWeight={600} fontSize={12}>{item.quantity}</Text>
            <Text
              mb="3px"
              fontWeight={600}
              as="span" fontSize={12}
              ml={10}>vnt.</Text>
          </Box>
          <Box size="20%" display="flex" justifyContent="center" height="100%" border="1px solid #c6c6c6"
               borderBottomRightRadius="50%" borderTopRightRadius="50%" onClick={() => onAdd(item.name)}>
            <Text fontWeight={600}>+</Text>
          </Box>
        </Box>
      </Box>
      <Box width={40} display="flex" justifyContent="space-between" flexDirection="column">
        <Box display="flex" justifyContent="end" mr="8px">
          <Box onClick={() => onRemove(item.name)}>
            <img height={20} src={trashBin} alt='trash bin'/>
          </Box>
        </Box>
        <Box>
          <Text mb={10} color={theme.colors.primary} fontSize={13} fontWeight={700}>€{item.price}</Text>
        </Box>
      </Box>
    </Box>
  </>
)

export default CartItem;