
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M11.305 5.214a7.27 7.27 0 1 0 7.48 7.481h-5.23a2.25 2.25 0 0 1-2.25-2.25v-5.23Zm8.983 7.141.001.125a8.769 8.769 0 1 1-8.644-8.768c.407-.652 1.144-1.085 2.033-.929a9.312 9.312 0 0 1 7.54 7.54c.155.888-.278 1.626-.93 2.032Zm-7.483-7.463c0-.211.086-.392.206-.505a.455.455 0 0 1 .407-.127 7.812 7.812 0 0 1 6.322 6.322.455.455 0 0 1-.127.407.697.697 0 0 1-.505.206h-5.553a.75.75 0 0 1-.75-.75V4.892Z","clip-rule":"evenodd"}]]

/**
 * @component @name Segments
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTEuMzA1IDUuMjE0YTcuMjcgNy4yNyAwIDEgMCA3LjQ4IDcuNDgxaC01LjIzYTIuMjUgMi4yNSAwIDAgMS0yLjI1LTIuMjV2LTUuMjNabTguOTgzIDcuMTQxLjAwMS4xMjVhOC43NjkgOC43NjkgMCAxIDEtOC42NDQtOC43NjhjLjQwNy0uNjUyIDEuMTQ0LTEuMDg1IDIuMDMzLS45MjlhOS4zMTIgOS4zMTIgMCAwIDEgNy41NCA3LjU0Yy4xNTUuODg4LS4yNzggMS42MjYtLjkzIDIuMDMyWm0tNy40ODMtNy40NjNjMC0uMjExLjA4Ni0uMzkyLjIwNi0uNTA1YS40NTUuNDU1IDAgMCAxIC40MDctLjEyNyA3LjgxMiA3LjgxMiAwIDAgMSA2LjMyMiA2LjMyMi40NTUuNDU1IDAgMCAxLS4xMjcuNDA3LjY5Ny42OTcgMCAwIDEtLjUwNS4yMDZoLTUuNTUzYS43NS43NSAwIDAgMS0uNzUtLjc1VjQuODkyWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Segments = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-segments',
        'staticon-Segments',
        className
      ),
      ...props,
    })
);
Segments.displayName = 'Segments'

export default Segments;
