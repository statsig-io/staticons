
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M8.532 17.45a1.874 1.874 0 0 1-2.65 0L2.55 14.119a1.874 1.874 0 0 1 0-2.65l1.289-1.29a.542.542 0 0 1 .031-.031l2.07-2.07a.638.638 0 0 1 .043-.043l2.07-2.07a.645.645 0 0 1 .032-.032l3.382-3.382a1.874 1.874 0 0 1 2.65 0l3.332 3.33a1.874 1.874 0 0 1 0 2.651L8.532 17.45ZM7.288 8.498l1.224-1.224 1.504 1.504a.625.625 0 1 0 .883-.884L9.396 6.391l1.224-1.224 1.504 1.504a.625.625 0 0 0 .883-.884l-1.504-1.504.849-.849a.625.625 0 0 1 .883 0l3.33 3.331a.625.625 0 0 1 0 .884L7.65 16.566a.625.625 0 0 1-.884 0l-3.33-3.33a.625.625 0 0 1 0-.884l.862-.863 1.504 1.503a.625.625 0 1 0 .883-.883l-1.503-1.504 1.224-1.223 1.503 1.503a.625.625 0 1 0 .883-.883L7.288 8.498Z","clip-rule":"evenodd"}]]

/**
 * @component @name Metrics
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOC41MzIgMTcuNDVhMS44NzQgMS44NzQgMCAwIDEtMi42NSAwTDIuNTUgMTQuMTE5YTEuODc0IDEuODc0IDAgMCAxIDAtMi42NWwxLjI4OS0xLjI5YS41NDIuNTQyIDAgMCAxIC4wMzEtLjAzMWwyLjA3LTIuMDdhLjYzOC42MzggMCAwIDEgLjA0My0uMDQzbDIuMDctMi4wN2EuNjQ1LjY0NSAwIDAgMSAuMDMyLS4wMzJsMy4zODItMy4zODJhMS44NzQgMS44NzQgMCAwIDEgMi42NSAwbDMuMzMyIDMuMzNhMS44NzQgMS44NzQgMCAwIDEgMCAyLjY1MUw4LjUzMiAxNy40NVpNNy4yODggOC40OThsMS4yMjQtMS4yMjQgMS41MDQgMS41MDRhLjYyNS42MjUgMCAxIDAgLjg4My0uODg0TDkuMzk2IDYuMzkxbDEuMjI0LTEuMjI0IDEuNTA0IDEuNTA0YS42MjUuNjI1IDAgMCAwIC44ODMtLjg4NGwtMS41MDQtMS41MDQuODQ5LS44NDlhLjYyNS42MjUgMCAwIDEgLjg4MyAwbDMuMzMgMy4zMzFhLjYyNS42MjUgMCAwIDEgMCAuODg0TDcuNjUgMTYuNTY2YS42MjUuNjI1IDAgMCAxLS44ODQgMGwtMy4zMy0zLjMzYS42MjUuNjI1IDAgMCAxIDAtLjg4NGwuODYyLS44NjMgMS41MDQgMS41MDNhLjYyNS42MjUgMCAxIDAgLjg4My0uODgzbC0xLjUwMy0xLjUwNCAxLjIyNC0xLjIyMyAxLjUwMyAxLjUwM2EuNjI1LjYyNSAwIDEgMCAuODgzLS44ODNMNy4yODggOC40OThaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Metrics = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-metrics',
        'staticon-Metrics',
        className
      ),
      ...props,
    })
);
Metrics.displayName = 'Metrics'

export default Metrics;
