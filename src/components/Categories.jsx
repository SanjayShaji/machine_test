import { useEffect, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { getItems } from '../api';
import CategoryItems from './CategoryItems';
import { CircularProgress,  useMediaQuery } from '@mui/material';


export default function Categories() {
  const [value, setValue] = useState(0);
  const [categories, setCategories] = useState([]);
  const isNonMobileScreens = useMediaQuery('(min-width: 900px)');
  const [loading, setLoading] = useState(true)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getItemsFn = async () => {
    const data = await getItems();
    console.log(data);
    console.log(data[0].table_menu_list);
    setCategories(data[0].table_menu_list);
    setLoading(false)
  };

  useEffect(() => {
      getItemsFn();
  }, []);

  return (
    <Box sx={{ bgcolor: 'background.paper' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        {categories?.map((category, index) => (
          <Tab sx={{ minWidth: isNonMobileScreens ? '350px' : '60px' }} label={category.menu_category} value={index} key={index} />
        ))}
      </Tabs>

      {loading ?
        <Box sx={{ textAlign: "center", paddingTop: "150px" }}>
          <CircularProgress />
        </Box> :
        categories?.map((category, index) => (
          <Box key={index}>
            {value === index &&
              <CategoryItems
                categoryId={category.menu_category_id}
                categoryDishes={category.category_dishes} />}
          </Box>
        ))}
    </Box>
  );
}
