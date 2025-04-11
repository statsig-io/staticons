
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M4.876 14.874a2.88 2.88 0 0 0 2.778-2.124h1.57a2.879 2.879 0 0 0 5.555 0h1.57a2.876 2.876 0 0 0 5.654-.75 2.876 2.876 0 0 0-5.653-.75h-1.57a2.879 2.879 0 0 0-5.556 0h-1.57A2.876 2.876 0 0 0 2 12a2.876 2.876 0 0 0 2.876 2.874ZM6.253 12A1.376 1.376 0 0 1 3.5 12a1.376 1.376 0 0 1 2.753 0Zm14.25 0a1.376 1.376 0 0 1-2.752 0 1.376 1.376 0 0 1 2.753 0Zm-8.501 1.374c.76 0 1.376-.616 1.376-1.374a1.376 1.376 0 0 0-2.753 0c0 .758.617 1.374 1.377 1.374Z","clip-rule":"evenodd"}]]

/**
 * @component @name AutomatedRollout
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNC44NzYgMTQuODc0YTIuODggMi44OCAwIDAgMCAyLjc3OC0yLjEyNGgxLjU3YTIuODc5IDIuODc5IDAgMCAwIDUuNTU1IDBoMS41N2EyLjg3NiAyLjg3NiAwIDAgMCA1LjY1NC0uNzUgMi44NzYgMi44NzYgMCAwIDAtNS42NTMtLjc1aC0xLjU3YTIuODc5IDIuODc5IDAgMCAwLTUuNTU2IDBoLTEuNTdBMi44NzYgMi44NzYgMCAwIDAgMiAxMmEyLjg3NiAyLjg3NiAwIDAgMCAyLjg3NiAyLjg3NFpNNi4yNTMgMTJBMS4zNzYgMS4zNzYgMCAwIDEgMy41IDEyYTEuMzc2IDEuMzc2IDAgMCAxIDIuNzUzIDBabTE0LjI1IDBhMS4zNzYgMS4zNzYgMCAwIDEtMi43NTIgMCAxLjM3NiAxLjM3NiAwIDAgMSAyLjc1MyAwWm0tOC41MDEgMS4zNzRjLjc2IDAgMS4zNzYtLjYxNiAxLjM3Ni0xLjM3NGExLjM3NiAxLjM3NiAwIDAgMC0yLjc1MyAwYzAgLjc1OC42MTcgMS4zNzQgMS4zNzcgMS4zNzRaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const AutomatedRollout = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-automated-rollout',
        'staticon-AutomatedRollout',
        className
      ),
      ...props,
    })
);
AutomatedRollout.displayName = 'AutomatedRollout'

export default AutomatedRollout;
