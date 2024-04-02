import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontal,
  Search,
} from 'lucide-react'

export function AttendeeList() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3 items-center">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <div className="w-72 px-3 py-1.5 border border-white/10  rounded-lg flex items-center gap-3">
          <Search className="size-4 text-emerald-300" />
          <input
            className="bg-transparent flex-1 outline-none h-auto border-0 p-0 text-sm "
            type="text"
            placeholder="Buscar participantes..."
          />
        </div>
      </div>

      <div className=" border border-white/10 rounded-lg">
        <table className="w-full ">
          <thead>
            <tr className="border-b border-white/10 ">
              <th
                style={{ width: 48 }}
                className="text-left py-3 px-4 text-sm font-semibold"
              >
                <input
                  type="checkbox"
                  className="size-4 bg-black/20 rounded border-white/10 checked:bg-orange-400"
                />
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold">
                Código
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold">
                Participantes
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold">
                Data da inscrição
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold">
                Data do check-in
              </th>
              <th
                style={{ width: 64 }}
                className="text-left py-3 px-4 text-sm font-semibold"
              ></th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 10 }).map((_, index) => {
              return (
                <tr
                  key={index}
                  className="border-b border-white/10 hover:bg-white/5 "
                >
                  <td className="text-zinc-300 py-3 px-4 text-sm ">
                    <input
                      type="checkbox"
                      className="size-4 bg-black/20 rounded border-white/10"
                    />
                  </td>
                  <td className="text-zinc-300 py-3 px-4 text-sm ">955154</td>
                  <td className="text-zinc-300 py-3 px-4 text-sm ">
                    <div className="flex flex-col gap-1">
                      <span className="font-semibold text-white">
                        Francisco Bezerra
                      </span>
                      <span>franciscojunior02@hotmail.com.br</span>
                    </div>
                  </td>
                  <td className="text-zinc-300 py-3 px-4 text-sm ">
                    7 dias atrás
                  </td>
                  <td className="text-zinc-300 py-3 px-4 text-sm ">
                    3 dias atrás
                  </td>
                  <td className="text-zinc-300 py-3 px-4 text-sm ">
                    <button className="bg-black/20 border border-white/10  rounded-md p-1.5 ">
                      <MoreHorizontal className="size-4" />
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
          <tfoot>
            <tr>
              <td className="text-zinc-300 py-3 px-4 text-sm" colSpan={3}>
                Motrando 10 de 28 itens
              </td>
              <td
                className="text-zinc-300 py-3 px-4 text-sm text-right"
                colSpan={3}
              >
                <div className="inline-flex items-center gap-8">
                  <span>Página 1 de 23</span>
                  <div className="flex gap-1.5">
                    <button className="bg-white/10 border border-white/10  rounded-md p-1.5 ">
                      <ChevronsLeft className="size-4" />
                    </button>
                    <button className="bg-white/10 border border-white/10  rounded-md p-1.5 ">
                      <ChevronLeft className="size-4" />
                    </button>
                    <button className="bg-white/10 border border-white/10  rounded-md p-1.5 ">
                      <ChevronRight className="size-4" />
                    </button>
                    <button className="bg-white/10 border border-white/10  rounded-md p-1.5 ">
                      <ChevronsRight className="size-4" />
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}
