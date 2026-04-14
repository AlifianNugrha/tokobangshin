import { motion } from "framer-motion";
import { materialCategories } from "@/data/products";

const MaterialDatabase = () => {
  return (
    <section id="materials" className="py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground flex items-center gap-3">
            🔮 Database Material Lengkap
          </h2>
          <p className="text-muted-foreground mt-2">
            Semua material yang ada di Sailor Piece. Bisa dijual ketengan atau paket.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {materialCategories.map((cat) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg border border-border shadow-card p-5"
            >
              <h3 className="font-bold text-foreground text-sm mb-3">{cat.name}</h3>
              <div className="flex flex-wrap gap-1.5">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs bg-accent text-accent-foreground rounded px-2 py-0.5"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <p className="text-[10px] text-muted-foreground mt-2">
                {cat.items.length} items
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaterialDatabase;
