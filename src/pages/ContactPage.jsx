import React from "react";
import PageLayout from "../layouts/Pages";
import NavBar from "../sections/Navbar";
import ThemeProvider from "../theme";

function Contact() {
    return (
        <ThemeProvider>
        <NavBar />
        <h1>
            Contact Us
        </h1>
        </ThemeProvider>

    )
}

export default Contact;