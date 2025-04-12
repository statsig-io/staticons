
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M8.625 1.904a.625.625 0 1 0-1.25 0v5.47H1.904a.625.625 0 0 0 0 1.25h5.47v5.472a.625.625 0 1 0 1.25 0V8.625h5.471a.625.625 0 1 0 0-1.25h-5.47v-5.47Z","clip-rule":"evenodd"}]]

/**
 * @component @name Plus
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOC42MjUgMS45MDRhLjYyNS42MjUgMCAxIDAtMS4yNSAwdjUuNDdIMS45MDRhLjYyNS42MjUgMCAwIDAgMCAxLjI1aDUuNDd2NS40NzJhLjYyNS42MjUgMCAxIDAgMS4yNSAwVjguNjI1aDUuNDcxYS42MjUuNjI1IDAgMSAwIDAtMS4yNWgtNS40N3YtNS40N1oiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Plus = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-plus',
        'staticon-Plus',
        className
      ),
      ...props,
    })
);
Plus.displayName = 'Plus'

export default Plus;
