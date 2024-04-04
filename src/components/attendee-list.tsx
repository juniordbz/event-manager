import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontal,
  Search,
} from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { IconButton } from './icon-button'
import { Table } from './table/table'
import { TableHeader } from './table/table-header'
import { TableCell } from './table/table-cell'
import { TableRow } from './table/table-row'
import { ChangeEvent, useState } from 'react'
import { attendees } from '../data/attendees'

export function AttendeeList() {
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(0)

  function onSearchInputChanged(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value)
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3 items-center">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <div className="w-72 px-3 py-1.5 border border-white/10  rounded-lg flex items-center gap-3">
          <Search className="size-4 text-emerald-300" />
          <input
            onChange={onSearchInputChanged}
            className="bg-transparent flex-1 outline-none h-auto border-0 p-0 text-sm "
            type="text"
            placeholder="Buscar participantes..."
          />
        </div>
        {search}
      </div>

      <Table>
        <thead>
          <tr className="border-b border-white/10 ">
            <TableHeader
              style={{ width: 48 }}
              className="text-left py-3 px-4 text-sm font-semibold"
            >
              <input
                type="checkbox"
                className="size-4 bg-black/20 rounded border-white/10 checked:bg-orange-400"
              />
            </TableHeader>
            <TableHeader>Código</TableHeader>
            <TableHeader>Participantes</TableHeader>
            <TableHeader>Data da inscrição</TableHeader>
            <TableHeader>Data do check-in</TableHeader>
            <TableHeader
              style={{ width: 64 }}
              className="text-left py-3 px-4 text-sm font-semibold"
            ></TableHeader>
          </tr>
        </thead>
        <tbody>
          {attendees.slice(0, 10).map((ateendee) => {
            return (
              <TableRow key={ateendee.id}>
                <TableCell>
                  <input
                    type="checkbox"
                    className="size-4 bg-black/20 rounded border-white/10"
                  />
                </TableCell>
                <TableCell> {ateendee.id}</TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-white">
                      {ateendee.name}
                    </span>
                    <span>{ateendee.email}</span>
                  </div>
                </TableCell>
                <TableCell>
                  {formatDistanceToNow(ateendee.createdAr, {
                    locale: ptBR,
                    addSuffix: true,
                  })}
                </TableCell>
                <TableCell>
                  {formatDistanceToNow(ateendee.checkedInAt, {
                    locale: ptBR,
                    addSuffix: true,
                  })}
                </TableCell>
                <TableCell>
                  <IconButton transparent>
                    <MoreHorizontal className="size-4" />
                  </IconButton>
                </TableCell>
              </TableRow>
            )
          })}
        </tbody>
        <tfoot>
          <tr>
            <TableCell colSpan={3}>Motrando 10 de 228 itens</TableCell>
            <TableCell className="text-right" colSpan={3}>
              <div className="inline-flex items-center gap-8">
                <span>Página 1 de 23</span>
                <div className="flex gap-1.5">
                  <IconButton>
                    <ChevronsLeft className="size-4" />
                  </IconButton>
                  <IconButton>
                    <ChevronLeft className="size-4" />
                  </IconButton>
                  <IconButton>
                    <ChevronRight className="size-4" />
                  </IconButton>
                  <IconButton>
                    <ChevronsRight className="size-4" />
                  </IconButton>
                </div>
              </div>
            </TableCell>
          </tr>
        </tfoot>
      </Table>
    </div>
  )
}
