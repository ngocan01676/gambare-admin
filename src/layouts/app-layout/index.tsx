import React, { useMemo } from 'react';
import { Layout, theme } from 'antd';
import SideBar from '../app-sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { flattenRoutes } from '../../utils/routes';
import { routes } from '../../routes';
import { AdminOrderPage } from '../../pages/admin_orders/index.page';
import { FileUploadsPage } from '../../pages/file_uploads/file_uploads.page';
const { Header, Content, Footer } = Layout;

const AppLayout: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const _flattenRoutes = useMemo(() => {
    return flattenRoutes(routes);
  }, []);

  console.log('_flattenRoutes _flattenRoutes', _flattenRoutes);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SideBar />
      <Layout className='site-layout'>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '0 16px', backgroundColor: '#fff ' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <Routes>
              {_flattenRoutes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<route.element />}
                />
              ))}
            </Routes>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
