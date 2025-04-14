
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M9.848 2.689c-.354.367-.801.865-.88 1.456-.064.468.12.877.406 1.123v1.03H7.239a2.125 2.125 0 0 0-2.125 2.124v2.565h-.108a2.125 2.125 0 0 0-2.125 2.125v3.012h-.004a.625.625 0 0 0 0 1.25h14.245a.625.625 0 1 0 0-1.25h-.005v-3.012a2.125 2.125 0 0 0-2.125-2.125h-.105V8.422a2.125 2.125 0 0 0-2.125-2.125h-2.138v-1.03c.285-.246.47-.654.406-1.122-.079-.59-.53-1.09-.88-1.456a.21.21 0 0 0-.302 0Zm6.02 13.435H4.13v-3.012c0-.483.392-.875.875-.875h9.986c.484 0 .875.392.875.875v3.012ZM9.96 7.547a.629.629 0 0 0 .078 0h2.724c.483 0 .875.392.875.875v2.565H6.364V8.422c0-.483.391-.875.875-.875H9.96Z","clip-rule":"evenodd"}]]

/**
 * @component @name FilterToFirstTime
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOS44NDggMi42ODljLS4zNTQuMzY3LS44MDEuODY1LS44OCAxLjQ1Ni0uMDY0LjQ2OC4xMi44NzcuNDA2IDEuMTIzdjEuMDNINy4yMzlhMi4xMjUgMi4xMjUgMCAwIDAtMi4xMjUgMi4xMjR2Mi41NjVoLS4xMDhhMi4xMjUgMi4xMjUgMCAwIDAtMi4xMjUgMi4xMjV2My4wMTJoLS4wMDRhLjYyNS42MjUgMCAwIDAgMCAxLjI1aDE0LjI0NWEuNjI1LjYyNSAwIDEgMCAwLTEuMjVoLS4wMDV2LTMuMDEyYTIuMTI1IDIuMTI1IDAgMCAwLTIuMTI1LTIuMTI1aC0uMTA1VjguNDIyYTIuMTI1IDIuMTI1IDAgMCAwLTIuMTI1LTIuMTI1aC0yLjEzOHYtMS4wM2MuMjg1LS4yNDYuNDctLjY1NC40MDYtMS4xMjItLjA3OS0uNTktLjUzLTEuMDktLjg4LTEuNDU2YS4yMS4yMSAwIDAgMC0uMzAyIDBabTYuMDIgMTMuNDM1SDQuMTN2LTMuMDEyYzAtLjQ4My4zOTItLjg3NS44NzUtLjg3NWg5Ljk4NmMuNDg0IDAgLjg3NS4zOTIuODc1Ljg3NXYzLjAxMlpNOS45NiA3LjU0N2EuNjI5LjYyOSAwIDAgMCAuMDc4IDBoMi43MjRjLjQ4MyAwIC44NzUuMzkyLjg3NS44NzV2Mi41NjVINi4zNjRWOC40MjJjMC0uNDgzLjM5MS0uODc1Ljg3NS0uODc1SDkuOTZaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const FilterToFirstTime = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-filter-to-first-time',
        'staticon-FilterToFirstTime',
        className
      ),
      ...props,
    })
);
FilterToFirstTime.displayName = 'FilterToFirstTime'

export default FilterToFirstTime;
