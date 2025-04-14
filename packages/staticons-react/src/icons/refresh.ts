
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M15.062 6.126A6.375 6.375 0 1 0 16.374 10v-.199a.625.625 0 1 1 1.25-.038c.002.061 0 .135 0 .19V10a7.624 7.624 0 1 1-1.702-4.803V3.001a.625.625 0 0 1 1.25 0v3.6a.775.775 0 0 1-.775.775h-3.6a.625.625 0 1 1 0-1.25h2.265Z","clip-rule":"evenodd"}]]

/**
 * @component @name Refresh
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTUuMDYyIDYuMTI2QTYuMzc1IDYuMzc1IDAgMSAwIDE2LjM3NCAxMHYtLjE5OWEuNjI1LjYyNSAwIDEgMSAxLjI1LS4wMzhjLjAwMi4wNjEgMCAuMTM1IDAgLjE5VjEwYTcuNjI0IDcuNjI0IDAgMSAxLTEuNzAyLTQuODAzVjMuMDAxYS42MjUuNjI1IDAgMCAxIDEuMjUgMHYzLjZhLjc3NS43NzUgMCAwIDEtLjc3NS43NzVoLTMuNmEuNjI1LjYyNSAwIDEgMSAwLTEuMjVoMi4yNjVaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Refresh = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-refresh',
        'staticon-Refresh',
        className
      ),
      ...props,
    })
);
Refresh.displayName = 'Refresh'

export default Refresh;
