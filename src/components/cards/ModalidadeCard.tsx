
import { Modalidade } from "@/data/modalidades-db";
import Link from "next/link";
import Image from "next/image";

interface ModalidadeCardProps {
  modalidade: Modalidade;
}

export default function ModalidadeCard({ modalidade }: ModalidadeCardProps) {
  const { nome, slug, icone, descricao, ativo } = modalidade;
  
  return (
    <div
      className={`rounded-xl p-6 hover:shadow-lg transition-all duration-300 border relative flex flex-col items-center justify-center aspect-square w-64 h-64 mx-auto ${
        ativo 
          ? 'bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:-translate-y-2' 
          : 'bg-gradient-to-br from-gray-100 to-gray-200 border-gray-300 opacity-75'
      }`}
    >
      {!ativo && (
        <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
          ATUALMENTE SEM ATIVIDADE
        </div>
      )}
      <div className={`mb-4 flex items-center justify-center ${!ativo ? 'filter grayscale' : ''}`}
        style={{ width: 64, height: 64 }}
      >
        {typeof icone === 'string' && icone.startsWith('/') ? (
          <Image
            src={icone}
            alt={nome}
            width={48}
            height={48}
            className="object-contain"
          />
        ) : (
          <span className="text-4xl">{icone}</span>
        )}
      </div>
      <h3 className={`text-xl font-bold mb-2 text-center ${
        ativo ? 'text-blue-900' : 'text-gray-600'
      }`}>
        {nome}
      </h3>
      
      <div className="flex justify-center items-center w-full">
        <Link
          href={`/modalidades/${slug}`}
          className={`font-semibold transition-colors ${
            ativo 
              ? 'text-blue-800 hover:text-blue-600' 
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          Saiba mais →
        </Link>
        
      </div>
    </div>
  );
}
