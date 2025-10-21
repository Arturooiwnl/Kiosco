"use client"

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput
} from "../ui/input-group";
import { Search, ShoppingCart, User } from "lucide-react";

interface NavbarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function Navbar({ searchQuery, onSearchChange }: NavbarProps) {
  return (
    <header className="flex justify-between items-center gap-2 p-4 border-b rounded-b-2xl backdrop-blur-xs z-50 bg-sidebar">
      <div className="flex justify-between max-w-4xl mx-auto w-full">
        <Link
          className="flex gap-2 items-center hover:opacity-85 transition-opacity duration-300"
          href="/"
        >
          <span className="text-base md:text-2xl bg-gradient-to-br from-accent to-primary text-transparent bg-clip-text font-black">Kiosco</span>
        </Link>
        
        <div>
          <InputGroup>
            <InputGroupInput 
              className="w-64 md:w-96" 
              placeholder="Buscar productos..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
            />
            <InputGroupAddon>
              <Search/>
            </InputGroupAddon>
          </InputGroup>
        </div>
        
        <div>
          <Button
            variant="outline"
            size="icon"
            className="cursor-pointer rounded-full"
          >
            <ShoppingCart />
          </Button>
        </div>
      </div>
    </header>
  );
}