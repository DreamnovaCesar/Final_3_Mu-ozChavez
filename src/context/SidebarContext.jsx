import React from "react";
import { useState, createContext } from "react";

// Create a new context to share sidebar state between components
export let SidebarContext = createContext();

let SidebarProvider = ({ children }) => {
    // Set initial state for sidebar to be closed
    let [isOpen, setIsOpen] = useState(false);

    // Function to close the sidebar
    let SidebarClose = () => {
        setIsOpen(false);
    };

    // Provide the isOpen, setIsOpen, and SidebarClose state and functions to child components through the context
    return (
        <SidebarContext.Provider value={{ 
            isOpen, 
            setIsOpen, 
            SidebarClose 
        }}>{children}</SidebarContext.Provider>
    );
}

export default SidebarProvider;