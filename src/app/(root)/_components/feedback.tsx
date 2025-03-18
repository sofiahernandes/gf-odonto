"use client"

import SectionTitle from "@/components/SectionTitle";

const FeedbackPage = () => {
    return (
        <div className="mb-40">
            <SectionTitle title="Nossos Feedbacks" subtitle="Relatos de alguns dos nossos pacientes."/>

            <div className="flex space-x-6 items-center justify-center align-middle">
                <div className="rounded-lg border bg-white bg-opacity-100 shadow-lg w-[25%] h-70 transition-all hover:scale-110 hover:border-lime-900/50 duration-300">
                    <p className="p-5">"A doutora tem mãos de fada! Eu sou funcionária do SBT e é ela quem cuida da minha saúde bucal há anos! Obrigada por tanta dedicação com a gente!!! 😍"</p>
                    <p className="p-5 italic">Paula Rodrigues @ Instagram</p>
                </div>
                <div className="rounded-lg border shadow-lg w-[25%] h-70 transition-all hover:scale-110 hover:border-lime-900/50 duration-300">
                    <p className="p-5">""</p>
                    <p className="p-5 italic"> @ Instagram</p>
                </div>
                <div className="rounded-lg border shadow-lg w-[25%] h-70 transition-all hover:scale-110 hover:border-lime-900/50 duration-300">
                    <p className="p-5">"Profissionais altamente qualificados e de muita credibilidade."</p>
                    <p className="p-5 italic">cabrigante @ Instagram</p>
                </div>
            </div>
        </div>
    );
}

export default FeedbackPage;