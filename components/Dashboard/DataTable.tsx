
import { DataGrid, GridColDef, GridToolbar, GridToolbarQuickFilter, GridValueGetterParams, } from '@mui/x-data-grid'
import Link from 'next/link'
import React from 'react'
import { BsPencilSquare, BsFillTrashFill } from 'react-icons/bs'
interface Props {
  columns: GridColDef[],
  rows: object[],
  page: number,
  slug?: string,
}

const DataTable: React.FC<Props> = ({columns, rows, page, slug}) => {
  const handleDelete = (id: number) => {
    console.log(id + 'has been del');
  }
  const actionCloumn: GridColDef = {
    field: 'action',
    headerClassName: 'Action',
    width: 200,
    renderCell: (params) => {
      return (
        <div className=' flex gap-2'>
          <Link href={`/dashboard/${slug}/${params.row.id}`}>
            <BsPencilSquare className=' text-green-700' size={24}/>
          </Link>
          <BsFillTrashFill className=' cursor-pointer text-rose-500' size={24} onClick={() => handleDelete(params.row.id)}/>
        </div>
      )
    },
  }
  
  return (
    <div className=' bg-white p-4'>
      <DataGrid
        className='p-4'
        rows={rows}
        columns={[...columns, actionCloumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: page,
            },
          },
        }}
        pageSizeOptions={[page]}
        checkboxSelection
        disableRowSelectionOnClick
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
      />
    </div>
  )
}

export default DataTable