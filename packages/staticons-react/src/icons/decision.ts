
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M7.887 5.864a2.113 2.113 0 1 1 4.226 0 2.113 2.113 0 0 1-4.226 0ZM10 2.5a3.363 3.363 0 0 0-.625 6.667v1.88l-5.001 4.3v-1.074a.625.625 0 1 0-1.25 0v2.6c0 .345.28.625.625.625h2.6a.625.625 0 1 0 0-1.25H5.244L10 12.16l4.757 4.09H13.65a.625.625 0 1 0 0 1.25h2.602c.345 0 .625-.28.625-.625v-2.601a.625.625 0 1 0-1.25 0v1.075l-5.001-4.3v-1.88A3.364 3.364 0 0 0 10 2.501Z","clip-rule":"evenodd"}]]

/**
 * @component @name Decision
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNy44ODcgNS44NjRhMi4xMTMgMi4xMTMgMCAxIDEgNC4yMjYgMCAyLjExMyAyLjExMyAwIDAgMS00LjIyNiAwWk0xMCAyLjVhMy4zNjMgMy4zNjMgMCAwIDAtLjYyNSA2LjY2N3YxLjg4bC01LjAwMSA0LjN2LTEuMDc0YS42MjUuNjI1IDAgMSAwLTEuMjUgMHYyLjZjMCAuMzQ1LjI4LjYyNS42MjUuNjI1aDIuNmEuNjI1LjYyNSAwIDEgMCAwLTEuMjVINS4yNDRMMTAgMTIuMTZsNC43NTcgNC4wOUgxMy42NWEuNjI1LjYyNSAwIDEgMCAwIDEuMjVoMi42MDJjLjM0NSAwIC42MjUtLjI4LjYyNS0uNjI1di0yLjYwMWEuNjI1LjYyNSAwIDEgMC0xLjI1IDB2MS4wNzVsLTUuMDAxLTQuM3YtMS44OEEzLjM2NCAzLjM2NCAwIDAgMCAxMCAyLjUwMVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Decision = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-decision',
        'staticon-Decision',
        className
      ),
      ...props,
    })
);
Decision.displayName = 'Decision'

export default Decision;
