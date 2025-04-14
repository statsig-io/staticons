
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"d":"m6.802 10.381 5.75 4.875a.5.5 0 0 0 .823-.382V5.125a.5.5 0 0 0-.823-.381l-5.75 4.874a.5.5 0 0 0 0 .763Z"}]]

/**
 * @component @name TriangleLeft
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZD0ibTYuODAyIDEwLjM4MSA1Ljc1IDQuODc1YS41LjUgMCAwIDAgLjgyMy0uMzgyVjUuMTI1YS41LjUgMCAwIDAtLjgyMy0uMzgxbC01Ljc1IDQuODc0YS41LjUgMCAwIDAgMCAuNzYzWiIvPgo8L3N2Zz4K)
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
