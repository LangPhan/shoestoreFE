import { motion } from "framer-motion";
import {
  GitPullRequestArrow,
  MessageCircle,
} from "lucide-react";
const AboutUs = () => {
  return (
    <div className="container my-5 flex flex-col justify-center items-center">
      <motion.div
        initial={{
          opacity: 1,
        }}
        animate={{
          opacity: 0,
          transition: {
            duration: 1.8,
          },
        }}
        className="h-[200px]"
      >
        <GitPullRequestArrow className="w-40 h-40 text main animate-spin" />
      </motion.div>
      <motion.div
        initial={{
          x: 50,
          opacity: 0,
        }}
        animate={{
          x: 200,
          opacity: 1,
          transition: {
            duration: 1.5,
            delay: 2,
            delayChildren: 1.5,
          },
        }}
        className="w-[800px] aspect-[16:9] rounded-2xl drop-shadow-2xl relative before:content-['FourDev'] before:absolute before:bg-white before:text-2xl before:font-bold before:bottom-0 before:left-1/2 before:-translate-x-1/2"
      >
        <img
          className="w-full h-full rounded-2xl"
          src="./four_dev.png"
          alt="fourDev"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: 1,
            },
          }}
          className="absolute top-1/2 left-1/3 -translate-y-[200px]"
        >
          <MessageCircle size={150} />
          <p className="absolute font-semibold top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
            Leader tới kìa!
          </p>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{
          y: -600,
          x: -800,
          opacity: 0,
        }}
        animate={{
          x: -350,
          opacity: 1,
          transition: {
            duration: 1.5,
            delay: 4,
          },
        }}
        className="w-[350px] aspect-[9:16] rounded-2xl drop-shadow-2x
      relative before:content-['Leader'] before:absolute before:bg-white before:text-2xl before:font-bold before:bottom-0 before:left-1/2 before:-translate-x-1/2
      "
      >
        <img
          className="w-full h-full rounded-2xl"
          src="./leader.png"
          alt="leader"
        />
        <div className="absolute top-0 right-0 translate-x-[50px]">
          <MessageCircle size={180} />
          <p className="absolute font-semibold top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
            Về chỗ, làm việc ngay cho
            tôi
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
