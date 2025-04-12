
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","d":"M10.105 3.505a.615.615 0 0 1 .878 0l3.293 3.338c.63.64.63 1.675 0 2.314l-3.293 3.338a.615.615 0 0 1-.878 0 .635.635 0 0 1 0-.89l2.94-2.98H5.378a.625.625 0 1 1 0-1.25h7.667l-2.94-2.98a.635.635 0 0 1 0-.89Z"}],["path",{"fill":"#000","d":"M2.5 3.126c0-.345.28-.625.625-.625H7.03a.625.625 0 0 0 0-1.25H3.125c-1.035 0-1.875.84-1.875 1.875v9.748c0 1.035.84 1.875 1.875 1.875H7.03a.625.625 0 1 0 0-1.25H3.125a.625.625 0 0 1-.625-.625V3.126Z"}]]

/**
 * @component @name LogOut
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTEwLjEwNSAzLjUwNWEuNjE1LjYxNSAwIDAgMSAuODc4IDBsMy4yOTMgMy4zMzhjLjYzLjY0LjYzIDEuNjc1IDAgMi4zMTRsLTMuMjkzIDMuMzM4YS42MTUuNjE1IDAgMCAxLS44NzggMCAuNjM1LjYzNSAwIDAgMSAwLS44OWwyLjk0LTIuOThINS4zNzhhLjYyNS42MjUgMCAxIDEgMC0xLjI1aDcuNjY3bC0yLjk0LTIuOThhLjYzNS42MzUgMCAwIDEgMC0uODlaIi8+CiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTIuNSAzLjEyNmMwLS4zNDUuMjgtLjYyNS42MjUtLjYyNUg3LjAzYS42MjUuNjI1IDAgMCAwIDAtMS4yNUgzLjEyNWMtMS4wMzUgMC0xLjg3NS44NC0xLjg3NSAxLjg3NXY5Ljc0OGMwIDEuMDM1Ljg0IDEuODc1IDEuODc1IDEuODc1SDcuMDNhLjYyNS42MjUgMCAxIDAgMC0xLjI1SDMuMTI1YS42MjUuNjI1IDAgMCAxLS42MjUtLjYyNVYzLjEyNloiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const LogOut = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-log-out',
        'staticon-LogOut',
        className
      ),
      ...props,
    })
);
LogOut.displayName = 'LogOut'

export default LogOut;
