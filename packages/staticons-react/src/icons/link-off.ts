
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M9.75 6.129a.75.75 0 0 0 1.062 1.062l.933-.933a4.255 4.255 0 0 1 6.018 6.017l-.933.933a.75.75 0 1 0 1.062 1.062l.933-.933a5.757 5.757 0 0 0-8.142-8.141l-.933.933ZM6.26 17.762a4.255 4.255 0 0 1 0-6.018l.933-.933A.751.751 0 0 0 6.13 9.75l-.933.933a5.757 5.757 0 0 0 8.141 8.142l.933-.933a.75.75 0 0 0-1.062-1.062l-.933.933a4.255 4.255 0 0 1-6.017 0Zm2.892-2.893a.751.751 0 0 1 0-1.062l1.798-1.798-7.185-7.184a.75.75 0 1 1 1.06-1.06l7.185 7.183 1.798-1.797a.75.75 0 1 1 1.062 1.062l-1.798 1.797 7.165 7.165a.75.75 0 0 1-1.06 1.06l-7.165-7.164-1.798 1.798a.751.751 0 0 1-1.062 0Z","clip-rule":"evenodd"}]]

/**
 * @component @name LinkOff
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOS43NSA2LjEyOWEuNzUuNzUgMCAwIDAgMS4wNjIgMS4wNjJsLjkzMy0uOTMzYTQuMjU1IDQuMjU1IDAgMCAxIDYuMDE4IDYuMDE3bC0uOTMzLjkzM2EuNzUuNzUgMCAxIDAgMS4wNjIgMS4wNjJsLjkzMy0uOTMzYTUuNzU3IDUuNzU3IDAgMCAwLTguMTQyLTguMTQxbC0uOTMzLjkzM1pNNi4yNiAxNy43NjJhNC4yNTUgNC4yNTUgMCAwIDEgMC02LjAxOGwuOTMzLS45MzNBLjc1MS43NTEgMCAwIDAgNi4xMyA5Ljc1bC0uOTMzLjkzM2E1Ljc1NyA1Ljc1NyAwIDAgMCA4LjE0MSA4LjE0MmwuOTMzLS45MzNhLjc1Ljc1IDAgMCAwLTEuMDYyLTEuMDYybC0uOTMzLjkzM2E0LjI1NSA0LjI1NSAwIDAgMS02LjAxNyAwWm0yLjg5Mi0yLjg5M2EuNzUxLjc1MSAwIDAgMSAwLTEuMDYybDEuNzk4LTEuNzk4LTcuMTg1LTcuMTg0YS43NS43NSAwIDEgMSAxLjA2LTEuMDZsNy4xODUgNy4xODMgMS43OTgtMS43OTdhLjc1Ljc1IDAgMSAxIDEuMDYyIDEuMDYybC0xLjc5OCAxLjc5NyA3LjE2NSA3LjE2NWEuNzUuNzUgMCAwIDEtMS4wNiAxLjA2bC03LjE2NS03LjE2NC0xLjc5OCAxLjc5OGEuNzUxLjc1MSAwIDAgMS0xLjA2MiAwWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const LinkOff = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-link-off',
        'staticon-LinkOff',
        className
      ),
      ...props,
    })
);
LinkOff.displayName = 'LinkOff'

export default LinkOff;
