
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M14.906 8.079a.625.625 0 0 1 0 .884L11.15 12.72a1.625 1.625 0 0 1-2.298 0L5.094 8.963a.625.625 0 1 1 .884-.884l3.397 3.397V2.751a.625.625 0 1 1 1.25 0v8.725l3.397-3.397a.625.625 0 0 1 .884 0ZM4.85 16.129a.975.975 0 0 1-.975-.975v-4.157a.625.625 0 1 0-1.25 0v4.158c0 1.228.996 2.225 2.225 2.225h10.3a2.225 2.225 0 0 0 2.225-2.225v-4.158a.625.625 0 1 0-1.25 0v4.158a.975.975 0 0 1-.975.975H4.85Z","clip-rule":"evenodd"}]]

/**
 * @component @name Download
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTQuOTA2IDguMDc5YS42MjUuNjI1IDAgMCAxIDAgLjg4NEwxMS4xNSAxMi43MmExLjYyNSAxLjYyNSAwIDAgMS0yLjI5OCAwTDUuMDk0IDguOTYzYS42MjUuNjI1IDAgMSAxIC44ODQtLjg4NGwzLjM5NyAzLjM5N1YyLjc1MWEuNjI1LjYyNSAwIDEgMSAxLjI1IDB2OC43MjVsMy4zOTctMy4zOTdhLjYyNS42MjUgMCAwIDEgLjg4NCAwWk00Ljg1IDE2LjEyOWEuOTc1Ljk3NSAwIDAgMS0uOTc1LS45NzV2LTQuMTU3YS42MjUuNjI1IDAgMSAwLTEuMjUgMHY0LjE1OGMwIDEuMjI4Ljk5NiAyLjIyNSAyLjIyNSAyLjIyNWgxMC4zYTIuMjI1IDIuMjI1IDAgMCAwIDIuMjI1LTIuMjI1di00LjE1OGEuNjI1LjYyNSAwIDEgMC0xLjI1IDB2NC4xNThhLjk3NS45NzUgMCAwIDEtLjk3NS45NzVINC44NVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Download = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-download',
        'staticon-Download',
        className
      ),
      ...props,
    })
);
Download.displayName = 'Download'

export default Download;
