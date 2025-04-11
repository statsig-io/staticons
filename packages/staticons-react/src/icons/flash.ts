
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"m11.99 4.394-6.436 8.191a.25.25 0 0 0 .196.405h4.507c.967 0 1.75.783 1.75 1.75v4.865l6.438-8.194a.25.25 0 0 0-.197-.405l-4.506.003a1.75 1.75 0 0 1-1.752-1.75V4.394Zm-.739-1.487c.736-.936 2.24-.416 2.24.774V9.26c0 .138.111.25.25.25l4.506-.003c1.46-.001 2.28 1.682 1.377 2.831l-6.878 8.755c-.735.936-2.239.416-2.239-.774V14.74a.25.25 0 0 0-.25-.25H5.75c-1.46 0-2.278-1.683-1.376-2.831l6.877-8.752Z","clip-rule":"evenodd"}]]

/**
 * @component @name Flash
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJtMTEuOTkgNC4zOTQtNi40MzYgOC4xOTFhLjI1LjI1IDAgMCAwIC4xOTYuNDA1aDQuNTA3Yy45NjcgMCAxLjc1Ljc4MyAxLjc1IDEuNzV2NC44NjVsNi40MzgtOC4xOTRhLjI1LjI1IDAgMCAwLS4xOTctLjQwNWwtNC41MDYuMDAzYTEuNzUgMS43NSAwIDAgMS0xLjc1Mi0xLjc1VjQuMzk0Wm0tLjczOS0xLjQ4N2MuNzM2LS45MzYgMi4yNC0uNDE2IDIuMjQuNzc0VjkuMjZjMCAuMTM4LjExMS4yNS4yNS4yNWw0LjUwNi0uMDAzYzEuNDYtLjAwMSAyLjI4IDEuNjgyIDEuMzc3IDIuODMxbC02Ljg3OCA4Ljc1NWMtLjczNS45MzYtMi4yMzkuNDE2LTIuMjM5LS43NzRWMTQuNzRhLjI1LjI1IDAgMCAwLS4yNS0uMjVINS43NWMtMS40NiAwLTIuMjc4LTEuNjgzLTEuMzc2LTIuODMxbDYuODc3LTguNzUyWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Flash = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-flash',
        'staticon-Flash',
        className
      ),
      ...props,
    })
);
Flash.displayName = 'Flash'

export default Flash;
