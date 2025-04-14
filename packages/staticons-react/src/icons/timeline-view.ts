
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M3.375 3.124c-.622 0-1.125.504-1.125 1.125v1.5c0 .62.503 1.124 1.125 1.124h6.704c.621 0 1.125-.504 1.125-1.125V4.25c0-.621-.504-1.125-1.125-1.125H3.375Zm.125 2.5v-1.25h6.454v1.25H3.5Zm3.202 3.62c0-.621.503-1.125 1.125-1.125h5.488V3.75a.625.625 0 0 1 1.25 0v4.37h2.06c.622 0 1.126.504 1.126 1.125v1.5c0 .62-.504 1.124-1.125 1.124h-2.061v4.383a.625.625 0 1 1-1.25 0v-4.383H7.827a1.125 1.125 0 0 1-1.125-1.125v-1.5Zm1.25.125v1.25H16.5v-1.25H7.95Zm-3.478 4.883c0-.621.504-1.125 1.125-1.125h4.94c.621 0 1.125.504 1.125 1.125v1.499c0 .621-.504 1.125-1.125 1.125H5.6a1.125 1.125 0 0 1-1.125-1.125v-1.499Zm1.25.125v1.249h4.69v-1.249h-4.69Z","clip-rule":"evenodd"}]]

/**
 * @component @name TimelineView
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMy4zNzUgMy4xMjRjLS42MjIgMC0xLjEyNS41MDQtMS4xMjUgMS4xMjV2MS41YzAgLjYyLjUwMyAxLjEyNCAxLjEyNSAxLjEyNGg2LjcwNGMuNjIxIDAgMS4xMjUtLjUwNCAxLjEyNS0xLjEyNVY0LjI1YzAtLjYyMS0uNTA0LTEuMTI1LTEuMTI1LTEuMTI1SDMuMzc1Wm0uMTI1IDIuNXYtMS4yNWg2LjQ1NHYxLjI1SDMuNVptMy4yMDIgMy42MmMwLS42MjEuNTAzLTEuMTI1IDEuMTI1LTEuMTI1aDUuNDg4VjMuNzVhLjYyNS42MjUgMCAwIDEgMS4yNSAwdjQuMzdoMi4wNmMuNjIyIDAgMS4xMjYuNTA0IDEuMTI2IDEuMTI1djEuNWMwIC42Mi0uNTA0IDEuMTI0LTEuMTI1IDEuMTI0aC0yLjA2MXY0LjM4M2EuNjI1LjYyNSAwIDEgMS0xLjI1IDB2LTQuMzgzSDcuODI3YTEuMTI1IDEuMTI1IDAgMCAxLTEuMTI1LTEuMTI1di0xLjVabTEuMjUuMTI1djEuMjVIMTYuNXYtMS4yNUg3Ljk1Wm0tMy40NzggNC44ODNjMC0uNjIxLjUwNC0xLjEyNSAxLjEyNS0xLjEyNWg0Ljk0Yy42MjEgMCAxLjEyNS41MDQgMS4xMjUgMS4xMjV2MS40OTljMCAuNjIxLS41MDQgMS4xMjUtMS4xMjUgMS4xMjVINS42YTEuMTI1IDEuMTI1IDAgMCAxLTEuMTI1LTEuMTI1di0xLjQ5OVptMS4yNS4xMjV2MS4yNDloNC42OXYtMS4yNDloLTQuNjlaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
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
