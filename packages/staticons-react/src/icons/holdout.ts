
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M8.609 4.87a1.37 1.37 0 1 0 2.74 0 1.37 1.37 0 0 0-2.74 0Zm.745 2.545a2.62 2.62 0 1 1 1.25 0V9.13h3.035c1.173 0 2.125.952 2.125 2.125v.585a.625.625 0 1 1-1.25 0v-.585a.875.875 0 0 0-.875-.875h-7.19a.875.875 0 0 0-.875.876v1.305a2.627 2.627 0 1 1-1.25.024v-1.328A2.125 2.125 0 0 1 6.449 9.13h2.905V7.415Zm-5.729 7.71a1.376 1.376 0 1 0 2.752 0 1.376 1.376 0 0 0-2.752 0Zm13.817-1.047a.625.625 0 1 0-.884-.884l-1.298 1.298-1.298-1.298a.625.625 0 1 0-.884.884l1.298 1.298-1.298 1.297a.625.625 0 1 0 .884.884l1.298-1.297 1.298 1.298a.625.625 0 1 0 .884-.884l-1.299-1.298 1.299-1.298Z","clip-rule":"evenodd"}]]

/**
 * @component @name Holdout
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOC42MDkgNC44N2ExLjM3IDEuMzcgMCAxIDAgMi43NCAwIDEuMzcgMS4zNyAwIDAgMC0yLjc0IDBabS43NDUgMi41NDVhMi42MiAyLjYyIDAgMSAxIDEuMjUgMFY5LjEzaDMuMDM1YzEuMTczIDAgMi4xMjUuOTUyIDIuMTI1IDIuMTI1di41ODVhLjYyNS42MjUgMCAxIDEtMS4yNSAwdi0uNTg1YS44NzUuODc1IDAgMCAwLS44NzUtLjg3NWgtNy4xOWEuODc1Ljg3NSAwIDAgMC0uODc1Ljg3NnYxLjMwNWEyLjYyNyAyLjYyNyAwIDEgMS0xLjI1LjAyNHYtMS4zMjhBMi4xMjUgMi4xMjUgMCAwIDEgNi40NDkgOS4xM2gyLjkwNVY3LjQxNVptLTUuNzI5IDcuNzFhMS4zNzYgMS4zNzYgMCAxIDAgMi43NTIgMCAxLjM3NiAxLjM3NiAwIDAgMC0yLjc1MiAwWm0xMy44MTctMS4wNDdhLjYyNS42MjUgMCAxIDAtLjg4NC0uODg0bC0xLjI5OCAxLjI5OC0xLjI5OC0xLjI5OGEuNjI1LjYyNSAwIDEgMC0uODg0Ljg4NGwxLjI5OCAxLjI5OC0xLjI5OCAxLjI5N2EuNjI1LjYyNSAwIDEgMCAuODg0Ljg4NGwxLjI5OC0xLjI5NyAxLjI5OCAxLjI5OGEuNjI1LjYyNSAwIDEgMCAuODg0LS44ODRsLTEuMjk5LTEuMjk4IDEuMjk5LTEuMjk4WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Holdout = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-holdout',
        'staticon-Holdout',
        className
      ),
      ...props,
    })
);
Holdout.displayName = 'Holdout'

export default Holdout;
