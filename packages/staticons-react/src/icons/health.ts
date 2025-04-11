
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M3.375 17.876a2.75 2.75 0 0 0 2.75 2.75h11.75a2.75 2.75 0 0 0 2.75-2.75V6.123a2.75 2.75 0 0 0-2.75-2.75H6.125a2.75 2.75 0 0 0-2.75 2.75v11.753Zm2.75 1.25c-.69 0-1.25-.56-1.25-1.25V12.75h3.473a1.25 1.25 0 0 0 1.183-.848l1.051-3.095 1.64 7.59c.267 1.24 1.997 1.339 2.405.138l1.283-3.785h3.215v5.125c0 .69-.56 1.25-1.25 1.25H6.125Zm13-7.875V6.123c0-.69-.56-1.25-1.25-1.25H6.125c-.69 0-1.25.56-1.25 1.25v5.128h3.294l1.283-3.78c.408-1.201 2.138-1.102 2.406.137l1.638 7.59 1.051-3.099a1.25 1.25 0 0 1 1.184-.848h3.394Z","clip-rule":"evenodd"}]]

/**
 * @component @name Health
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMy4zNzUgMTcuODc2YTIuNzUgMi43NSAwIDAgMCAyLjc1IDIuNzVoMTEuNzVhMi43NSAyLjc1IDAgMCAwIDIuNzUtMi43NVY2LjEyM2EyLjc1IDIuNzUgMCAwIDAtMi43NS0yLjc1SDYuMTI1YTIuNzUgMi43NSAwIDAgMC0yLjc1IDIuNzV2MTEuNzUzWm0yLjc1IDEuMjVjLS42OSAwLTEuMjUtLjU2LTEuMjUtMS4yNVYxMi43NWgzLjQ3M2ExLjI1IDEuMjUgMCAwIDAgMS4xODMtLjg0OGwxLjA1MS0zLjA5NSAxLjY0IDcuNTljLjI2NyAxLjI0IDEuOTk3IDEuMzM5IDIuNDA1LjEzOGwxLjI4My0zLjc4NWgzLjIxNXY1LjEyNWMwIC42OS0uNTYgMS4yNS0xLjI1IDEuMjVINi4xMjVabTEzLTcuODc1VjYuMTIzYzAtLjY5LS41Ni0xLjI1LTEuMjUtMS4yNUg2LjEyNWMtLjY5IDAtMS4yNS41Ni0xLjI1IDEuMjV2NS4xMjhoMy4yOTRsMS4yODMtMy43OGMuNDA4LTEuMjAxIDIuMTM4LTEuMTAyIDIuNDA2LjEzN2wxLjYzOCA3LjU5IDEuMDUxLTMuMDk5YTEuMjUgMS4yNSAwIDAgMSAxLjE4NC0uODQ4aDMuMzk0WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Health = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-health',
        'staticon-Health',
        className
      ),
      ...props,
    })
);
Health.displayName = 'Health'

export default Health;
