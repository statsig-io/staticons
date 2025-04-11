
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","d":"m15.924 12.747-5.282 4.773c-.634.573-1.638.115-1.638-.748V7.227c0-.863 1.003-1.32 1.638-.747l5.282 4.773a1.01 1.01 0 0 1 0 1.494Z"}]]

/**
 * @component @name TriangleRight
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZD0ibTE1LjkyNCAxMi43NDctNS4yODIgNC43NzNjLS42MzQuNTczLTEuNjM4LjExNS0xLjYzOC0uNzQ4VjcuMjI3YzAtLjg2MyAxLjAwMy0xLjMyIDEuNjM4LS43NDdsNS4yODIgNC43NzNhMS4wMSAxLjAxIDAgMCAxIDAgMS40OTRaIi8+Cjwvc3ZnPgo=)
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
