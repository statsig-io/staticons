
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M4.75 3.634a.75.75 0 0 0 0 1.502h.366v1.212c0 1.888.79 3.69 2.177 4.97l.15.136a.751.751 0 0 1 0 1.105l-.158.145a6.758 6.758 0 0 0-2.178 4.947l-.004 1.232H4.75a.75.75 0 0 0 0 1.501h14.5a.75.75 0 0 0 0-1.5h-.34l-.003-1.233a6.758 6.758 0 0 0-2.178-4.947l-.157-.145a.751.751 0 0 1 0-1.105l.148-.137a6.758 6.758 0 0 0 2.178-4.97v-1.21h.352a.75.75 0 0 0 0-1.502H4.75Zm12.66 15.25H6.604l.004-1.228a5.256 5.256 0 0 1 1.694-3.848l.157-.145a2.253 2.253 0 0 0 0-3.313l-.149-.137a5.256 5.256 0 0 1-1.693-3.865V5.136h10.782v1.212c0 1.468-.614 2.87-1.694 3.865l-.149.137a2.253 2.253 0 0 0 0 3.313l.158.145a5.256 5.256 0 0 1 1.694 3.848l.004 1.227Zm-6.021-8.327L9.926 9.44A6.21 6.21 0 0 1 8.32 7.61a.69.69 0 0 1 .597-1.035h6.167a.69.69 0 0 1 .596 1.034 6.198 6.198 0 0 1-1.61 1.83l-1.468 1.12a1 1 0 0 1-1.213 0Z","clip-rule":"evenodd"}]]

/**
 * @component @name Waiting
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNC43NSAzLjYzNGEuNzUuNzUgMCAwIDAgMCAxLjUwMmguMzY2djEuMjEyYzAgMS44ODguNzkgMy42OSAyLjE3NyA0Ljk3bC4xNS4xMzZhLjc1MS43NTEgMCAwIDEgMCAxLjEwNWwtLjE1OC4xNDVhNi43NTggNi43NTggMCAwIDAtMi4xNzggNC45NDdsLS4wMDQgMS4yMzJINC43NWEuNzUuNzUgMCAwIDAgMCAxLjUwMWgxNC41YS43NS43NSAwIDAgMCAwLTEuNWgtLjM0bC0uMDAzLTEuMjMzYTYuNzU4IDYuNzU4IDAgMCAwLTIuMTc4LTQuOTQ3bC0uMTU3LS4xNDVhLjc1MS43NTEgMCAwIDEgMC0xLjEwNWwuMTQ4LS4xMzdhNi43NTggNi43NTggMCAwIDAgMi4xNzgtNC45N3YtMS4yMWguMzUyYS43NS43NSAwIDAgMCAwLTEuNTAySDQuNzVabTEyLjY2IDE1LjI1SDYuNjA0bC4wMDQtMS4yMjhhNS4yNTYgNS4yNTYgMCAwIDEgMS42OTQtMy44NDhsLjE1Ny0uMTQ1YTIuMjUzIDIuMjUzIDAgMCAwIDAtMy4zMTNsLS4xNDktLjEzN2E1LjI1NiA1LjI1NiAwIDAgMS0xLjY5My0zLjg2NVY1LjEzNmgxMC43ODJ2MS4yMTJjMCAxLjQ2OC0uNjE0IDIuODctMS42OTQgMy44NjVsLS4xNDkuMTM3YTIuMjUzIDIuMjUzIDAgMCAwIDAgMy4zMTNsLjE1OC4xNDVhNS4yNTYgNS4yNTYgMCAwIDEgMS42OTQgMy44NDhsLjAwNCAxLjIyN1ptLTYuMDIxLTguMzI3TDkuOTI2IDkuNDRBNi4yMSA2LjIxIDAgMCAxIDguMzIgNy42MWEuNjkuNjkgMCAwIDEgLjU5Ny0xLjAzNWg2LjE2N2EuNjkuNjkgMCAwIDEgLjU5NiAxLjAzNCA2LjE5OCA2LjE5OCAwIDAgMS0xLjYxIDEuODNsLTEuNDY4IDEuMTJhMSAxIDAgMCAxLTEuMjEzIDBaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Waiting = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-waiting',
        'staticon-Waiting',
        className
      ),
      ...props,
    })
);
Waiting.displayName = 'Waiting'

export default Waiting;
