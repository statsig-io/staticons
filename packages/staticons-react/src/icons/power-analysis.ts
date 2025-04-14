
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M16.526 2.002c.345 0 .625.28.625.625v7.974a.625.625 0 0 1-1.25 0V2.627c0-.345.28-.625.625-.625Zm-5.32 1.544a.625.625 0 1 0-1.25 0v4.432a5.313 5.313 0 0 0-1.748-.61v-2.34a.6.6 0 0 0-1.2 0V7.31a5.35 5.35 0 1 0 5.626 6.159h4.743a.625.625 0 1 0 0-1.25h-4.698a5.33 5.33 0 0 0-1.473-3.275V3.546Zm2.348 1.044c.345 0 .625.28.625.625v5.387a.625.625 0 1 1-1.25 0V5.215c0-.345.28-.625.625-.625ZM7.347 8.5a4.148 4.148 0 1 0 0 8.297 4.148 4.148 0 0 0 0-8.297Zm-.262 1.422c.345 0 .625.28.625.625v1.728l1.536.434a.625.625 0 0 1-.34 1.203l-1.94-.548a.625.625 0 0 1-.506-.614v-2.203c0-.345.28-.625.625-.625Z","clip-rule":"evenodd"}]]

/**
 * @component @name PowerAnalysis
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTYuNTI2IDIuMDAyYy4zNDUgMCAuNjI1LjI4LjYyNS42MjV2Ny45NzRhLjYyNS42MjUgMCAwIDEtMS4yNSAwVjIuNjI3YzAtLjM0NS4yOC0uNjI1LjYyNS0uNjI1Wm0tNS4zMiAxLjU0NGEuNjI1LjYyNSAwIDEgMC0xLjI1IDB2NC40MzJhNS4zMTMgNS4zMTMgMCAwIDAtMS43NDgtLjYxdi0yLjM0YS42LjYgMCAwIDAtMS4yIDBWNy4zMWE1LjM1IDUuMzUgMCAxIDAgNS42MjYgNi4xNTloNC43NDNhLjYyNS42MjUgMCAxIDAgMC0xLjI1aC00LjY5OGE1LjMzIDUuMzMgMCAwIDAtMS40NzMtMy4yNzVWMy41NDZabTIuMzQ4IDEuMDQ0Yy4zNDUgMCAuNjI1LjI4LjYyNS42MjV2NS4zODdhLjYyNS42MjUgMCAxIDEtMS4yNSAwVjUuMjE1YzAtLjM0NS4yOC0uNjI1LjYyNS0uNjI1Wk03LjM0NyA4LjVhNC4xNDggNC4xNDggMCAxIDAgMCA4LjI5NyA0LjE0OCA0LjE0OCAwIDAgMCAwLTguMjk3Wm0tLjI2MiAxLjQyMmMuMzQ1IDAgLjYyNS4yOC42MjUuNjI1djEuNzI4bDEuNTM2LjQzNGEuNjI1LjYyNSAwIDAgMS0uMzQgMS4yMDNsLTEuOTQtLjU0OGEuNjI1LjYyNSAwIDAgMS0uNTA2LS42MTR2LTIuMjAzYzAtLjM0NS4yOC0uNjI1LjYyNS0uNjI1WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const PowerAnalysis = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-power-analysis',
        'staticon-PowerAnalysis',
        className
      ),
      ...props,
    })
);
PowerAnalysis.displayName = 'PowerAnalysis'

export default PowerAnalysis;
