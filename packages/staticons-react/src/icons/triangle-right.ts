
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","d":"m10.916 8.187-5.5 4.874A.25.25 0 0 1 5 12.873V3.127a.25.25 0 0 1 .416-.187l5.5 4.873a.25.25 0 0 1 0 .374Z"}]]

/**
 * @component @name TriangleRight
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZD0ibTEwLjkxNiA4LjE4Ny01LjUgNC44NzRBLjI1LjI1IDAgMCAxIDUgMTIuODczVjMuMTI3YS4yNS4yNSAwIDAgMSAuNDE2LS4xODdsNS41IDQuODczYS4yNS4yNSAwIDAgMSAwIC4zNzRaIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const TriangleRight = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-triangle-right',
        'staticon-TriangleRight',
        className
      ),
      ...props,
    })
);
TriangleRight.displayName = 'TriangleRight'

export default TriangleRight;
