
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M3.321 1.319a.625.625 0 0 0-.884 0L.685 3.072a.625.625 0 0 0 0 .884L2.437 5.71a.625.625 0 1 0 .884-.884l-.686-.687h10.73l-.685.687a.625.625 0 0 0 .883.883l1.754-1.753a.625.625 0 0 0 0-.884L13.563 1.32a.625.625 0 0 0-.883.884l.686.686H2.635l.686-.686a.625.625 0 0 0 0-.884Zm1.532 12.67a.875.875 0 0 1-.875.876H1.59a.875.875 0 0 1-.875-.875V8.239a.625.625 0 0 1 1.25 0v5.376h1.637V8.239a.625.625 0 1 1 1.25 0v5.75Zm4.341.876a.875.875 0 0 0 .875-.875V8.239a.625.625 0 1 0-1.25 0v5.376H7.182V8.239a.625.625 0 1 0-1.25 0v5.75c0 .484.392.876.875.876h2.387Zm5.217 0a.875.875 0 0 0 .875-.875V8.239a.625.625 0 1 0-1.25 0v5.376h-1.637V8.239a.625.625 0 1 0-1.25 0v5.75c0 .484.392.876.875.876h2.387Z","clip-rule":"evenodd"}]]

/**
 * @component @name Buckets
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMy4zMjEgMS4zMTlhLjYyNS42MjUgMCAwIDAtLjg4NCAwTC42ODUgMy4wNzJhLjYyNS42MjUgMCAwIDAgMCAuODg0TDIuNDM3IDUuNzFhLjYyNS42MjUgMCAxIDAgLjg4NC0uODg0bC0uNjg2LS42ODdoMTAuNzNsLS42ODUuNjg3YS42MjUuNjI1IDAgMCAwIC44ODMuODgzbDEuNzU0LTEuNzUzYS42MjUuNjI1IDAgMCAwIDAtLjg4NEwxMy41NjMgMS4zMmEuNjI1LjYyNSAwIDAgMC0uODgzLjg4NGwuNjg2LjY4NkgyLjYzNWwuNjg2LS42ODZhLjYyNS42MjUgMCAwIDAgMC0uODg0Wm0xLjUzMiAxMi42N2EuODc1Ljg3NSAwIDAgMS0uODc1Ljg3NkgxLjU5YS44NzUuODc1IDAgMCAxLS44NzUtLjg3NVY4LjIzOWEuNjI1LjYyNSAwIDAgMSAxLjI1IDB2NS4zNzZoMS42MzdWOC4yMzlhLjYyNS42MjUgMCAxIDEgMS4yNSAwdjUuNzVabTQuMzQxLjg3NmEuODc1Ljg3NSAwIDAgMCAuODc1LS44NzVWOC4yMzlhLjYyNS42MjUgMCAxIDAtMS4yNSAwdjUuMzc2SDcuMTgyVjguMjM5YS42MjUuNjI1IDAgMSAwLTEuMjUgMHY1Ljc1YzAgLjQ4NC4zOTIuODc2Ljg3NS44NzZoMi4zODdabTUuMjE3IDBhLjg3NS44NzUgMCAwIDAgLjg3NS0uODc1VjguMjM5YS42MjUuNjI1IDAgMSAwLTEuMjUgMHY1LjM3NmgtMS42MzdWOC4yMzlhLjYyNS42MjUgMCAxIDAtMS4yNSAwdjUuNzVjMCAuNDg0LjM5Mi44NzYuODc1Ljg3NmgyLjM4N1oiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
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
