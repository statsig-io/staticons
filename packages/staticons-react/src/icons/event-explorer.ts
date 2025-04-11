
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M2.75 5.261a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H3.5a.75.75 0 0 1-.75-.75Zm.75 3.84a.75.75 0 0 1 0-1.5h4.771a.75.75 0 1 1 0 1.5H3.5Zm0 1.593a.75.75 0 0 0 0 1.5h3.622a.75.75 0 0 0 0-1.5H3.5Zm11.391-2.122a3.941 3.941 0 1 0 0 7.882 3.941 3.941 0 0 0 0-7.882Zm-5.441 3.94A5.441 5.441 0 1 1 18.7 16.4l2.33 2.331a.75.75 0 1 1-1.06 1.061l-2.491-2.49a5.441 5.441 0 0 1-8.03-4.788Z","clip-rule":"evenodd"}]]

/**
 * @component @name EventExplorer
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMi43NSA1LjI2MWEuNzUuNzUgMCAwIDEgLjc1LS43NUgxMmEuNzUuNzUgMCAwIDEgMCAxLjVIMy41YS43NS43NSAwIDAgMS0uNzUtLjc1Wm0uNzUgMy44NGEuNzUuNzUgMCAwIDEgMC0xLjVoNC43NzFhLjc1Ljc1IDAgMSAxIDAgMS41SDMuNVptMCAxLjU5M2EuNzUuNzUgMCAwIDAgMCAxLjVoMy42MjJhLjc1Ljc1IDAgMCAwIDAtMS41SDMuNVptMTEuMzkxLTIuMTIyYTMuOTQxIDMuOTQxIDAgMSAwIDAgNy44ODIgMy45NDEgMy45NDEgMCAwIDAgMC03Ljg4MlptLTUuNDQxIDMuOTRBNS40NDEgNS40NDEgMCAxIDEgMTguNyAxNi40bDIuMzMgMi4zMzFhLjc1Ljc1IDAgMSAxLTEuMDYgMS4wNjFsLTIuNDkxLTIuNDlhNS40NDEgNS40NDEgMCAwIDEtOC4wMy00Ljc4OFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const EventExplorer = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-event-explorer',
        'staticon-EventExplorer',
        className
      ),
      ...props,
    })
);
EventExplorer.displayName = 'EventExplorer'

export default EventExplorer;
