"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { BarChart, DoorClosed, House, RectangleEllipsis } from "lucide-react";
import Link from "next/link";
import { SingleItem } from "../SingleItem";
import {
  dataSidebarConfiguration,
  dataSidebarElements,
} from "./SidebarRoutes.data";
import { signOut } from "next-auth/react";
export default function SidebarRoutes() {
  return (
    <div className="">
      <SingleItem lable="Homepage" icon={House} href="/" />

      {dataSidebarElements.map(({ title, icon: Icon, children }) => (
        <Accordion
          type="single"
          collapsible
          key={title}
          className="w-full px-2"
        >
          <AccordionItem value="item-1" className="border-b-0">
            <AccordionTrigger>
              <div className="flex gap-2 items-center">
                <div className="bg-blue-100/20 p-2 rounded-md">
                  <Icon size={20} />
                </div>
                {title}
              </div>
            </AccordionTrigger>
            <AccordionContent>
              {children.map(({ item, href, icon: Icon }) => (
                <div className="" key={item}>
                  <Link
                    href={href}
                    className="px-6 py-2 flex gap-2 items-center hover:bg-blue-100/20 duration-300 transition-all rounded-md"
                  >
                    <Icon size={20} />
                    {item}
                  </Link>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}

      <SingleItem
        href="/generator"
        lable="Generator"
        icon={RectangleEllipsis}
      />

      {dataSidebarConfiguration.map(({ title, icon: Icon, children }) => (
        <Accordion
          type="single"
          collapsible
          key={title}
          className="w-full px-2"
        >
          <AccordionItem value="item-1" className="border-b-0">
            <AccordionTrigger>
              <div className="flex gap-2 items-center">
                <div className="bg-blue-100/20 p-2 rounded-md">
                  <Icon size={20} />
                </div>
                {title}
              </div>
            </AccordionTrigger>
            <AccordionContent>
              {children.map(({ item, href, icon: Icon, premium }) => (
                <div
                  className="flex justify-between items-center mt-2 hover:bg-blue-100/20 duration-300 transition-all rounded-md pr-1"
                  key={item}
                >
                  <Link
                    href={href}
                    className="px-6 py-2 flex gap-2 items-center"
                  >
                    <Icon size={20} />
                    {item}
                  </Link>
                  {premium && (
                    <span className="flex gap-2 text-xs px-2 py-1 bg-blue-400 rounded-md">
                      Premium
                    </span>
                  )}
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}

      <SingleItem href="/analytics" lable="Analytics" icon={BarChart} />
      <SingleItem
        onClick={() => signOut()}
        lable="Logout"
        href="#"
        icon={DoorClosed}
      />
    </div>
  );
}
