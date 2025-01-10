import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
const { Header, Content } = Layout

// const items = [
//   {
//     key: '1',
//     label: 'Dashboard',
//   },
//   {
//     key: '2',
//     label: 'Profile',
//   },
//   {
//     key: '3',
//     label: 'User Management',
//     children: [
//       {
//         key: '11',
//         label: 'Create Admin',
//       },
//       {
//         key: '21',
//         label: 'Create Student',
//       },
//     ],
//   },
// ]

const MainLayout = () => {
  return (
    <Layout style={{ height: '100vh' }}>
      <Sidebar />
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

export default MainLayout
