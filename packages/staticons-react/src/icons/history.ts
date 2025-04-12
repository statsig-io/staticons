
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M8 2.25c-1.82 0-3.441.844-4.496 2.165H4.98a.625.625 0 1 1 0 1.25H2.185a.775.775 0 0 1-.775-.775V2.095a.625.625 0 1 1 1.25 0v1.38A7 7 0 1 1 1 8v-.22a.625.625 0 1 1 1.25.038V8A5.75 5.75 0 1 0 8 2.25Zm.618 2.557a.625.625 0 1 0-1.25 0v3.38c0 .274.176.507.421.591l2.819 1.417a.625.625 0 1 0 .561-1.117L8.62 7.796v-2.99Z","clip-rule":"evenodd"}]]

/**
 * @component @name History
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOCAyLjI1Yy0xLjgyIDAtMy40NDEuODQ0LTQuNDk2IDIuMTY1SDQuOThhLjYyNS42MjUgMCAxIDEgMCAxLjI1SDIuMTg1YS43NzUuNzc1IDAgMCAxLS43NzUtLjc3NVYyLjA5NWEuNjI1LjYyNSAwIDEgMSAxLjI1IDB2MS4zOEE3IDcgMCAxIDEgMSA4di0uMjJhLjYyNS42MjUgMCAxIDEgMS4yNS4wMzhWOEE1Ljc1IDUuNzUgMCAxIDAgOCAyLjI1Wm0uNjE4IDIuNTU3YS42MjUuNjI1IDAgMSAwLTEuMjUgMHYzLjM4YzAgLjI3NC4xNzYuNTA3LjQyMS41OTFsMi44MTkgMS40MTdhLjYyNS42MjUgMCAxIDAgLjU2MS0xLjExN0w4LjYyIDcuNzk2di0yLjk5WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const History = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-history',
        'staticon-History',
        className
      ),
      ...props,
    })
);
History.displayName = 'History'

export default History;
