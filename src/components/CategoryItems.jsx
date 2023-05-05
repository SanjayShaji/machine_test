import Box from '@mui/material/Box';
import Item from './Item';

export default function CategoryItems({ categoryDishes }) {


  return (
    <Box >
      {categoryDishes?.map((item) => (
          
          <Item
            item={item}
          />
      ))}
    </Box>
  );
}