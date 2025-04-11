
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M12.75 7.043a.75.75 0 0 1-1.5 0V3.502a.75.75 0 0 1 1.5 0v3.541Zm0 13.454a.75.75 0 0 1-1.5 0v-3.541a.75.75 0 0 1 1.5 0v3.541ZM2.752 12c0 .415.336.75.75.75h3.541a.75.75 0 0 0 0-1.5H3.502a.75.75 0 0 0-.75.75Zm14.204.75a.75.75 0 0 1 0-1.5h3.542a.75.75 0 1 1 0 1.5h-3.542ZM5.46 18.54a.75.75 0 0 0 1.061 0l2.504-2.504a.75.75 0 0 0-1.06-1.061L5.46 17.478a.75.75 0 0 0 0 1.06Zm10.575-9.515a.75.75 0 1 1-1.06-1.06l2.503-2.505a.75.75 0 0 1 1.06 1.061l-2.503 2.504ZM5.46 5.461a.75.75 0 0 0 0 1.06l2.505 2.505a.75.75 0 1 0 1.06-1.06L6.521 5.46a.75.75 0 0 0-1.06 0Zm9.514 10.573a.75.75 0 1 1 1.06-1.06l2.505 2.504a.75.75 0 1 1-1.06 1.06l-2.505-2.504Z","clip-rule":"evenodd"}]]

/**
 * @component @name Status
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTIuNzUgNy4wNDNhLjc1Ljc1IDAgMCAxLTEuNSAwVjMuNTAyYS43NS43NSAwIDAgMSAxLjUgMHYzLjU0MVptMCAxMy40NTRhLjc1Ljc1IDAgMCAxLTEuNSAwdi0zLjU0MWEuNzUuNzUgMCAwIDEgMS41IDB2My41NDFaTTIuNzUyIDEyYzAgLjQxNS4zMzYuNzUuNzUuNzVoMy41NDFhLjc1Ljc1IDAgMCAwIDAtMS41SDMuNTAyYS43NS43NSAwIDAgMC0uNzUuNzVabTE0LjIwNC43NWEuNzUuNzUgMCAwIDEgMC0xLjVoMy41NDJhLjc1Ljc1IDAgMSAxIDAgMS41aC0zLjU0MlpNNS40NiAxOC41NGEuNzUuNzUgMCAwIDAgMS4wNjEgMGwyLjUwNC0yLjUwNGEuNzUuNzUgMCAwIDAtMS4wNi0xLjA2MUw1LjQ2IDE3LjQ3OGEuNzUuNzUgMCAwIDAgMCAxLjA2Wm0xMC41NzUtOS41MTVhLjc1Ljc1IDAgMSAxLTEuMDYtMS4wNmwyLjUwMy0yLjUwNWEuNzUuNzUgMCAwIDEgMS4wNiAxLjA2MWwtMi41MDMgMi41MDRaTTUuNDYgNS40NjFhLjc1Ljc1IDAgMCAwIDAgMS4wNmwyLjUwNSAyLjUwNWEuNzUuNzUgMCAxIDAgMS4wNi0xLjA2TDYuNTIxIDUuNDZhLjc1Ljc1IDAgMCAwLTEuMDYgMFptOS41MTQgMTAuNTczYS43NS43NSAwIDEgMSAxLjA2LTEuMDZsMi41MDUgMi41MDRhLjc1Ljc1IDAgMSAxLTEuMDYgMS4wNmwtMi41MDUtMi41MDRaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Status = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-status',
        'staticon-Status',
        className
      ),
      ...props,
    })
);
Status.displayName = 'Status'

export default Status;
