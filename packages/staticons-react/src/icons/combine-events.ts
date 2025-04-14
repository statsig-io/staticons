
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M5.273 12.602c0 1.174.951 2.125 2.125 2.125h6.08v.898a.875.875 0 0 1-.875.875H4.376a.875.875 0 0 1-.875-.875V7.403c0-.483.392-.875.875-.875h.897v6.074Zm0-7.324h-.897a2.125 2.125 0 0 0-2.125 2.125v8.222c0 1.173.952 2.125 2.125 2.125h8.227a2.125 2.125 0 0 0 2.125-2.125v-.898h.896a2.125 2.125 0 0 0 2.125-2.125V4.376a2.125 2.125 0 0 0-2.125-2.125H7.398a2.125 2.125 0 0 0-2.125 2.125v.902Zm1.25 1.25v6.074c0 .483.392.875.875.875h6.08V7.403a.875.875 0 0 0-.875-.875h-6.08Zm8.205 6.949V7.403a2.125 2.125 0 0 0-2.125-2.125h-6.08v-.902c0-.483.392-.875.875-.875h8.226c.483 0 .875.392.875.875v8.226a.875.875 0 0 1-.875.875h-.896Zm-7.08-3.476c0-.345.28-.625.624-.625h1.102V8.272a.625.625 0 1 1 1.25 0v1.104h1.104a.625.625 0 1 1 0 1.25h-1.104v1.102a.625.625 0 1 1-1.25 0v-1.102H8.272A.625.625 0 0 1 7.647 10Z","clip-rule":"evenodd"}]]

/**
 * @component @name CombineEvents
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNS4yNzMgMTIuNjAyYzAgMS4xNzQuOTUxIDIuMTI1IDIuMTI1IDIuMTI1aDYuMDh2Ljg5OGEuODc1Ljg3NSAwIDAgMS0uODc1Ljg3NUg0LjM3NmEuODc1Ljg3NSAwIDAgMS0uODc1LS44NzVWNy40MDNjMC0uNDgzLjM5Mi0uODc1Ljg3NS0uODc1aC44OTd2Ni4wNzRabTAtNy4zMjRoLS44OTdhMi4xMjUgMi4xMjUgMCAwIDAtMi4xMjUgMi4xMjV2OC4yMjJjMCAxLjE3My45NTIgMi4xMjUgMi4xMjUgMi4xMjVoOC4yMjdhMi4xMjUgMi4xMjUgMCAwIDAgMi4xMjUtMi4xMjV2LS44OThoLjg5NmEyLjEyNSAyLjEyNSAwIDAgMCAyLjEyNS0yLjEyNVY0LjM3NmEyLjEyNSAyLjEyNSAwIDAgMC0yLjEyNS0yLjEyNUg3LjM5OGEyLjEyNSAyLjEyNSAwIDAgMC0yLjEyNSAyLjEyNXYuOTAyWm0xLjI1IDEuMjV2Ni4wNzRjMCAuNDgzLjM5Mi44NzUuODc1Ljg3NWg2LjA4VjcuNDAzYS44NzUuODc1IDAgMCAwLS44NzUtLjg3NWgtNi4wOFptOC4yMDUgNi45NDlWNy40MDNhMi4xMjUgMi4xMjUgMCAwIDAtMi4xMjUtMi4xMjVoLTYuMDh2LS45MDJjMC0uNDgzLjM5Mi0uODc1Ljg3NS0uODc1aDguMjI2Yy40ODMgMCAuODc1LjM5Mi44NzUuODc1djguMjI2YS44NzUuODc1IDAgMCAxLS44NzUuODc1aC0uODk2Wm0tNy4wOC0zLjQ3NmMwLS4zNDUuMjgtLjYyNS42MjQtLjYyNWgxLjEwMlY4LjI3MmEuNjI1LjYyNSAwIDEgMSAxLjI1IDB2MS4xMDRoMS4xMDRhLjYyNS42MjUgMCAxIDEgMCAxLjI1aC0xLjEwNHYxLjEwMmEuNjI1LjYyNSAwIDEgMS0xLjI1IDB2LTEuMTAySDguMjcyQS42MjUuNjI1IDAgMCAxIDcuNjQ3IDEwWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const CombineEvents = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-combine-events',
        'staticon-CombineEvents',
        className
      ),
      ...props,
    })
);
CombineEvents.displayName = 'CombineEvents'

export default CombineEvents;
