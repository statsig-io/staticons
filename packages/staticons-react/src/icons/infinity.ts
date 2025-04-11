
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M14.561 10.697 13.118 12l1.443 1.304c1.048.885 1.986 1.57 2.994 1.57 1.546 0 2.82-1.276 2.82-2.874s-1.274-2.874-2.82-2.874c-1.008 0-1.946.686-2.994 1.57ZM12 13.01l1.565 1.414.009.008.01.008c.984.833 2.33 1.934 3.97 1.934 2.397 0 4.32-1.97 4.32-4.375 0-2.405-1.923-4.374-4.32-4.374-1.64 0-2.986 1.1-3.97 1.933l-.01.008-.01.008L12 10.99l-1.565-1.414-.01-.008-.009-.008c-.985-.833-2.331-1.933-3.971-1.933-2.397 0-4.32 1.969-4.32 4.374 0 2.405 1.923 4.375 4.32 4.375 1.64 0 2.986-1.101 3.971-1.934l.01-.008.009-.008L12 13.01ZM10.88 12l-1.443 1.303c-1.047.885-1.986 1.57-2.993 1.57-1.547 0-2.82-1.276-2.82-2.874s1.273-2.874 2.82-2.874c1.007 0 1.946.686 2.993 1.57L10.881 12Z","clip-rule":"evenodd"}]]

/**
 * @component @name Infinity
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTQuNTYxIDEwLjY5NyAxMy4xMTggMTJsMS40NDMgMS4zMDRjMS4wNDguODg1IDEuOTg2IDEuNTcgMi45OTQgMS41NyAxLjU0NiAwIDIuODItMS4yNzYgMi44Mi0yLjg3NHMtMS4yNzQtMi44NzQtMi44Mi0yLjg3NGMtMS4wMDggMC0xLjk0Ni42ODYtMi45OTQgMS41N1pNMTIgMTMuMDFsMS41NjUgMS40MTQuMDA5LjAwOC4wMS4wMDhjLjk4NC44MzMgMi4zMyAxLjkzNCAzLjk3IDEuOTM0IDIuMzk3IDAgNC4zMi0xLjk3IDQuMzItNC4zNzUgMC0yLjQwNS0xLjkyMy00LjM3NC00LjMyLTQuMzc0LTEuNjQgMC0yLjk4NiAxLjEtMy45NyAxLjkzM2wtLjAxLjAwOC0uMDEuMDA4TDEyIDEwLjk5bC0xLjU2NS0xLjQxNC0uMDEtLjAwOC0uMDA5LS4wMDhjLS45ODUtLjgzMy0yLjMzMS0xLjkzMy0zLjk3MS0xLjkzMy0yLjM5NyAwLTQuMzIgMS45NjktNC4zMiA0LjM3NCAwIDIuNDA1IDEuOTIzIDQuMzc1IDQuMzIgNC4zNzUgMS42NCAwIDIuOTg2LTEuMTAxIDMuOTcxLTEuOTM0bC4wMS0uMDA4LjAwOS0uMDA4TDEyIDEzLjAxWk0xMC44OCAxMmwtMS40NDMgMS4zMDNjLTEuMDQ3Ljg4NS0xLjk4NiAxLjU3LTIuOTkzIDEuNTctMS41NDcgMC0yLjgyLTEuMjc2LTIuODItMi44NzRzMS4yNzMtMi44NzQgMi44Mi0yLjg3NGMxLjAwNyAwIDEuOTQ2LjY4NiAyLjk5MyAxLjU3TDEwLjg4MSAxMloiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Infinity = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-infinity',
        'staticon-Infinity',
        className
      ),
      ...props,
    })
);
Infinity.displayName = 'Infinity'

export default Infinity;
