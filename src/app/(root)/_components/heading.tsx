"use client";

import { libreCaslon } from "@/app/fonts";
import Link from "next/link";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Heading = () => {
    return (
        <div className="text-center">
            <h1 className={cn("text-4xl m-0 relative w-[max-content] before:absolute before:inset-0 before:bg-white before:animate-typewriter after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-black", libreCaslon.className)}>bem-vindo à <span className="italic">gf odonto</span></h1>
            <h2 className="py-3 text-lg">
                Odontologia Preventiva e Individualizada.<br/>
                Com o objetivo de <span className="italic font-bold">educar</span> e <span className="italic font-bold">transformar vidas</span>.
            </h2>
            <Button asChild className="mt-6 transition-all hover:scale-110 hover:bg-lime-800 duration-300 bg-lime-900">
                <Link href="#sobre-nos">Sobre Nós <ArrowRight className="h-5 w-5 ml-2 text-lg"/></Link>
            </Button>
        </div>
    )
}

export default Heading;