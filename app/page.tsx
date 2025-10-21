"use client"

import { useState } from "react";
import Navbar from "@/components/shop/Navbar";
import ProductList from "@/components/shop/ProductList";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <main>
      <Navbar 
        searchQuery={searchQuery} 
        onSearchChange={setSearchQuery} 
      />
      <ProductList searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    </main>
  );
}