
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M14.877 13a1.875 1.875 0 0 1-1.875 1.876H2.998A1.875 1.875 0 0 1 1.123 13v-2.015a.625.625 0 0 1 1.25 0V13c0 .345.28.625.625.625h10.005c.345 0 .624-.28.624-.625V2.998a.625.625 0 0 0-.625-.625H2.998a.625.625 0 0 0-.625.625v2.046a.625.625 0 1 1-1.25 0V2.998c0-1.035.839-1.875 1.875-1.875h10.005c1.035 0 1.874.84 1.874 1.875v10.003ZM11.8 8.619a.875.875 0 0 0 0-1.237L9.028 4.609a.625.625 0 1 0-.884.883l1.881 1.882H1.748a.625.625 0 1 0 0 1.25h8.279l-1.88 1.879a.625.625 0 1 0 .885.884L11.8 8.618Z","clip-rule":"evenodd"}]]

/**
 * @component @name Source
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTQuODc3IDEzYTEuODc1IDEuODc1IDAgMCAxLTEuODc1IDEuODc2SDIuOTk4QTEuODc1IDEuODc1IDAgMCAxIDEuMTIzIDEzdi0yLjAxNWEuNjI1LjYyNSAwIDAgMSAxLjI1IDBWMTNjMCAuMzQ1LjI4LjYyNS42MjUuNjI1aDEwLjAwNWMuMzQ1IDAgLjYyNC0uMjguNjI0LS42MjVWMi45OThhLjYyNS42MjUgMCAwIDAtLjYyNS0uNjI1SDIuOTk4YS42MjUuNjI1IDAgMCAwLS42MjUuNjI1djIuMDQ2YS42MjUuNjI1IDAgMSAxLTEuMjUgMFYyLjk5OGMwLTEuMDM1LjgzOS0xLjg3NSAxLjg3NS0xLjg3NWgxMC4wMDVjMS4wMzUgMCAxLjg3NC44NCAxLjg3NCAxLjg3NXYxMC4wMDNaTTExLjggOC42MTlhLjg3NS44NzUgMCAwIDAgMC0xLjIzN0w5LjAyOCA0LjYwOWEuNjI1LjYyNSAwIDEgMC0uODg0Ljg4M2wxLjg4MSAxLjg4MkgxLjc0OGEuNjI1LjYyNSAwIDEgMCAwIDEuMjVoOC4yNzlsLTEuODggMS44NzlhLjYyNS42MjUgMCAxIDAgLjg4NS44ODRMMTEuOCA4LjYxOFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Source = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-source',
        'staticon-Source',
        className
      ),
      ...props,
    })
);
Source.displayName = 'Source'

export default Source;
