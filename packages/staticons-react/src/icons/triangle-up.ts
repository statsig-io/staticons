
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","d":"m8.187 5.084 4.874 5.5a.25.25 0 0 1-.188.416H3.127a.25.25 0 0 1-.187-.416l4.873-5.5a.25.25 0 0 1 .374 0Z"}]]

/**
 * @component @name TriangleUp
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZD0ibTguMTg3IDUuMDg0IDQuODc0IDUuNWEuMjUuMjUgMCAwIDEtLjE4OC40MTZIMy4xMjdhLjI1LjI1IDAgMCAxLS4xODctLjQxNmw0Ljg3My01LjVhLjI1LjI1IDAgMCAxIC4zNzQgMFoiLz4KPC9zdmc+Cg==)
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
