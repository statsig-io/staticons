
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M3.375 17.877a2.75 2.75 0 0 0 2.75 2.75h11.75a2.75 2.75 0 0 0 2.75-2.75V6.123a2.75 2.75 0 0 0-2.75-2.75H6.125a2.75 2.75 0 0 0-2.75 2.75v11.752Zm2.75 1.25c-.69 0-1.25-.56-1.25-1.25V12.75h5.63v6.377h-4.38Zm5.88 0h5.87c.69 0 1.25-.56 1.25-1.25V12.75h-7.12v6.377Zm7.12-7.877H4.875V6.124c0-.69.56-1.25 1.25-1.25h11.75c.69 0 1.25.56 1.25 1.25v5.126Z","clip-rule":"evenodd"}]]

/**
 * @component @name Template
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMy4zNzUgMTcuODc3YTIuNzUgMi43NSAwIDAgMCAyLjc1IDIuNzVoMTEuNzVhMi43NSAyLjc1IDAgMCAwIDIuNzUtMi43NVY2LjEyM2EyLjc1IDIuNzUgMCAwIDAtMi43NS0yLjc1SDYuMTI1YTIuNzUgMi43NSAwIDAgMC0yLjc1IDIuNzV2MTEuNzUyWm0yLjc1IDEuMjVjLS42OSAwLTEuMjUtLjU2LTEuMjUtMS4yNVYxMi43NWg1LjYzdjYuMzc3aC00LjM4Wm01Ljg4IDBoNS44N2MuNjkgMCAxLjI1LS41NiAxLjI1LTEuMjVWMTIuNzVoLTcuMTJ2Ni4zNzdabTcuMTItNy44NzdINC44NzVWNi4xMjRjMC0uNjkuNTYtMS4yNSAxLjI1LTEuMjVoMTEuNzVjLjY5IDAgMS4yNS41NiAxLjI1IDEuMjV2NS4xMjZaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Template = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-template',
        'staticon-Template',
        className
      ),
      ...props,
    })
);
Template.displayName = 'Template'

export default Template;
