import Link from "next/link";

const inscricoesUrl =
	"https://docs.google.com/forms/d/e/1FAIpQLSe7Zq4esAq2NWXfzvycPX50TvvXbOZRMuA8VzEG2eI9Cr8WKg/viewform";

export default function NutricaoPage() {
	return (
		<main className="min-h-screen bg-gray-50 py-12">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<header className="text-center mb-12">
					<h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
						Nutrição
					</h1>
					<p className="text-lg text-gray-600 max-w-3xl mx-auto">
						O Ginásio Clube de Odivelas disponibiliza um serviço de Nutrição
						com acompanhamento personalizado, adaptado às necessidades e
						objetivos individuais de cada pessoa.
					</p>
				</header>

				<section className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">
					<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
						<div>
							<p className="text-sm font-semibold uppercase tracking-wide text-blue-600 mb-2">
								Nutricionista responsável
							</p>
							<h2 className="text-2xl font-bold text-gray-900">
								Catarina Antão
							</h2>
							<p className="text-gray-600 mt-1">
								Cédula Profissional n.º 6384N
							</p>
						</div>
						<a
							href="https://www.instagram.com/nutri_catarinaantao/"
							target="_blank"
							rel="noreferrer"
							className="text-blue-700 font-medium hover:text-blue-900 hover:underline"
						>
							@nutri_catarinaantao
						</a>
					</div>
				</section>

				<section className="mb-8">
					<h2 className="text-2xl font-bold text-gray-900 mb-5">
						Serviços disponíveis
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<article className="bg-white rounded-xl shadow-md p-6 border-t-4 border-yellow-400">
							<h3 className="text-xl font-bold text-gray-900 mb-3">
								Avaliação nutricional gratuita
							</h3>
							<p className="text-gray-600 leading-relaxed">
								Exclusiva para atletas do GCO, limitada a uma avaliação por
								atleta, com duração aproximada de 30 minutos. Inclui anamnese
								inicial e avaliação do estado nutricional, sem elaboração de
								plano alimentar ou acompanhamento individualizado.
							</p>
						</article>

						<article className="bg-white rounded-xl shadow-md p-6 border-t-4 border-blue-600">
							<h3 className="text-xl font-bold text-gray-900 mb-3">
								Consulta de Nutrição
							</h3>
							<p className="text-gray-600 leading-relaxed">
								Inclui avaliação nutricional, elaboração de um plano alimentar
								individualizado e orientações adaptadas às necessidades e
								objetivos de cada utente.
							</p>
						</article>
					</div>
				</section>

				<section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
					<div className="bg-white rounded-xl shadow-md p-6">
						<h2 className="text-2xl font-bold text-blue-800 mb-5">
							Horários
						</h2>
						<ul className="space-y-3 text-gray-700">
							<li className="flex justify-between border-b border-gray-100 pb-3">
								<span>Terça-feira</span>
								<strong>13h - 18h</strong>
							</li>
							<li className="flex justify-between border-b border-gray-100 pb-3">
								<span>Quinta-feira</span>
								<strong>13h - 18h</strong>
							</li>
							<li className="flex justify-between">
								<span>Sábado</span>
								<strong>9h - 12h</strong>
							</li>
						</ul>
					</div>

					<div className="bg-white rounded-xl shadow-md p-6">
						<h2 className="text-2xl font-bold text-blue-800 mb-5">Local</h2>
						<p className="text-gray-700 leading-relaxed">
							Pavilhão Municipal do Bairro Olaio (GCO)
						</p>
					</div>
				</section>

				<section className="bg-gradient-to-r from-blue-800 to-blue-700 rounded-xl shadow-md p-6 md:p-8 text-white text-center">
					<h2 className="text-2xl font-bold mb-3">Inscrições</h2>
					<p className="text-blue-100 mb-6">
						Reserve a sua avaliação ou consulta através do formulário de
						inscrição.
					</p>
					<Link
						href={inscricoesUrl}
						target="_blank"
						rel="noreferrer"
						className="inline-block bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-bold hover:bg-yellow-300 transition-colors"
					>
						Aceder ao formulário
					</Link>
				</section>
			</div>
		</main>
	);
}
