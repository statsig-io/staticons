
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M6.758 3.231a1.23 1.23 0 1 0 2.458 0 1.23 1.23 0 0 0-2.458 0Zm.605 2.4a2.48 2.48 0 1 1 1.25 0v1.517h2.921c1.036 0 1.875.84 1.875 1.875v.675a.625.625 0 1 1-1.25 0v-.675a.625.625 0 0 0-.625-.625H4.562a.625.625 0 0 0-.625.625l.001 1.323a2.486 2.486 0 1 1-1.25.024V9.024a1.874 1.874 0 0 1 1.874-1.876h2.8V5.63Zm-5.237 7.132a1.235 1.235 0 1 0 2.47 0 1.235 1.235 0 0 0-2.47 0Zm12.815-.943a.625.625 0 0 0-.884-.883l-1.175 1.175-1.175-1.175a.625.625 0 1 0-.884.884l1.175 1.175-1.175 1.175a.625.625 0 0 0 .884.884l1.175-1.175 1.175 1.175a.625.625 0 1 0 .884-.884l-1.175-1.175 1.175-1.176Z","clip-rule":"evenodd"}]]

/**
 * @component @name Holdour
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNi43NTggMy4yMzFhMS4yMyAxLjIzIDAgMSAwIDIuNDU4IDAgMS4yMyAxLjIzIDAgMCAwLTIuNDU4IDBabS42MDUgMi40YTIuNDggMi40OCAwIDEgMSAxLjI1IDB2MS41MTdoMi45MjFjMS4wMzYgMCAxLjg3NS44NCAxLjg3NSAxLjg3NXYuNjc1YS42MjUuNjI1IDAgMSAxLTEuMjUgMHYtLjY3NWEuNjI1LjYyNSAwIDAgMC0uNjI1LS42MjVINC41NjJhLjYyNS42MjUgMCAwIDAtLjYyNS42MjVsLjAwMSAxLjMyM2EyLjQ4NiAyLjQ4NiAwIDEgMS0xLjI1LjAyNFY5LjAyNGExLjg3NCAxLjg3NCAwIDAgMSAxLjg3NC0xLjg3NmgyLjhWNS42M1ptLTUuMjM3IDcuMTMyYTEuMjM1IDEuMjM1IDAgMSAwIDIuNDcgMCAxLjIzNSAxLjIzNSAwIDAgMC0yLjQ3IDBabTEyLjgxNS0uOTQzYS42MjUuNjI1IDAgMCAwLS44ODQtLjg4M2wtMS4xNzUgMS4xNzUtMS4xNzUtMS4xNzVhLjYyNS42MjUgMCAxIDAtLjg4NC44ODRsMS4xNzUgMS4xNzUtMS4xNzUgMS4xNzVhLjYyNS42MjUgMCAwIDAgLjg4NC44ODRsMS4xNzUtMS4xNzUgMS4xNzUgMS4xNzVhLjYyNS42MjUgMCAxIDAgLjg4NC0uODg0bC0xLjE3NS0xLjE3NSAxLjE3NS0xLjE3NloiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Holdour = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-holdour',
        'staticon-Holdour',
        className
      ),
      ...props,
    })
);
Holdour.displayName = 'Holdour'

export default Holdour;
