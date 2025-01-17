import { Table, TableColumnsType, TableProps } from 'antd'
import { useGetAllSemesterQuery } from '../../../redux/features/admin/academicManagement.api'
import { TAcademicSemester } from '../../../types/academicManagement.type'

export type TTableData = Pick<TAcademicSemester, '_id' | 'year' | 'startMonth' | 'endMonth'>;

const AcademicSemester = () => {
  const { data: semesterData } = useGetAllSemesterQuery([{name: 'year', value: '2027'}])
  const tableData = semesterData?.data?.map(
    ({ _id, name, startMonth, endMonth, year }) => ({
      _id,
      name,
      startMonth,
      endMonth,
      year,
    }),
  )

  const columns: TableColumnsType<TTableData> = [
    {
      title: 'Name',
      dataIndex: 'name',
      showSorterTooltip: { target: 'full-header' },
      filters: [
        {
          text: 'Joe',
          value: 'Joe',
        },
        {
          text: 'Jim',
          value: 'Jim',
        },
        {
          text: 'Submenu',
          value: 'Submenu',
          children: [
            {
              text: 'Green',
              value: 'Green',
            },
            {
              text: 'Black',
              value: 'Black',
            },
          ],
        },
      ],
    },
    {
      title: 'Year',
      dataIndex: 'year',
    },
    {
      title: 'Start Month',
      dataIndex: 'startMonth',
      
    },
    {
      title: 'End Month',
      dataIndex: 'endMonth',
      
    },
  ]

  const onChange: TableProps<TTableData>['onChange'] = (
    pagination,
    filters,
    sorter,
    extra,
  ) => {
    console.log('params', pagination, filters, sorter, extra)
  }

  return (
    <Table
      columns={columns}
      dataSource={tableData}
      onChange={onChange}
      showSorterTooltip={{ target: 'sorter-icon' }}
    />
  )
}

export default AcademicSemester
