import {Brain, Activity, Heart} from 'lucide-react'
import { TypingText } from './TypingText'

export function AreasAplicacionais() {
    return(
        <div className='w-full'>
            <section class="py-20 bg-teal-50">
                <div class="max-w-6xl mx-auto px-6 text-center">
                    <h2 class="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">Áreas de Aplicação</h2>

                    <p class="max-w-3xl mx-auto text-gray-600 text-lg sm:text-xl mb-12 text-justify">
                        O MAXIMUS EMT é utilizado em diversas especialidades médicas com resultados comprovados cientificamente
                    </p>

                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 items-stretch">
                        <article className="group bg-blue-500 rounded-2xl shadow-lg transition-colors duration-300 p-10 flex flex-col items-center justify-center hover:bg-blue-50 hover:border-2 hover:border-blue-500">
                        <div className="mb-6 p-3 rounded-full bg-white/10 transition-colors duration-300 group-hover:bg-blue-50 group-hover:border-1 group-hover:border-blue-500">
                            <Brain size={48} strokeWidth={2} className="text-white transition-colors duration-300 group-hover:text-blue-500" />
                        </div>

                        <h3 className="text-lg sm:text-xl font-bold tracking-wide uppercase text-white transition-colors duration-300 group-hover:text-blue-500">
                            <TypingText text={"Psiquiatria"} />
                        </h3>
                        </article>

                        <article className="group bg-teal-500 rounded-2xl shadow-lg transition-colors duration-300 p-10 flex flex-col items-center justify-center hover:bg-teal-50 hover:border-2 hover:border-teal-500">
                        <div className="mb-6 p-3 rounded-full bg-white/10 transition-colors duration-300 group-hover:bg-teal-50 group-hover:border-2 group-hover:border-teal-500">
                            <Activity size={48} strokeWidth={2} className="text-white transition-colors duration-300 group-hover:text-teal-500" />
                        </div>

                        <h3 className="text-lg sm:text-xl font-bold tracking-wide uppercase text-white transition-colors duration-300 group-hover:text-teal-500">
                            <TypingText text={"Neurologia"} />
                        </h3>
                        </article>

                        <article className="group bg-purple-700 rounded-2xl shadow-lg transition-colors duration-300 p-10 flex flex-col items-center justify-center hover:bg-purple-50 hover:border-2 hover:border-purple-700">
                        <div className="mb-6 p-3 rounded-full bg-white/10 transition-colors duration-300 group-hover:bg-purple-50 group-hover:border-2 group-hover:border-purple-700">
                            <Heart size={48} strokeWidth={2} className="text-white transition-colors duration-300 group-hover:text-purple-700" />
                        </div>

                        <h3 className="text-lg sm:text-xl font-bold tracking-wide uppercase text-white transition-colors duration-300 group-hover:text-purple-700">
                            <TypingText text={"Fisioterapia"} />
                        </h3>
                        </article>
                    </div>
                </div>
            </section>
        </div>
    )
}
