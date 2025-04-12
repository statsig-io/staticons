
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"m2.665 7.89.224-2.575A5 5 0 0 1 7.87.75h.299a5 5 0 0 1 4.98 4.566l.227 2.587c.017.204.085.4.196.571l.606.937c.292.45.447.974.447 1.51 0 1.024-.83 1.853-1.852 1.853h-1.71C10.806 14.2 9.511 15.251 8 15.251c-1.511 0-2.806-1.051-3.063-2.477H3.214a1.839 1.839 0 0 1-1.839-1.838c0-.545.161-1.078.464-1.53l.62-.932a1.25 1.25 0 0 0 .206-.585Zm1.245.108.225-2.574A3.75 3.75 0 0 1 7.87 2h.299a3.75 3.75 0 0 1 3.736 3.424l.225 2.588c.036.407.17.8.393 1.142l.606.936c.16.248.246.537.246.832 0 .332-.27.602-.602.602h-9.56a.589.589 0 0 1-.588-.588c0-.298.088-.59.253-.837l.621-.931a2.5 2.5 0 0 0 .411-1.17ZM8 14.001c-.85 0-1.538-.526-1.773-1.22h3.546C9.538 13.474 8.85 14 8 14Z","clip-rule":"evenodd"}]]

/**
 * @component @name Notification
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJtMi42NjUgNy44OS4yMjQtMi41NzVBNSA1IDAgMCAxIDcuODcuNzVoLjI5OWE1IDUgMCAwIDEgNC45OCA0LjU2NmwuMjI3IDIuNTg3Yy4wMTcuMjA0LjA4NS40LjE5Ni41NzFsLjYwNi45MzdjLjI5Mi40NS40NDcuOTc0LjQ0NyAxLjUxIDAgMS4wMjQtLjgzIDEuODUzLTEuODUyIDEuODUzaC0xLjcxQzEwLjgwNiAxNC4yIDkuNTExIDE1LjI1MSA4IDE1LjI1MWMtMS41MTEgMC0yLjgwNi0xLjA1MS0zLjA2My0yLjQ3N0gzLjIxNGExLjgzOSAxLjgzOSAwIDAgMS0xLjgzOS0xLjgzOGMwLS41NDUuMTYxLTEuMDc4LjQ2NC0xLjUzbC42Mi0uOTMyYTEuMjUgMS4yNSAwIDAgMCAuMjA2LS41ODVabTEuMjQ1LjEwOC4yMjUtMi41NzRBMy43NSAzLjc1IDAgMCAxIDcuODcgMmguMjk5YTMuNzUgMy43NSAwIDAgMSAzLjczNiAzLjQyNGwuMjI1IDIuNTg4Yy4wMzYuNDA3LjE3LjguMzkzIDEuMTQybC42MDYuOTM2Yy4xNi4yNDguMjQ2LjUzNy4yNDYuODMyIDAgLjMzMi0uMjcuNjAyLS42MDIuNjAyaC05LjU2YS41ODkuNTg5IDAgMCAxLS41ODgtLjU4OGMwLS4yOTguMDg4LS41OS4yNTMtLjgzN2wuNjIxLS45MzFhMi41IDIuNSAwIDAgMCAuNDExLTEuMTdaTTggMTQuMDAxYy0uODUgMC0xLjUzOC0uNTI2LTEuNzczLTEuMjJoMy41NDZDOS41MzggMTMuNDc0IDguODUgMTQgOCAxNFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Notification = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-notification',
        'staticon-Notification',
        className
      ),
      ...props,
    })
);
Notification.displayName = 'Notification'

export default Notification;
