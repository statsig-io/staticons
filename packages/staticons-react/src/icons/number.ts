
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M11.913 16.998a.626.626 0 0 1-.576-.672l.212-2.758H7.902l-.22 2.854a.626.626 0 0 1-1.248-.096l.212-2.758h-3.02a.626.626 0 0 1 0-1.252h3.116l.357-4.63H3.626a.626.626 0 1 1 0-1.253h3.569l.22-2.855a.626.626 0 0 1 1.248.096l-.212 2.76h3.647l.22-2.856a.626.626 0 0 1 1.248.096l-.212 2.76h3.02a.626.626 0 0 1 0 1.251h-3.117l-.356 4.63h3.473a.626.626 0 1 1 0 1.253h-3.57l-.219 2.854a.626.626 0 0 1-.672.576ZM8.354 7.685l-.356 4.63h3.647l.357-4.63H8.354Z","clip-rule":"evenodd"}]]

/**
 * @component @name Number
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTEuOTEzIDE2Ljk5OGEuNjI2LjYyNiAwIDAgMS0uNTc2LS42NzJsLjIxMi0yLjc1OEg3LjkwMmwtLjIyIDIuODU0YS42MjYuNjI2IDAgMCAxLTEuMjQ4LS4wOTZsLjIxMi0yLjc1OGgtMy4wMmEuNjI2LjYyNiAwIDAgMSAwLTEuMjUyaDMuMTE2bC4zNTctNC42M0gzLjYyNmEuNjI2LjYyNiAwIDEgMSAwLTEuMjUzaDMuNTY5bC4yMi0yLjg1NWEuNjI2LjYyNiAwIDAgMSAxLjI0OC4wOTZsLS4yMTIgMi43NmgzLjY0N2wuMjItMi44NTZhLjYyNi42MjYgMCAwIDEgMS4yNDguMDk2bC0uMjEyIDIuNzZoMy4wMmEuNjI2LjYyNiAwIDAgMSAwIDEuMjUxaC0zLjExN2wtLjM1NiA0LjYzaDMuNDczYS42MjYuNjI2IDAgMSAxIDAgMS4yNTNoLTMuNTdsLS4yMTkgMi44NTRhLjYyNi42MjYgMCAwIDEtLjY3Mi41NzZaTTguMzU0IDcuNjg1bC0uMzU2IDQuNjNoMy42NDdsLjM1Ny00LjYzSDguMzU0WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Number = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-number',
        'staticon-Number',
        className
      ),
      ...props,
    })
);
Number.displayName = 'Number'

export default Number;
