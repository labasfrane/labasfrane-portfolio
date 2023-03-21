import { PageInfo } from "@/typings";
import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundAnimation from "./BackgroundAnimation";
import Image from "next/image";
import { urlFor } from "@/sanity";

type Props = {
  pageInfo: PageInfo;
};

const Hero = ({ pageInfo }: Props) => {
  const [text, count] = useTypewriter({
    words: [`Hi, my name is ${pageInfo?.name}`, "Welcome to my page"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 justify-center items-center text-center overflow-hidden pt-10">
      <BackgroundAnimation />
      <Image
        src={urlFor(pageInfo?.heroImage).url()}
        alt={pageInfo?.name}
        width={130}
        height={130}
        className="relative mx-auto rounded-full object-cover"
      />
      <div className="text-customYellow z-20">
        <h2 className="uppercase text-sm tracking-[7px] pb-2">
          {pageInfo?.role}
        </h2>
        <h1>
          <span>{text}</span>
          <Cursor />
        </h1>

        {/* Navigation Links */}

        <div className="pt-12">
          <Link href="#about">
            <button className="customButton">About</button>
          </Link>
          <Link href="#skills">
            <button className="customButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="customButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
