import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { fetchModalidadeBySlug, fetchAllModalidadeSlugs, fetchHorariosPorModalidade } from "@/data/modalidades-db";
import { DIAS_SEMANA } from "@/lib/horarios";
import TabsEscaloes from "@/components/TabsEscaloes";
import NoticiaCard from "@/components/cards/NoticiaCard";
import { fetchNoticias } from "@/data/noticias-db";
import { fetchPrecosPorModalidade } from "@/data/modalidades-db";
import React from 'react';
import HorarioCalendar, { type Event } from "@/components/HorarioCalendar";



const info_ginastica = {
  pagamentos: {
    mensalidade: 'Do dia 1 ao dia 8 do mês corrente.',
    quotas: 'Valor mensal de 3,50 € — pagamento semestral ou anual.',
    iban: 'PT50 0010 0000 6426 3690 001 91',
  },
  merchandising: [
    'T-Shirts',
    'Sweat shirts',
    'Cachecóis',
    'Pin',
    'Fato de treino',
    'Mochilas',
  ],
  seguro: {
    franquia: '90 € (a suportar pelo atleta)',
    companhias: 'Fidelidade Seguros e Allianz',
    sinistro: 'Em caso de sinistro, dirigir-se à secção de ginástica para alinhamento do processo.',
  },
  seccao: {
    horario: '2.ª, 4.ª e 6.ª feiras, das 17h30 às 20h00',
    email: 'ginastica.gco@gmail.com',
    contactos: [
      { nome: 'Mafalda', telefone: '967 980 454' },
      { nome: 'Patrícia', telefone: '919 168 115' },
    ],
  },
};


