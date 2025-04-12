
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","d":"M4.087 7.946a.586.586 0 1 0 .83-.83L3.43 5.63h6.314a3.613 3.613 0 1 1 0 7.226H2.118a.571.571 0 1 0 0 1.143h7.626a4.756 4.756 0 0 0 0-9.512H3.431l1.485-1.485a.586.586 0 0 0-.829-.83L1.712 4.549a.723.723 0 0 0 0 1.023l2.375 2.375Z"}]]

/**
 * @component @name Undo
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTQuMDg3IDcuOTQ2YS41ODYuNTg2IDAgMSAwIC44My0uODNMMy40MyA1LjYzaDYuMzE0YTMuNjEzIDMuNjEzIDAgMSAxIDAgNy4yMjZIMi4xMThhLjU3MS41NzEgMCAxIDAgMCAxLjE0M2g3LjYyNmE0Ljc1NiA0Ljc1NiAwIDAgMCAwLTkuNTEySDMuNDMxbDEuNDg1LTEuNDg1YS41ODYuNTg2IDAgMCAwLS44MjktLjgzTDEuNzEyIDQuNTQ5YS43MjMuNzIzIDAgMCAwIDAgMS4wMjNsMi4zNzUgMi4zNzVaIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Undo = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-undo',
        'staticon-Undo',
        className
      ),
      ...props,
    })
);
Undo.displayName = 'Undo'

export default Undo;
