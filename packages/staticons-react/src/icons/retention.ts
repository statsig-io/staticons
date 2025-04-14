
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M17.5 16.374c0 .623-.504 1.128-1.127 1.128H3.628A1.128 1.128 0 0 1 2.5 16.374V3.628c0-.623.506-1.128 1.128-1.128h3.58c.623 0 1.128.505 1.128 1.128v3.433h3.455c.622 0 1.127.505 1.127 1.128v3.477h3.455c.623 0 1.127.505 1.127 1.128v3.58ZM3.754 7.061h3.329V3.753h-3.33v3.308Zm4.582 1.253h3.33v3.33h-3.33v-3.33Zm-1.253.024v3.306H3.754V8.338h3.329Zm1.253 7.911h3.33v-3.33h-3.33v3.33Zm-1.253 0h-3.33v-3.33h3.33v3.33Zm5.835-3.33v3.33h3.33v-3.33h-3.33Z","clip-rule":"evenodd"}]]

/**
 * @component @name Retention
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTcuNSAxNi4zNzRjMCAuNjIzLS41MDQgMS4xMjgtMS4xMjcgMS4xMjhIMy42MjhBMS4xMjggMS4xMjggMCAwIDEgMi41IDE2LjM3NFYzLjYyOGMwLS42MjMuNTA2LTEuMTI4IDEuMTI4LTEuMTI4aDMuNThjLjYyMyAwIDEuMTI4LjUwNSAxLjEyOCAxLjEyOHYzLjQzM2gzLjQ1NWMuNjIyIDAgMS4xMjcuNTA1IDEuMTI3IDEuMTI4djMuNDc3aDMuNDU1Yy42MjMgMCAxLjEyNy41MDUgMS4xMjcgMS4xMjh2My41OFpNMy43NTQgNy4wNjFoMy4zMjlWMy43NTNoLTMuMzN2My4zMDhabTQuNTgyIDEuMjUzaDMuMzN2My4zM2gtMy4zM3YtMy4zM1ptLTEuMjUzLjAyNHYzLjMwNkgzLjc1NFY4LjMzOGgzLjMyOVptMS4yNTMgNy45MTFoMy4zM3YtMy4zM2gtMy4zM3YzLjMzWm0tMS4yNTMgMGgtMy4zM3YtMy4zM2gzLjMzdjMuMzNabTUuODM1LTMuMzN2My4zM2gzLjMzdi0zLjMzaC0zLjMzWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Retention = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-retention',
        'staticon-Retention',
        className
      ),
      ...props,
    })
);
Retention.displayName = 'Retention'

export default Retention;
