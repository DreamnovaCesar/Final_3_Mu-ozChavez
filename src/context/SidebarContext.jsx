import React from "react";
import { useState, createContext } from "react";

export let SidebarContext = createContext();

let SidebarProvider = ({ children }) => {

    let [isOpen, setIsOpen] = useState(false);

    let SidebarClose = () => {
        setIsOpen(false);
    };

    return <SidebarContext.Provider value = {{ isOpen, setIsOpen, SidebarClose}}>{children}</SidebarContext.Provider>;
}

export default SidebarProvider;