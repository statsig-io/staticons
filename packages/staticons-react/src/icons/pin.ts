
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"m12.114 3.319 3.656 2.124.01.006 3.667 2.131c.672.39.83 1.297.33 1.894l-2.6 3.104c-.055.066-.106.225-.031.456.46 1.426.365 3.41-.596 5.518-.432.95-1.558 1.201-2.374.727l-4.098-2.382-2.08 3.627a.745.745 0 0 1-1.021.275.755.755 0 0 1-.274-1.027l2.08-3.627-4.098-2.382c-.816-.474-1.162-1.581-.561-2.433 1.333-1.892 2.992-2.966 4.45-3.278.235-.05.346-.175.375-.256l1.371-3.818a1.242 1.242 0 0 1 1.794-.66ZM5.432 12.46l4.735 2.752.01.006 4.747 2.758c.061.036.126.04.175.026a.136.136 0 0 0 .093-.078c.836-1.835.855-3.425.532-4.426-.183-.567-.171-1.314.311-1.89l2.407-2.875-3.398-1.974-.01-.007-3.41-1.98-1.269 3.535c-.254.708-.89 1.092-1.47 1.216-1.023.22-2.382 1.031-3.543 2.678a.137.137 0 0 0-.02.119.23.23 0 0 0 .11.14Z","clip-rule":"evenodd"}]]

/**
 * @component @name Pin
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJtMTIuMTE0IDMuMzE5IDMuNjU2IDIuMTI0LjAxLjAwNiAzLjY2NyAyLjEzMWMuNjcyLjM5LjgzIDEuMjk3LjMzIDEuODk0bC0yLjYgMy4xMDRjLS4wNTUuMDY2LS4xMDYuMjI1LS4wMzEuNDU2LjQ2IDEuNDI2LjM2NSAzLjQxLS41OTYgNS41MTgtLjQzMi45NS0xLjU1OCAxLjIwMS0yLjM3NC43MjdsLTQuMDk4LTIuMzgyLTIuMDggMy42MjdhLjc0NS43NDUgMCAwIDEtMS4wMjEuMjc1Ljc1NS43NTUgMCAwIDEtLjI3NC0xLjAyN2wyLjA4LTMuNjI3LTQuMDk4LTIuMzgyYy0uODE2LS40NzQtMS4xNjItMS41ODEtLjU2MS0yLjQzMyAxLjMzMy0xLjg5MiAyLjk5Mi0yLjk2NiA0LjQ1LTMuMjc4LjIzNS0uMDUuMzQ2LS4xNzUuMzc1LS4yNTZsMS4zNzEtMy44MThhMS4yNDIgMS4yNDIgMCAwIDEgMS43OTQtLjY2Wk01LjQzMiAxMi40Nmw0LjczNSAyLjc1Mi4wMS4wMDYgNC43NDcgMi43NThjLjA2MS4wMzYuMTI2LjA0LjE3NS4wMjZhLjEzNi4xMzYgMCAwIDAgLjA5My0uMDc4Yy44MzYtMS44MzUuODU1LTMuNDI1LjUzMi00LjQyNi0uMTgzLS41NjctLjE3MS0xLjMxNC4zMTEtMS44OWwyLjQwNy0yLjg3NS0zLjM5OC0xLjk3NC0uMDEtLjAwNy0zLjQxLTEuOTgtMS4yNjkgMy41MzVjLS4yNTQuNzA4LS44OSAxLjA5Mi0xLjQ3IDEuMjE2LTEuMDIzLjIyLTIuMzgyIDEuMDMxLTMuNTQzIDIuNjc4YS4xMzcuMTM3IDAgMCAwLS4wMi4xMTkuMjMuMjMgMCAwIDAgLjExLjE0WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Pin = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-pin',
        'staticon-Pin',
        className
      ),
      ...props,
    })
);
Pin.displayName = 'Pin'

export default Pin;
