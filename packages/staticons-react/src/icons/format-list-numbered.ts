
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M1 2.496c0-.345.28-.625.625-.625h1.09c.427 0 .774.347.774.775v3.615a.625.625 0 1 1-1.25 0v-3.14h-.614A.625.625 0 0 1 1 2.496Zm5.077 1.176c0-.345.28-.625.625-.625h7.673a.625.625 0 1 1 0 1.25H6.702a.625.625 0 0 1-.625-.625Zm0 4.32c0-.345.28-.624.625-.624h7.673a.625.625 0 1 1 0 1.25H6.702a.625.625 0 0 1-.625-.625Zm.625 3.706a.625.625 0 1 0 0 1.25h7.673a.625.625 0 1 0 0-1.25H6.702Zm-3.58-2.19c-.88-.358-1.74.105-2.05.701a.625.625 0 0 0 1.108.578.34.34 0 0 1 .164-.125.397.397 0 0 1 .306.004.297.297 0 0 1 .157.192.267.267 0 0 1-.001.14.525.525 0 0 1-.133.217c-.05.053-.138.13-.288.262-.137.12-.306.27-.472.435-.307.307-.716.778-.81 1.351-.085.524.355.865.746.865h1.63a.625.625 0 1 0 0-1.25h-.762a8.607 8.607 0 0 1 .492-.46l.03-.028c.119-.103.253-.22.348-.322.431-.463.56-1.018.43-1.522a1.544 1.544 0 0 0-.895-1.038Z","clip-rule":"evenodd"}]]

/**
 * @component @name FormatListNumbered
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMSAyLjQ5NmMwLS4zNDUuMjgtLjYyNS42MjUtLjYyNWgxLjA5Yy40MjcgMCAuNzc0LjM0Ny43NzQuNzc1djMuNjE1YS42MjUuNjI1IDAgMSAxLTEuMjUgMHYtMy4xNGgtLjYxNEEuNjI1LjYyNSAwIDAgMSAxIDIuNDk2Wm01LjA3NyAxLjE3NmMwLS4zNDUuMjgtLjYyNS42MjUtLjYyNWg3LjY3M2EuNjI1LjYyNSAwIDEgMSAwIDEuMjVINi43MDJhLjYyNS42MjUgMCAwIDEtLjYyNS0uNjI1Wm0wIDQuMzJjMC0uMzQ1LjI4LS42MjQuNjI1LS42MjRoNy42NzNhLjYyNS42MjUgMCAxIDEgMCAxLjI1SDYuNzAyYS42MjUuNjI1IDAgMCAxLS42MjUtLjYyNVptLjYyNSAzLjcwNmEuNjI1LjYyNSAwIDEgMCAwIDEuMjVoNy42NzNhLjYyNS42MjUgMCAxIDAgMC0xLjI1SDYuNzAyWm0tMy41OC0yLjE5Yy0uODgtLjM1OC0xLjc0LjEwNS0yLjA1LjcwMWEuNjI1LjYyNSAwIDAgMCAxLjEwOC41NzguMzQuMzQgMCAwIDEgLjE2NC0uMTI1LjM5Ny4zOTcgMCAwIDEgLjMwNi4wMDQuMjk3LjI5NyAwIDAgMSAuMTU3LjE5Mi4yNjcuMjY3IDAgMCAxLS4wMDEuMTQuNTI1LjUyNSAwIDAgMS0uMTMzLjIxN2MtLjA1LjA1My0uMTM4LjEzLS4yODguMjYyLS4xMzcuMTItLjMwNi4yNy0uNDcyLjQzNS0uMzA3LjMwNy0uNzE2Ljc3OC0uODEgMS4zNTEtLjA4NS41MjQuMzU1Ljg2NS43NDYuODY1aDEuNjNhLjYyNS42MjUgMCAxIDAgMC0xLjI1aC0uNzYyYTguNjA3IDguNjA3IDAgMCAxIC40OTItLjQ2bC4wMy0uMDI4Yy4xMTktLjEwMy4yNTMtLjIyLjM0OC0uMzIyLjQzMS0uNDYzLjU2LTEuMDE4LjQzLTEuNTIyYTEuNTQ0IDEuNTQ0IDAgMCAwLS44OTUtMS4wMzhaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const FormatListNumbered = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-format-list-numbered',
        'staticon-FormatListNumbered',
        className
      ),
      ...props,
    })
);
FormatListNumbered.displayName = 'FormatListNumbered'

export default FormatListNumbered;
