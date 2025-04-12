
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","d":"m5.084 8.187 5.5 4.874a.25.25 0 0 0 .416-.188V3.127a.25.25 0 0 0-.416-.187l-5.5 4.873a.25.25 0 0 0 0 .374Z"}]]

/**
 * @component @name TriangleLeft
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZD0ibTUuMDg0IDguMTg3IDUuNSA0Ljg3NGEuMjUuMjUgMCAwIDAgLjQxNi0uMTg4VjMuMTI3YS4yNS4yNSAwIDAgMC0uNDE2LS4xODdsLTUuNSA0Ljg3M2EuMjUuMjUgMCAwIDAgMCAuMzc0WiIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const TriangleLeft = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-triangle-left',
        'staticon-TriangleLeft',
        className
      ),
      ...props,
    })
);
TriangleLeft.displayName = 'TriangleLeft'

export default TriangleLeft;
