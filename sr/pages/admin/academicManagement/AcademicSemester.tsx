import { Table, TableColumnsType, TableProps } from 'antd'
import { useGetAllSemesterQuery } from '../../../redux/features/admin/academicManagement.api'
import { TAcademicSemester } from '../../../types/academicManagement.type'
import { useState } from 'react'

export type TTableData = Pick<
  TAcademicSemester,
  '_id' | 'year' | 'startMonth' | 'endMonth'
>

const AcademicSemester = () => {
  const [params, setParams] = useState([])
  const { data: semesterData } = useGetAllSemesterQuery(params)
  const tableData = semesterData?.data?.map(
    ({ _id, name, startMonth, endMonth, year }) => ({
      key: _id,
      name,
      startMonth,
      endMonth,
      year,
    }),
  )

  const columns: TableColumnsType<TTableData> = [
    {
      title: 'Name',
      key: 'name',
      dataIndex: 'name',
      filters: [
        {
          text: 'Autumn',
          value: 'Autumn',
        },
        {
          text: 'Fall',
          value: 'Fall',
        },
        {
          text: 'Summer',
          value: 'Summer',
        },
      ],
    },
    {
      title: 'Year',
      key: 'year',
      dataIndex: 'year',
    },
    {
      title: 'Start Month',
      key: 'startMonth',
      dataIndex: 'startMonth',
    },
    {
      title: 'End Month',
      key: 'endMonth',
      dataIndex: 'endMonth',
    },
  ]

  const onChange: TableProps<TTableData>['onChange'] = (
    pagination,
    filters,
    sorter,
    extra,
  ) => {
    if (extra.action === 'filter') {
      const queryParams = []

      filters.name?.forEach((item) =>
        queryParams.push({ name: 'name', value: item }),
      )
      setParams(queryParams)
      console.log(queryParams);
    }
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
