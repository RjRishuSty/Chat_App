import { TextField } from "@mui/material";
import React from "react";

const InputesFields = ({ useIn }) => {
    const allFields = [
        { label: "Full Name", id: "fullname", type: "text" },
        { label: "Email", id: "email", type: "email" },
        { label: "Password", id: "password", type: "password" },
    ];

    const visibleFields = useIn === "signup"
        ? allFields
        : allFields.filter((field) => field.id !== "fullname");

    return (
        <>
            {visibleFields.map(({ label, id, type }) => (
                <TextField
                    fullWidth
                    type={type}
                    id={id}
                    label={label}
                    variant="outlined"
                    sx={{ mb: 2 }}
                />
            ))}
        </>
    );
};

export default InputesFields;
