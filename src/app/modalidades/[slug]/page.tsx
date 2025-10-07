import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { fetchModalidadeBySlug, fetchAllModalidadeSlugs } from "@/data/modalidades-db";
import TabsEscaloes from "@/components/TabsEscaloes";
import NoticiaCard from "@/components/cards/NoticiaCard";
import { fetchNoticias } from "@/data/noticias-db";
import { fetchPrecosPorModalidade } from "@/data/modalidades-db";

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

  // Ordenar escalões especificamente para patinagem
  if (slug === 'patinagem-artistica') {
    console.log('\n=== ESCALÕES ANTES DA ORDENAÇÃO ===');
    escalas.forEach(esc => console.log(`- "${esc.nome}" (length: ${esc.nome.length})`));
    
    escalas = escalas.sort((a, b) => {
      const ordemPatinagem = [
        { pattern: "minis", order: 1 },
        { pattern: "iniciação", order: 2 },
        { pattern: "iniciacao", order: 2 },
        { pattern: "pré-competição", order: 3 },
        { pattern: "pre-competição", order: 3 },
        { pattern: "pre-competicao", order: 3 },
        { pattern: "precompetição", order: 3 },
        { pattern: "precompetição", order: 3 },
        { pattern: "competição", order: 4 },
        { pattern: "competicao", order: 4 }
      ];
      
      const nomeA = a.nome.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[-\s]/g, "").trim();
      const nomeB = b.nome.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[-\s]/g, "").trim();
      
      console.log(`Comparando: "${a.nome}" (${nomeA}) vs "${b.nome}" (${nomeB})`);
      
      const findOrder = (nome: string) => {
        for (const item of ordemPatinagem) {
          const pattern = item.pattern.replace(/[-\s]/g, "").trim();
          if (nome.includes(pattern)) {
            console.log(`  Match encontrado: "${nome}" -> ordem ${item.order}`);
            return item.order;
          }
        }
        console.log(`  Sem match para: "${nome}"`);
        return 999;
      };
      
      const orderA = findOrder(nomeA);
      const orderB = findOrder(nomeB);
      
      if (orderA !== orderB) return orderA - orderB;
      return a.id - b.id;
    });
    
    console.log('\n=== ESCALÕES DEPOIS DA ORDENAÇÃO ===');
    escalas.forEach(esc => console.log(`- ${esc.nome}`));
  }

  const precos = await fetchPrecosPorModalidade(modalidade.id);

  // Criar um mapeamento mais flexível que ignora espaços extras
  const precosPorEscalao: { [escalao: string]: Array<{ tipo: string, valor: number, observacoes: string }> } = {};
  
  console.log('\n=== MAPEAMENTO DE PREÇOS ===');
  precos.forEach(preco => {
    const escalaoNormalizado = preco.escalao.trim(); // Remove espaços extras
    console.log(`Preço: escalão="${preco.escalao}" -> normalizado="${escalaoNormalizado}"`);
    
    if (!precosPorEscalao[escalaoNormalizado]) {
      precosPorEscalao[escalaoNormalizado] = [];
    }
    precosPorEscalao[escalaoNormalizado].push({
      tipo: preco.tipo ?? "",
      valor: preco.valor !== null ? Number(preco.valor) : 0,
      observacoes: preco.observacoes ?? ""
    });
  });

  // Debug para ver todos os preços por escalão
  if (slug === 'patinagem-artistica') {
    console.log('\n=== PREÇOS POR ESCALÃO (NORMALIZADO) ===');
    Object.keys(precosPorEscalao).forEach(escalaoNome => {
      console.log(`\nEscalão: "${escalaoNome}"`);
      precosPorEscalao[escalaoNome].forEach(preco => {
        console.log(`  - ${preco.tipo}: ${preco.valor}€ (${preco.observacoes})`);
      });
    });
  }

  // Ordenar preços dentro de cada escalão (3h, 4h, 5h, 6h para patinagem)
  if (slug === 'patinagem-artistica') {
    Object.keys(precosPorEscalao).forEach(escalaoNome => {
      precosPorEscalao[escalaoNome] = precosPorEscalao[escalaoNome].sort((a, b) => {
        // Ordenar mensalidades por horas (3h, 4h, 5h, 6h)
        if (a.tipo === 'mensalidade' && b.tipo === 'mensalidade') {
          const horasA = a.observacoes.match(/(\d+)\s*horas?/i);
          const horasB = b.observacoes.match(/(\d+)\s*horas?/i);
          
          if (horasA && horasB) {
            const numA = parseInt(horasA[1]);
            const numB = parseInt(horasB[1]);
            console.log(`Ordenando mensalidades: ${numA}h vs ${numB}h`);
            return numA - numB;
          }
        }
        
        // Para outros tipos, manter ordem original
        return 0;
      });
    });
  }

  // Anexar preços aos escalões usando matching flexível
  const escaloesComPrecos = escalas.map(escalao => {
    // Procurar preços usando o nome normalizado (sem espaços extras)
    const escalaoNormalizado = escalao.nome.trim();
    let precosDoEscalao = precosPorEscalao[escalaoNormalizado] || [];
    
    // Se não encontrou com o nome exato, tentar matching flexível
    if (precosDoEscalao.length === 0) {
      const escalaoFlexivel = escalaoNormalizado.toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[-\s]/g, "");
      
      for (const [escalaoPreco, precos] of Object.entries(precosPorEscalao)) {
        const escalaoPrecoFlexivel = escalaoPreco.toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/[-\s]/g, "");
        
        if (escalaoFlexivel === escalaoPrecoFlexivel) {
          console.log(`Match flexível encontrado: "${escalaoNormalizado}" -> "${escalaoPreco}"`);
          precosDoEscalao = precos;
          break;
        }
      }
    }
    
    if (slug === 'patinagem-artistica') {
      console.log(`\nEscalão "${escalaoNormalizado}" recebeu ${precosDoEscalao.length} preços:`, precosDoEscalao);
    }
    
    return {
      ...escalao,
      preco_escalao: precosDoEscalao
    };
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
            <div className="flex flex-wrap gap-3 items-center mb-2">
              {modalidade.categoria && (
                <span className="bg-blue-200 text-blue-900 px-3 py-1 rounded-full font-semibold shadow">{modalidade.categoria}</span>
              )}
              {modalidade.ativo ? (
                <span className="bg-green-500 px-3 py-1 rounded-full text-white font-semibold shadow flex items-center">
                  ✓ Ativo
                </span>
              ) : (
                <span className="bg-red-500 px-3 py-1 rounded-full text-white font-semibold shadow flex items-center">
                  ⚠ Atualmente sem atividade
                </span>
              )}
            </div>
          </div>
        </section>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 text-yellow-900 p-4 mb-10 rounded-xl shadow">
          <p className="font-semibold text-lg flex items-center">
            É necessário ser sócio para praticar qualquer modalidade no GCO.
          </p>
        </div>

        {(modalidade.slug !== "xadrez" && modalidade.slug !== "hoquei-em-patins") && (
          <section className="bg-white rounded-2xl shadow-lg p-8 mb-10">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Escalões</h2>
            <TabsEscaloes escaloes={escaloesComPrecos} />
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