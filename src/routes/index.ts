import { MenuProps } from 'antd';
import { RouterHelper } from '../utils/routes';
import { DashboardPage } from '../pages/dashboard/dashboard.page';
import { AdminOrderPage } from '../pages/admin_orders/index.page';
import { FileUploadsPage } from '../pages/file_uploads/file_uploads.page';
import { ProductRoutes } from './product.routes';
import { ProductPage } from '../pages/product/index.page';
import { OrderRoutes } from './order.routes';
import { StaffRoutes } from './staff.routes';

export type MenuItem = Required<MenuProps>['items'][number];

export type RoutesItem = {
  path: string;
  label?: string;
  element: React.FC;
  children?: RoutesItem[];
  icon?: React.ReactNode;
  showOnMenu?: boolean;
  layout?: React.FC;
  isPrivate?: boolean;
} & MenuItem;

export const routes: RoutesItem[] = [
  {
    key: RouterHelper.home,
    label: 'Home',
    path: RouterHelper.home,
    element: DashboardPage,
    showOnMenu: true,
  },
  {
    key: RouterHelper.product,
    label: 'Product',
    path: RouterHelper.product,
    element: ProductPage,
    showOnMenu: true,
    children: [...ProductRoutes],
  },
  {
    key: RouterHelper.admin_order,
    label: 'Orders',
    path: RouterHelper.admin_order,
    element: AdminOrderPage,
    showOnMenu: true,
    children: [...OrderRoutes],
  },
  {
    key: RouterHelper.file_uploads,
    label: 'Staff',
    path: RouterHelper.file_uploads,
    element: FileUploadsPage,
    showOnMenu: true,
    children: [...StaffRoutes],
  },
  {
    key: RouterHelper.file_uploads,
    label: 'File upload',
    path: RouterHelper.file_uploads,
    element: FileUploadsPage,
    showOnMenu: true,
    //children: [...submissionRoutes],
  },
];
