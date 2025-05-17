import React, { useCallback, useState } from "react";
import { Card, Typography, Button, useMediaQuery } from "@mui/material";
import InputesFields from "./InputesFields";
import Logo from "./Logo";
import { Link as MuiLink } from "@mui/material";
import { enqueueSnackbar } from "notistack";
import { Link, useNavigate } from "react-router-dom";
import useAxios from "../custom-hooks/useAxios";
import { checkAuth, login, signup } from "../store/slices/auth.slice";
import { useDispatch } from 'react-redux';

const Cards = ({ useIn }) => {
    const isTablet = useMediaQuery("(max-width:992px)");
    const minTablet = useMediaQuery("(max-width:768px)");
    const xsMobile = useMediaQuery("(max-width:375px)");
    const navigate = useNavigate();
    const dispatch = useDispatch();
 
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const { request } = useAxios();
    const handleChange = useCallback((e) => {
        setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    }, []);
    const handleValidate = () => {
        if (!formData.email || !formData.password) {
            enqueueSnackbar("All fields are required!", { variant: "error" });
            return false;
        }
        if (formData.password.length < 6) {
            enqueueSnackbar("Password must be greater than 6 character!", {
                variant: "error",
            });
            return false;
        }
        return true;
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (handleValidate()) {
            try {
                const response = await request({
                    url: useIn === 'signup' ? '/api/signup' : '/api/login',
                    method: "POST",
                    data: formData,
                });
                dispatch(checkAuth(response.data));
                dispatch(useIn === 'login' ? login(response.data) : signup());
                enqueueSnackbar(response.message, { variant: "success" });
                navigate(useIn === 'login' ? "/" : "/login");
            } catch (error) {
                enqueueSnackbar(error.response.data.message, { variant: "error" });
            }

        }
    };
    const renderCardContent = () => {
        switch (useIn) {
            case "login":
                return (
                    <>
                        <InputesFields useIn="login" handleChange={handleChange} />
                    </>
                );

            case "signup":
                return (
                    <>
                        <InputesFields useIn="signup" handleChange={handleChange} />
                    </>
                );

            default:
                return <Typography variant="h6">Invalid card type</Typography>;
        }
    };

    return (
        <Card
            component="form"
            onSubmit={handleSubmit}
            sx={{
                width: isTablet ? "100%" : "80%",
                height: '100%',
                backgroundColor: "transparent",
                "--Paper-overlay": "none",
                backgroundImage: "none",
                border: "none",
                boxShadow: "none",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                py: xsMobile ? 4 : 5,
                px: xsMobile ? 2 : 5,
            }}
        >
            {!minTablet ? <>
                <Logo useIn="inCard" />
                <Typography variant="h4" gutterBottom sx={{ mt: 2 }}>
                    {useIn === 'login' ? "Welcome Back" : "Create Account"}
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                    {useIn === 'login' ? "Sign in to your account" : "Get started with your free account"}
                </Typography>
            </> : null}
            {renderCardContent()}
            <Button
                fullWidth
                type="submit"
                variant="contained"
                sx={{
                    py: 1.5,
                    color: "text.primary",
                    fontWeight: 900,
                    letterSpacing: 1,
                    textTransform: 'capitalize',
                    "&:hover": { color: "text.default" },
                }}
            // endIcon={<LoginIcon fontSize="large" />}
            >
                {useIn === 'login' ? " Login" : "Create Account"}
            </Button>

            <Typography variant="body1" sx={{ mt: 3, color: "text.secondary" }}>
                {useIn === 'login' ? "Don't have an account?" : "Already have an account?"}{" "}
                <MuiLink component={Link} to={useIn === 'login' ? "/signup" : "/login"} sx={{ color: "links.main" }}>
                    {useIn === 'login' ? "Create account" : "Sign in"}
                </MuiLink>
            </Typography>
        </Card>
    );
};

export default Cards;
