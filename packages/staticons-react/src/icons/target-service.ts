
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M12.75 3.252a.75.75 0 0 0-1.5 0V4.61a7.43 7.43 0 0 0-6.639 6.639H3.248a.75.75 0 0 0 0 1.5h1.363a7.429 7.429 0 0 0 6.634 6.639v1.363a.75.75 0 1 0 1.5 0V19.39a7.429 7.429 0 0 0 6.644-6.635h1.359a.75.75 0 0 0 0-1.5H19.39a7.43 7.43 0 0 0-6.64-6.644V3.252ZM6.074 12a5.927 5.927 0 1 0 11.853 0 5.927 5.927 0 0 0-11.853 0ZM12 14.386a2.387 2.387 0 1 0 0-4.774 2.387 2.387 0 0 0 0 4.774Z","clip-rule":"evenodd"}]]

/**
 * @component @name TargetService
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTIuNzUgMy4yNTJhLjc1Ljc1IDAgMCAwLTEuNSAwVjQuNjFhNy40MyA3LjQzIDAgMCAwLTYuNjM5IDYuNjM5SDMuMjQ4YS43NS43NSAwIDAgMCAwIDEuNWgxLjM2M2E3LjQyOSA3LjQyOSAwIDAgMCA2LjYzNCA2LjYzOXYxLjM2M2EuNzUuNzUgMCAxIDAgMS41IDBWMTkuMzlhNy40MjkgNy40MjkgMCAwIDAgNi42NDQtNi42MzVoMS4zNTlhLjc1Ljc1IDAgMCAwIDAtMS41SDE5LjM5YTcuNDMgNy40MyAwIDAgMC02LjY0LTYuNjQ0VjMuMjUyWk02LjA3NCAxMmE1LjkyNyA1LjkyNyAwIDEgMCAxMS44NTMgMCA1LjkyNyA1LjkyNyAwIDAgMC0xMS44NTMgMFpNMTIgMTQuMzg2YTIuMzg3IDIuMzg3IDAgMSAwIDAtNC43NzQgMi4zODcgMi4zODcgMCAwIDAgMCA0Ljc3NFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const TargetService = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-target-service',
        'staticon-TargetService',
        className
      ),
      ...props,
    })
);
TargetService.displayName = 'TargetService'

export default TargetService;
