import { useState } from "react";
import AboutMe from "./components/Files/AboutMe";
import Header from "./components/Header/Header";
import Filebar from "./components/Sidebar/Filebar";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Main/Content";

// import React from "react";
export default function App() {
  const [currentPage, setCurrentPage] = useState("Main");
  return (
    <div className="w-[1500px] h-[800px] bg-primary relative">
      <Header />
      <div className="flex h-[calc(800px-2.5rem)]">
        <Sidebar setCurrentPage={setCurrentPage} />
        <Filebar />
        <Content currentPage={currentPage} />
        <AboutMe />
      </div>
    </div>
  );
}