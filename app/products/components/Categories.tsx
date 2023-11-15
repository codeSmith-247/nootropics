import HomeNav from "@/components/HomeNav";
import SideScroll from "@/components/SideScroll";
import Image from "next/image";

const categories = [
    {
        image: "/images/nootropic_.webp",
        title: "Nootropics",
        link: "",
    },

    {
        image: "/images/supplement.webp",
        title: "Supplements",
        link: "",
    },

    {
        image: "/images/vitamins.avif",
        title: "Vitamins",
        link: "",
    },

    {
        image: "/images/herbs.jpg",
        title: "Herbs",
        link: "",
    },

    {
        image: "/images/store.jpg",
        title: "Commercially Available",
        link: "",
    },

    {
        image: "/images/medication.jpg",
        title: "Medication",
        link: "",
    },

    {
        image: "/images/minerals.avif",
        title: "Minerals",
        link: "",
    },

    {
        image: "/images/dna.png",
        title: "Others",
        link: "",
    },
]

export default function Categories() {

    return (
        <div className="p-12 max-[800px]:p-6">
            <SideScroll>
                {categories.map( (item, index) => 
                    <div key={index} className="rounded p-6 border group hover:bg-purple-600 ">
                        <div className="h-[100px] w-[120px] max-[400px]:w-[90px] max-[400px]:h-[90px] rounded overflow-hidden relative">
                            <Image
                                src={item.image}
                                className="object-cover"
                                alt="nootropics"
                                fill
                            />
                        </div>
                        <div className=" overflow-clip max-w-[120px] max-[400px]:max-w-[90px] max-[400px]:whitespace-normal whitespace-nowrap text-sm text-center font-semibold font-gray-600 group-hover:text-white mt-3">{item.title}</div>
                    </div>
                )}
            </SideScroll>
        </div>
    );
}