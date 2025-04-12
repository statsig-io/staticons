
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M7.792 1.881a5.413 5.413 0 1 0 0 10.826 5.413 5.413 0 0 0 0-10.826ZM1.125 7.294a6.667 6.667 0 1 1 11.326 4.768l2.24 2.24a.627.627 0 0 1-.886.887l-2.335-2.334A6.667 6.667 0 0 1 1.125 7.294Zm10.167.708a.625.625 0 1 0 0-1.25h-7a.625.625 0 1 0 0 1.25h7Z","clip-rule":"evenodd"}]]

/**
 * @component @name ZoomOut
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNy43OTIgMS44ODFhNS40MTMgNS40MTMgMCAxIDAgMCAxMC44MjYgNS40MTMgNS40MTMgMCAwIDAgMC0xMC44MjZaTTEuMTI1IDcuMjk0YTYuNjY3IDYuNjY3IDAgMSAxIDExLjMyNiA0Ljc2OGwyLjI0IDIuMjRhLjYyNy42MjcgMCAwIDEtLjg4Ni44ODdsLTIuMzM1LTIuMzM0QTYuNjY3IDYuNjY3IDAgMCAxIDEuMTI1IDcuMjk0Wm0xMC4xNjcuNzA4YS42MjUuNjI1IDAgMSAwIDAtMS4yNWgtN2EuNjI1LjYyNSAwIDEgMCAwIDEuMjVoN1oiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const ZoomOut = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-zoom-out',
        'staticon-ZoomOut',
        className
      ),
      ...props,
    })
);
ZoomOut.displayName = 'ZoomOut'

export default ZoomOut;
