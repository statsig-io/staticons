
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M4.992 5.29c-.047-.662.209-1.244.708-1.675.508-.437 1.294-.738 2.307-.738 1.948 0 3.006 1.443 3.006 2.456a.625.625 0 1 0 1.25 0c0-1.755-1.67-3.706-4.256-3.706-1.253 0-2.347.373-3.123 1.042-.784.676-1.215 1.635-1.14 2.708.065.918.502 1.549 1.089 1.997H1.375a.625.625 0 1 0 0 1.25h6.53l.266.08c.75.224 1.408.42 1.93.716.558.316.865.692.907 1.29.046.662-.21 1.243-.709 1.674-.507.438-1.294.738-2.307.738-1.948 0-3.006-1.443-3.006-2.456a.625.625 0 1 0-1.25 0c0 1.755 1.67 3.706 4.256 3.706 1.253 0 2.348-.372 3.124-1.041.784-.677 1.214-1.636 1.139-2.709-.065-.918-.505-1.55-1.093-1.998h3.464a.625.625 0 1 0 0-1.25H8.09l-.278-.083c-.749-.224-1.404-.42-1.921-.714-.553-.314-.858-.688-.9-1.287Z","clip-rule":"evenodd"}]]

/**
 * @component @name StrikethroughS
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNC45OTIgNS4yOWMtLjA0Ny0uNjYyLjIwOS0xLjI0NC43MDgtMS42NzUuNTA4LS40MzcgMS4yOTQtLjczOCAyLjMwNy0uNzM4IDEuOTQ4IDAgMy4wMDYgMS40NDMgMy4wMDYgMi40NTZhLjYyNS42MjUgMCAxIDAgMS4yNSAwYzAtMS43NTUtMS42Ny0zLjcwNi00LjI1Ni0zLjcwNi0xLjI1MyAwLTIuMzQ3LjM3My0zLjEyMyAxLjA0Mi0uNzg0LjY3Ni0xLjIxNSAxLjYzNS0xLjE0IDIuNzA4LjA2NS45MTguNTAyIDEuNTQ5IDEuMDg5IDEuOTk3SDEuMzc1YS42MjUuNjI1IDAgMSAwIDAgMS4yNWg2LjUzbC4yNjYuMDhjLjc1LjIyNCAxLjQwOC40MiAxLjkzLjcxNi41NTguMzE2Ljg2NS42OTIuOTA3IDEuMjkuMDQ2LjY2Mi0uMjEgMS4yNDMtLjcwOSAxLjY3NC0uNTA3LjQzOC0xLjI5NC43MzgtMi4zMDcuNzM4LTEuOTQ4IDAtMy4wMDYtMS40NDMtMy4wMDYtMi40NTZhLjYyNS42MjUgMCAxIDAtMS4yNSAwYzAgMS43NTUgMS42NyAzLjcwNiA0LjI1NiAzLjcwNiAxLjI1MyAwIDIuMzQ4LS4zNzIgMy4xMjQtMS4wNDEuNzg0LS42NzcgMS4yMTQtMS42MzYgMS4xMzktMi43MDktLjA2NS0uOTE4LS41MDUtMS41NS0xLjA5My0xLjk5OGgzLjQ2NGEuNjI1LjYyNSAwIDEgMCAwLTEuMjVIOC4wOWwtLjI3OC0uMDgzYy0uNzQ5LS4yMjQtMS40MDQtLjQyLTEuOTIxLS43MTQtLjU1My0uMzE0LS44NTgtLjY4OC0uOS0xLjI4N1oiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const StrikethroughS = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-strikethrough-s',
        'staticon-StrikethroughS',
        className
      ),
      ...props,
    })
);
StrikethroughS.displayName = 'StrikethroughS'

export default StrikethroughS;
