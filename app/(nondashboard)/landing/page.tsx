"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

import { Skeleton } from "@/components/ui/skeleton";
import { useCarousel } from "@/hooks/use-carousel";
import { cn } from "@/lib/utils";

const LoadingSkeleton = () => {
  return (
    <div className="w-3/4">
      <div className="mt-12 flex h-[500px] items-center justify-between rounded-lg bg-customgreys-secondarybg">
        <div className="mx-auto basis-1/2 px-16">
          <Skeleton className="mb-4 h-8 w-48" />
          <Skeleton className="mb-2 h-4 w-96" />
          <Skeleton className="mb-8 h-4 w-72" />
          <Skeleton className="h-10 w-40" />
        </div>

        <Skeleton className="h-full basis-1/2 rounded-r-lg" />
      </div>
      <div className="mx-auto mt-10 py-12">
        <Skeleton className="mx-auto mt-10 py-12" />
        <Skeleton className="mb-8 h-4 w-full max-w-2xl" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {Array(5).map((_, index) => (
            <Skeleton key={index} className="h-[300px] rounded-lg" />
          ))}
        </div>
      </div>
    </div>
  );
};

const Landing = () => {
  const currentImage = useCarousel({ totalImages: 3 });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-3/4"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mt-12 flex h-[500px] items-center justify-between rounded-lg bg-customgreys-secondarybg"
      >
        <div className="mx-auto basis-1/2 px-16">
          <h1 className="mb-4 text-4xl font-bold">Courses</h1>
          <p className="mb-8 text-lg text-gray-400">
            This is the list of courses you can enroll in.
            <br />
            Courses when you need them and want them.
          </p>
          <div className="w-fit">
            <Link href="/search">
              <div className="rounded-md bg-primary-700 px-4 py-2 hover:bg-primary-600">
                Search for Courses
              </div>
            </Link>
          </div>
        </div>
        <div className="relative h-full basis-1/2 overflow-hidden rounded-r-lg">
          {["/hero1.jpg", "/hero2.jpg", "/hero3.jpg"].map((src, index) => (
            <Image
              key={src}
              src={src}
              alt={`Hero Banner ${index + 1}`}
              fill
              priority={index === currentImage}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={cn(
                "object-cover opacity-0 transition-opacity duration-500",
                index === currentImage && "opacity-100",
              )}
            />
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ amount: 0.3, once: true }}
        className="mx-auto mt-10 py-12"
      >
        <h2 className="mb-4 text-2xl font-semibold">Featured Courses</h2>
        <p className="mb-8 text-customgreys-dirtyGrey">
          From beginner to advanced, in all industries, we have the right
          courses just for you and preparing your entire journey for learning
          and making the most.
        </p>

        <div className="mb-8 flex flex-wrap gap-4">
          {[
            "Artificial Intelligence",
            "Fullstack Development",
            "DevOps",
            "Cloud Services",
            "UI / UX",
          ].map((tag, index) => (
            <span
              key={index}
              className="rounded-full bg-customgreys-secondarybg px-3 py-1 text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* COURSES */}
        </div>
      </motion.div>
    </motion.div>
  );
};

export { Landing };
