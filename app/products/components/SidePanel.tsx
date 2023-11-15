"use client"
import { BsXLg } from "react-icons/bs";

const filters = [
    {
        title: "Mind",
        values: [
            "Focus & Concentration",
            "Stress Relief",
            "Mood Support",
            "Memory Improvement",
            "Neuroprotection",
        ]
    },

    {
        title: "Body",
        values: [
            "Energy & Metabolism",
            "Weight Control",
            "Fitness & Recovery",
            "Immune Support",
            "Sleep Support",
        ]
    },

    {
        title: "Wellbeing",
        values: [
            "General Wellness",
            "Longevity & Anti-Aging",
            "Digestive Health",
            "Prenatal",
        ]
    },

    {
        title: "Personal Care",
        values: [
            "Skin Care",
            "Hair and Nails"
        ],
    }
];

export default function SidePanel({ active, setActive }: { active: boolean, setActive: ( value: boolean ) => any }) {

    return (
        <>
            <div className={` w-[300px] border rounded p-6 bg-white max-[1000px]:absolute top-0 z-20 ${ active ? 'left-3' : '-left-[400vw]' } `}>
                <div onClick={() => setActive(!active)} className="hidden max-[1000px]:flex items-center justify-center text-xl border rounded absolute top-3 right-3 h-[40px] w-[40px]">
                    <BsXLg />
                </div>
                {filters.map( (item, index) => 
                    <div key={index} className=" mb-6 ">
                        <div className="title font-bold my-1.5">{item.title}</div>
                        {item.values.map( (item, index) => 
                            <div key={index} className="p-1.5 border rounded mb-3 text-sm font-semibold text-gray-600 hover:bg-purple-600 hover:text-white">{item}</div>
                        )}
                    </div>
                )}
            </div>
        </>
    );
}