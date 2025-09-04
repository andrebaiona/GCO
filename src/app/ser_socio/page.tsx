'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Content } from 'next/font/google'

const AccordionSection = ({
  title,
  children,
  defaultOpen = false,
}: {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
}) => {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-6 py-4 bg-blue-700 hover:bg-blue-800 flex justify-between items-center font-semibold text-white"
      >
        <span>{title}</span>
        <span className="text-xl">{open ? '−' : '+'}</span>
      </button>
      {open && <div className="px-6 py-4 bg-white text-gray-700">{children}</div>}
    </div>
  )
}

export default function SerSocioPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="relative h-64 sm:h-80 md:h-96">
            <Image
              src="/gco-exterior.jpg"
              alt="Ser Sócio GCO"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h1
                style={{
                  backgroundColor: 'rgba(255,255,255,0.75)', 
                  color: '#000498'
                }}
                className="rounded-xl py-1 px-1 text-4xl font-bold text-center"
              >
                Ser Sócio do Ginásio Clube de Odivelas
              </h1>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6 text-gray-700 space-y-4">
                <h2 className="text-xl font-bold text-black mb-4">Ser Sócio</h2>
              <p>
                Este espaço é dedicado aos Sócios do GCO e tem como objectivo sintetizar um conjunto de informações relevantes a todos os afiliados no Clube.
              </p>
              <p>
              </p>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Valores</h2>
              <div className="mt-4 bg-gray-50 border border-gray-200 rounded-lg p-4 space-y-2">
                <p><strong>Jóia:</strong> 3,00 €</p>
                <p><strong>Cartão:</strong> 3,00 €</p>
                <p><strong>Quotas:</strong> 5,00 € mensais (60,00 € por ano)</p>
              </div>
            </div>

             

            <AccordionSection title="Inscrição de Menores">
              <p>
                Para a prática de qualquer modalidade desportiva por um menor de idade, é necessário que um adulto seja <strong>Sócio Efetivo</strong> para que o inscreva como <strong>Sócio Auxiliar</strong> e <strong>Atleta</strong> do clube.
              </p>
            </AccordionSection>

            <AccordionSection title="Pagamento de Quotas">
              <p>
                Conforme os Estatutos e Regulamentos gerais internos, o pagamento das quotas mensais (5,00 €) deve ser efetuado semestral ou anualmente e realizado nos primeiros quinze dias do semestre ou do ano civil, respetivamente.
              </p>
              <p className="mt-2">
                Para maior comodidade, poderá realizar os pagamentos por transferência bancária, indicando no descritivo o número de sócio e o NIF. O comprovativo da operação deve ser enviado para o email:
                <a href="mailto:geral@gcodivelas.pt" className="text-blue-600 hover:underline ml-1">tranferencias@gcodivelas.pt</a>.
              </p>

              <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-2">
                <p><strong>NIB:</strong> 0010 0000 64263690001 91</p>
                <p><strong>IBAN:</strong> PT50 0010 0000 6426 3690 0019 1</p>
                <p><strong>SWIFT/BIC:</strong> BBPIPTPL</p>
              </div>
            </AccordionSection>
          </div>

          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contactos</h3>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Email:</strong>{' '}
                <a href="mailto:geral@gcodivelas.pt" className="text-blue-600 hover:underline">geral@gcodivelas.pt</a>
              </p>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Telefone:</strong> +351 21 932 6546
              </p>
              <p className="text-sm text-gray-700">
                <strong>Morada:</strong> R. Tomás José Olaio, 2675-304 Odivelas
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Liga-te ao Clube</h3>
              <Link
                href="/inscricoes"
                className="block w-full bg-blue-700 hover:bg-blue-800 text-white text-center py-3 rounded-lg font-semibold transition-colors"
              >
                Inscrever-se Agora
              </Link>
            </div>

            <div className='bg-white rounded-xl shadow-lg p-6 space-y-4'>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Documentação Relevante</h3>
              <Link 
                href="\files\pdf\estatutos-regulamento-geral-interno.pdf" 
                className="text-l block w-full bg-blue-700 hover:bg-blue-800 text-white text-center py-3 rounded-lg font-semibold transition-colors"
              >
                Estatutos e Regulamento Geral Interno
              </Link>
              
              <AccordionSection title='Relatórios de Contas / Atividades'>
                <div className='space-y-4'>
                    <div>
                    <AccordionSection title='2023-2020'>
                      <a href="\files\pdf\relatorios-de-contas\Relatorio-de-contas_GCO_2023.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline cursor-pointer block">2023</a>
                      <a href="\files\pdf\relatorios-de-contas\Relatorio-de-contas_GCO_2022.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline cursor-pointer block">2022</a>
                      <a href="\files\pdf\relatorios-de-contas\Relatorio-contas-2021.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline cursor-pointer block">2021</a>
                      <a href="\files\pdf\relatorios-de-contas\GCO-Relatorio-Contas-2020.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline cursor-pointer block">2020</a>
                    </AccordionSection>
                    </div>
                    <div>
                    <AccordionSection title='2019-2014'>
                      <a href="\files\pdf\relatorios-de-contas\relatorio-contas-2019.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline cursor-pointer block">2019</a>
                      <a href="\files\pdf\relatorios-de-contas\relatorio-contas-2018.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline cursor-pointer block">2018</a>
                      <a href="\files\pdf\relatorios-de-contas\relatorio-contas-2017.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline cursor-pointer block">2017</a>
                      <a href="\files\pdf\relatorios-de-contas\relatorio-contas-2016.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline cursor-pointer block">2016</a>
                      <a href="\files\pdf\relatorios-de-contas\relatorio-contas-2015.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline cursor-pointer block">2015</a>
                      <a href="\files\pdf\relatorios-de-contas\relatorio-contas-2014.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline cursor-pointer block">2014</a>
                    </AccordionSection>
                    </div>
                </div>
              </AccordionSection>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Voltar ao Início
          </Link>
        </div>
      </div>
    </main>
  )
}
