
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M4.623 17.002a2.125 2.125 0 0 1-2.125-2.125V5.122c0-1.174.951-2.125 2.125-2.125h10.754c1.174 0 2.125.951 2.125 2.125v9.755a2.125 2.125 0 0 1-2.125 2.125H4.623Zm-.875-2.125c0 .483.392.875.875.875h10.754a.875.875 0 0 0 .875-.875V12.75H3.748v2.127Zm0-3.377h12.504V8.498H3.748V11.5Zm12.504-6.378v2.126H3.748V5.122c0-.483.392-.875.875-.875h10.754c.484 0 .875.392.875.875Z","clip-rule":"evenodd"}]]

/**
 * @component @name Samples
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNC42MjMgMTcuMDAyYTIuMTI1IDIuMTI1IDAgMCAxLTIuMTI1LTIuMTI1VjUuMTIyYzAtMS4xNzQuOTUxLTIuMTI1IDIuMTI1LTIuMTI1aDEwLjc1NGMxLjE3NCAwIDIuMTI1Ljk1MSAyLjEyNSAyLjEyNXY5Ljc1NWEyLjEyNSAyLjEyNSAwIDAgMS0yLjEyNSAyLjEyNUg0LjYyM1ptLS44NzUtMi4xMjVjMCAuNDgzLjM5Mi44NzUuODc1Ljg3NWgxMC43NTRhLjg3NS44NzUgMCAwIDAgLjg3NS0uODc1VjEyLjc1SDMuNzQ4djIuMTI3Wm0wLTMuMzc3aDEyLjUwNFY4LjQ5OEgzLjc0OFYxMS41Wm0xMi41MDQtNi4zNzh2Mi4xMjZIMy43NDhWNS4xMjJjMC0uNDgzLjM5Mi0uODc1Ljg3NS0uODc1aDEwLjc1NGMuNDg0IDAgLjg3NS4zOTIuODc1Ljg3NVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Samples = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-samples',
        'staticon-Samples',
        className
      ),
      ...props,
    })
);
Samples.displayName = 'Samples'

export default Samples;
