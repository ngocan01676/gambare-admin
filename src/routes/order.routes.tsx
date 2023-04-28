import { RoutesItem } from '.';
import { AdminOrderPage } from '../pages/admin_orders/index.page';
import { OrderExport } from '../pages/admin_orders/order_export/index.page';
import { OrderExternal } from '../pages/admin_orders/order_external/index.page';
import { OrderInternal } from '../pages/admin_orders/order_internal/index.page';
import { RouterHelper } from '../utils/routes';

export const OrderRoutes: RoutesItem[] = [
  {
    key: RouterHelper.orders_all,
    label: 'Tất cả các đơn hàng',
    path: RouterHelper.orders_all,
    element: AdminOrderPage,
    isPrivate: true,
  },
  {
    key: RouterHelper.orders_internal,
    label: 'Đơn hàng đặt nội bộ',
    path: RouterHelper.orders_internal,
    element: OrderInternal,
    showOnMenu: false,
    isPrivate: true,
  },
  {
    key: RouterHelper.orders_external,
    label: 'Đơn hàng của người bán',
    path: RouterHelper.orders_external,
    element: OrderExternal,
    showOnMenu: false,
    isPrivate: true,
  },
  {
    key: RouterHelper.orders_export,
    label: 'Xuất hàng loạt',
    path: RouterHelper.orders_export,
    element: OrderExport,
    showOnMenu: false,
    isPrivate: true,
  },
];
