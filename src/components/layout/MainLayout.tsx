import { Layout, Menu } from 'antd'
const { Header, Content, Footer, Sider } = Layout

const items = [
  {
    key: '1',
    label: 'Dashboard',
  },
  {
    key: '2',
    label: 'Profile',
  },
  {
    key: '3',
    label: 'User Management',
    children: [
      {
        key: '11',
        label: 'Create Admin',
      },
      {
        key: '21',
        label: 'Create Student',
      },
    ],
  },
]

const MainLayout = () => {
  return (
    <Layout style={{ height: '100vh' }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken)
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type)
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['4']}
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <h1>The Main Content Should go here</h1>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  )
}

export default MainLayout
