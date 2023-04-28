import { RoutesItem } from '.';
import { StaffPage } from '../pages/staff/index.page';
import { StaffPermission } from '../pages/staff/staff_permission/index.page';
import { RouterHelper } from '../utils/routes';

export const StaffRoutes: RoutesItem[] = [
  {
    key: RouterHelper.staff_all,
    label: 'Tất cả nhân viên',
    path: RouterHelper.staff_all,
    element: StaffPage,
    isPrivate: true,
  },
  {
    key: RouterHelper.staff_permission,
    label: 'Quyền của nhân viên',
    path: RouterHelper.staff_permission,
    element: StaffPermission,
    showOnMenu: false,
    isPrivate: true,
  },
];
