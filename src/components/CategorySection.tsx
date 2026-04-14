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
    <section id={id} className="pt-8 pb-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <div className="flex items-center">
            <img src={iconImage} alt={title} className="h-14 md:h-20 w-auto object-contain" />
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 md:gap-6">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
