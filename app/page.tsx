
import { useState } from "react";

import Image from "next/image";
import HomeNav from "@/components/HomeNav";
import { Btn, OutlineBtn } from "@/components/Button";
import Footer from "@/components/Footer";


const Header = () => {
  return (
    <header className="relative">
      <div className="grid grid-cols-12 p-12 max-[800px]:p-6 relative z-10 bg-white bg-opacity-80 backdrop-blur-sm">
        <div className="col-span-6 max-[700px]:col-span-12">
          <div className="">
            <div className="text-gray-600 text-lg max-[1000px]:text-sm">This is a retorical question?</div>
            <div className="text-6xl max-[1000px]:text-3xl font-bold my-3 leading-tight capitalize "><span className="text-purple-600">an engaging</span> title that tells what the <span className="text-purple-600"> product</span> does</div>
            <div className="mb-6 text-xl max-[1000px]:text-lg">This is a short paragraph contain a description of how the product does what the engaging title above says it does.</div>
            <OutlineBtn extra="w-[200px] h-[50px] max-[700px]:w-full">Get Started</OutlineBtn>
          </div>
        </div>

        <div className="col-span-6 relative max-[700px]:col-span-12 max-[700px]:h-[320px] max-[700px]:mt-3">
          <Image
            src="/images/header.jpg"
            className="object-contain"
            alt="nootropics"
            fill
          />
        </div>
      </div>
    </header>
  );
}

const features : {title: string, content: string, image: string}[] = [
  {
    title: "Unlock Your Cognitive Potential",
    content: 
    `Discover a world where your cognitive enhancement is personalized just for you. 
    Tailor your own nootropic experience and elevate your mental performance with our intuitive platform.`,
    image: "/images/brain.png",
  },
  {
    title: "Create Your Unique Stack",
    content: "Unleash your creativity and craft a personalized nootropic stack that aligns perfectly with your goals and preferences. Tailor every detail to create an experience that's uniquely yours.",
    image: "/images/snow.jpg"
  },
  {
    title: "Track Your Cognitive Journey",
    content: "Embark on a cognitive adventure with our tracking feature. Monitor the effects, journal your experiences, and gain insights into your mental performance. Keep a detailed record of your journey toward optimized cognitive excellence.",
    image: "/images/tracker.png"
  },
  {
    title: "Share Your Success Story",
    content: "Celebrate your achievements by sharing your personalized nootropic stacks with the community. Inspire others and foster collaboration in the pursuit of cognitive enhancement. Your unique insights can make a difference.",
    image: "/images/share.avif"
  },
  {
    title: "Optimize Your Cognitive Performance",
    content: "Our platform goes beyond just creating and tracking – it's about optimization. Fine-tune your stacks based on your experiences, ensuring each combination contributes to your ultimate cognitive performance goals.",
    image: "/images/optimize.avif"
  },
  {
    title: "Community Connection",
    content: "Connect with like-minded individuals who share your passion for cognitive enhancement. Share tips, exchange ideas, and learn from others on the same journey. Together, we're building a community dedicated to achieving peak cognitive performance.",
    image: "/images/community.avif"
  }
]

const Features = () => {
  return (
    <section>
      <div className="grid grid-cols-12 gap-3 p-12 max-[800px]:p-6 max-[400px]:p-3">
        {features.map( (item, index) => 
          <div key={index} className="relative border rounded col-span-4 max-[1100px]:col-span-6 max-[650px]:col-span-12 group hover:scale-100 scale-95">
            <div className="relative z-10 h-full w-full p-6 max-[400px]:p-3">
              {index % 2 == 0 && 
                <div className="relative w-full z-0 h-[250px] mb-3 ">
                  <Image
                    src={item.image}
                    className="object-contain"
                    alt="nootropics"
                    fill
                  />
                </div>
              }
              <div className=" font-bold text-2xl mb-3">{item.title}</div>
              <div className=" mb-3 font-semibold text-gray-600 leading-loose">{item.content}</div>
              {index % 2 !== 0 && 
                <div className="relative w-full z-0 h-[250px] ">
                  <Image
                    src={item.image}
                    className="object-contain"
                    alt="nootropics"
                    fill
                  />
                </div>
              }
            </div>

            {/* <div className="absolute top-0 left-0 h-full w-full z-0">
              <Image
                src={index % 2 == 0 ? "/images/shapes.jpg" : "/images/shapes_1.jpg"}
                className="object-cover"
                alt="nootropics"
                fill
              />
            </div> */}
          </div>
        )}
      </div>
    </section>
  );
}

const Hotspot = () => {
  return (
    <section className="p-12 max-[600px]:p-3">
      <div className="bg-purple-600 text-white grid grid-cols-12 max-[920px]:grid-cols-6 p-12 rounded">
        <div className="col-span-6">
          <div className="font-bold text-5xl max-[400px]:text-3xl">A cool title that highlights the products hotspot</div>
          <p className="text-lg my-6">
            Something that tells what this hot spot told in the title above offers to the user, 
            it should be interesting enough to catch the users attention and feel a little too 
            good to be true
          </p>
          <Btn extra="h-[55px]">Call To Action</Btn>
        </div>

        <div className="col-span-6 relative">
          <Image
            src={"/images/brain.png"}
            className="object-contain"
            alt="nootropics"
            fill
          />
        </div>
      </div>
    </section>
  );
}

export default function Home() {

  return (
    <main>
      <HomeNav />

      <Header />

      <Features />

      <Hotspot />

      <section className="p-12"></section>

      <Footer />

    </main>
  )
}