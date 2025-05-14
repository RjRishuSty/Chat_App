import React, { useCallback, useState } from "react";
import { Card, Typography, Button, useMediaQuery } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import InputesFields from "./InputesFields";
import Logo from "./Logo";
import { Link as MuiLink } from "@mui/material";
import { enqueueSnackbar } from "notistack";
import { Link } from "react-router-dom";

const Cards = ({ useIn }) => {
    const isTablet = useMediaQuery("(max-width:992px)")
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
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
    const handleSubmit = (e) => {
        e.preventDefault();
        if (handleValidate()) {
            enqueueSnackbar("Login successfully!", { variant: "success" });
            console.log(formData);
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
                width: isTablet?"100%":"80%",
                backgroundColor: "transparent",
                border: "none",
                boxShadow: "none",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                p:5
            }}
        >
            <Logo useIn="inCard" />
            <Typography variant="h4" gutterBottom sx={{ mt: 2 }}>
                {useIn === 'login' ? "Welcome Back" : "Create Account"}
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
                {useIn === 'login' ? "Sign in to your account" : "Get started with your free account"}
            </Typography>
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
                    textTransform:'capitalize',
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
