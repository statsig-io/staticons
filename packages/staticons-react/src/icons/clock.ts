
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M12 19.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Zm0 1.5a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-13.971a.75.75 0 0 1 .75.75v3.714l2.883 1.664a.75.75 0 0 1-.75 1.3l-3.24-1.87a.753.753 0 0 1-.393-.69V7.78a.75.75 0 0 1 .75-.75Z","clip-rule":"evenodd"}]]

/**
 * @component @name Clock
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTIgMTkuNWE3LjUgNy41IDAgMSAwIDAtMTUgNy41IDcuNSAwIDAgMCAwIDE1Wm0wIDEuNWE5IDkgMCAxIDAgMC0xOCA5IDkgMCAwIDAgMCAxOFptMC0xMy45NzFhLjc1Ljc1IDAgMCAxIC43NS43NXYzLjcxNGwyLjg4MyAxLjY2NGEuNzUuNzUgMCAwIDEtLjc1IDEuM2wtMy4yNC0xLjg3YS43NTMuNzUzIDAgMCAxLS4zOTMtLjY5VjcuNzhhLjc1Ljc1IDAgMCAxIC43NS0uNzVaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Clock = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-clock',
        'staticon-Clock',
        className
      ),
      ...props,
    })
);
Clock.displayName = 'Clock'

export default Clock;
