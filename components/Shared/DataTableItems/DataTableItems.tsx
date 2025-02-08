import { DataTable } from "./data-table"
import { DataTableItemsProps } from "./DataTableItems.type"
import { columns } from "./colums"
export function DataTableItems(props: DataTableItemsProps) {
    const { elements } = props
  return (
    <div className="p-4">
        <DataTable columns={columns} data={elements} />
    </div>
  )
}
