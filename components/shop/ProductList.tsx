import { products } from "@/data/products";
import { Button } from "../ui/button";
import { SearchX, ShoppingCart } from "lucide-react";

interface ProductListProps {
  searchQuery: string;
   setSearchQuery: (query: string) => void;
}

export default function ProductList({ searchQuery, setSearchQuery }: ProductListProps) {
  const filteredProducts = products.filter((p) =>
    p.nombre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="mt-12 max-w-7xl mx-auto px-4">
      {filteredProducts.length === 0 ? (
        <div className="flex flex-col items-center text-center border overflow-hidden rounded-lg">
            <div className="px-4 flex flex-col items-center py-6">
            <SearchX className="size-22 mb-4 text-muted"/>
            <h2 className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-[80%] mx-auto break-words whitespace-normal">
                No se encontraron productos para "<span className="font-medium text-primary">{searchQuery}</span>"
            </h2>
            </div>
            <div className="border-t space-y-2 py-4 px-4 w-full">
                <h3 className="text-sm text-muted-foreground md:text-lg">Puedes buscar...</h3>
                <div className="flex flex-col md:flex-row gap-2 justify-center">
                {products.slice(0,3).map((p, idx) => (
                    <Button
                    key={idx}
                    size="sm"
                    className="cursor-pointer"
                    onClick={() => setSearchQuery(p.nombre)}
                    >
                    {p.nombre}
                    </Button>
                ))}
                </div>
            </div>

        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredProducts.map((p, idx) => (
            <article
              key={idx}
              className="group relative overflow-hidden rounded-xl border bg-card transition-all hover:shadow-md"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted/50">
                <img
                  src={p.imagen}
                  alt={p.nombre}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="p-3">
                <h2 className="text-sm font-medium text-card-foreground mb-1.5 line-clamp-2 min-h-[2.5rem]">
                  {p.nombre}
                </h2>
                
                <div className="flex items-center justify-between gap-2">
                  <span className="text-lg font-bold text-primary">
                    ${p.precio.toLocaleString()}
                  </span>
                  
                  <Button
                    size="sm"
                    className="cursor-pointer"
                  >
                    <ShoppingCart className="mb-0.5"/>
                    Añadir al Carrito
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}