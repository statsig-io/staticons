
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","d":"m12.747 8.705 4.773 5.282c.573.634.116 1.638-.747 1.638H7.228c-.863 0-1.321-1.004-.748-1.638l4.773-5.282a1.01 1.01 0 0 1 1.494 0Z"}]]

/**
 * @component @name TriangleUp
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZD0ibTEyLjc0NyA4LjcwNSA0Ljc3MyA1LjI4MmMuNTczLjYzNC4xMTYgMS42MzgtLjc0NyAxLjYzOEg3LjIyOGMtLjg2MyAwLTEuMzIxLTEuMDA0LS43NDgtMS42MzhsNC43NzMtNS4yODJhMS4wMSAxLjAxIDAgMCAxIDEuNDk0IDBaIi8+Cjwvc3ZnPgo=)
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
