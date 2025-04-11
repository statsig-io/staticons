
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M2.875 6.268A2.259 2.259 0 0 1 5.134 4.01h13.732a2.259 2.259 0 0 1 2.259 2.258v.753c0 .904-.531 1.684-1.299 2.045v8.438a2.758 2.758 0 0 1-2.758 2.758H6.932a2.758 2.758 0 0 1-2.758-2.758V9.066A2.259 2.259 0 0 1 2.875 7.02v-.753Zm2.82 3.011h12.61v8.225c0 .683-.553 1.237-1.237 1.237H6.932a1.237 1.237 0 0 1-1.237-1.237V9.28Zm-.561-3.748a.738.738 0 0 0-.738.737v.753c0 .407.33.737.738.737h13.732c.408 0 .738-.33.738-.737v-.753a.738.738 0 0 0-.738-.737H5.134Zm4.84 5.69a.76.76 0 0 0 0 1.52h4.051a.76.76 0 0 0 0-1.52h-4.05Z","clip-rule":"evenodd"}]]

/**
 * @component @name Inventory
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMi44NzUgNi4yNjhBMi4yNTkgMi4yNTkgMCAwIDEgNS4xMzQgNC4wMWgxMy43MzJhMi4yNTkgMi4yNTkgMCAwIDEgMi4yNTkgMi4yNTh2Ljc1M2MwIC45MDQtLjUzMSAxLjY4NC0xLjI5OSAyLjA0NXY4LjQzOGEyLjc1OCAyLjc1OCAwIDAgMS0yLjc1OCAyLjc1OEg2LjkzMmEyLjc1OCAyLjc1OCAwIDAgMS0yLjc1OC0yLjc1OFY5LjA2NkEyLjI1OSAyLjI1OSAwIDAgMSAyLjg3NSA3LjAydi0uNzUzWm0yLjgyIDMuMDExaDEyLjYxdjguMjI1YzAgLjY4My0uNTUzIDEuMjM3LTEuMjM3IDEuMjM3SDYuOTMyYTEuMjM3IDEuMjM3IDAgMCAxLTEuMjM3LTEuMjM3VjkuMjhabS0uNTYxLTMuNzQ4YS43MzguNzM4IDAgMCAwLS43MzguNzM3di43NTNjMCAuNDA3LjMzLjczNy43MzguNzM3aDEzLjczMmMuNDA4IDAgLjczOC0uMzMuNzM4LS43Mzd2LS43NTNhLjczOC43MzggMCAwIDAtLjczOC0uNzM3SDUuMTM0Wm00Ljg0IDUuNjlhLjc2Ljc2IDAgMCAwIDAgMS41Mmg0LjA1MWEuNzYuNzYgMCAwIDAgMC0xLjUyaC00LjA1WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Inventory = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-inventory',
        'staticon-Inventory',
        className
      ),
      ...props,
    })
);
Inventory.displayName = 'Inventory'

export default Inventory;
