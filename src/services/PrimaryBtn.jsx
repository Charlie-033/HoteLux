import { motion } from "framer-motion";

const PrimaryBtn = ({ label = "Click Me", onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1, backgroundColor: "#3B82F6" }} // Tailwind's blue-500
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
      onClick={onClick}
      className="bg-blue-900 px-5 py-2 text-white font-semibold rounded cursor-pointer shadow-md"
    >
      {label}
    </motion.button>
  );
};

export default PrimaryBtn;
