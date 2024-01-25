"use client";
import CarouselPlayer from "@/components/Carousel/CarouselPlayer";
import Feature from "@/components/Feature/Feature";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Scroller from "@/components/Scroller/Scroller";
import Testimonial from "@/components/Testimonial/Testimonial";
import Video from "@/components/Video";
import { buttonVariants } from "@/components/ui/button";

import { ArrowRight, Loader2 } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, [isClient]);

  return (
    <>
      <MaxWidthWrapper className="mb-12 mt-20 sm:mt-40 flex flex-col items-center justify-center text-center">
        <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
          <p className="text-sm font-semibold text-gray-700">
            <Image alt="logo" src={"/logo.png"} width={60} height={60} />
          </p>
        </div>
        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
          Top schools use <span className="text-blue-600">Flint</span>
          <br />
          to embrace AI.
        </h1>
        <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg">
          Enhance learning with AI while protecting student data. All on a
          platform <br />
          built from the ground up for independent schools.
        </p>

        <Link
          className={buttonVariants({
            size: "lg",
            className: "mt-5",
          })}
          href="/dashboard"
          target="_blank"
        >
          Get started <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </MaxWidthWrapper>

      {/* value proposition section */}
      <section>
        <div>
          <div className="relative isolate">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
              <div
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              />
            </div>

            <div>
              <div className="mx-auto max-w-6xl px-6 lg:px-8">
                <div className="mt-16 flow-root sm:mt-24">
                  <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                    {isClient ? (
                      <Video />
                    ) : (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="mx-auto max-w-6xl px-6 lg:px-8">
                <div className="mt-16 flow-root sm:mt-24">
                  <Scroller />
                </div>
              </div>
            </div>

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
              <div
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
                className="relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"
              />
            </div>
          </div>
        </div>

        {/* Feature section */}
        <div className="mx-auto mb-32 mt-32 max-w-5xl sm:mt-46">
          <div className="mb-12 px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center sm:text-center">
              <h2 className="mt-2 font-bold text-4xl text-gray-900 sm:text-5xl">
                Flint let&apos;s <span className="text-blue-600">teachers</span>{" "}
                use to AI personalize learning.
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Design AI to tutor or assess students in 1-1 conversations,
                based on custom learning objectives and materials.
              </p>
            </div>
          </div>

          {/* Testimonail */}
          <Testimonial />

          {/* Carousel */}

          <div className="relative isolate">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
              <div
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              />
            </div>

            <div>
              <div className="mx-auto max-w-6xl px-6 lg:px-8">
                <div className="mt-16 flow-root sm:mt-24">
                  <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                    <CarouselPlayer />
                  </div>
                </div>
              </div>
            </div>

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
              <div
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
                className="relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"
              />
            </div>
          </div>

          {/* Feature */}

          <div className="mb-12 mt-10 px-6 sm:mt-20 lg:px-8">
            <div className="mx-auto max-w-4xl text-center sm:text-center">
              <h2 className="mt-2 font-bold text-3xl text-gray-900 sm:text-5xl">
                Built from the ground up for schools.
              </h2>
              <p className="mt-4 text-lg sm:text-md text-gray-600">
                Flint is an all-in-one AI platform built for schools We go
                beyond software to support administrators at every step.
              </p>
            </div>
          </div>

          <Feature />
        </div>
      </section>
    </>
  );
}
