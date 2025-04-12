
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","d":"M13.126 2c.483 0 .875.392.875.875v3.872a.625.625 0 0 1-1.25 0V4.132L4.134 12.75h2.615a.625.625 0 1 1 0 1.25H2.875A.875.875 0 0 1 2 13.124V9.252a.625.625 0 1 1 1.25 0v2.614l8.616-8.616H9.252a.625.625 0 1 1 0-1.25h3.874Z"}]]

/**
 * @component @name Resize
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTEzLjEyNiAyYy40ODMgMCAuODc1LjM5Mi44NzUuODc1djMuODcyYS42MjUuNjI1IDAgMCAxLTEuMjUgMFY0LjEzMkw0LjEzNCAxMi43NWgyLjYxNWEuNjI1LjYyNSAwIDEgMSAwIDEuMjVIMi44NzVBLjg3NS44NzUgMCAwIDEgMiAxMy4xMjRWOS4yNTJhLjYyNS42MjUgMCAxIDEgMS4yNSAwdjIuNjE0bDguNjE2LTguNjE2SDkuMjUyYS42MjUuNjI1IDAgMSAxIDAtMS4yNWgzLjg3NFoiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Resize = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-resize',
        'staticon-Resize',
        className
      ),
      ...props,
    })
);
Resize.displayName = 'Resize'

export default Resize;
