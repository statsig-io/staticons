
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M3.248 7.043v2.962c0 .483.392.875.875.875h2.66V6.168h-2.66a.875.875 0 0 0-.875.875Zm4.786-.89v4.732a6.624 6.624 0 0 1 2.66.668l3.288 1.606c.083.04.18-.02.18-.112V4.001a.125.125 0 0 0-.18-.113l-3.08 1.506a7.625 7.625 0 0 1-2.868.759Zm-6.036.89v2.962c0 1.1.837 2.005 1.908 2.114.265 1.679.862 3.191 1.672 4.676.198.363.578.581.983.581h2.464a.877.877 0 0 0 .775-1.285c-.729-1.39-1.35-2.776-1.637-3.948a5.38 5.38 0 0 1 1.982.533l3.288 1.606a1.375 1.375 0 0 0 1.979-1.235v-1.55a3.001 3.001 0 0 0 0-5.946V4a1.375 1.375 0 0 0-1.979-1.236l-3.08 1.506a6.375 6.375 0 0 1-2.799.647H4.123a2.125 2.125 0 0 0-2.125 2.125Zm13.414-.221v3.404a1.751 1.751 0 0 0 0-3.404Zm-8.775 9.304c-.705-1.306-1.214-2.598-1.461-3.996h1.703c.258 1.248.858 2.655 1.533 3.996H6.637Z","clip-rule":"evenodd"}]]

/**
 * @component @name Announcement
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMy4yNDggNy4wNDN2Mi45NjJjMCAuNDgzLjM5Mi44NzUuODc1Ljg3NWgyLjY2VjYuMTY4aC0yLjY2YS44NzUuODc1IDAgMCAwLS44NzUuODc1Wm00Ljc4Ni0uODl2NC43MzJhNi42MjQgNi42MjQgMCAwIDEgMi42Ni42NjhsMy4yODggMS42MDZjLjA4My4wNC4xOC0uMDIuMTgtLjExMlY0LjAwMWEuMTI1LjEyNSAwIDAgMC0uMTgtLjExM2wtMy4wOCAxLjUwNmE3LjYyNSA3LjYyNSAwIDAgMS0yLjg2OC43NTlabS02LjAzNi44OXYyLjk2MmMwIDEuMS44MzcgMi4wMDUgMS45MDggMi4xMTQuMjY1IDEuNjc5Ljg2MiAzLjE5MSAxLjY3MiA0LjY3Ni4xOTguMzYzLjU3OC41ODEuOTgzLjU4MWgyLjQ2NGEuODc3Ljg3NyAwIDAgMCAuNzc1LTEuMjg1Yy0uNzI5LTEuMzktMS4zNS0yLjc3Ni0xLjYzNy0zLjk0OGE1LjM4IDUuMzggMCAwIDEgMS45ODIuNTMzbDMuMjg4IDEuNjA2YTEuMzc1IDEuMzc1IDAgMCAwIDEuOTc5LTEuMjM1di0xLjU1YTMuMDAxIDMuMDAxIDAgMCAwIDAtNS45NDZWNGExLjM3NSAxLjM3NSAwIDAgMC0xLjk3OS0xLjIzNmwtMy4wOCAxLjUwNmE2LjM3NSA2LjM3NSAwIDAgMS0yLjc5OS42NDdINC4xMjNhMi4xMjUgMi4xMjUgMCAwIDAtMi4xMjUgMi4xMjVabTEzLjQxNC0uMjIxdjMuNDA0YTEuNzUxIDEuNzUxIDAgMCAwIDAtMy40MDRabS04Ljc3NSA5LjMwNGMtLjcwNS0xLjMwNi0xLjIxNC0yLjU5OC0xLjQ2MS0zLjk5NmgxLjcwM2MuMjU4IDEuMjQ4Ljg1OCAyLjY1NSAxLjUzMyAzLjk5Nkg2LjYzN1oiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Announcement = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-announcement',
        'staticon-Announcement',
        className
      ),
      ...props,
    })
);
Announcement.displayName = 'Announcement'

export default Announcement;
