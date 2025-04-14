
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M2.501 15.375c0 1.174.952 2.125 2.125 2.125h10.747a2.125 2.125 0 0 0 2.125-2.125V4.626a2.125 2.125 0 0 0-2.125-2.125H4.626a2.125 2.125 0 0 0-2.125 2.125v10.75Zm2.125.875a.875.875 0 0 1-.875-.875V4.626c0-.483.392-.875.875-.875h10.747c.484 0 .875.392.875.875v10.75a.875.875 0 0 1-.875.874H4.626Zm9.286-10.785c.346 0 .625.28.625.625v7.82a.625.625 0 0 1-1.25 0V6.09c0-.346.28-.625.625-.625Zm-5.216 2.31c.345 0 .625.28.625.626v5.509a.625.625 0 1 1-1.25 0V8.4c0-.344.28-.624.625-.624Zm-2.608 3.251c.345 0 .625.28.625.625v2.26a.625.625 0 1 1-1.25 0v-2.26c0-.345.28-.625.625-.625Zm5.84-1.464a.625.625 0 1 0-1.25 0v4.348a.625.625 0 1 0 1.25 0V9.562Z","clip-rule":"evenodd"}]]

/**
 * @component @name Results
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMi41MDEgMTUuMzc1YzAgMS4xNzQuOTUyIDIuMTI1IDIuMTI1IDIuMTI1aDEwLjc0N2EyLjEyNSAyLjEyNSAwIDAgMCAyLjEyNS0yLjEyNVY0LjYyNmEyLjEyNSAyLjEyNSAwIDAgMC0yLjEyNS0yLjEyNUg0LjYyNmEyLjEyNSAyLjEyNSAwIDAgMC0yLjEyNSAyLjEyNXYxMC43NVptMi4xMjUuODc1YS44NzUuODc1IDAgMCAxLS44NzUtLjg3NVY0LjYyNmMwLS40ODMuMzkyLS44NzUuODc1LS44NzVoMTAuNzQ3Yy40ODQgMCAuODc1LjM5Mi44NzUuODc1djEwLjc1YS44NzUuODc1IDAgMCAxLS44NzUuODc0SDQuNjI2Wm05LjI4Ni0xMC43ODVjLjM0NiAwIC42MjUuMjguNjI1LjYyNXY3LjgyYS42MjUuNjI1IDAgMCAxLTEuMjUgMFY2LjA5YzAtLjM0Ni4yOC0uNjI1LjYyNS0uNjI1Wm0tNS4yMTYgMi4zMWMuMzQ1IDAgLjYyNS4yOC42MjUuNjI2djUuNTA5YS42MjUuNjI1IDAgMSAxLTEuMjUgMFY4LjRjMC0uMzQ0LjI4LS42MjQuNjI1LS42MjRabS0yLjYwOCAzLjI1MWMuMzQ1IDAgLjYyNS4yOC42MjUuNjI1djIuMjZhLjYyNS42MjUgMCAxIDEtMS4yNSAwdi0yLjI2YzAtLjM0NS4yOC0uNjI1LjYyNS0uNjI1Wm01Ljg0LTEuNDY0YS42MjUuNjI1IDAgMSAwLTEuMjUgMHY0LjM0OGEuNjI1LjYyNSAwIDEgMCAxLjI1IDBWOS41NjJaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Results = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-results',
        'staticon-Results',
        className
      ),
      ...props,
    })
);
Results.displayName = 'Results'

export default Results;
