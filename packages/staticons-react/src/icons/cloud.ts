
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M5.143 8.045A4.808 4.808 0 0 1 9.87 4.124c2.584 0 4.725 2.051 4.807 4.64l.02.647.315.023a3.225 3.225 0 0 1-.236 6.44h-9.12a3.657 3.657 0 0 1-.734-7.24l.116-.023.105-.566ZM9.87 5.374a3.558 3.558 0 0 0-3.498 2.898l-.146.789a.913.913 0 0 1-.714.729l-.34.07a2.407 2.407 0 0 0 .484 4.765h9.12a1.975 1.975 0 0 0 .145-3.944l-.63-.046a.898.898 0 0 1-.833-.868l-.03-.963c-.06-1.908-1.642-3.43-3.558-3.43Z","clip-rule":"evenodd"}]]

/**
 * @component @name Cloud
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNS4xNDMgOC4wNDVBNC44MDggNC44MDggMCAwIDEgOS44NyA0LjEyNGMyLjU4NCAwIDQuNzI1IDIuMDUxIDQuODA3IDQuNjRsLjAyLjY0Ny4zMTUuMDIzYTMuMjI1IDMuMjI1IDAgMCAxLS4yMzYgNi40NGgtOS4xMmEzLjY1NyAzLjY1NyAwIDAgMS0uNzM0LTcuMjRsLjExNi0uMDIzLjEwNS0uNTY2Wk05Ljg3IDUuMzc0YTMuNTU4IDMuNTU4IDAgMCAwLTMuNDk4IDIuODk4bC0uMTQ2Ljc4OWEuOTEzLjkxMyAwIDAgMS0uNzE0LjcyOWwtLjM0LjA3YTIuNDA3IDIuNDA3IDAgMCAwIC40ODQgNC43NjVoOS4xMmExLjk3NSAxLjk3NSAwIDAgMCAuMTQ1LTMuOTQ0bC0uNjMtLjA0NmEuODk4Ljg5OCAwIDAgMS0uODMzLS44NjhsLS4wMy0uOTYzYy0uMDYtMS45MDgtMS42NDItMy40My0zLjU1OC0zLjQzWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Cloud = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-cloud',
        'staticon-Cloud',
        className
      ),
      ...props,
    })
);
Cloud.displayName = 'Cloud'

export default Cloud;
