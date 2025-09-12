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
                        <article class="bg-blue-500 rounded-2xl shadow-lg transform hover:-translate-y-1 transition-transform p-10 flex flex-col items-center justify-center text-white">
                        <div class="mb-6 p-3 bg-white/10 rounded-full">
                            <Brain size={48} strokeWidth={2} className="text-white" />
                        </div>
                        <h3 class="text-lg sm:text-xl font-bold tracking-wide uppercase"><TypingText text={"Psiquiatria"} /></h3>
                        </article>

                        <article class="bg-teal-500 rounded-2xl shadow-lg transform hover:-translate-y-1 transition-transform p-10 flex flex-col items-center justify-center text-white">
                        <div class="mb-6 p-3 bg-white/10 rounded-full">
                            <Activity size={48} strokeWidth={2} className="text-white" />
                        </div>
                        <h3 class="text-lg sm:text-xl font-bold tracking-wide uppercase"><TypingText text={"Neurologia"} /></h3>
                        </article>

                        <article class="bg-purple-700 rounded-2xl shadow-lg transform hover:-translate-y-1 transition-transform p-10 flex flex-col items-center justify-center text-white">
                        <div class="mb-6 p-3 bg-white/10 rounded-full">
                            <Heart size={48} strokeWidth={2} className="text-white" />
                        </div>
                        <h3 class="text-lg sm:text-xl font-bold tracking-wide uppercase"><TypingText text={"Fisioterapia"} /></h3>
                        </article>
                    </div>
                </div>
            </section>
        </div>
    )
}
