import React from 'react';
import {Container} from "@mui/material";


export default function MainLayout({ children }) {
    return (
        <div className="flex flex-row">
            <Container maxWidth="xl" className="mt-5 w-full">
                {children}
            </Container>
        </div>
    );
}
