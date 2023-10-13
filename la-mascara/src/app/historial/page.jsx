import Navbar from "@/components/Navbar"

export default function Historial() {
  return (
    <>
      <Navbar currentPage="Historial"/>
      <div className="grid justify-center mt-20">
        <div class="text-center">
            <div class="mb-4">
            <p class="font-bold text-6xl">Conoce los últimos duelos</p>
            </div>
            <div>
            <p class="font-semibold text-tekhelet text-2xl">Verifica si tu candidato fue eliminado</p>
            </div>
        </div>
      </div>
    </>
  )
}
