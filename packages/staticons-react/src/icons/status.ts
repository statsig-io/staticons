
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M10.626 5.7a.625.625 0 1 1-1.25 0V2.629a.625.625 0 1 1 1.25 0V5.7Zm0 11.675a.625.625 0 1 1-1.25 0v-3.073a.625.625 0 1 1 1.25 0v3.073ZM2.002 10c0 .346.28.625.625.625H5.7a.625.625 0 0 0 0-1.25H2.627a.625.625 0 0 0-.625.625Zm12.3.625a.625.625 0 0 1 0-1.25h3.073a.625.625 0 1 1 0 1.25h-3.073Zm-9.957 5.032c.244.244.64.244.884 0l2.173-2.173a.625.625 0 0 0-.884-.884l-2.173 2.173a.625.625 0 0 0 0 .884Zm9.139-8.255a.625.625 0 0 1-.884-.884l2.173-2.173a.625.625 0 0 1 .884.884l-2.173 2.173Zm-9.14-3.056a.625.625 0 0 0 0 .884l2.174 2.172a.625.625 0 0 0 .884-.884L5.229 4.347a.625.625 0 0 0-.884 0Zm8.256 9.138a.625.625 0 0 1 .884-.884l2.173 2.173a.625.625 0 0 1-.884.884L12.6 13.485Z","clip-rule":"evenodd"}]]

/**
 * @component @name Status
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTAuNjI2IDUuN2EuNjI1LjYyNSAwIDEgMS0xLjI1IDBWMi42MjlhLjYyNS42MjUgMCAxIDEgMS4yNSAwVjUuN1ptMCAxMS42NzVhLjYyNS42MjUgMCAxIDEtMS4yNSAwdi0zLjA3M2EuNjI1LjYyNSAwIDEgMSAxLjI1IDB2My4wNzNaTTIuMDAyIDEwYzAgLjM0Ni4yOC42MjUuNjI1LjYyNUg1LjdhLjYyNS42MjUgMCAwIDAgMC0xLjI1SDIuNjI3YS42MjUuNjI1IDAgMCAwLS42MjUuNjI1Wm0xMi4zLjYyNWEuNjI1LjYyNSAwIDAgMSAwLTEuMjVoMy4wNzNhLjYyNS42MjUgMCAxIDEgMCAxLjI1aC0zLjA3M1ptLTkuOTU3IDUuMDMyYy4yNDQuMjQ0LjY0LjI0NC44ODQgMGwyLjE3My0yLjE3M2EuNjI1LjYyNSAwIDAgMC0uODg0LS44ODRsLTIuMTczIDIuMTczYS42MjUuNjI1IDAgMCAwIDAgLjg4NFptOS4xMzktOC4yNTVhLjYyNS42MjUgMCAwIDEtLjg4NC0uODg0bDIuMTczLTIuMTczYS42MjUuNjI1IDAgMCAxIC44ODQuODg0bC0yLjE3MyAyLjE3M1ptLTkuMTQtMy4wNTZhLjYyNS42MjUgMCAwIDAgMCAuODg0bDIuMTc0IDIuMTcyYS42MjUuNjI1IDAgMCAwIC44ODQtLjg4NEw1LjIyOSA0LjM0N2EuNjI1LjYyNSAwIDAgMC0uODg0IDBabTguMjU2IDkuMTM4YS42MjUuNjI1IDAgMCAxIC44ODQtLjg4NGwyLjE3MyAyLjE3M2EuNjI1LjYyNSAwIDAgMS0uODg0Ljg4NEwxMi42IDEzLjQ4NVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
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
