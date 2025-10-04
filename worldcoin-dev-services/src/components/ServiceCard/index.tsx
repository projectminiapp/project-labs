import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: string;
}

export function ServiceCard({ title, description, features, icon }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 p-6 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300"
    >
      <div className="text-5xl mb-4 animate-bounce">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-blue-200 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center text-sm text-blue-100"
          >
            <span className="text-cyan-400 mr-2">✓</span>
            {feature}
          </motion.li>
        ))}
      </ul>
      <motion.a
        href="https://t.me/+49GTnf3VrFQzMTFh"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="block w-full mt-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-2 rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 text-center"
      >
        Solicitar Cotización
      </motion.a>
    </motion.div>
  );
}