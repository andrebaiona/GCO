'use client'

import LogoRain from '@/components/layout/LogoRain'
import { useState } from 'react'

export default function ContactosPage() {
  const [mensagem, setMensagem] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setMensagem('')
    setLoading(true)

    const form = e.target as HTMLFormElement
    const formData = new FormData(form)

    const payload = {
      nome: formData.get('nome'),
      email: formData.get('email'),
      assunto: formData.get('assunto'),
      mensagem: formData.get('mensagem'),
    }

    try {
      const res = await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = await res.json()

      if (res.ok) {
        setMensagem('Mensagem enviada com sucesso!')
        form.reset()
      } else {
        setMensagem('Erro: ' + data.erro)
      }
    } catch (err) {
      setMensagem('Erro ao enviar o formulário.')
    }

    setLoading(false)
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Contactos</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Informações de contacto */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Informações de Contacto</h2>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-blue-600">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-lg font-medium text-gray-900">Morada</p>
                  <p className="text-gray-600">
                    Rua Tomás José Olaio<br />
                    2675-453 Odivelas<br />
                    Portugal
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-blue-600">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-lg font-medium text-gray-900">Telefone</p>
                  <p className="text-gray-600">+351 219 326 546</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-blue-600">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-lg font-medium text-gray-900">Email</p>
                  <p className="text-blue-600 hover:underline">
                    <a href="mailto:geral@gcodivelas.pt">geral@gcodivelas.pt</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-blue-600">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-lg font-medium text-gray-900">Horário da Secretaria</p>
                  <p className="text-gray-600">Segunda a Sexta: 18h00 - 20h00</p>
                </div>
              </div>
            </div>

            {/* Redes Sociais */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Siga-nos nas Redes Sociais</h3>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/GINASIOCLUBEODIVELAS/?locale=pt_PT" className="text-blue-600 hover:text-blue-800">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/gco_odivelas/" className="text-pink-600 hover:text-pink-800">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Mapa */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Como Chegar</h2>
            <div className="h-96 bg-gray-200 rounded-md">
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2329.861307822613!2d-9.179967135177689!3d38.78682447297313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1932a58f6355ed%3A0x256d7d4619ae726e!2sGin%C3%A1sio%20Clube%20Odivelas!5e0!3m2!1spt-PT!2spt!4v1751638837262!5m2!1spt-PT!2spt"
                  width="100%"
                  height="385"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Formulário comentado */}
          {/*
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Envie-nos uma Mensagem</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-gray-700">Nome</label>
                <input type="text" id="nome" name="nome" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="assunto" className="block text-sm font-medium text-gray-700">Assunto</label>
                <input type="text" id="assunto" name="assunto" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700">Mensagem</label>
                <textarea id="mensagem" name="mensagem" rows={5} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-blue-800 border border-transparent rounded-md shadow-sm py-3 px-4 text-white font-medium hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Enviar Mensagem
                </button>
              </div>
            </form>
          </div>
          */}
        </div>
      </div>
    </main>
  )
}
