import { useContext } from "react";
import {
    Box,
    IconButton,
    Typography,
    Card,
    styled,
    Badge,
    useMediaQuery
} from "@mui/material";

import {ArrowBack, ShoppingCart } from "@mui/icons-material"
import { dark } from "@mui/material/styles/createPalette";
import FlexBetween from "./FlexBetween";
import {MyContext} from "../App";

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 8,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
        color: "white"
    },
}));


const Header = () => {

    const {cartCount} = useContext(MyContext)
    const isNonMobileScreens = useMediaQuery('(min-width: 900px)');

    return (
        <Card zindex={2}>
            <Box 
                padding="1rem " backgroundColor="white">
                <FlexBetween gap="1.75rem">
                    {!isNonMobileScreens && 
                        <ArrowBack/>
                    }
                    <Typography
                        fontWeight="bold"
                        fontSize="1.25 rem"
                        color="gray"
                        sx={{ "&: hover": { color: dark, cursor: "pointer" } }}

                    >UNI Resto Cafe
                    </Typography>
                    <FlexBetween>
                        <Typography
                            fontWeight="bold"
                            fontSize="clamp(0.5rem, 1rem, 1.25rem)"
                            color="gray"
                            sx={{ "&: hover": { color: dark, cursor: "pointer" } }}
                        >My orders
                        </Typography>

                        <IconButton aria-label="cart">
                            <StyledBadge badgeContent={cartCount > 0 ? cartCount : "0"} color="primary">
                                <ShoppingCart />
                            </StyledBadge>
                        </IconButton>
                    </FlexBetween >
                </FlexBetween>


            </Box>
        </Card>
    )
}

export default Header;
