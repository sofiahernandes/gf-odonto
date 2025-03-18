"use client"

import Link from "next/link";
import { 
    DrawingPinIcon,
    FaceIcon,
    HomeIcon,
    InstagramLogoIcon,
    SpeakerLoudIcon
} from "@radix-ui/react-icons";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger,
} from "@/components/ui/menubar";
  
const Header = () => {
    return (
        <Menubar className="flex">
            <MenubarMenu>
                <Link href="/"><MenubarTrigger><HomeIcon className="self-center w-4 pr-1"/>Home</MenubarTrigger></Link>
            </MenubarMenu>
            <MenubarMenu>
                <Link href="/src/app/(pages)/sobre-nos.tsx"><MenubarTrigger><DrawingPinIcon className="self-center w-4 pr-1"/>Sobre Nós</MenubarTrigger></Link>
            </MenubarMenu>
            <MenubarMenu>
                <Link href="/"><MenubarTrigger><FaceIcon className="self-center w-4 pr-1"/>Nossos Pacientes</MenubarTrigger></Link>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger><SpeakerLoudIcon className="self-center w-4 pr-1"/>Fale Conosco!</MenubarTrigger>
                    <MenubarContent>
                        <Link href="https://api.whatsapp.com/send?phone=5511989810572&text=&fbclid=PAY2xjawIkjrdleHRuA2FlbQIxMAABpuSAsninOPhKyhPs47Bie5aYZh7KgXgkynBZiExfDrRUdgxor9c3QlAacA_aem_wEKA2oRRfKIdK4kiHMtVZw"><MenubarItem>WhatsApp Dra. Glaucia</MenubarItem></Link>
                        <Link href="https://api.whatsapp.com/send?phone=5511992988200&text=&fbclid=PAY2xjawIkju5leHRuA2FlbQIxMAABprr85SUvFWAmXbylgJTCY1hSMXg_01t_QgV4YekzBWJxfqnrPUExgSbERg_aem_at20U_7enUqApIlUUudkUA"><MenubarItem>WhatsApp Dr. Fábio</MenubarItem></Link>
                        <MenubarSeparator />
                        <Link href="https://www.instagram.com/gf_odonto?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><MenubarItem><InstagramLogoIcon className="self-center w-4 pr-1"/>@gf_odonto</MenubarItem></Link>
                        <MenubarSeparator />
                        <MenubarItem><a href="mailto:gfodontocontato@gmail.com">gfodontocontato@gmail.com</a></MenubarItem>
                    </MenubarContent>
            </MenubarMenu>
        </Menubar>
    );
};

export default Header;