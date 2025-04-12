
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M6.57 15.024a1.625 1.625 0 0 1-2.299 0L.977 11.73a1.625 1.625 0 0 1 0-2.299L4.23 6.177l.005-.005.006-.006L6.178 4.23l.006-.005.005-.006L9.431.977a1.625 1.625 0 0 1 2.299 0l3.294 3.294a1.625 1.625 0 0 1 0 2.298l-8.455 8.455Zm-1.008-8.41L6.626 5.55 7.98 6.906a.625.625 0 0 0 .884-.884L7.509 4.667l1.063-1.063 1.355 1.355a.625.625 0 0 0 .884-.884L9.456 2.72l.86-.86a.375.375 0 0 1 .53 0l3.294 3.295a.375.375 0 0 1 0 .53L5.685 14.14a.375.375 0 0 1-.53 0l-3.294-3.294a.375.375 0 0 1 0-.53l.871-.872 1.356 1.355a.625.625 0 0 0 .884-.884L3.616 8.56l1.062-1.062 1.356 1.355a.625.625 0 0 0 .883-.884L5.562 6.614Z","clip-rule":"evenodd"}]]

/**
 * @component @name Metrics
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNi41NyAxNS4wMjRhMS42MjUgMS42MjUgMCAwIDEtMi4yOTkgMEwuOTc3IDExLjczYTEuNjI1IDEuNjI1IDAgMCAxIDAtMi4yOTlMNC4yMyA2LjE3N2wuMDA1LS4wMDUuMDA2LS4wMDZMNi4xNzggNC4yM2wuMDA2LS4wMDUuMDA1LS4wMDZMOS40MzEuOTc3YTEuNjI1IDEuNjI1IDAgMCAxIDIuMjk5IDBsMy4yOTQgMy4yOTRhMS42MjUgMS42MjUgMCAwIDEgMCAyLjI5OGwtOC40NTUgOC40NTVabS0xLjAwOC04LjQxTDYuNjI2IDUuNTUgNy45OCA2LjkwNmEuNjI1LjYyNSAwIDAgMCAuODg0LS44ODRMNy41MDkgNC42NjdsMS4wNjMtMS4wNjMgMS4zNTUgMS4zNTVhLjYyNS42MjUgMCAwIDAgLjg4NC0uODg0TDkuNDU2IDIuNzJsLjg2LS44NmEuMzc1LjM3NSAwIDAgMSAuNTMgMGwzLjI5NCAzLjI5NWEuMzc1LjM3NSAwIDAgMSAwIC41M0w1LjY4NSAxNC4xNGEuMzc1LjM3NSAwIDAgMS0uNTMgMGwtMy4yOTQtMy4yOTRhLjM3NS4zNzUgMCAwIDEgMC0uNTNsLjg3MS0uODcyIDEuMzU2IDEuMzU1YS42MjUuNjI1IDAgMCAwIC44ODQtLjg4NEwzLjYxNiA4LjU2bDEuMDYyLTEuMDYyIDEuMzU2IDEuMzU1YS42MjUuNjI1IDAgMCAwIC44ODMtLjg4NEw1LjU2MiA2LjYxNFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
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
