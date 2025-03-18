"use client"

import SectionTitle from "@/components/SectionTitle";

const SobreNosPage = () => {
    return (
        <div id="#sobre-nos" className="mb-20">
            <SectionTitle title="Sobre Nós" subtitle="Um pouco sobre nossos valores e jornada." />

            <div className="flex flex-row align-midle px-40">
                <div className="text-justify mr-7 rounded-xl shadow-lg shadow-slate-400 text-white bg-lime-900/90">
                    <p className="px-12 pt-8 pb-4 font-bold text-lg">A GF ODONTO</p>
                    <p className="px-12 pb-3">A gf odonto foi criada por nós, Dra. Glaucia Botechia e Dr. Fábio Hernandes, com o objetivo de unir nossos conhecimentos a fim de <span className="font-bold">informar e educar</span> as pessoas. Acreditamos que, mostrando aos nossos pacientes a importância de uma abordagem <span className="font-bold">preventiva e individualizada</span> da odontologia, podemos transformar suas vidas! <span className="underline underline-offset-4">O conhecimento é a ferramenta mais poderosa que existe. E é isso que te oferecemos nessa plataforma!</span></p>
                    <br/>
                </div>
                <div className="text-justify">
                    <p className="px-10 py-4 font-bold text-lime-900 text-lg">DRA. GLAUCIA BOTECHIA</p>
                    <p className="px-10 pb-5 border-r-2 border-spacing-3">Sou formada há 24 anos e sempre quis ser dentista! Trabalhei em diversos consultórios e também em empresas multinacionais, como Bayer, Bristol Myers, Boheringer e Alstom. Hoje, trabalho na minha própria clínica (gf odonto) e na empresa SBT. Sou <span className="underline underline-offset-4">periodontista</span> e apaixonada pela minha profissão. Meu maior propósito é promover a saúde bucal e qualidade de vida dos meus pacientes!</p>
                    <br/>
                </div>
                <div className="text-justify">
                    <p className="px-10 py-4 font-bold text-lime-900 text-lg">DR. FÁBIO HERNANDES</p>
                    <p className="px-10 pb-5">Dr. Fábio Hernandes Sou formado há 27 anos. Comecei a minha carreira trabalhando em consultórios particulares até abrir meu próprio consúltório. Sou especialista em <span className="underline underline-offset-4">periodontia</span> e realizo <span className="underline underline-offset-4">implantes</span> há mais de 20 anos, com ênfase em <span className="underline underline-offset-4">reabilitação oral</span>. Hoje, atuo na minha própria clínica, a gf odonto, com o objetivo de devolver aos meus pacientes seu sorriso, sua autoestima e, principalmente, sua saúde.</p>
                </div>
            </div>
        </div>
    );
}

export default SobreNosPage;