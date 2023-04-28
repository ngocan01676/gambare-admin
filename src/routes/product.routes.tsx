import { RoutesItem } from '.';
import { ProductPage } from '../pages/product/index.page';
import { ProductAttribute } from '../pages/product/product_attributes/index.page';
import { ProductBrand } from '../pages/product/product_brand/index.page';
import { ProductCategory } from '../pages/product/product_category/index.page';
import { ProductColor } from '../pages/product/product_color/index.page';
import { ProductExport } from '../pages/product/product_export/index.page';
import { ProductExternal } from '../pages/product/product_external/index.page';
import { ProductImport } from '../pages/product/product_import/index.page';
import { ProductInternal } from '../pages/product/product_internal/index.page';
import { ProductReview } from '../pages/product/product_reviews/index.page';
import { RouterHelper } from '../utils/routes';

export const ProductRoutes: RoutesItem[] = [
  {
    key: RouterHelper.product_management,
    label: 'Tất cả sản phẩm',
    path: RouterHelper.product_management,
    element: ProductPage,
    isPrivate: true,
  },
  {
    key: RouterHelper.product_internal,
    label: 'Sản phẩm nội bộ',
    path: RouterHelper.product_internal,
    element: ProductInternal,
    showOnMenu: false,
    isPrivate: true,
  },
  {
    key: RouterHelper.product_external,
    label: 'Sản phẩm người bán',
    path: RouterHelper.product_external,
    element: ProductExternal,
    showOnMenu: false,
    isPrivate: true,
  },
  {
    key: RouterHelper.product_import,
    label: 'Nhập khẩu số lương lớn',
    path: RouterHelper.product_import,
    element: ProductImport,
    showOnMenu: false,
    isPrivate: true,
  },
  {
    key: RouterHelper.product_export,
    label: 'Xuất hàng loạt',
    path: RouterHelper.product_export,
    element: ProductExport,
    showOnMenu: false,
    isPrivate: true,
  },
  {
    key: RouterHelper.product_category,
    label: 'Danh  mục',
    path: RouterHelper.product_category,
    element: ProductCategory,
    showOnMenu: false,
  },
  {
    key: RouterHelper.product_brand,
    label: 'Nhãn hiệu',
    path: RouterHelper.product_brand,
    element: ProductBrand,
    showOnMenu: false,
  },
  {
    key: RouterHelper.product_attributes,
    label: 'Thuộc tính',
    path: RouterHelper.product_attributes,
    element: ProductAttribute,
    showOnMenu: false,
  },
  {
    key: RouterHelper.product_color,
    label: 'Màu sắc',
    path: RouterHelper.product_color,
    element: ProductColor,
    showOnMenu: false,
  },
  {
    key: RouterHelper.product_reviews,
    label: 'Đánh giá sản phẩm',
    path: RouterHelper.product_reviews,
    element: ProductReview,
    showOnMenu: false,
  },
];
