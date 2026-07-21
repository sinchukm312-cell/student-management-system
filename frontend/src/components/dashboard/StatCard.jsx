import { motion } from "framer-motion";

function StatCard({ title, value, color }) {

  return (

    <motion.div

      whileHover={{ scale: 1.05 }}

      className={`
        rounded-3xl 
        p-6 
        text-white 
        shadow-xl 
        ${color}
        dark:shadow-gray-900
        transition-all
        duration-300
      `}

    >


      <h2 className="text-lg opacity-80 dark:text-gray-100">

        {title}

      </h2>



      <h1 className="text-5xl font-bold mt-5">

        {value}

      </h1>



    </motion.div>

  );

}

export default StatCard;