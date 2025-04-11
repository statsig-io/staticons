
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","d":"M18.003 3.748a2.25 2.25 0 0 1 2.25 2.25v3.028a.75.75 0 0 1-1.5 0V5.998a.75.75 0 0 0-.75-.75h-3.02a.75.75 0 1 1 0-1.5h3.02ZM6.004 3.75A2.25 2.25 0 0 0 3.754 6v3.019a.75.75 0 1 0 1.5 0v-3.02a.75.75 0 0 1 .75-.75h3.028a.75.75 0 1 0 0-1.5H6.004Zm12 16.497a2.25 2.25 0 0 0 2.25-2.25v-3.02a.75.75 0 0 0-1.5 0v3.02a.75.75 0 0 1-.75.75h-3.028a.75.75 0 1 0 0 1.5h3.028ZM3.755 17.998a2.25 2.25 0 0 0 2.25 2.25h3.02a.75.75 0 1 0 0-1.5h-3.02a.75.75 0 0 1-.75-.75V14.97a.75.75 0 0 0-1.5 0v3.028Z"}]]

/**
 * @component @name FullScreen
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTE4LjAwMyAzLjc0OGEyLjI1IDIuMjUgMCAwIDEgMi4yNSAyLjI1djMuMDI4YS43NS43NSAwIDAgMS0xLjUgMFY1Ljk5OGEuNzUuNzUgMCAwIDAtLjc1LS43NWgtMy4wMmEuNzUuNzUgMCAxIDEgMC0xLjVoMy4wMlpNNi4wMDQgMy43NUEyLjI1IDIuMjUgMCAwIDAgMy43NTQgNnYzLjAxOWEuNzUuNzUgMCAxIDAgMS41IDB2LTMuMDJhLjc1Ljc1IDAgMCAxIC43NS0uNzVoMy4wMjhhLjc1Ljc1IDAgMSAwIDAtMS41SDYuMDA0Wm0xMiAxNi40OTdhMi4yNSAyLjI1IDAgMCAwIDIuMjUtMi4yNXYtMy4wMmEuNzUuNzUgMCAwIDAtMS41IDB2My4wMmEuNzUuNzUgMCAwIDEtLjc1Ljc1aC0zLjAyOGEuNzUuNzUgMCAxIDAgMCAxLjVoMy4wMjhaTTMuNzU1IDE3Ljk5OGEyLjI1IDIuMjUgMCAwIDAgMi4yNSAyLjI1aDMuMDJhLjc1Ljc1IDAgMSAwIDAtMS41aC0zLjAyYS43NS43NSAwIDAgMS0uNzUtLjc1VjE0Ljk3YS43NS43NSAwIDAgMC0xLjUgMHYzLjAyOFoiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const FullScreen = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-full-screen',
        'staticon-FullScreen',
        className
      ),
      ...props,
    })
);
FullScreen.displayName = 'FullScreen'

export default FullScreen;
