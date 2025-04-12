
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","d":"M7.124 3.125a1.625 1.625 0 1 0-3.25 0 1.625 1.625 0 0 0 3.25 0Zm0 4.883a1.625 1.625 0 1 0-3.25 0 1.625 1.625 0 0 0 3.25 0ZM5.499 11.25a1.625 1.625 0 1 1 0 3.25 1.625 1.625 0 0 1 0-3.25Zm6.627-3.242a1.625 1.625 0 1 0-3.25 0 1.625 1.625 0 0 0 3.25 0ZM10.501 1.5a1.625 1.625 0 1 1 0 3.25 1.625 1.625 0 0 1 0-3.25Zm1.625 11.375a1.625 1.625 0 1 0-3.25 0 1.625 1.625 0 0 0 3.25 0Z"}]]

/**
 * @component @name Drag1
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTcuMTI0IDMuMTI1YTEuNjI1IDEuNjI1IDAgMSAwLTMuMjUgMCAxLjYyNSAxLjYyNSAwIDAgMCAzLjI1IDBabTAgNC44ODNhMS42MjUgMS42MjUgMCAxIDAtMy4yNSAwIDEuNjI1IDEuNjI1IDAgMCAwIDMuMjUgMFpNNS40OTkgMTEuMjVhMS42MjUgMS42MjUgMCAxIDEgMCAzLjI1IDEuNjI1IDEuNjI1IDAgMCAxIDAtMy4yNVptNi42MjctMy4yNDJhMS42MjUgMS42MjUgMCAxIDAtMy4yNSAwIDEuNjI1IDEuNjI1IDAgMCAwIDMuMjUgMFpNMTAuNTAxIDEuNWExLjYyNSAxLjYyNSAwIDEgMSAwIDMuMjUgMS42MjUgMS42MjUgMCAwIDEgMC0zLjI1Wm0xLjYyNSAxMS4zNzVhMS42MjUgMS42MjUgMCAxIDAtMy4yNSAwIDEuNjI1IDEuNjI1IDAgMCAwIDMuMjUgMFoiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Drag1 = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-drag1',
        'staticon-Drag1',
        className
      ),
      ...props,
    })
);
Drag1.displayName = 'Drag1'

export default Drag1;
