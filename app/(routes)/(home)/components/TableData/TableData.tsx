import { Element } from "@prisma/client"
import { DataTable } from "./data-table"
import { columns } from "./colums"

export type TableDataProps = {
  elements: Element[]
}
export default function TableData(props: TableDataProps) {
    const { elements } = props
  return (
    <div className="md:p-10 p-4">
        <DataTable columns={columns} data={elements}/>
    </div>
  )
}
