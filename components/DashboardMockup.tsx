"use client";

import { useEffect, useRef, useState } from "react";

export default function DashboardMockup() {
    const ref = useRef<HTMLDivElement>(null);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!ref.current) return;
            const rect = ref.current.getBoundingClientRect();
            // Trigger animation when the element enters the viewport substantially
            const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
            setScrolled(isVisible);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        // Initial check
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            ref={ref}
            className={`rounded-2xl md:rounded-[32px] overflow-hidden border border-gray-200 bg-white aspect-[16/9] md:aspect-[21/9] flex flex-col pt-1 transition-all duration-1000 ease-out transform ${scrolled
                    ? "shadow-[0_40px_120px_-20px_rgba(0,173,181,0.4)] -translate-y-4 scale-[1.02]"
                    : "shadow-[0_20px_60px_-15px_rgba(0,173,181,0.15)] translate-y-4 scale-[0.98] opacity-80"
                }`}
        >
            {/* Mockup Header */}
            <div className="h-12 border-b border-gray-100 bg-gray-50/50 flex items-center px-4 gap-2 xl:px-6">
                <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-400"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                    <span className="w-3 h-3 rounded-full bg-green-400"></span>
                </div>
                <div className="mx-auto block text-xs font-semibold text-gray-400 tracking-widest px-8 py-1.5 rounded-md bg-white border border-gray-100 shadow-sm transition-colors hover:text-gray-600 cursor-pointer">
                    app.codeswayam.com
                </div>
            </div>
            {/* Mockup Body */}
            <div className="flex-1 flex p-6 gap-6 bg-[#F9FAFB]">
                {/* Mock Sidebar */}
                <div className="hidden md:flex flex-col w-48 gap-3">
                    <div className="h-8 w-full bg-gray-200 rounded-md mb-4 hover:bg-gray-300 transition-colors cursor-pointer"></div>
                    <div className="h-4 w-3/4 bg-gray-200 rounded-sm hover:w-full hover:bg-gray-300 transition-all duration-300 cursor-pointer"></div>
                    <div className="h-4 w-full bg-gray-200 rounded-sm hover:bg-gray-300 transition-colors cursor-pointer"></div>
                    <div className="h-4 w-5/6 bg-gray-200 rounded-sm hover:w-full hover:bg-gray-300 transition-all duration-300 cursor-pointer"></div>
                    <div className="h-4 w-2/3 bg-gray-200 rounded-sm mt-4 hover:w-full hover:bg-gray-300 transition-all duration-300 cursor-pointer"></div>
                    <div className="h-4 w-full bg-[#00ADB5]/20 rounded-sm border-l-2 border-[#00ADB5] hover:bg-[#00ADB5]/30 transition-colors cursor-pointer"></div>
                </div>
                {/* Mock Main Content Area */}
                <div className="flex-1 bg-white border border-gray-100 rounded-xl shadow-sm p-6 flex flex-col">
                    <div className="flex justify-between items-end mb-8">
                        <div className="space-y-2">
                            <div className="h-6 w-48 bg-gray-200 rounded-md"></div>
                            <div className="h-4 w-32 bg-gray-100 rounded-sm"></div>
                        </div>
                        <div className="h-10 w-32 bg-[#222831] rounded-lg hover:bg-[#393E46] hover:scale-105 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md"></div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="h-24 bg-gray-50 border border-gray-100 rounded-lg p-4 flex flex-col justify-between hover:bg-white hover:border-[#00ADB5]/30 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer group/card">
                            <div className="h-3 w-16 bg-gray-200 rounded-sm group-hover/card:bg-[#00ADB5]/20 transition-colors"></div>
                            <div className="h-6 w-24 bg-gray-300 rounded-sm font-bold group-hover/card:bg-[#00ADB5]/60 transition-colors"></div>
                        </div>
                        <div className="h-24 bg-gray-50 border border-gray-100 rounded-lg p-4 flex flex-col justify-between hover:bg-white hover:border-[#00ADB5]/30 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer group/card">
                            <div className="h-3 w-16 bg-gray-200 rounded-sm group-hover/card:bg-[#00ADB5]/20 transition-colors"></div>
                            <div className="h-6 w-24 bg-gray-300 rounded-sm font-bold group-hover/card:bg-[#00ADB5]/60 transition-colors"></div>
                        </div>
                        <div className="h-24 bg-gray-50 border border-gray-100 rounded-lg p-4 flex flex-col justify-between hover:bg-white hover:border-[#00ADB5]/30 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer group/card">
                            <div className="h-3 w-16 bg-gray-200 rounded-sm group-hover/card:bg-[#00ADB5]/20 transition-colors"></div>
                            <div className="h-6 w-24 bg-gray-300 rounded-sm font-bold group-hover/card:bg-[#00ADB5]/60 transition-colors"></div>
                        </div>
                    </div>
                    <div className="flex-1 bg-gray-50 rounded-lg border border-gray-100 mt-4 hover:bg-white hover:border-[#00ADB5]/30 hover:shadow-sm transition-all duration-300 cursor-pointer"></div>
                </div>
            </div>
        </div>
    );
}
