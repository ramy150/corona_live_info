import { format } from 'date-fns';

export const infectionColumns = [
  {
    Header: 'Index',
    accessor: 'index',
    Cell: ({ cell: { value } }: any) => {
      return value
    }
  },
  {
    Header: 'Id',
    accessor: 'id',
    Cell: ({ cell }: any) => {
      return `#0${cell.value}`
    }
      
  },
  {
    Header: 'Date',
    accessor: 'date',
    minWidth: '20%',
    Cell: ({ cell: { value } }: any) => format(new Date(value), 'dd.MM.yyyy - HH:mm')
  },
  {
    Header: 'Wilaya',
    accessor: 'wilaya',
  },
  {
    Header: 'Source',
    accessor: 'infection_source_country',
  },
  {
    Header: 'Source of infection',
    accessor: 'infection_source',
    Cell: ({ cell: { value } }: any) => {
      if (value === 'unknown') {
        return 'Not known';
      }
      if (value === 'related to earlier') {
        return 'related to earlier'
      }
      return `#0${value}`
    }
  },
]
