
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M10 3.751a6.238 6.238 0 0 0-4.948 2.432h1.692a.625.625 0 1 1 0 1.25H3.819a.875.875 0 0 1-.875-.875V3.634a.625.625 0 0 1 1.25 0v1.62A7.499 7.499 0 1 1 2.501 10v-.047l.001-.186a.625.625 0 1 1 1.25.037V10A6.249 6.249 0 1 0 10 3.75Zm.62 2.722a.625.625 0 1 0-1.25 0v3.704c0 .275.177.509.424.592l3.093 1.554a.625.625 0 1 0 .56-1.117l-2.827-1.42V6.472Z","clip-rule":"evenodd"}]]

/**
 * @component @name History
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTAgMy43NTFhNi4yMzggNi4yMzggMCAwIDAtNC45NDggMi40MzJoMS42OTJhLjYyNS42MjUgMCAxIDEgMCAxLjI1SDMuODE5YS44NzUuODc1IDAgMCAxLS44NzUtLjg3NVYzLjYzNGEuNjI1LjYyNSAwIDAgMSAxLjI1IDB2MS42MkE3LjQ5OSA3LjQ5OSAwIDEgMSAyLjUwMSAxMHYtLjA0N2wuMDAxLS4xODZhLjYyNS42MjUgMCAxIDEgMS4yNS4wMzdWMTBBNi4yNDkgNi4yNDkgMCAxIDAgMTAgMy43NVptLjYyIDIuNzIyYS42MjUuNjI1IDAgMSAwLTEuMjUgMHYzLjcwNGMwIC4yNzUuMTc3LjUwOS40MjQuNTkybDMuMDkzIDEuNTU0YS42MjUuNjI1IDAgMSAwIC41Ni0xLjExN2wtMi44MjctMS40MlY2LjQ3MloiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const History = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-history',
        'staticon-History',
        className
      ),
      ...props,
    })
);
History.displayName = 'History'

export default History;
