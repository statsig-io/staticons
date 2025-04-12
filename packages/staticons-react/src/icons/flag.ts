
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M2.001 1.5a.625.625 0 0 1 1.25 0v.678a7.05 7.05 0 0 0 4.53-.14c1.662-.636 3.825-.87 5.755-.028a.773.773 0 0 1 .463.708v6.403c0 .573-.58.919-1.073.721-1.535-.617-3.34-.424-4.698.095a8.377 8.377 0 0 1-4.977.28V14.5a.625.625 0 1 1-1.25 0v-13Zm1.25 7.416c1.271.415 2.997.441 4.53-.146 1.385-.53 3.233-.794 4.968-.306V3.04c-1.477-.537-3.154-.359-4.52.165a8.318 8.318 0 0 1-4.978.272v5.438Z","clip-rule":"evenodd"}]]

/**
 * @component @name Flag
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMi4wMDEgMS41YS42MjUuNjI1IDAgMCAxIDEuMjUgMHYuNjc4YTcuMDUgNy4wNSAwIDAgMCA0LjUzLS4xNGMxLjY2Mi0uNjM2IDMuODI1LS44NyA1Ljc1NS0uMDI4YS43NzMuNzczIDAgMCAxIC40NjMuNzA4djYuNDAzYzAgLjU3My0uNTguOTE5LTEuMDczLjcyMS0xLjUzNS0uNjE3LTMuMzQtLjQyNC00LjY5OC4wOTVhOC4zNzcgOC4zNzcgMCAwIDEtNC45NzcuMjhWMTQuNWEuNjI1LjYyNSAwIDEgMS0xLjI1IDB2LTEzWm0xLjI1IDcuNDE2YzEuMjcxLjQxNSAyLjk5Ny40NDEgNC41My0uMTQ2IDEuMzg1LS41MyAzLjIzMy0uNzk0IDQuOTY4LS4zMDZWMy4wNGMtMS40NzctLjUzNy0zLjE1NC0uMzU5LTQuNTIuMTY1YTguMzE4IDguMzE4IDAgMCAxLTQuOTc4LjI3MnY1LjQzOFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Flag = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-flag',
        'staticon-Flag',
        className
      ),
      ...props,
    })
);
Flag.displayName = 'Flag'

export default Flag;
