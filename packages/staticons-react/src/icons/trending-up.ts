
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M10.416 3.938a.625.625 0 0 0 0 1.25h2.93L9.577 9.04a.547.547 0 0 1-.822-.047L7.309 7.137a1.797 1.797 0 0 0-2.702-.153l-3.93 4.015a.625.625 0 0 0 .894.875L5.5 7.858a.547.547 0 0 1 .822.047l1.446 1.857c.668.858 1.94.93 2.701.152l3.78-3.862v2.971a.625.625 0 1 0 1.25 0v-4.21a.875.875 0 0 0-.875-.875h-4.21Z","clip-rule":"evenodd"}]]

/**
 * @component @name TrendingUp
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTAuNDE2IDMuOTM4YS42MjUuNjI1IDAgMCAwIDAgMS4yNWgyLjkzTDkuNTc3IDkuMDRhLjU0Ny41NDcgMCAwIDEtLjgyMi0uMDQ3TDcuMzA5IDcuMTM3YTEuNzk3IDEuNzk3IDAgMCAwLTIuNzAyLS4xNTNsLTMuOTMgNC4wMTVhLjYyNS42MjUgMCAwIDAgLjg5NC44NzVMNS41IDcuODU4YS41NDcuNTQ3IDAgMCAxIC44MjIuMDQ3bDEuNDQ2IDEuODU3Yy42NjguODU4IDEuOTQuOTMgMi43MDEuMTUybDMuNzgtMy44NjJ2Mi45NzFhLjYyNS42MjUgMCAxIDAgMS4yNSAwdi00LjIxYS44NzUuODc1IDAgMCAwLS44NzUtLjg3NWgtNC4yMVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const TrendingUp = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-trending-up',
        'staticon-TrendingUp',
        className
      ),
      ...props,
    })
);
TrendingUp.displayName = 'TrendingUp'

export default TrendingUp;
