
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M9.042.829a1.826 1.826 0 0 0-2.085 0c-.945.662-2.468 1.508-4.057 1.759-.797.126-1.524.793-1.524 1.71v3.094c0 2.619 1.332 4.643 2.77 5.99.72.676 1.48 1.194 2.142 1.546.331.176.645.315.923.41.267.092.544.16.788.16s.52-.068.787-.16c.279-.095.592-.234.923-.41.663-.352 1.422-.87 2.143-1.546 1.438-1.347 2.77-3.371 2.77-5.99V4.286c0-.915-.732-1.573-1.522-1.698-1.59-.251-3.113-1.097-4.058-1.76ZM7.675 1.852a.577.577 0 0 1 .65 0c1.018.715 2.724 1.677 4.58 1.97.3.048.468.275.468.464v3.106c0 2.166-1.099 3.882-2.376 5.078a8.966 8.966 0 0 1-1.875 1.355 5.285 5.285 0 0 1-.742.331c-.217.075-.34.091-.381.091-.04 0-.165-.016-.381-.09a5.27 5.27 0 0 1-.743-.332 8.961 8.961 0 0 1-1.874-1.355c-1.277-1.196-2.375-2.912-2.375-5.078V4.297c0-.2.175-.428.469-.475 1.855-.293 3.56-1.255 4.58-1.97Zm1.779 5.764a1.454 1.454 0 1 1-2.908 0 1.454 1.454 0 0 1 2.908 0Zm1.25 0a2.704 2.704 0 1 1-5.408 0 2.704 2.704 0 0 1 5.408 0Z","clip-rule":"evenodd"}]]

/**
 * @component @name SafeguardGate
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOS4wNDIuODI5YTEuODI2IDEuODI2IDAgMCAwLTIuMDg1IDBjLS45NDUuNjYyLTIuNDY4IDEuNTA4LTQuMDU3IDEuNzU5LS43OTcuMTI2LTEuNTI0Ljc5My0xLjUyNCAxLjcxdjMuMDk0YzAgMi42MTkgMS4zMzIgNC42NDMgMi43NyA1Ljk5LjcyLjY3NiAxLjQ4IDEuMTk0IDIuMTQyIDEuNTQ2LjMzMS4xNzYuNjQ1LjMxNS45MjMuNDEuMjY3LjA5Mi41NDQuMTYuNzg4LjE2cy41Mi0uMDY4Ljc4Ny0uMTZjLjI3OS0uMDk1LjU5Mi0uMjM0LjkyMy0uNDEuNjYzLS4zNTIgMS40MjItLjg3IDIuMTQzLTEuNTQ2IDEuNDM4LTEuMzQ3IDIuNzctMy4zNzEgMi43Ny01Ljk5VjQuMjg2YzAtLjkxNS0uNzMyLTEuNTczLTEuNTIyLTEuNjk4LTEuNTktLjI1MS0zLjExMy0xLjA5Ny00LjA1OC0xLjc2Wk03LjY3NSAxLjg1MmEuNTc3LjU3NyAwIDAgMSAuNjUgMGMxLjAxOC43MTUgMi43MjQgMS42NzcgNC41OCAxLjk3LjMuMDQ4LjQ2OC4yNzUuNDY4LjQ2NHYzLjEwNmMwIDIuMTY2LTEuMDk5IDMuODgyLTIuMzc2IDUuMDc4YTguOTY2IDguOTY2IDAgMCAxLTEuODc1IDEuMzU1IDUuMjg1IDUuMjg1IDAgMCAxLS43NDIuMzMxYy0uMjE3LjA3NS0uMzQuMDkxLS4zODEuMDkxLS4wNCAwLS4xNjUtLjAxNi0uMzgxLS4wOWE1LjI3IDUuMjcgMCAwIDEtLjc0My0uMzMyIDguOTYxIDguOTYxIDAgMCAxLTEuODc0LTEuMzU1Yy0xLjI3Ny0xLjE5Ni0yLjM3NS0yLjkxMi0yLjM3NS01LjA3OFY0LjI5N2MwLS4yLjE3NS0uNDI4LjQ2OS0uNDc1IDEuODU1LS4yOTMgMy41Ni0xLjI1NSA0LjU4LTEuOTdabTEuNzc5IDUuNzY0YTEuNDU0IDEuNDU0IDAgMSAxLTIuOTA4IDAgMS40NTQgMS40NTQgMCAwIDEgMi45MDggMFptMS4yNSAwYTIuNzA0IDIuNzA0IDAgMSAxLTUuNDA4IDAgMi43MDQgMi43MDQgMCAwIDEgNS40MDggMFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const SafeguardGate = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-safeguard-gate',
        'staticon-SafeguardGate',
        className
      ),
      ...props,
    })
);
SafeguardGate.displayName = 'SafeguardGate'

export default SafeguardGate;
