import { Card, IconButton, InputAdornment, TextField } from "@mui/material";
import { motion } from "framer-motion";
import Person3Icon from "@mui/icons-material/Person3";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import React, { useState } from "react";


const InputesFields = ({ useIn, handleChange }) => {
    const [showPassword, setShowPassword] = useState(false);
    const allFields = [
        { label: "Full Name", id: "fullname", type: "text", icon: <Person3Icon /> },
        { label: "Email", id: "email", type: "email", icon: <EmailIcon /> },
        { label: "Password", id: "password", type: showPassword ? "text" : "password", icon: <LockIcon /> },
    ];

    const visibleFields =
        useIn === "signup"
            ? allFields
            : allFields.filter((field) => field.id !== "fullname");

    return (
        <>
            {visibleFields.map(({ label, id, type, icon }) => {
                const styledIcon = React.cloneElement(icon, {
                    sx: { color: "primary.main", fontSize: 22 },
                });

                return (
                    <TextField
                        key={id}
                        component={motion.div}
                        fullWidth
                        onChange={handleChange}
                        type={type}
                        id={id}
                        label={label}
                        variant="outlined"
                        sx={{ mb: 2 }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    {styledIcon}
                                </InputAdornment>
                            ),
                            endAdornment:
                                id === "password" ? (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={() => setShowPassword(!showPassword)}
                                            edge="end"
                                            size="small"
                                        >
                                            {showPassword ? (
                                                <VisibilityOff />
                                            ) : (
                                                <Visibility />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                ) : null,

                        }}

                    />
                );
            })}
        </>
    );
};

export default InputesFields;
