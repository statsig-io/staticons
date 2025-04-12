
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M1.625 1.625A.875.875 0 0 0 .75 2.5v1.8c0 .482.392.874.875.874h6.576a.875.875 0 0 0 .875-.875V2.5a.875.875 0 0 0-.875-.875H1.625ZM2 3.925v-1.05h5.826v1.05H2Zm3.002 3.17c0-.483.392-.874.875-.874h5.201V2.25a.585.585 0 1 1 1.17 0v3.97h2.126c.483 0 .875.392.875.876v1.799a.875.875 0 0 1-.875.875h-2.086v3.98a.625.625 0 1 1-1.25 0V9.77H5.877a.875.875 0 0 1-.875-.875v-1.8Zm1.25.376V8.52h7.747V7.47H6.252Zm-3.459 4.231c0-.483.392-.875.875-.875h4.956c.483 0 .875.392.875.875v1.8a.875.875 0 0 1-.875.874H3.668a.875.875 0 0 1-.875-.875v-1.799Zm1.25.375v1.05H8.25v-1.05H4.043Z","clip-rule":"evenodd"}]]

/**
 * @component @name TimelineView
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMS42MjUgMS42MjVBLjg3NS44NzUgMCAwIDAgLjc1IDIuNXYxLjhjMCAuNDgyLjM5Mi44NzQuODc1Ljg3NGg2LjU3NmEuODc1Ljg3NSAwIDAgMCAuODc1LS44NzVWMi41YS44NzUuODc1IDAgMCAwLS44NzUtLjg3NUgxLjYyNVpNMiAzLjkyNXYtMS4wNWg1LjgyNnYxLjA1SDJabTMuMDAyIDMuMTdjMC0uNDgzLjM5Mi0uODc0Ljg3NS0uODc0aDUuMjAxVjIuMjVhLjU4NS41ODUgMCAxIDEgMS4xNyAwdjMuOTdoMi4xMjZjLjQ4MyAwIC44NzUuMzkyLjg3NS44NzZ2MS43OTlhLjg3NS44NzUgMCAwIDEtLjg3NS44NzVoLTIuMDg2djMuOThhLjYyNS42MjUgMCAxIDEtMS4yNSAwVjkuNzdINS44NzdhLjg3NS44NzUgMCAwIDEtLjg3NS0uODc1di0xLjhabTEuMjUuMzc2VjguNTJoNy43NDdWNy40N0g2LjI1MlptLTMuNDU5IDQuMjMxYzAtLjQ4My4zOTItLjg3NS44NzUtLjg3NWg0Ljk1NmMuNDgzIDAgLjg3NS4zOTIuODc1Ljg3NXYxLjhhLjg3NS44NzUgMCAwIDEtLjg3NS44NzRIMy42NjhhLjg3NS44NzUgMCAwIDEtLjg3NS0uODc1di0xLjc5OVptMS4yNS4zNzV2MS4wNUg4LjI1di0xLjA1SDQuMDQzWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const TimelineView = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-timeline-view',
        'staticon-TimelineView',
        className
      ),
      ...props,
    })
);
TimelineView.displayName = 'TimelineView'

export default TimelineView;
