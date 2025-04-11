
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M16.196 7.26a6.035 6.035 0 1 0-9.1 7.274.75.75 0 1 1-.886 1.209A7.535 7.535 0 1 1 17.572 6.66a.75.75 0 1 1-1.376.598Zm-4.652-.446a2.99 2.99 0 0 1 1.75 1.497.75.75 0 1 0 1.338-.678 4.499 4.499 0 1 0-6.96 5.433.75.75 0 1 0 .982-1.133 3 3 0 0 1 2.89-5.12Zm7.34 10.348a.5.5 0 0 0 .288-.9l-6.044-4.505a.75.75 0 0 0-1.193.689l.879 7.486a.5.5 0 0 0 .925.2l.97-1.605a2.75 2.75 0 0 1 2.299-1.328l1.875-.037Zm1.185-2.103c1.527 1.138.749 3.565-1.156 3.603l-1.875.037a1.25 1.25 0 0 0-1.046.603l-.97 1.606c-.985 1.63-3.476 1.091-3.698-.8l-.879-7.487c-.23-1.96 1.997-3.246 3.58-2.067l6.044 4.505Z","clip-rule":"evenodd"}]]

/**
 * @component @name Clicks
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTYuMTk2IDcuMjZhNi4wMzUgNi4wMzUgMCAxIDAtOS4xIDcuMjc0Ljc1Ljc1IDAgMSAxLS44ODYgMS4yMDlBNy41MzUgNy41MzUgMCAxIDEgMTcuNTcyIDYuNjZhLjc1Ljc1IDAgMSAxLTEuMzc2LjU5OFptLTQuNjUyLS40NDZhMi45OSAyLjk5IDAgMCAxIDEuNzUgMS40OTcuNzUuNzUgMCAxIDAgMS4zMzgtLjY3OCA0LjQ5OSA0LjQ5OSAwIDEgMC02Ljk2IDUuNDMzLjc1Ljc1IDAgMSAwIC45ODItMS4xMzMgMyAzIDAgMCAxIDIuODktNS4xMlptNy4zNCAxMC4zNDhhLjUuNSAwIDAgMCAuMjg4LS45bC02LjA0NC00LjUwNWEuNzUuNzUgMCAwIDAtMS4xOTMuNjg5bC44NzkgNy40ODZhLjUuNSAwIDAgMCAuOTI1LjJsLjk3LTEuNjA1YTIuNzUgMi43NSAwIDAgMSAyLjI5OS0xLjMyOGwxLjg3NS0uMDM3Wm0xLjE4NS0yLjEwM2MxLjUyNyAxLjEzOC43NDkgMy41NjUtMS4xNTYgMy42MDNsLTEuODc1LjAzN2ExLjI1IDEuMjUgMCAwIDAtMS4wNDYuNjAzbC0uOTcgMS42MDZjLS45ODUgMS42My0zLjQ3NiAxLjA5MS0zLjY5OC0uOGwtLjg3OS03LjQ4N2MtLjIzLTEuOTYgMS45OTctMy4yNDYgMy41OC0yLjA2N2w2LjA0NCA0LjUwNVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Clicks = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-clicks',
        'staticon-Clicks',
        className
      ),
      ...props,
    })
);
Clicks.displayName = 'Clicks'

export default Clicks;
