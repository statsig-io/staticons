
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M10 16.376A6.376 6.376 0 1 0 3.624 10a5.02 5.02 0 0 0 1.509 3.578l-.873.895A6.27 6.27 0 0 1 2.374 10 7.626 7.626 0 1 1 10 17.626H4.055c-1.229 0-1.743-1.57-.752-2.296l.026-.02h.002l.396-.29.522-.383a.108.108 0 0 0 .01-.164l.874-.895c.587.574.546 1.56-.145 2.067l-.946.693a.158.158 0 0 0-.01.009.072.072 0 0 0 .009.028l.014.001H10Zm.002-9.328c-.874 0-1.447.606-1.512 1.215a.625.625 0 0 1-1.243-.133c.137-1.28 1.279-2.332 2.755-2.332.701 0 1.37.199 1.88.609.523.418.846 1.032.873 1.767a2.302 2.302 0 0 1-.416 1.455c-.268.378-.626.652-.955.87-.508.339-.759.734-.759 1.196a.625.625 0 0 1-1.25 0c0-1.014.589-1.752 1.317-2.236.289-.192.493-.364.626-.551.12-.17.2-.379.188-.688a1.076 1.076 0 0 0-.405-.838c-.249-.2-.625-.334-1.099-.334Zm.678 6.51a.679.679 0 1 0-1.357 0 .679.679 0 0 0 1.357 0Z","clip-rule":"evenodd"}]]

/**
 * @component @name Hypothesis
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTAgMTYuMzc2QTYuMzc2IDYuMzc2IDAgMSAwIDMuNjI0IDEwYTUuMDIgNS4wMiAwIDAgMCAxLjUwOSAzLjU3OGwtLjg3My44OTVBNi4yNyA2LjI3IDAgMCAxIDIuMzc0IDEwIDcuNjI2IDcuNjI2IDAgMSAxIDEwIDE3LjYyNkg0LjA1NWMtMS4yMjkgMC0xLjc0My0xLjU3LS43NTItMi4yOTZsLjAyNi0uMDJoLjAwMmwuMzk2LS4yOS41MjItLjM4M2EuMTA4LjEwOCAwIDAgMCAuMDEtLjE2NGwuODc0LS44OTVjLjU4Ny41NzQuNTQ2IDEuNTYtLjE0NSAyLjA2N2wtLjk0Ni42OTNhLjE1OC4xNTggMCAwIDAtLjAxLjAwOS4wNzIuMDcyIDAgMCAwIC4wMDkuMDI4bC4wMTQuMDAxSDEwWm0uMDAyLTkuMzI4Yy0uODc0IDAtMS40NDcuNjA2LTEuNTEyIDEuMjE1YS42MjUuNjI1IDAgMCAxLTEuMjQzLS4xMzNjLjEzNy0xLjI4IDEuMjc5LTIuMzMyIDIuNzU1LTIuMzMyLjcwMSAwIDEuMzcuMTk5IDEuODguNjA5LjUyMy40MTguODQ2IDEuMDMyLjg3MyAxLjc2N2EyLjMwMiAyLjMwMiAwIDAgMS0uNDE2IDEuNDU1Yy0uMjY4LjM3OC0uNjI2LjY1Mi0uOTU1Ljg3LS41MDguMzM5LS43NTkuNzM0LS43NTkgMS4xOTZhLjYyNS42MjUgMCAwIDEtMS4yNSAwYzAtMS4wMTQuNTg5LTEuNzUyIDEuMzE3LTIuMjM2LjI4OS0uMTkyLjQ5My0uMzY0LjYyNi0uNTUxLjEyLS4xNy4yLS4zNzkuMTg4LS42ODhhMS4wNzYgMS4wNzYgMCAwIDAtLjQwNS0uODM4Yy0uMjQ5LS4yLS42MjUtLjMzNC0xLjA5OS0uMzM0Wm0uNjc4IDYuNTFhLjY3OS42NzkgMCAxIDAtMS4zNTcgMCAuNjc5LjY3OSAwIDAgMCAxLjM1NyAwWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Hypothesis = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-hypothesis',
        'staticon-Hypothesis',
        className
      ),
      ...props,
    })
);
Hypothesis.displayName = 'Hypothesis'

export default Hypothesis;
