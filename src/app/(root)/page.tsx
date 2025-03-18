"use client"

import FeedbackPage from "@/app/(root)/_components/feedback";
import Heading from "@/app/(root)/_components/heading";
import Header from "@/app/(root)/_components/header";
import SobreNosPage from "@/app/(root)/_components/sobre-nos";
import PacientesPage from "@/app/(root)/_components/pacientes";
import ContatoPage from "@/app/(root)/_components/contato";

const HomePage = () => {
  return (
    <>
      <div 
        className="p-4 w-screen h-screen flex flex-col items-center justify-center">
        <div className="flex place-content-center">
          <Header/>
        </div>

        <div className="flex h-screen mb-30 items-center justify-center">
          <Heading />
        </div>
      </div>

      <div className="mt-0 h-px w-96 m-auto bg-gray-300"></div>
      <br />
      <FeedbackPage />

      <div className="mt-0 h-px w-96 m-auto bg-gray-300"></div>
      <br />
      <PacientesPage />

      <div className="mt-0 h-px w-96 m-auto bg-gray-300"></div>
      <br />
      <SobreNosPage />

      <div className="mt-0 h-px w-96 m-auto bg-gray-300"></div>
      <br />
      <ContatoPage />
      <br className="mb-20" />
    </>
  );
}

export default HomePage;