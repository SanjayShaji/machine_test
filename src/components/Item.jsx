import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FlexBetween from './FlexBetween';
import { CircularProgress, Skeleton, useMediaQuery } from '@mui/material';
import { Add, Remove, StopCircleOutlined } from '@mui/icons-material';
import { useContext, useState } from 'react';
import { useInView } from 'react-intersection-observer'
import { MyContext } from '../App';

export default function Item({ item }) {
    const [count, setCount] = useState(0);
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
    const { setCartCount, cartCount } = useContext(MyContext);
    const [addToCart, setAddToCart] = useState(false);
    const { ref, inView, entry } = useInView({
        rootMargin: "100px 0px",
        threshold: 0
    })

    const addFunction = async()=>{
        setCount(count + 1)
        if (!addToCart) {
            setCartCount(cartCount + 1)
        }
        setAddToCart(true)
    }

    const removeFunction = async() => {
        if (count > 0) {
            setCount(count - 1)
        }
        if (count === 1 && addToCart === true) {
            setAddToCart(false)
            setCartCount(cartCount - 1)
        }
    }

    return (
        <Card sx={{ margin: "10px", display: 'flex', alignItems: "start", }}>
            <Box sx={{ paddingTop: "20px" }}>
                {item.dish_Type === 1 ?
                    <StopCircleOutlined padding="100px" color="primary" />
                    :
                    <StopCircleOutlined padding="100px" sx={{ color: "green" }} />
                }
            </Box>
            <Card elevation={0} sx={{ display: 'flex' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', width: '1500px' }} marginBottom={1}>
                    <CardContent sx={{ flex: '1 0 auto' }}>

                        <Typography fontSize={15} component="div" fontWeight="bold">{item.dish_name}</Typography>
                        <FlexBetween>
                            <Typography fontSize={13} component="div" >SAR {item.dish_price}</Typography>
                            <Typography fontSize={13} component="div" sx={{ paddingRight: isNonMobileScreens ? "8rem" : 0 }}>{item.dish_calories} calories</Typography>
                        </FlexBetween>
                        <Typography fontSize={11} variant="subtitle1" color="text.secondary" component="div">{item.dish_description}</Typography>
                    </CardContent>

                    {item.dish_Availability ? (
                        <FlexBetween sx={{ width: "150px", marginLeft: "15px",  backgroundColor: "green", borderRadius: 4 }}>
                            <IconButton onClick={removeFunction} sx={{ color: 'white' }}>
                                <Remove />
                            </IconButton>
                            <Typography sx={{ color: 'white' }}>{count}</Typography>
                            <IconButton onClick={addFunction} sx={{ color: 'white' }}>
                                <Add />
                            </IconButton>
                        </FlexBetween>
                    ) : (
                        <Typography sx={{ color: "red", paddingLeft: "15px" }}>Not Available</Typography>
                    )}

                    {item.addonCat[0] && <Typography sx={{ color: "red", paddingLeft: "15px" }}>customization Availble</Typography>}
                </Box>

                <Box
                    sx={{ height: 100 }}
                    ref={ref}
                >
                    {inView ? <img
                        style={{ borderRadius: 5 }}
                        width={80}
                        height={80}
                        src={item.dish_image}
                        alt="not found"
                    /> : <CircularProgress />}
                </Box>
            </Card>
        </Card>
    );
}
