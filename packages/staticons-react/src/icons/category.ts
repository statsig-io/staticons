
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M8.99 1.55a1.125 1.125 0 0 0-1.935 0L4.489 5.866c-.446.75.095 1.7.967 1.7h5.132c.872 0 1.413-.95.967-1.7L8.99 1.55Zm-.968.819 2.346 3.948H5.676L8.022 2.37Zm-.712 7.84c0-.897-.727-1.625-1.625-1.625H2.626c-.897 0-1.625.728-1.625 1.625v3.058c0 .898.728 1.625 1.625 1.625h3.06c.897 0 1.624-.727 1.624-1.625V10.21Zm-1.625-.375c.207 0 .375.168.375.375v3.058a.375.375 0 0 1-.375.375H2.626a.375.375 0 0 1-.375-.375V10.21c0-.207.168-.375.375-.375h3.06Zm8.065 1.897a2.02 2.02 0 1 1-4.039 0 2.02 2.02 0 0 1 4.039 0Zm1.25 0a3.27 3.27 0 1 1-6.539 0 3.27 3.27 0 0 1 6.539 0Z","clip-rule":"evenodd"}]]

/**
 * @component @name Category
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOC45OSAxLjU1YTEuMTI1IDEuMTI1IDAgMCAwLTEuOTM1IDBMNC40ODkgNS44NjZjLS40NDYuNzUuMDk1IDEuNy45NjcgMS43aDUuMTMyYy44NzIgMCAxLjQxMy0uOTUuOTY3LTEuN0w4Ljk5IDEuNTVabS0uOTY4LjgxOSAyLjM0NiAzLjk0OEg1LjY3Nkw4LjAyMiAyLjM3Wm0tLjcxMiA3Ljg0YzAtLjg5Ny0uNzI3LTEuNjI1LTEuNjI1LTEuNjI1SDIuNjI2Yy0uODk3IDAtMS42MjUuNzI4LTEuNjI1IDEuNjI1djMuMDU4YzAgLjg5OC43MjggMS42MjUgMS42MjUgMS42MjVoMy4wNmMuODk3IDAgMS42MjQtLjcyNyAxLjYyNC0xLjYyNVYxMC4yMVptLTEuNjI1LS4zNzVjLjIwNyAwIC4zNzUuMTY4LjM3NS4zNzV2My4wNThhLjM3NS4zNzUgMCAwIDEtLjM3NS4zNzVIMi42MjZhLjM3NS4zNzUgMCAwIDEtLjM3NS0uMzc1VjEwLjIxYzAtLjIwNy4xNjgtLjM3NS4zNzUtLjM3NWgzLjA2Wm04LjA2NSAxLjg5N2EyLjAyIDIuMDIgMCAxIDEtNC4wMzkgMCAyLjAyIDIuMDIgMCAwIDEgNC4wMzkgMFptMS4yNSAwYTMuMjcgMy4yNyAwIDEgMS02LjUzOSAwIDMuMjcgMy4yNyAwIDAgMSA2LjUzOSAwWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Category = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-category',
        'staticon-Category',
        className
      ),
      ...props,
    })
);
Category.displayName = 'Category'

export default Category;
