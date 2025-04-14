
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M3.75 2.874a.625.625 0 0 0 0 1.25h.337v.645c0 1.863.784 3.64 2.162 4.896l.06.056a.375.375 0 0 1 0 .554l-.07.064a6.625 6.625 0 0 0-2.161 4.874l-.002.664H3.75a.625.625 0 0 0 0 1.25h12.5a.625.625 0 1 0 0-1.25h-.314l-.002-.664a6.625 6.625 0 0 0-2.162-4.874l-.07-.064a.375.375 0 0 1 0-.554l.061-.056a6.625 6.625 0 0 0 2.162-4.896v-.645h.325a.625.625 0 0 0 0-1.25H3.75Zm10.936 13.003h-9.36l.002-.66a5.375 5.375 0 0 1 1.754-3.955l.07-.063a1.625 1.625 0 0 0 0-2.402L7.09 8.74a5.375 5.375 0 0 1-1.754-3.972v-.645h9.338v.645A5.375 5.375 0 0 1 12.92 8.74l-.061.056a1.625 1.625 0 0 0 0 2.402l.07.063a5.375 5.375 0 0 1 1.754 3.955l.002.66Zm-1.372-9.932-.095.268a4.638 4.638 0 0 1-2.727 2.791 1.394 1.394 0 0 1-.99 0 4.63 4.63 0 0 1-2.72-2.786l-.096-.273a.395.395 0 0 1 .373-.527h5.882c.273 0 .464.27.373.527Z","clip-rule":"evenodd"}]]

/**
 * @component @name Waiting
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMy43NSAyLjg3NGEuNjI1LjYyNSAwIDAgMCAwIDEuMjVoLjMzN3YuNjQ1YzAgMS44NjMuNzg0IDMuNjQgMi4xNjIgNC44OTZsLjA2LjA1NmEuMzc1LjM3NSAwIDAgMSAwIC41NTRsLS4wNy4wNjRhNi42MjUgNi42MjUgMCAwIDAtMi4xNjEgNC44NzRsLS4wMDIuNjY0SDMuNzVhLjYyNS42MjUgMCAwIDAgMCAxLjI1aDEyLjVhLjYyNS42MjUgMCAxIDAgMC0xLjI1aC0uMzE0bC0uMDAyLS42NjRhNi42MjUgNi42MjUgMCAwIDAtMi4xNjItNC44NzRsLS4wNy0uMDY0YS4zNzUuMzc1IDAgMCAxIDAtLjU1NGwuMDYxLS4wNTZhNi42MjUgNi42MjUgMCAwIDAgMi4xNjItNC44OTZ2LS42NDVoLjMyNWEuNjI1LjYyNSAwIDAgMCAwLTEuMjVIMy43NVptMTAuOTM2IDEzLjAwM2gtOS4zNmwuMDAyLS42NmE1LjM3NSA1LjM3NSAwIDAgMSAxLjc1NC0zLjk1NWwuMDctLjA2M2ExLjYyNSAxLjYyNSAwIDAgMCAwLTIuNDAyTDcuMDkgOC43NGE1LjM3NSA1LjM3NSAwIDAgMS0xLjc1NC0zLjk3MnYtLjY0NWg5LjMzOHYuNjQ1QTUuMzc1IDUuMzc1IDAgMCAxIDEyLjkyIDguNzRsLS4wNjEuMDU2YTEuNjI1IDEuNjI1IDAgMCAwIDAgMi40MDJsLjA3LjA2M2E1LjM3NSA1LjM3NSAwIDAgMSAxLjc1NCAzLjk1NWwuMDAyLjY2Wm0tMS4zNzItOS45MzItLjA5NS4yNjhhNC42MzggNC42MzggMCAwIDEtMi43MjcgMi43OTEgMS4zOTQgMS4zOTQgMCAwIDEtLjk5IDAgNC42MyA0LjYzIDAgMCAxLTIuNzItMi43ODZsLS4wOTYtLjI3M2EuMzk1LjM5NSAwIDAgMSAuMzczLS41MjdoNS44ODJjLjI3MyAwIC40NjQuMjcuMzczLjUyN1oiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Waiting = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-waiting',
        'staticon-Waiting',
        className
      ),
      ...props,
    })
);
Waiting.displayName = 'Waiting'

export default Waiting;
