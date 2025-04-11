
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","d":"M11.253 15.295 6.48 10.013c-.573-.634-.115-1.638.748-1.638h9.544c.864 0 1.321 1.004.748 1.638l-4.773 5.282a1.01 1.01 0 0 1-1.494 0Z"}]]

/**
 * @component @name TriangleDown
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTExLjI1MyAxNS4yOTUgNi40OCAxMC4wMTNjLS41NzMtLjYzNC0uMTE1LTEuNjM4Ljc0OC0xLjYzOGg5LjU0NGMuODY0IDAgMS4zMjEgMS4wMDQuNzQ4IDEuNjM4bC00Ljc3MyA1LjI4MmExLjAxIDEuMDEgMCAwIDEtMS40OTQgMFoiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const TriangleDown = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-triangle-down',
        'staticon-TriangleDown',
        className
      ),
      ...props,
    })
);
TriangleDown.displayName = 'TriangleDown'

export default TriangleDown;
