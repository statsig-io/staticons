
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M8.114 15.124A.875.875 0 0 1 7.24 16H4.623a.875.875 0 0 1-.875-.875V4.875c0-.483.392-.875.875-.875H7.24c.483 0 .875.392.875.875v.656a4.85 4.85 0 0 0 0 8.937v.656Zm1.25-.317v.317A2.125 2.125 0 0 1 7.24 17.25H4.623a2.125 2.125 0 0 1-2.125-2.125V4.875c0-1.174.951-2.125 2.125-2.125H7.24c1.174 0 2.125.951 2.125 2.125v.317a4.894 4.894 0 0 1 1.272 0v-.317c0-1.174.951-2.125 2.125-2.125h2.616c1.173 0 2.125.951 2.125 2.125v10.25a2.125 2.125 0 0 1-2.125 2.124H12.76a2.125 2.125 0 0 1-2.125-2.125v-.317a4.9 4.9 0 0 1-1.272 0Zm2.522-.339v.656c0 .483.391.875.875.875h2.616a.875.875 0 0 0 .875-.875V4.875A.875.875 0 0 0 15.377 4H12.76a.875.875 0 0 0-.875.875v.656a4.85 4.85 0 0 1 0 8.937ZM6.4 10a3.599 3.599 0 1 1 7.198 0A3.599 3.599 0 0 1 6.4 10Zm4.224-2.019a.625.625 0 1 0-1.25 0v1.392H7.982a.625.625 0 1 0 0 1.25h1.393v1.394a.625.625 0 1 0 1.25 0v-1.394h1.393a.625.625 0 1 0 0-1.25h-1.393V7.981Z","clip-rule":"evenodd"}]]

/**
 * @component @name CombineColumns
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOC4xMTQgMTUuMTI0QS44NzUuODc1IDAgMCAxIDcuMjQgMTZINC42MjNhLjg3NS44NzUgMCAwIDEtLjg3NS0uODc1VjQuODc1YzAtLjQ4My4zOTItLjg3NS44NzUtLjg3NUg3LjI0Yy40ODMgMCAuODc1LjM5Mi44NzUuODc1di42NTZhNC44NSA0Ljg1IDAgMCAwIDAgOC45Mzd2LjY1NlptMS4yNS0uMzE3di4zMTdBMi4xMjUgMi4xMjUgMCAwIDEgNy4yNCAxNy4yNUg0LjYyM2EyLjEyNSAyLjEyNSAwIDAgMS0yLjEyNS0yLjEyNVY0Ljg3NWMwLTEuMTc0Ljk1MS0yLjEyNSAyLjEyNS0yLjEyNUg3LjI0YzEuMTc0IDAgMi4xMjUuOTUxIDIuMTI1IDIuMTI1di4zMTdhNC44OTQgNC44OTQgMCAwIDEgMS4yNzIgMHYtLjMxN2MwLTEuMTc0Ljk1MS0yLjEyNSAyLjEyNS0yLjEyNWgyLjYxNmMxLjE3MyAwIDIuMTI1Ljk1MSAyLjEyNSAyLjEyNXYxMC4yNWEyLjEyNSAyLjEyNSAwIDAgMS0yLjEyNSAyLjEyNEgxMi43NmEyLjEyNSAyLjEyNSAwIDAgMS0yLjEyNS0yLjEyNXYtLjMxN2E0LjkgNC45IDAgMCAxLTEuMjcyIDBabTIuNTIyLS4zMzl2LjY1NmMwIC40ODMuMzkxLjg3NS44NzUuODc1aDIuNjE2YS44NzUuODc1IDAgMCAwIC44NzUtLjg3NVY0Ljg3NUEuODc1Ljg3NSAwIDAgMCAxNS4zNzcgNEgxMi43NmEuODc1Ljg3NSAwIDAgMC0uODc1Ljg3NXYuNjU2YTQuODUgNC44NSAwIDAgMSAwIDguOTM3Wk02LjQgMTBhMy41OTkgMy41OTkgMCAxIDEgNy4xOTggMEEzLjU5OSAzLjU5OSAwIDAgMSA2LjQgMTBabTQuMjI0LTIuMDE5YS42MjUuNjI1IDAgMSAwLTEuMjUgMHYxLjM5Mkg3Ljk4MmEuNjI1LjYyNSAwIDEgMCAwIDEuMjVoMS4zOTN2MS4zOTRhLjYyNS42MjUgMCAxIDAgMS4yNSAwdi0xLjM5NGgxLjM5M2EuNjI1LjYyNSAwIDEgMCAwLTEuMjVoLTEuMzkzVjcuOTgxWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const CombineColumns = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-combine-columns',
        'staticon-CombineColumns',
        className
      ),
      ...props,
    })
);
CombineColumns.displayName = 'CombineColumns'

export default CombineColumns;
