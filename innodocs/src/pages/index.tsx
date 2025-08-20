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
        <img
          src="img/Innoblogdocument.png"
          alt="Inovac Logo"
          className="w-1/3 h-auto object-contain left-[10%] top-40 absolute z-10"
        />
        <img
          src="img/icons/title.png"
          alt="Inovac Logo"
          className="w-1/3 h-auto object-contain left-[10%] top-42 absolute z-10"
        />
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
        <div className="w-full h-full flex items-center justify-start left-[10%] -bottom-20 absolute z-35">
          <div className="flex flex-rows items-start gap-4">
            <button className="text-xl w-[200px] h-[66px] border rounded-3xl border-gray-900">Get Start</button>
            <button className="text-xl w-[200px] h-[66px] rounded-3xl text-white bg-black">Explore more</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
