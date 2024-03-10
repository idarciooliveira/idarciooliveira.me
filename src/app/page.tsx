import { Button } from "@/components/ui/button";
import { LucideExternalLink } from 'lucide-react'
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full  flex flex-row py-8 items-center justify-center gap-10">
      <div>
        <img className="rounded-xl" src={`https://placehold.co/400x400`} alt="idarcio oliveira" />
      </div>
      <div className="space-y-3">
        <h2 className="text-4xl font-bold ">Olá, sou o Idárcio Oliveira</h2>
        <h3 className="text-xl font-normal">Engenheiro de Software</h3>
        <p className="text-xl  text-justify text-[#8F9BA8] ">
          Apaixonado em construir soluções de impacto social <br />
          especialista na construção de aplicações web e mobile<br />
          e um grande amante de desafios.
        </p>
        <div className="space-x-8">
          <Button className="w-32 bg-blue-600 text-white">
            CV
            <LucideExternalLink className="ml-2" size={16} />
          </Button>
          <Link href={'/contact'}>Contacto</Link>
        </div>
      </div>
    </div>
  );
}
