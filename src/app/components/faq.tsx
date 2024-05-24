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
        <div className="w-full  flex gap-3 flex-col md:flex-row vertical-sections-padding items-start justify-start bg-black z-50">
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
                        <AccordionTrigger className="text-white text-start">What services do you offer?</AccordionTrigger>
                        <AccordionContent className="text-white text-start">
                            We provide a comprehensive range of web development services including custom website design, e-commerce solutions, mobile app development, website maintenance, and SEO optimization.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger className="text-white text-start">Is it Worth To Work With Cayonix?</AccordionTrigger>
                        <AccordionContent className="text-white text-start">
                            Yes. of course we will make sure that our Products meet the client's desires and we will take care of new clients
                        </AccordionContent>
                    </AccordionItem>


                    <AccordionItem value="item-3">
                        <AccordionTrigger className="text-white text-start">What information do I need to provide for a website design project?</AccordionTrigger>
                        <AccordionContent className="text-white text-start">
                            We’ll need some basic information such as your business name, target audience, key functionalities you want on your website (e.g., e-commerce, blog, contact forms), and any design preferences or examples of websites you like.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                        <AccordionTrigger className="text-white text-start">How long does it take to build a website?
                        </AccordionTrigger>
                        <AccordionContent className="text-white text-start">
                        The timeline for building a website varies depending on the complexity and size of the project. A basic website can take 4-6 weeks, while more complex projects may take several months. We’ll provide a detailed timeline after discussing your project requirements.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
};

export default Faq;
