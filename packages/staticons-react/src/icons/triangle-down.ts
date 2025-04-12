
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","d":"m7.813 10.916-4.874-5.5A.25.25 0 0 1 3.126 5h9.747a.25.25 0 0 1 .187.416l-4.873 5.5a.25.25 0 0 1-.374 0Z"}]]

/**
 * @component @name TriangleDown
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZD0ibTcuODEzIDEwLjkxNi00Ljg3NC01LjVBLjI1LjI1IDAgMCAxIDMuMTI2IDVoOS43NDdhLjI1LjI1IDAgMCAxIC4xODcuNDE2bC00Ljg3MyA1LjVhLjI1LjI1IDAgMCAxLS4zNzQgMFoiLz4KPC9zdmc+Cg==)
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
