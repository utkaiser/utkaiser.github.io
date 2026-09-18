"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const externalLink =
  "underline decoration-zinc-400 underline-offset-2 transition-colors duration-200 hover:text-zinc-900 dark:decoration-zinc-500 dark:hover:text-zinc-100";

function Pill({
  href,
  children,
  compact = false,
}: {
  href: string;
  children: React.ReactNode;
  compact?: boolean;
}) {
  return (
    <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.97 }}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`group relative inline-flex shrink-0 items-center gap-px whitespace-nowrap rounded-full bg-zinc-100 text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700 ${compact ? "px-2 py-0.5 text-xs" : "px-2.5 py-1 text-sm"}`}
      >
        {children}
      </a>
    </motion.div>
  );
}

function AnimatedRole({ children }: { children: string }) {
  return (
    <p className="text-zinc-600 dark:text-zinc-500">
      <span className="sr-only">{children}</span>
      <span className="inline-block whitespace-pre" aria-hidden="true">
        {Array.from(children).map((character, index) => (
          <motion.span
            key={index}
            className="inline-block whitespace-pre"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.18, delay: 0.018 * index }}
          >
            {character}
          </motion.span>
        ))}
      </span>
    </p>
  );
}

const sectionMotion = {
  initial: { opacity: 0, filter: "blur(4px)", y: 4 },
  animate: { opacity: 1, filter: "blur(0px)", y: 0 },
  transition: { duration: 0.45, ease: "easeOut" as const },
};

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
      <div className="relative mx-auto flex w-full max-w-[44rem] flex-1 flex-col px-4 pt-20 max-sm:pt-12">
        <header className="relative mb-8 flex min-h-20 items-start justify-between gap-6 sm:min-h-12">
          <div className="pt-1">
            <h1 className="font-medium text-black dark:text-white">
              <Link href="/">Luis Kaiser</Link>
            </h1>
            <AnimatedRole>AI Researcher</AnimatedRole>
          </div>
          <aside
            className="relative z-10 flex w-48 shrink-0 flex-col items-center gap-3 sm:absolute sm:right-0 sm:top-2.5 sm:w-[148px]"
            aria-label="Contact"
          >
            <div className="relative h-[166px] w-[148px] shrink-0 translate-y-[8px] overflow-hidden">
              <Image
                src="/images/luis-kaiser.webp"
                alt="Luis Kaiser"
                fill
                sizes="148px"
                quality={100}
                priority
                className="object-cover object-center"
              />
            </div>
            <p className="whitespace-nowrap text-center text-sm text-zinc-600 dark:text-zinc-400">
              lkaiser at utexas dot edu
            </p>
            <div className="-mt-1 flex flex-nowrap items-center justify-center gap-2">
              <Pill
                href="https://scholar.google.com/citations?user=AB4exREAAAAJ&amp;hl=en"
                compact
              >
                Google Scholar
              </Pill>
              <Pill
                href="https://www.linkedin.com/in/luiskaiser/"
                compact
              >
                LinkedIn
              </Pill>
            </div>
          </aside>
        </header>

        <main className="space-y-12">
          <motion.section {...sectionMotion}>
            <div className="space-y-3 text-zinc-600 dark:text-zinc-400 sm:max-w-[456px]">
              <p className="sm:whitespace-nowrap">
                PhD in Mathematics at{" "}
                <a
                  href="https://www.utexas.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={externalLink}
                >
                  UT Austin
                </a>
                , advised by{" "}
                <a
                  href="https://scholar.google.com/citations?user=6yls9oMAAAAJ&amp;hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={externalLink}
                >
                  Richard Tsai
                </a>
                .
                <span className="block">
                  Focus on RL and continual learning.
                </span>
              </p>
              <p>
                <span className="block sm:whitespace-nowrap">
                  Currently automate research at{" "}
                  <a
                    href="https://x.company/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={externalLink}
                  >
                    Google X
                  </a>{" "}
                  for an AI moonshot.
                </span>
                <span className="block">
                  Previously{" "}
                  <a
                    href="https://www.bloomberg.com/company/what-we-do/engineering-cto/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={externalLink}
                  >
                    Bloomberg
                  </a>
                  .
                </span>
              </p>
              <p>
                Studied Mathematics at{" "}
                <a
                  href="https://www.tum.de/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={externalLink}
                >
                  TUM
                </a>{" "}
                and{" "}
                <a
                  href="https://www.uni-wuerzburg.de/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={externalLink}
                >
                  Wuerzburg
                </a>
                , advised by{" "}
                <a
                  href="https://scholar.google.com/citations?user=S6MCm88AAAAJ&amp;hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={externalLink}
                >
                  Prof. Klingenberg
                </a>{" "}
                and{" "}
                <a
                  href="https://scholar.google.com/citations?user=eWTzXFAAAAAJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={externalLink}
                >
                  Prof. Hotho
                </a>
                .
              </p>
            </div>
          </motion.section>

          <motion.section
            {...sectionMotion}
            transition={{ ...sectionMotion.transition, delay: 0.06 }}
            id="research"
          >
            <h2 className="mb-5 text-lg font-medium">Research</h2>
            <div className="space-y-3">
              <article className="flex min-h-[82px] overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800">
                <div className="relative w-28 shrink-0 bg-black">
                  <Image
                    src="/images/google-x.jpg"
                    alt="X, the Moonshot Factory"
                    fill
                    sizes="112px"
                    loading="eager"
                    className="object-contain"
                  />
                </div>
                <div className="min-w-0 flex-1 px-3 py-2">
                  <a
                    href="https://x.company/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium leading-snug text-black transition-colors hover:text-zinc-600 dark:text-white dark:hover:text-zinc-300"
                  >
                    Google X - PhD Residency
                  </a>
                  <p className="mt-1 text-xs leading-snug text-zinc-600 dark:text-zinc-400">
                    Focus areas included self-improving AI and PDEs.
                  </p>
                </div>
              </article>

              <article className="flex min-h-[95px] overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800">
                <div className="relative w-28 shrink-0">
                  <Image
                    src="/images/wave-propagation.png"
                    alt="Three-dimensional wave propagation simulation"
                    fill
                    sizes="112px"
                    loading="eager"
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1 px-3 py-1">
                  <a
                    href="https://link.springer.com/chapter/10.1007/978-3-031-86169-7_2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium leading-snug text-black transition-colors hover:text-zinc-600 dark:text-white dark:hover:text-zinc-300"
                  >
                    Efficient Wave Propagation
                  </a>
                  <p className="mt-0.5 text-xs leading-snug text-zinc-600 dark:text-zinc-400">
                    Luis Kaiser,{" "}
                    <a
                      href="https://scholar.google.com/citations?user=6yls9oMAAAAJ&amp;hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={externalLink}
                    >
                      Richard Tsai
                    </a>
                    , and{" "}
                    <a
                      href="https://scholar.google.com/citations?user=S6MCm88AAAAJ&amp;hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={externalLink}
                    >
                      Christian Klingenberg
                    </a>
                  </p>
                  <p className="text-xs leading-tight text-zinc-500">
                    ENUMATH23, Springer Nature, 2024
                  </p>
                  <div className="mt-1 flex flex-wrap items-center gap-2">
                    <Pill
                      href="https://link.springer.com/chapter/10.1007/978-3-031-86169-7_2"
                      compact
                    >
                      Paper
                    </Pill>
                    <Pill href="https://arxiv.org/abs/2402.02304" compact>
                      arXiv
                    </Pill>
                    <Pill
                      href="https://github.com/utkaiser/Deep-Wave-Propagation"
                      compact
                    >
                      Code
                    </Pill>
                  </div>
                </div>
              </article>

              <article className="flex min-h-[82px] overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800">
                <div className="relative w-28 shrink-0">
                  <Image
                    src="/images/ice-hockey.png"
                    alt="Autonomous ice hockey agent in SuperTuxKart"
                    fill
                    sizes="112px"
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1 px-3 py-1">
                  <a
                    href="https://github.com/utkaiser/deep_ice_hockey_agent"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium leading-snug text-black transition-colors hover:text-zinc-600 dark:text-white dark:hover:text-zinc-300"
                  >
                    Autonomous Multi-Agent RL in Differential Games
                  </a>
                  <p className="mt-0.5 text-xs leading-snug text-zinc-600 dark:text-zinc-400">
                    Luis Kaiser,{" "}
                    <a
                      href="https://www.linkedin.com/in/pedro-s-345523345/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={externalLink}
                    >
                      Pedro Silva
                    </a>
                  </p>
                  <p className="text-xs leading-tight text-zinc-500">
                    RL Computer Vision Competition, 2022
                  </p>
                  <div className="mt-1 flex items-center gap-2">
                    <Pill
                      href="https://github.com/utkaiser/deep_ice_hockey_agent/blob/master/paper_final.pdf"
                      compact
                    >
                      Paper
                    </Pill>
                    <Pill
                      href="https://github.com/utkaiser/deep_ice_hockey_agent/tree/master/code"
                      compact
                    >
                      Code
                    </Pill>
                  </div>
                </div>
              </article>

              <article className="flex min-h-[82px] overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800">
                <div className="relative w-28 shrink-0">
                  <Image
                    src="/images/deep-rl-agents.png"
                    alt="Deep reinforcement learning agents evaluated on financial market data"
                    fill
                    sizes="112px"
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1 px-3 py-1">
                  <a
                    href="https://github.com/utkaiser/neurotrader_thesis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium leading-snug text-black transition-colors hover:text-zinc-600 dark:text-white dark:hover:text-zinc-300"
                  >
                    Deep RL for Trading
                  </a>
                  <p className="mt-0.5 text-xs leading-snug text-zinc-600 dark:text-zinc-400">
                    Luis Kaiser,{" "}
                    <a
                      href="https://scholar.google.com/citations?user=pJB1MsAAAAAJ&amp;hl=de"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={externalLink}
                    >
                      Julian Tritscher
                    </a>
                    ,{" "}
                    <a
                      href="https://www.researchgate.net/scientific-contributions/Padraig-Davidson-2171782953"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={externalLink}
                    >
                      Padraig Davidson
                    </a>
                    , and{" "}
                    <a
                      href="https://scholar.google.com/citations?user=eWTzXFAAAAAJ&amp;hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={externalLink}
                    >
                      Andreas Hotho
                    </a>
                  </p>
                  <p className="text-xs leading-tight text-zinc-500">
                    Bachelor thesis, University of Wuerzburg, 2022
                  </p>
                  <div className="mt-1 flex items-center gap-2">
                    <Pill
                      href="https://github.com/utkaiser/neurotrader_thesis/blob/main/final.pdf"
                      compact
                    >
                      Thesis
                    </Pill>
                    <Pill
                      href="https://github.com/utkaiser/neurotrader_thesis"
                      compact
                    >
                      Code
                    </Pill>
                  </div>
                </div>
              </article>
            </div>
          </motion.section>
        </main>

        <footer className="mt-24 border-t border-zinc-100 px-0 py-4 dark:border-zinc-800">
          <div className="flex items-center justify-between">
            <div className="relative inline-block whitespace-nowrap text-xs text-zinc-500">
              <span>© {new Date().getFullYear()} Luis Kaiser.</span>
            </div>
            <div className="text-xs text-zinc-400" />
          </div>
        </footer>
      </div>
    </div>
  );
}
