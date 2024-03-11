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
            Apaixonado em construir soluções de impacto social <br />
            especialista na construção de aplicações web e mobile<br />
            e um grande amante de desafios.
          </p>
          <div className="space-x-8">
            <MovingBorderButton>
              CV
            </MovingBorderButton>
            <Link href={'/contact'}>Contacto</Link>
          </div>
        </div>
      </div>
    </>


  );
}
