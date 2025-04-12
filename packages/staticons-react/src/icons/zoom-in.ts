
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M2.379 7.294a5.413 5.413 0 1 1 10.826 0 5.413 5.413 0 0 1-10.826 0ZM7.792.627a6.667 6.667 0 1 0 3.678 12.228l2.335 2.334a.627.627 0 0 0 .886-.886l-2.24-2.24A6.667 6.667 0 0 0 7.791.627Zm0 2.625c.345 0 .625.28.625.625v2.875h2.875a.625.625 0 1 1 0 1.25H8.417v2.875a.625.625 0 0 1-1.25 0V8.002H4.292a.625.625 0 1 1 0-1.25h2.875V3.877c0-.345.28-.625.625-.625Z","clip-rule":"evenodd"}]]

/**
 * @component @name ZoomIn
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMi4zNzkgNy4yOTRhNS40MTMgNS40MTMgMCAxIDEgMTAuODI2IDAgNS40MTMgNS40MTMgMCAwIDEtMTAuODI2IDBaTTcuNzkyLjYyN2E2LjY2NyA2LjY2NyAwIDEgMCAzLjY3OCAxMi4yMjhsMi4zMzUgMi4zMzRhLjYyNy42MjcgMCAwIDAgLjg4Ni0uODg2bC0yLjI0LTIuMjRBNi42NjcgNi42NjcgMCAwIDAgNy43OTEuNjI3Wm0wIDIuNjI1Yy4zNDUgMCAuNjI1LjI4LjYyNS42MjV2Mi44NzVoMi44NzVhLjYyNS42MjUgMCAxIDEgMCAxLjI1SDguNDE3djIuODc1YS42MjUuNjI1IDAgMCAxLTEuMjUgMFY4LjAwMkg0LjI5MmEuNjI1LjYyNSAwIDEgMSAwLTEuMjVoMi44NzVWMy44NzdjMC0uMzQ1LjI4LS42MjUuNjI1LS42MjVaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const ZoomIn = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-zoom-in',
        'staticon-ZoomIn',
        className
      ),
      ...props,
    })
);
ZoomIn.displayName = 'ZoomIn'

export default ZoomIn;
