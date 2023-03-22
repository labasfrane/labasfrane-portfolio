import { PageInfo } from "@/typings";
import { motion } from "framer-motion";

type Props = {
  pageInfo: PageInfo;
};

const About = ({ pageInfo }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="sectionHeader">about</h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 2,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        // viewport={{ once = true }}
        src="/mountainsProfile.png"
        alt="profile-picture"
        className="-mb-5 md:mb-0 mt-28 md:mt-0 flex-shrink-0 w-48 h-48 sm:w-64 sm:h-64 rounded-full object-cover md:rounded-lg md:w-64 md:h-80 xl:w-[600px] xl:h-[300px]"
      />

      <div className="px-0 md:px-10 space-y-3 md:space-y-5">
        {" "}
        <h4 className="text-2xl font-semibold">
          Let me{" "}
          <span className="underline underline-offset-4 decoration-customYellow">
            introduce
          </span>{" "}
          myself{" "}
        </h4>
        <p className="text-xs sm:text-sm md:text-base">
          {pageInfo?.backgroundInformation}
        </p>
      </div>
    </motion.div>
  );
};

export default About;
