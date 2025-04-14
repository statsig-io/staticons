
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M2.501 15.375c0 1.174.952 2.125 2.125 2.125h10.747a2.125 2.125 0 0 0 2.125-2.125V4.626a2.125 2.125 0 0 0-2.125-2.125H4.626a2.125 2.125 0 0 0-2.125 2.125v10.75Zm2.125.875a.875.875 0 0 1-.875-.875V10.65h3.212a.902.902 0 0 0 .844-.584l.961-2.549 1.57 6.543c.207.865 1.408.94 1.721.108l1.325-3.518h2.864v4.725a.875.875 0 0 1-.875.875H4.626Zm11.622-6.904h-3.142a.902.902 0 0 0-.844.584l-.962 2.552L9.732 5.94C9.524 5.075 8.324 5 8.01 5.832L6.685 9.346H3.75v-4.72c0-.483.392-.875.875-.875h10.747c.484 0 .875.392.875.875v4.72Z","clip-rule":"evenodd"}]]

/**
 * @component @name Health
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMi41MDEgMTUuMzc1YzAgMS4xNzQuOTUyIDIuMTI1IDIuMTI1IDIuMTI1aDEwLjc0N2EyLjEyNSAyLjEyNSAwIDAgMCAyLjEyNS0yLjEyNVY0LjYyNmEyLjEyNSAyLjEyNSAwIDAgMC0yLjEyNS0yLjEyNUg0LjYyNmEyLjEyNSAyLjEyNSAwIDAgMC0yLjEyNSAyLjEyNXYxMC43NVptMi4xMjUuODc1YS44NzUuODc1IDAgMCAxLS44NzUtLjg3NVYxMC42NWgzLjIxMmEuOTAyLjkwMiAwIDAgMCAuODQ0LS41ODRsLjk2MS0yLjU0OSAxLjU3IDYuNTQzYy4yMDcuODY1IDEuNDA4Ljk0IDEuNzIxLjEwOGwxLjMyNS0zLjUxOGgyLjg2NHY0LjcyNWEuODc1Ljg3NSAwIDAgMS0uODc1Ljg3NUg0LjYyNlptMTEuNjIyLTYuOTA0aC0zLjE0MmEuOTAyLjkwMiAwIDAgMC0uODQ0LjU4NGwtLjk2MiAyLjU1Mkw5LjczMiA1Ljk0QzkuNTI0IDUuMDc1IDguMzI0IDUgOC4wMSA1LjgzMkw2LjY4NSA5LjM0NkgzLjc1di00LjcyYzAtLjQ4My4zOTItLjg3NS44NzUtLjg3NWgxMC43NDdjLjQ4NCAwIC44NzUuMzkyLjg3NS44NzV2NC43MloiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
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
