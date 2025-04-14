
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"d":"m10.382 6.802 4.874 5.75a.5.5 0 0 1-.381.823h-9.75a.5.5 0 0 1-.38-.823l4.874-5.75a.5.5 0 0 1 .763 0Z"}]]

/**
 * @component @name TriangleUp
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZD0ibTEwLjM4MiA2LjgwMiA0Ljg3NCA1Ljc1YS41LjUgMCAwIDEtLjM4MS44MjNoLTkuNzVhLjUuNSAwIDAgMS0uMzgtLjgyM2w0Ljg3NC01Ljc1YS41LjUgMCAwIDEgLjc2MyAwWiIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const TriangleUp = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-triangle-up',
        'staticon-TriangleUp',
        className
      ),
      ...props,
    })
);
TriangleUp.displayName = 'TriangleUp'

export default TriangleUp;