export default async function ModalidadePage(props: any) {
  const params = await props.params;
  const { slug } = params;
  const modalidade = await fetchModalidadeBySlug(slug);

  if (!modalidade) notFound();

  const noticias = await fetchNoticias(100);
  const normalize = (str: string) =>
    str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

  const noticiasModalidade = noticias
    .filter(
      noticia =>
        noticia.categoria &&
        normalize(noticia.categoria) === normalize(modalidade.nome)
    )
    .slice(0, 2);

  let escalas = modalidade.escalao || [];

  if (slug === 'patinagem-artistica') {
    escalas = escalas.sort((a, b) => {
      const ordemPatinagem = [
        { pattern: "minis", order: 1 },
        { pattern: "iniciação", order: 2 },
        { pattern: "iniciacao", order: 2 },
        { pattern: "pré-competição", order: 3 },
        { pattern: "pre-competição", order: 3 },
        { pattern: "pre-competicao", order: 3 },
        { pattern: "competição", order: 4 },
        { pattern: "competicao", order: 4 }
      ];

      const nomeA = a.nome.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[-\\s]/g, "").trim();
      const nomeB = b.nome.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[-\\s]/g, "").trim();

      const findOrder = (nome: string) => {
        for (const item of ordemPatinagem) {
          const pattern = item.pattern.replace(/[-\\s]/g, "").trim();
          if (nome.includes(pattern)) return item.order;
        }
        return 999;
      };

      const orderA = findOrder(nomeA);
      const orderB = findOrder(nomeB);
      if (orderA !== orderB) return orderA - orderB;
      return a.id - b.id;
    });
  }

  const horarios = await fetchHorariosPorModalidade(modalidade.id);
  const eventosHorario: Event[] = horarios.map(h => ({
    day: DIAS_SEMANA[h.dia_semana],
    start: h.inicio,
    end: h.fim,
    title: h.titulo,
    room: h.sala ?? '',
    color: h.cor,
  }));

  const precos = await fetchPrecosPorModalidade(modalidade.id);
  const precosPorEscalao: { [escalao: string]: Array<{ tipo: string, valor: number, observacoes: string }> } = {};

  precos.forEach(preco => {
    const escalaoNormalizado = preco.escalao.trim();
    if (!precosPorEscalao[escalaoNormalizado]) {
      precosPorEscalao[escalaoNormalizado] = [];
    }
    precosPorEscalao[escalaoNormalizado].push({
      tipo: preco.tipo ?? "",
      valor: preco.valor !== null ? Number(preco.valor) : 0,
      observacoes: preco.observacoes ?? ""
    });
  });

  const escaloesComPrecos = escalas.map(escalao => {
    const escalaoNormalizado = escalao.nome.trim();
    const precosDoEscalao = precosPorEscalao[escalaoNormalizado] || [];
    return { ...escalao, preco_escalao: precosDoEscalao };
  });

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-blue-600 transition-colors">Início</Link>
            <span>/</span>
            <Link href="/modalidades" className="hover:text-blue-600 transition-colors">Modalidades</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{modalidade.nome}</span>
          </div>
        </nav>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-xl overflow-hidden mb-10 flex flex-col md:flex-row items-center p-8 gap-8">
          <div className="bg-white rounded-2xl shadow-lg flex items-center justify-center w-32 h-32">
            {modalidade.icone && modalidade.icone.startsWith("/") ? (
              <Image
                src={modalidade.icone || "/default.png"}
                alt={modalidade.nome}
                width={120}
                height={120}
                className="object-contain"
              />
            ) : (
              <span className="text-6xl">{modalidade.icone ?? "🏅"}</span>
            )}
          </div>
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-3 text-white drop-shadow-lg">{modalidade.nome}</h1>
            <p className="text-lg md:text-xl text-blue-100 mb-4 font-medium">{modalidade.descricao ?? ""}</p>
          </div>
        </section>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 text-yellow-900 p-4 mb-10 rounded-xl shadow">
          <p className="font-semibold text-lg flex items-center">
            É necessário ser sócio para praticar qualquer modalidade no GCO.
          </p>
        </div>

        {(modalidade.slug !== "hoquei-em-patins" && modalidade.slug !== "xadrez") && (
          <section className="bg-white rounded-2xl shadow-lg p-8 mb-10">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Escalões</h2>
            <TabsEscaloes escaloes={escaloesComPrecos} />
          </section>
        )}

        {modalidade.slug === "xadrez" && (
          <section className="bg-white rounded-2xl shadow-lg p-8 mb-10">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Mensalidade</h2>
            {(() => {
              const chaveTodos = Object.keys(precosPorEscalao).find(k => k.toLowerCase() === 'todos');
              const precosGlobais = chaveTodos ? precosPorEscalao[chaveTodos] : [];

              // Hipóteses de pagamento, por ordem de apresentação.
              const hipoteses = [
                { tipo: 'mensalidade', periodo: '/mês' },
                { tipo: 'semestral', periodo: '/semestre' },
                { tipo: 'anual', periodo: '/ano' },
              ]
                .map(h => ({
                  ...h,
                  preco: precosGlobais.find(p => p.tipo?.toLowerCase() === h.tipo),
                }))
                .filter((h): h is typeof h & { preco: { tipo: string; valor: number; observacoes: string } } =>
                  !!h.preco && typeof h.preco.valor === 'number' && h.preco.valor > 0
                );

              if (hipoteses.length === 0) {
                return (
                  <div className="text-gray-500">Sem preço de mensalidade definido para Xadrez.</div>
                );
              }

              return (
                <div className="flex flex-wrap justify-center gap-6">
                  {hipoteses.map((h, i) => (
                    <div
                      key={h.tipo}
                      className="w-[220px] h-[220px] bg-blue-100 rounded-xl px-4 py-6 flex flex-col items-center justify-center shadow border border-blue-200"
                    >
                      <span className="text-sm font-semibold text-blue-700 uppercase tracking-wide mb-1">
                        Hipótese {i + 1}
                      </span>
                      <span className="text-3xl font-bold text-blue-800">
                        {h.preco.valor} €
                        <span className="text-base font-medium text-blue-700">{h.periodo}</span>
                      </span>
                      {h.preco.observacoes && (
                        <span className="text-xs text-blue-700 text-center mt-2">{h.preco.observacoes}</span>
                      )}
                    </div>
                  ))}
                </div>
              );
            })()}
          </section>
        )}

        {modalidade.slug === "hoquei-em-patins" && (
          <section className="bg-white rounded-2xl shadow-lg p-8 mb-10">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Escalões</h2>
            <ul className="w-full max-w-xl mx-auto flex flex-col gap-4">
              {[...modalidade.escalao].sort((a, b) => {
                const ordem = [
                  "Manitas/Bâmbis/Minis",
                  "Sub-14", "Sub/14",
                  "Sub-16 M", "Sub-16 F",
                  "Sub-18",
                  "Seniores",
                  "Veteranos"
                ];
                const nomeA = a.nome.toLowerCase();
                const nomeB = b.nome.toLowerCase();
                const idxA = ordem.findIndex(o => nomeA.includes(o.toLowerCase()));
                const idxB = ordem.findIndex(o => nomeB.includes(o.toLowerCase()));
                if (idxA !== -1 && idxB !== -1) return idxA - idxB;
                if (idxA !== -1) return -1;
                if (idxB !== -1) return 1;
                return a.id - b.id;
              }).map((esc: any) => (
                <li key={esc.id} className="bg-gray-100 rounded-xl px-6 py-4 text-xl font-semibold text-blue-900 shadow text-center">
                  {esc.nome}
                </li>
              ))}
            </ul>
          </section>
        )}

        {eventosHorario.length > 0 && <HorarioCalendar events={eventosHorario} />}

        {slug === "ginastica" && (
          <>
            <section className="bg-white rounded-2xl shadow-lg p-8 mb-10">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Informações Adicionais</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 flex flex-col">
                  <h3 className="text-lg font-bold text-blue-900 mb-4 pb-2 border-b border-blue-200">
                    Pagamentos
                  </h3>
                  <dl className="space-y-3 text-sm text-gray-700">
                    <div>
                      <dt className="font-semibold text-gray-900">Mensalidade</dt>
                      <dd>{info_ginastica.pagamentos.mensalidade}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-gray-900">Quotas</dt>
                      <dd>{info_ginastica.pagamentos.quotas}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-gray-900">IBAN</dt>
                      <dd className="mt-1 font-mono text-[13px] tracking-tight bg-white border border-blue-200 rounded-lg px-3 py-2 text-blue-900 break-all">
                        {info_ginastica.pagamentos.iban}
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 flex flex-col">
                  <h3 className="text-lg font-bold text-blue-900 mb-4 pb-2 border-b border-blue-200">
                    Merchandising
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {info_ginastica.merchandising.map((artigo) => (
                      <li key={artigo} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0" />
                        {artigo}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 flex flex-col">
                  <h3 className="text-lg font-bold text-blue-900 mb-4 pb-2 border-b border-blue-200">
                    Seguro Desportivo
                  </h3>
                  <dl className="space-y-3 text-sm text-gray-700">
                    <div>
                      <dt className="font-semibold text-gray-900">Franquia</dt>
                      <dd>{info_ginastica.seguro.franquia}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-gray-900">Companhias de seguros</dt>
                      <dd>{info_ginastica.seguro.companhias}</dd>
                    </div>
                  </dl>
                  <p className="mt-3 text-xs text-gray-600 leading-relaxed">
                    {info_ginastica.seguro.sinistro}
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-r from-blue-800 to-blue-900 rounded-2xl shadow-lg p-8 mb-10 text-white">
              <h2 className="text-3xl font-bold mb-6">Secção de Ginástica</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <p className="text-sm font-semibold text-yellow-400 mb-1">Horário de atendimento</p>
                  <p className="text-blue-50">{info_ginastica.seccao.horario}</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-yellow-400 mb-1">Email</p>
                  <a
                    href={`mailto:${info_ginastica.seccao.email}`}
                    className="text-blue-50 hover:text-yellow-300 underline transition-colors break-all"
                  >
                    {info_ginastica.seccao.email}
                  </a>
                </div>

                <div>
                  <p className="text-sm font-semibold text-yellow-400 mb-1">Telefones</p>
                  <ul className="space-y-1">
                    {info_ginastica.seccao.contactos.map((c) => (
                      <li key={c.nome} className="text-blue-50">
                        {c.nome}:{" "}
                        <a
                          href={`tel:+351${c.telefone.replace(/\s/g, "")}`}
                          className="hover:text-yellow-300 underline transition-colors"
                        >
                          {c.telefone}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="mt-6 pt-6 border-t border-blue-700 text-sm text-blue-100">
                Inscrições abertas durante todo o ano. Fala connosco na secretaria ou na secção de ginástica.
              </p>
            </section>
          </>
        )}


        <section className="bg-white rounded-2xl shadow-lg p-8 mb-10">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Notícias de {modalidade.nome}
          </h2>
          {noticiasModalidade.length === 0 ? (
            <p className="text-gray-500">Ainda não existem notícias para esta modalidade.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {noticiasModalidade.map((noticia) => (
                <NoticiaCard key={noticia.id} noticia={noticia} />
              ))}
            </div>
          )}
          <div className="mt-6 text-right">
            <Link
              href="/noticias"
              className="text-blue-700 hover:underline font-semibold"
            >
              Ver todas as notícias
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  const slugs = await fetchAllModalidadeSlugs();
  return slugs.map((modalidade: { slug: string }) => ({ slug: modalidade.slug }));
}


// Prices/schedules are edited in the admin (which revalidates on demand); this is only a safety net for script edits.
// Keep it long: every regeneration queries Neon and keeps its compute awake (free-plan CU-hours).
export const revalidate = 3600;
