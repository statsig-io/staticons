
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M13.516 7.42a3.703 3.703 0 1 1 .544 1.418l-3.674 2.12a3.706 3.706 0 0 1-.001 2.091l3.674 2.121a3.703 3.703 0 1 1-.543 1.419l-3.838-2.216a3.704 3.704 0 1 1 .001-4.738l3.837-2.216Zm1.454-.59a2.203 2.203 0 1 0 4.406 0 2.203 2.203 0 0 0-4.406 0Zm-8.14 7.377a2.204 2.204 0 1 1 0-4.408 2.204 2.204 0 0 1 0 4.409Zm10.343 5.171a2.203 2.203 0 1 1 0-4.407 2.203 2.203 0 0 1 0 4.407Z","clip-rule":"evenodd"}]]

/**
 * @component @name Share
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTMuNTE2IDcuNDJhMy43MDMgMy43MDMgMCAxIDEgLjU0NCAxLjQxOGwtMy42NzQgMi4xMmEzLjcwNiAzLjcwNiAwIDAgMS0uMDAxIDIuMDkxbDMuNjc0IDIuMTIxYTMuNzAzIDMuNzAzIDAgMSAxLS41NDMgMS40MTlsLTMuODM4LTIuMjE2YTMuNzA0IDMuNzA0IDAgMSAxIC4wMDEtNC43MzhsMy44MzctMi4yMTZabTEuNDU0LS41OWEyLjIwMyAyLjIwMyAwIDEgMCA0LjQwNiAwIDIuMjAzIDIuMjAzIDAgMCAwLTQuNDA2IDBabS04LjE0IDcuMzc3YTIuMjA0IDIuMjA0IDAgMSAxIDAtNC40MDggMi4yMDQgMi4yMDQgMCAwIDEgMCA0LjQwOVptMTAuMzQzIDUuMTcxYTIuMjAzIDIuMjAzIDAgMSAxIDAtNC40MDcgMi4yMDMgMi4yMDMgMCAwIDEgMCA0LjQwN1oiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Share = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-share',
        'staticon-Share',
        className
      ),
      ...props,
    })
);
Share.displayName = 'Share'

export default Share;
