
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"d":"m13.199 10.381-5.75 4.875a.5.5 0 0 1-.824-.382V5.125a.5.5 0 0 1 .823-.381l5.75 4.874a.5.5 0 0 1 0 .763Z"}]]

/**
 * @component @name TriangleRight
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZD0ibTEzLjE5OSAxMC4zODEtNS43NSA0Ljg3NWEuNS41IDAgMCAxLS44MjQtLjM4MlY1LjEyNWEuNS41IDAgMCAxIC44MjMtLjM4MWw1Ljc1IDQuODc0YS41LjUgMCAwIDEgMCAuNzYzWiIvPgo8L3N2Zz4K)
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
