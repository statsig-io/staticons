
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M4.672 3.471a.75.75 0 1 1 1.061 1.06L4.686 5.58h14.628l-1.047-1.047a.75.75 0 1 1 1.061-1.06L21.655 5.8a.75.75 0 0 1 0 1.06l-2.327 2.328a.75.75 0 0 1-1.06-1.06l1.046-1.048H4.686l1.047 1.048a.75.75 0 0 1-1.06 1.06L2.344 6.86a.75.75 0 0 1 0-1.061L4.672 3.47ZM7.806 19a1.75 1.75 0 0 1-1.75 1.75H4.253A1.75 1.75 0 0 1 2.503 19v-6.504a.75.75 0 0 1 1.5 0V19c0 .138.112.25.25.25h1.803a.25.25 0 0 0 .25-.25v-6.504a.75.75 0 0 1 1.5 0V19Zm5.094 1.75A1.75 1.75 0 0 0 14.65 19v-6.504a.75.75 0 0 0-1.5 0V19a.25.25 0 0 1-.25.25h-1.803a.25.25 0 0 1-.25-.25v-6.504a.75.75 0 0 0-1.5 0V19c0 .966.784 1.75 1.75 1.75H12.9Zm6.845 0a1.75 1.75 0 0 0 1.75-1.75v-6.504a.75.75 0 0 0-1.5 0V19a.25.25 0 0 1-.25.25h-1.803a.25.25 0 0 1-.25-.25v-6.504a.75.75 0 1 0-1.5 0V19c0 .966.783 1.75 1.75 1.75h1.803Z","clip-rule":"evenodd"}]]

/**
 * @component @name Buckets
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNC42NzIgMy40NzFhLjc1Ljc1IDAgMSAxIDEuMDYxIDEuMDZMNC42ODYgNS41OGgxNC42MjhsLTEuMDQ3LTEuMDQ3YS43NS43NSAwIDEgMSAxLjA2MS0xLjA2TDIxLjY1NSA1LjhhLjc1Ljc1IDAgMCAxIDAgMS4wNmwtMi4zMjcgMi4zMjhhLjc1Ljc1IDAgMCAxLTEuMDYtMS4wNmwxLjA0Ni0xLjA0OEg0LjY4NmwxLjA0NyAxLjA0OGEuNzUuNzUgMCAwIDEtMS4wNiAxLjA2TDIuMzQ0IDYuODZhLjc1Ljc1IDAgMCAxIDAtMS4wNjFMNC42NzIgMy40N1pNNy44MDYgMTlhMS43NSAxLjc1IDAgMCAxLTEuNzUgMS43NUg0LjI1M0ExLjc1IDEuNzUgMCAwIDEgMi41MDMgMTl2LTYuNTA0YS43NS43NSAwIDAgMSAxLjUgMFYxOWMwIC4xMzguMTEyLjI1LjI1LjI1aDEuODAzYS4yNS4yNSAwIDAgMCAuMjUtLjI1di02LjUwNGEuNzUuNzUgMCAwIDEgMS41IDBWMTlabTUuMDk0IDEuNzVBMS43NSAxLjc1IDAgMCAwIDE0LjY1IDE5di02LjUwNGEuNzUuNzUgMCAwIDAtMS41IDBWMTlhLjI1LjI1IDAgMCAxLS4yNS4yNWgtMS44MDNhLjI1LjI1IDAgMCAxLS4yNS0uMjV2LTYuNTA0YS43NS43NSAwIDAgMC0xLjUgMFYxOWMwIC45NjYuNzg0IDEuNzUgMS43NSAxLjc1SDEyLjlabTYuODQ1IDBhMS43NSAxLjc1IDAgMCAwIDEuNzUtMS43NXYtNi41MDRhLjc1Ljc1IDAgMCAwLTEuNSAwVjE5YS4yNS4yNSAwIDAgMS0uMjUuMjVoLTEuODAzYS4yNS4yNSAwIDAgMS0uMjUtLjI1di02LjUwNGEuNzUuNzUgMCAxIDAtMS41IDBWMTljMCAuOTY2Ljc4MyAxLjc1IDEuNzUgMS43NWgxLjgwM1oiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Buckets = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-buckets',
        'staticon-Buckets',
        className
      ),
      ...props,
    })
);
Buckets.displayName = 'Buckets'

export default Buckets;
