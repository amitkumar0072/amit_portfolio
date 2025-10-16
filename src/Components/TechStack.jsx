import React from "react";
import { motion } from "framer-motion";

const techs = [
 
   { src: "/skills/css.png" },
   { src: "/skills/docker.png" },
   { src: "/skills/express.png" },
   { src: "/skills/figma.png" },
   { src: "/skills/firebase.png" },
   { src: "/skills/graphql.png" },
   { src: "/skills/html.png" },
   { src: "/skills/js.png" },
   { src: "/skills/mongodb.png" },
   { src: "/skills/mysql.png" },
   { src: "/skills/next.png" },
   { src: "/skills/node.png" },
   { src: "/skills/postgresql.png" },
   { src: "/skills/react.png" },
   { src: "/skills/reactnative.png" },
   { src: "/skills/reactquery.png" },
   { src: "/skills/redux.png" },
   { src: "/skills/stripe.png" },
   { src: "/skills/tailwind.png" },
   
];

const TechStack = () => {
const firstRow = techs.slice(0, 8);
  const secondRow = techs.slice(8, 12);
  const thirdRow = techs.slice(12);

  const renderRow = (items, startDelay = 0) => (
    <div className="flex flex-wrap justify-center items-center gap-10 mb-8">
      {items.map((tech, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }} // triggers when in viewport
          viewport={{ once: true, amount: 0.3 }} // animate only once when 30% visible
          transition={{
            duration: 0.1,
            delay: startDelay + index * 0.1,
            ease: "easeOut",
          }}
        >
          <img
            src={tech.src}
            alt={tech.name}
            className="w-16 h-16 md:w-18 md:h-18 object-contain transition-transform hover:scale-110 duration-300"
          />
          <p className="text-gray-400 text-sm mt-2">{tech.name}</p>
        </motion.div>
      ))}
    </div>
  );

  return (
    <section className="w-full text-center py-2 bg-[#0a0909] px-6">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
        Making apps with modern technologies.
      </h2>
      <p className="text-gray-300 italic mb-12">
        Never miss a task, deadline or idea.
      </p>

      {/* Rows with animation delay offset between them */}
      {renderRow(firstRow, 0)}
      {renderRow(secondRow, 1.2)}
      {renderRow(thirdRow, 2.0)}
    </section>
  );
};

export default TechStack;