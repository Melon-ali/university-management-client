import { useGetAllSemesterQuery } from "../../../redux/features/academicSemester/academicSemesterApi"


const AcademicSemester = () => {
    const {data} = useGetAllSemesterQuery(undefined)
    console.log(data);
  return (
    <div>academicSemester</div>
  )
}

export default AcademicSemester