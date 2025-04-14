
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M4.125 6.571a2.445 2.445 0 1 1 4.89 0 2.445 2.445 0 0 1-4.89 0ZM6.57 5.377a1.194 1.194 0 1 0 0 2.388 1.194 1.194 0 0 0 0-2.388Z","clip-rule":"evenodd"}],["path",{"d":"M4.581 15.704a.626.626 0 0 1-.022-.885l9.976-10.495a.625.625 0 0 1 .907.862L5.465 15.68a.625.625 0 0 1-.884.023Z"}],["path",{"fill-rule":"evenodd","d":"M13.43 10.98a2.445 2.445 0 1 0 0 4.89 2.445 2.445 0 0 0 0-4.89Zm-1.194 2.445a1.194 1.194 0 1 1 2.388 0 1.194 1.194 0 0 1-2.388 0Z","clip-rule":"evenodd"}]]

/**
 * @component @name Percentage
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNC4xMjUgNi41NzFhMi40NDUgMi40NDUgMCAxIDEgNC44OSAwIDIuNDQ1IDIuNDQ1IDAgMCAxLTQuODkgMFpNNi41NyA1LjM3N2ExLjE5NCAxLjE5NCAwIDEgMCAwIDIuMzg4IDEuMTk0IDEuMTk0IDAgMCAwIDAtMi4zODhaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICA8cGF0aCBkPSJNNC41ODEgMTUuNzA0YS42MjYuNjI2IDAgMCAxLS4wMjItLjg4NWw5Ljk3Ni0xMC40OTVhLjYyNS42MjUgMCAwIDEgLjkwNy44NjJMNS40NjUgMTUuNjhhLjYyNS42MjUgMCAwIDEtLjg4NC4wMjNaIi8+CiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTMuNDMgMTAuOThhMi40NDUgMi40NDUgMCAxIDAgMCA0Ljg5IDIuNDQ1IDIuNDQ1IDAgMCAwIDAtNC44OVptLTEuMTk0IDIuNDQ1YTEuMTk0IDEuMTk0IDAgMSAxIDIuMzg4IDAgMS4xOTQgMS4xOTQgMCAwIDEtMi4zODggMFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Percentage = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-percentage',
        'staticon-Percentage',
        className
      ),
      ...props,
    })
);
Percentage.displayName = 'Percentage'

export default Percentage;
