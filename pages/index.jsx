import { TECH_BADGES } from "../data";
import Head from 'next/head';
import Image from "next/image";

export default function Home() {
  const badges = TECH_BADGES;
  return (
    <>
    <Head>
      <title>Matthew Ritter</title>
    </Head>
    <div className="h-screen flex">
      <div className="mx-auto max-w-7xl my-auto p-16 bg-gray-200 rounded-3xl flex gap-10 flex-col bg-opacity-50 mt-60">
        <div className="text-3xl text-center">Hi my name is Matthew Ritter</div>
        <div className="text-lg text-center">
          I'm a software engineer. I like to build things and I use software development
          to do just that. These are the technologies I'm currently working with
          in my role as a softwear engineer and in my own projects.
          I'm always finding new tools to solve problems, which means I'm always
          learning new things and I love that about software development.
        </div>
        <div className="flex flex-wrap gap-5 justify-center">
          {badges.map((badge) => {
            return (
              <Image
                key={badge.image_id}
                src={badge.url}
                title={badge.title}
                alt={badge.title}
                height="55"
                width="55"
              />
            );
          })}
        </div>
      </div>
    </div>
    </>
  );
}
