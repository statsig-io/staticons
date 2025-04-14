
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M13.3 5.294A3.3 3.3 0 0 0 10 2a3.299 3.299 0 0 0-3.3 3.295 3.3 3.3 0 0 0 2.69 3.24v1.708l-3.662.002a2.125 2.125 0 0 0-2.124 2.125v1.284A2.218 2.218 0 0 0 4.216 18a2.217 2.217 0 0 0 .638-4.34v-1.293c0-.483.391-.875.874-.875l3.662-.001v2.16A2.218 2.218 0 0 0 10 18a2.217 2.217 0 0 0 .64-4.34v-2.17h3.66c.484 0 .876.393.876.876v1.284a2.218 2.218 0 0 0 .608 4.35 2.217 2.217 0 0 0 .642-4.34v-1.294a2.125 2.125 0 0 0-2.125-2.125H10.64V8.528a3.3 3.3 0 0 0 2.66-3.234ZM10 3.25a2.05 2.05 0 0 1 2.05 2.045 2.05 2.05 0 0 1-4.1 0A2.05 2.05 0 0 1 10 3.25Zm0 11.568a.967.967 0 1 1-.002 1.934.967.967 0 0 1 .001-1.934Zm-4.818.967a.967.967 0 1 0-1.934 0 .967.967 0 0 0 1.934 0Zm10.602-.967a.967.967 0 1 1-.001 1.934.967.967 0 0 1 0-1.934Z","clip-rule":"evenodd"}]]

/**
 * @component @name Hierarchy
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTMuMyA1LjI5NEEzLjMgMy4zIDAgMCAwIDEwIDJhMy4yOTkgMy4yOTkgMCAwIDAtMy4zIDMuMjk1IDMuMyAzLjMgMCAwIDAgMi42OSAzLjI0djEuNzA4bC0zLjY2Mi4wMDJhMi4xMjUgMi4xMjUgMCAwIDAtMi4xMjQgMi4xMjV2MS4yODRBMi4yMTggMi4yMTggMCAwIDAgNC4yMTYgMThhMi4yMTcgMi4yMTcgMCAwIDAgLjYzOC00LjM0di0xLjI5M2MwLS40ODMuMzkxLS44NzUuODc0LS44NzVsMy42NjItLjAwMXYyLjE2QTIuMjE4IDIuMjE4IDAgMCAwIDEwIDE4YTIuMjE3IDIuMjE3IDAgMCAwIC42NC00LjM0di0yLjE3aDMuNjZjLjQ4NCAwIC44NzYuMzkzLjg3Ni44NzZ2MS4yODRhMi4yMTggMi4yMTggMCAwIDAgLjYwOCA0LjM1IDIuMjE3IDIuMjE3IDAgMCAwIC42NDItNC4zNHYtMS4yOTRhMi4xMjUgMi4xMjUgMCAwIDAtMi4xMjUtMi4xMjVIMTAuNjRWOC41MjhhMy4zIDMuMyAwIDAgMCAyLjY2LTMuMjM0Wk0xMCAzLjI1YTIuMDUgMi4wNSAwIDAgMSAyLjA1IDIuMDQ1IDIuMDUgMi4wNSAwIDAgMS00LjEgMEEyLjA1IDIuMDUgMCAwIDEgMTAgMy4yNVptMCAxMS41NjhhLjk2Ny45NjcgMCAxIDEtLjAwMiAxLjkzNC45NjcuOTY3IDAgMCAxIC4wMDEtMS45MzRabS00LjgxOC45NjdhLjk2Ny45NjcgMCAxIDAtMS45MzQgMCAuOTY3Ljk2NyAwIDAgMCAxLjkzNCAwWm0xMC42MDItLjk2N2EuOTY3Ljk2NyAwIDEgMS0uMDAxIDEuOTM0Ljk2Ny45NjcgMCAwIDEgMC0xLjkzNFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Hierarchy = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-hierarchy',
        'staticon-Hierarchy',
        className
      ),
      ...props,
    })
);
Hierarchy.displayName = 'Hierarchy'

export default Hierarchy;
