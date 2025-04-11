
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M13.485 3.982a1.75 1.75 0 0 0-3.008 0L7.664 8.714c-.693 1.166.148 2.644 1.505 2.644h5.624c1.357 0 2.198-1.478 1.505-2.644l-2.813-4.732Zm-1.719.766a.25.25 0 0 1 .43 0l2.812 4.732a.25.25 0 0 1-.215.378H9.17a.25.25 0 0 1-.215-.378l2.812-4.732Zm-.764 10.098a2.25 2.25 0 0 0-2.25-2.25h-3.5a2.25 2.25 0 0 0-2.25 2.25v3.498a2.25 2.25 0 0 0 2.25 2.25h3.5a2.25 2.25 0 0 0 2.25-2.25v-3.498Zm-2.25-.75a.75.75 0 0 1 .75.75v3.498a.75.75 0 0 1-.75.75h-3.5a.75.75 0 0 1-.75-.75v-3.498a.75.75 0 0 1 .75-.75h3.5Zm10.746 2.529a2.749 2.749 0 1 1-5.497 0 2.749 2.749 0 0 1 5.497 0Zm1.5 0a4.249 4.249 0 1 1-8.497 0 4.249 4.249 0 0 1 8.497 0Z","clip-rule":"evenodd"}]]

/**
 * @component @name Category
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTMuNDg1IDMuOTgyYTEuNzUgMS43NSAwIDAgMC0zLjAwOCAwTDcuNjY0IDguNzE0Yy0uNjkzIDEuMTY2LjE0OCAyLjY0NCAxLjUwNSAyLjY0NGg1LjYyNGMxLjM1NyAwIDIuMTk4LTEuNDc4IDEuNTA1LTIuNjQ0bC0yLjgxMy00LjczMlptLTEuNzE5Ljc2NmEuMjUuMjUgMCAwIDEgLjQzIDBsMi44MTIgNC43MzJhLjI1LjI1IDAgMCAxLS4yMTUuMzc4SDkuMTdhLjI1LjI1IDAgMCAxLS4yMTUtLjM3OGwyLjgxMi00LjczMlptLS43NjQgMTAuMDk4YTIuMjUgMi4yNSAwIDAgMC0yLjI1LTIuMjVoLTMuNWEyLjI1IDIuMjUgMCAwIDAtMi4yNSAyLjI1djMuNDk4YTIuMjUgMi4yNSAwIDAgMCAyLjI1IDIuMjVoMy41YTIuMjUgMi4yNSAwIDAgMCAyLjI1LTIuMjV2LTMuNDk4Wm0tMi4yNS0uNzVhLjc1Ljc1IDAgMCAxIC43NS43NXYzLjQ5OGEuNzUuNzUgMCAwIDEtLjc1Ljc1aC0zLjVhLjc1Ljc1IDAgMCAxLS43NS0uNzV2LTMuNDk4YS43NS43NSAwIDAgMSAuNzUtLjc1aDMuNVptMTAuNzQ2IDIuNTI5YTIuNzQ5IDIuNzQ5IDAgMSAxLTUuNDk3IDAgMi43NDkgMi43NDkgMCAwIDEgNS40OTcgMFptMS41IDBhNC4yNDkgNC4yNDkgMCAxIDEtOC40OTcgMCA0LjI0OSA0LjI0OSAwIDAgMSA4LjQ5NyAwWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
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
