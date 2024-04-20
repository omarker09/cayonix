"use client";
import React from "react";
import "../globals.css";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


const Faq = () => {
    return (
        <div className="w-full px-9 md:px-16 flex gap-3 flex-col md:flex-row vertical-sections-padding items-start justify-start bg-black z-50">
            <div className="flex w-full flex-col items-start gap-4">
                <div>
                    <span className="bg-white w-16  h-[2px]"></span>
                    <h1 className="text-xl text-gray-300">FAQ</h1>
                </div>
                <div className="gap-4 flex flex-col w-full items-start">
                    <h1 className="text-xl text-white">Got qustions? We will Answer</h1>
                    <p className="text-gray-400 text-sm">Everything you want to know about the product and billing</p>
                </div>
            </div>
            <div className="flex w-full items-end">
                <Accordion className="w-full" type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-white">Is it accessible?</AccordionTrigger>
                        <AccordionContent className="text-white">
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger className="text-white">Is it Possible to take it?</AccordionTrigger>
                        <AccordionContent className="text-white">
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>


                    <AccordionItem value="item-3">
                        <AccordionTrigger className="text-white">How to use our product?</AccordionTrigger>
                        <AccordionContent className="text-white">
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
};

export default Faq;
