
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M13.16 7.287c-.419-1.047-1.902-1.047-2.32 0L10.313 8.6a1.25 1.25 0 0 1-.696.697l-1.313.525c-1.048.419-1.048 1.902 0 2.321l1.313.525c.317.127.57.379.696.696l.525 1.313c.42 1.048 1.902 1.048 2.322 0l.525-1.313a1.25 1.25 0 0 1 .696-.696l1.313-.525c1.047-.42 1.047-1.902 0-2.321l-1.313-.525a1.25 1.25 0 0 1-.696-.697l-.525-1.313Zm-1.453 1.87L12 8.425l.293.732a2.75 2.75 0 0 0 1.532 1.532l.732.293-.732.293a2.75 2.75 0 0 0-1.532 1.532L12 13.54l-.293-.733a2.75 2.75 0 0 0-1.532-1.532l-.733-.293.733-.293a2.75 2.75 0 0 0 1.532-1.532Z","clip-rule":"evenodd"}],["path",{"fill":"#000","fill-rule":"evenodd","d":"M5.75 3.5A2.75 2.75 0 0 0 3 6.25v6.64a2.75 2.75 0 0 0 1.062 2.17l6.25 4.86a2.75 2.75 0 0 0 3.376 0l6.25-4.86A2.75 2.75 0 0 0 21 12.89V6.25a2.75 2.75 0 0 0-2.75-2.75H5.75ZM4.5 6.25C4.5 5.56 5.06 5 5.75 5h12.5c.69 0 1.25.56 1.25 1.25v6.64c0 .385-.178.75-.483.986l-6.25 4.86a1.25 1.25 0 0 1-1.534 0l-6.25-4.86a1.25 1.25 0 0 1-.483-.987V6.25Z","clip-rule":"evenodd"}]]

/**
 * @component @name Pro
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTMuMTYgNy4yODdjLS40MTktMS4wNDctMS45MDItMS4wNDctMi4zMiAwTDEwLjMxMyA4LjZhMS4yNSAxLjI1IDAgMCAxLS42OTYuNjk3bC0xLjMxMy41MjVjLTEuMDQ4LjQxOS0xLjA0OCAxLjkwMiAwIDIuMzIxbDEuMzEzLjUyNWMuMzE3LjEyNy41Ny4zNzkuNjk2LjY5NmwuNTI1IDEuMzEzYy40MiAxLjA0OCAxLjkwMiAxLjA0OCAyLjMyMiAwbC41MjUtMS4zMTNhMS4yNSAxLjI1IDAgMCAxIC42OTYtLjY5NmwxLjMxMy0uNTI1YzEuMDQ3LS40MiAxLjA0Ny0xLjkwMiAwLTIuMzIxbC0xLjMxMy0uNTI1YTEuMjUgMS4yNSAwIDAgMS0uNjk2LS42OTdsLS41MjUtMS4zMTNabS0xLjQ1MyAxLjg3TDEyIDguNDI1bC4yOTMuNzMyYTIuNzUgMi43NSAwIDAgMCAxLjUzMiAxLjUzMmwuNzMyLjI5My0uNzMyLjI5M2EyLjc1IDIuNzUgMCAwIDAtMS41MzIgMS41MzJMMTIgMTMuNTRsLS4yOTMtLjczM2EyLjc1IDIuNzUgMCAwIDAtMS41MzItMS41MzJsLS43MzMtLjI5My43MzMtLjI5M2EyLjc1IDIuNzUgMCAwIDAgMS41MzItMS41MzJaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICA8cGF0aCBmaWxsPSIjMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01Ljc1IDMuNUEyLjc1IDIuNzUgMCAwIDAgMyA2LjI1djYuNjRhMi43NSAyLjc1IDAgMCAwIDEuMDYyIDIuMTdsNi4yNSA0Ljg2YTIuNzUgMi43NSAwIDAgMCAzLjM3NiAwbDYuMjUtNC44NkEyLjc1IDIuNzUgMCAwIDAgMjEgMTIuODlWNi4yNWEyLjc1IDIuNzUgMCAwIDAtMi43NS0yLjc1SDUuNzVaTTQuNSA2LjI1QzQuNSA1LjU2IDUuMDYgNSA1Ljc1IDVoMTIuNWMuNjkgMCAxLjI1LjU2IDEuMjUgMS4yNXY2LjY0YzAgLjM4NS0uMTc4Ljc1LS40ODMuOTg2bC02LjI1IDQuODZhMS4yNSAxLjI1IDAgMCAxLTEuNTM0IDBsLTYuMjUtNC44NmExLjI1IDEuMjUgMCAwIDEtLjQ4My0uOTg3VjYuMjVaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Pro = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-pro',
        'staticon-Pro',
        className
      ),
      ...props,
    })
);
Pro.displayName = 'Pro'

export default Pro;
