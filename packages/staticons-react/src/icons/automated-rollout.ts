
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M4.375 12.372c1.094 0 2.017-.74 2.292-1.749h1.065a2.377 2.377 0 0 0 4.584 0h1.017A2.377 2.377 0 0 0 18 10a2.375 2.375 0 0 0-4.666-.626h-1.018a2.377 2.377 0 0 0-4.584 0H6.667A2.377 2.377 0 0 0 2 10a2.375 2.375 0 0 0 2.375 2.373ZM5.5 9.999a1.125 1.125 0 0 1-2.25 0 1.125 1.125 0 0 1 2.25 0Zm5.649 0a1.125 1.125 0 0 1-2.25 0 1.125 1.125 0 0 1 2.25 0Zm5.601 0a1.125 1.125 0 0 1-2.25 0 1.125 1.125 0 0 1 2.25 0Z","clip-rule":"evenodd"}]]

/**
 * @component @name AutomatedRollout
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNC4zNzUgMTIuMzcyYzEuMDk0IDAgMi4wMTctLjc0IDIuMjkyLTEuNzQ5aDEuMDY1YTIuMzc3IDIuMzc3IDAgMCAwIDQuNTg0IDBoMS4wMTdBMi4zNzcgMi4zNzcgMCAwIDAgMTggMTBhMi4zNzUgMi4zNzUgMCAwIDAtNC42NjYtLjYyNmgtMS4wMThhMi4zNzcgMi4zNzcgMCAwIDAtNC41ODQgMEg2LjY2N0EyLjM3NyAyLjM3NyAwIDAgMCAyIDEwYTIuMzc1IDIuMzc1IDAgMCAwIDIuMzc1IDIuMzczWk01LjUgOS45OTlhMS4xMjUgMS4xMjUgMCAwIDEtMi4yNSAwIDEuMTI1IDEuMTI1IDAgMCAxIDIuMjUgMFptNS42NDkgMGExLjEyNSAxLjEyNSAwIDAgMS0yLjI1IDAgMS4xMjUgMS4xMjUgMCAwIDEgMi4yNSAwWm01LjYwMSAwYTEuMTI1IDEuMTI1IDAgMCAxLTIuMjUgMCAxLjEyNSAxLjEyNSAwIDAgMSAyLjI1IDBaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const AutomatedRollout = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-automated-rollout',
        'staticon-AutomatedRollout',
        className
      ),
      ...props,
    })
);
AutomatedRollout.displayName = 'AutomatedRollout'

export default AutomatedRollout;
