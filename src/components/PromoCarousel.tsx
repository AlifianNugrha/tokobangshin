import { motion } from "framer-motion";

const PromoBanner = () => {
  return (
    <section className="py-10 md:py-14 bg-blue">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src="/promo.png"
            alt="Promo & Best Bundling"
            className=" h-auto object-contain mx-auto drop-shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default PromoBanner;
