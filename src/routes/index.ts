import { MenuProps } from 'antd';

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
    key: RouterHelper.admin_notification,
    label: 'Admin Notification',
    path: RouterHelper.admin_notification,
    element: AdminNotificationPage,
    showOnMenu: true,
  },
  {
    key: RouterHelper.home,
    label: 'Home',
    path: RouterHelper.home,
    element: HomePage,
    showOnMenu: true,
  },
  {
    key: RouterHelper.submission,
    label: 'Submission Management',
    path: RouterHelper.submission,
    element: null,
    showOnMenu: true,
    children: [...submissionRoutes],
  },
  {
    key: RouterHelper.administrator,
    label: 'Administrator',
    path: RouterHelper.administrator,
    element: null,
    showOnMenu: true,
    children: [...userRoutes, ...organizationRoutes, ...roleRoutes],
  },
  {
    key: RouterHelper.cms,
    label: 'CMS',
    path: RouterHelper.cms,
    element: null,
    showOnMenu: true,
    children: [...cmsRoutes],
  },
  {
    key: RouterHelper.configuration,
    label: 'Configuration',
    path: RouterHelper.configuration,
    element: null,
    showOnMenu: true,
    children: [...configurationRoutes],
  },
];
