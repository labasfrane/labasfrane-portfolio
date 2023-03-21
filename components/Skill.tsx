import Image from "next/image";
import { urlFor } from "@/sanity";
import { Skill } from "@/typings";
import { motion } from "framer-motion";

type Props = {
  skill: Skill;
  delay?: boolean;
};

function Skill({ skill, delay }: Props) {
  return (
    <motion.div
      initial={{
        y: -300,
        opacity: 0,
      }}
      transition={{ duration: delay ? 1 : 1.5 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="group relative flex cursor-pointer"
    >
      <Image
        src={urlFor(skill?.image)?.url()}
        alt={skill?._id}
        width={650}
        height={650}
        className="rounded-full border border-black object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      {/* hover state style  */}
      <div className="absolute rounded-full opacity-0 group-hover:opacity-80 group-hover:bg-white transition duration-300 ease-in-out w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">
            {skill?.progress}%
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default Skill;
