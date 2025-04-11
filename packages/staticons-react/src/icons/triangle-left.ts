
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","d":"m7.96 12.747 5.282 4.773c.634.573 1.638.116 1.638-.747V7.228c0-.863-1.004-1.321-1.638-.748L7.96 11.253a1.01 1.01 0 0 0 0 1.494Z"}]]

/**
 * @component @name TriangleLeft
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZD0ibTcuOTYgMTIuNzQ3IDUuMjgyIDQuNzczYy42MzQuNTczIDEuNjM4LjExNiAxLjYzOC0uNzQ3VjcuMjI4YzAtLjg2My0xLjAwNC0xLjMyMS0xLjYzOC0uNzQ4TDcuOTYgMTEuMjUzYTEuMDEgMS4wMSAwIDAgMCAwIDEuNDk0WiIvPgo8L3N2Zz4K)
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
