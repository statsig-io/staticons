
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M9.465 7.036a2.535 2.535 0 1 1 5.07 0 2.535 2.535 0 0 1-5.07 0ZM12 3.001a4.035 4.035 0 0 0-.75 8v2.256l-6.001 5.16v-1.168a.75.75 0 0 0-1.5 0v3c0 .414.336.75.75.75h3a.75.75 0 0 0 0-1.5H6.291L12 14.589l5.709 4.91h-1.208a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 .75-.75v-3a.75.75 0 0 0-1.5 0v1.168l-6.001-5.16v-2.255A4.037 4.037 0 0 0 12 3Z","clip-rule":"evenodd"}]]

/**
 * @component @name Decision
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOS40NjUgNy4wMzZhMi41MzUgMi41MzUgMCAxIDEgNS4wNyAwIDIuNTM1IDIuNTM1IDAgMCAxLTUuMDcgMFpNMTIgMy4wMDFhNC4wMzUgNC4wMzUgMCAwIDAtLjc1IDh2Mi4yNTZsLTYuMDAxIDUuMTZ2LTEuMTY4YS43NS43NSAwIDAgMC0xLjUgMHYzYzAgLjQxNC4zMzYuNzUuNzUuNzVoM2EuNzUuNzUgMCAwIDAgMC0xLjVINi4yOTFMMTIgMTQuNTg5bDUuNzA5IDQuOTFoLTEuMjA4YS43NS43NSAwIDAgMCAwIDEuNWgzYS43NS43NSAwIDAgMCAuNzUtLjc1di0zYS43NS43NSAwIDAgMC0xLjUgMHYxLjE2OGwtNi4wMDEtNS4xNnYtMi4yNTVBNC4wMzcgNC4wMzcgMCAwIDAgMTIgM1oiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Decision = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-decision',
        'staticon-Decision',
        className
      ),
      ...props,
    })
);
Decision.displayName = 'Decision'

export default Decision;
