import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { User } from "lucide-react";

export default function Navbar(){
    return (
        <header className="flex justify-between items-center gap-2 p-4">
            <div>
                <Link
                href="/"
                >
                Kiosco
                </Link>
            </div>
            <div>
                <Input 
                className="w-[200px] focus-whit"
                type="text" 
                placeholder="Buscar Producto..."/>
            </div>  
            <div>
                <Button
                variant="outline"
                className="cursor-pointer"
                >   
                <User/>
                    Iniciar Sesión
                </Button>
            </div>
        </header>
    );
} 