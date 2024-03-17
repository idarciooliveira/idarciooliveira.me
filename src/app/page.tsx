'use client'
import { MovingBorderButton } from "@/components/ui/moving-border-button";
import Link from "next/link";



export default function Home() {
  return (
    <>
      <div className="w-full py-20 flex justify-center " >
        <div className="space-y-3">
          <h2 className="text-4xl font-bold ">Olá, sou o Idárcio Oliveira</h2>
          <h3 className="text-xl font-semibold">Engenheiro de Software</h3>
          <p className="text-xl text-justify font-light">
            Apaixonado por construir aplicações com experiências <br />
            de alto desempenho e acessibilidade
            <br /> Adoro criar produtos de qualidade  fáceis de
            usar e escaláveis <br /> independentemente da tecnologia.
          </p>
          <div className="space-x-4">
            <Link href={'/public/cv-mobile.pdf'} download={'pdf'} target="_blank">
              <MovingBorderButton>
                CV
              </MovingBorderButton>
            </Link>
            <Link className="hover:underline" href={'/about'}>Sobre</Link>
          </div>
        </div>
      </div>
    </>


  );
}
