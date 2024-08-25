"use client";
import { Button } from "@/components/ui/button";
import Header from "./dashboard/_components/Header";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="">
      <Header />
      <div className="">
        <Image
          src={"/grid.svg"}
          layout="fill"
          objectFit="cover"
          alt="bg img"
          loading="lazy"
          style={{
            zIndex: -1,
          }}
        />
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-extrabold text-6xl mt-28">
            Your Personal AI Interview Coach
          </h1>
          <h2 className="text-gray-500 text-lg mt-8">
            Double your chances of landing that job offer with our AI-powered
            interview prep.
          </h2>
          <Button
            className="flex gap-3 mt-12"
            onClick={() => router.push("/dashboard")}
          >
            Get Started
            <ArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
}
