import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import type { ProductBundle } from "@/data/products";

interface Props {
  id?: string;
  title: string;
  iconImage: string;
  description: string;
  products: ProductBundle[];
}

const CategorySection = ({ id, title, iconImage, description, products }: Props) => {
  return (
    <section id={id} className="pt-4 pb-10 md:pt-6 md:pb-14">
      <div className="container px-4">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 flex items-center gap-3"
          >
            {iconImage && (
              <div className="glass-blue rounded-xl p-1.5">
                <img src={iconImage} alt={title} className="h-10 md:h-14 w-auto object-contain" />
              </div>
            )}
            <div>
              <h2 className="font-extrabold text-foreground text-base md:text-lg leading-tight">{title}</h2>
              {description && (
                <p className="text-xs text-muted-foreground mt-0.5">{description}</p>
              )}
            </div>
          </motion.div>
        )}

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 md:gap-4">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
