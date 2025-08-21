import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      {/* <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main> */}
      <div className="w-full h-screen flex items-center bg-[#79E777] relative">
        <div className="absolute bg-red-00 w-full  absolute flex flex-rows justify-end bottom-10   z-40">
          <div className="flex flex-rows items-center justify-end  gap-8 w-full">
            <img
              src="img/icons/star1.png"
              alt="Inovac Logo"
              className="w-40 object-contain"
            />
            <img
              src="img/icons/star2.png"
              alt="Inovac Logo"
              className="w-40 object-contain"
            />
            <img
              src="img/icons/star3.png"
              alt="Inovac Logo"
              className="w-40 object-contain"
            />
          </div>
        </div>
        <div className="left-[10%] top-40 absolute z-10 grid grid-cols-1 gap-4">
          <img
            src="img/Innoblogdocument.png"
            alt="Inovac Logo"
            className="w-1/3 h-auto object-contain "
          />
          <img
            src="img/icons/title.png"
            alt="Inovac Logo"
            className="w-1/3 h-auto object-contain"
          />
          <div className="bg-blue-0 flex flex-rows items-start gap-4">
            <button className="text-xl w-[200px] h-[66px] border rounded-3xl border-gray-900">
              Get Start
            </button>
            <button className="text-xl w-[200px] h-[66px] rounded-3xl text-white bg-black">
              Explore more
            </button>
          </div>
          <div className="bg-blue-0 flex flex-rows gap-4 xl:mt-[10%] md:mt-[5%]">
            <button>
              <img
                src="img/icons/social1.png"
                alt="Inovac Logo"
                className="w-20 h-auto object-contain"
              />
            </button>
            <button>
              <img
                src="img/icons/social2.png"
                alt="Inovac Logo"
                className="w-20 h-auto object-contain"
              />
            </button>
            <button>
              <img
                src="img/icons/social3.png"
                alt="Inovac Logo"
                className="w-20 h-auto object-contain"
              />
            </button>
          </div>
        </div>
        <img
          src="img/icons/Group1.png"
          alt="Inovac Logo"
          className="w-[130px] h-auto object-contain left-[0%] bottom-0 absolute z-20"
        />
        <img
          src="img/icons/Frame.png"
          alt="Inovac Logo"
          className="w-40 object-contain left-0 top-0 absolute z-20"
        />
        <img
          src="img/icons/Frame1.png"
          alt="Inovac Logo"
          className="w-[20%] object-contain right-0 top-20 absolute z-20"
        />
        <img
          src="img/icons/Frame.png"
          alt="Inovac Logo"
          className="w-20 object-contain right-[18%] top-[30%] absolute z-30 rotate-180"
        />
      </div>
    </Layout>
  );
}
