
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M2 3.253c0-.622.504-1.126 1.126-1.126h4.468c.622 0 1.126.504 1.126 1.126v1.768c0 .622-.504 1.127-1.126 1.127H3.126A1.126 1.126 0 0 1 2 5.02V3.253Zm1.252.126v1.517h4.217V3.38H3.252ZM2 8.906c0-.622.504-1.126 1.126-1.126h4.468c.622 0 1.126.504 1.126 1.126v1.768c0 .622-.504 1.127-1.126 1.127H3.126A1.126 1.126 0 0 1 2 10.674V8.906Zm1.252.125v1.518h4.217V9.031H3.252Zm-.126 4.402c-.622 0-1.126.504-1.126 1.126v1.768c0 .622.504 1.127 1.126 1.127h4.468c.622 0 1.126-.505 1.126-1.127V14.56c0-.622-.504-1.126-1.126-1.126H3.126Zm.126 2.77v-1.518h4.217v1.517H3.252Z","clip-rule":"evenodd"}],["path",{"d":"m12.05 14.818.728-.728a.626.626 0 0 0-.885-.886l-1.619 1.62a.88.88 0 0 0 0 1.246l1.62 1.62a.625.625 0 1 0 .884-.886l-.734-.734h3.828A2.128 2.128 0 0 0 18 13.942V5.64a2.128 2.128 0 0 0-2.128-2.128h-5.246a.626.626 0 1 0 0 1.252h5.246c.484 0 .877.392.877.876v8.302a.876.876 0 0 1-.877.876H12.05Z"}]]

/**
 * @component @name Reorder
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMiAzLjI1M2MwLS42MjIuNTA0LTEuMTI2IDEuMTI2LTEuMTI2aDQuNDY4Yy42MjIgMCAxLjEyNi41MDQgMS4xMjYgMS4xMjZ2MS43NjhjMCAuNjIyLS41MDQgMS4xMjctMS4xMjYgMS4xMjdIMy4xMjZBMS4xMjYgMS4xMjYgMCAwIDEgMiA1LjAyVjMuMjUzWm0xLjI1Mi4xMjZ2MS41MTdoNC4yMTdWMy4zOEgzLjI1MlpNMiA4LjkwNmMwLS42MjIuNTA0LTEuMTI2IDEuMTI2LTEuMTI2aDQuNDY4Yy42MjIgMCAxLjEyNi41MDQgMS4xMjYgMS4xMjZ2MS43NjhjMCAuNjIyLS41MDQgMS4xMjctMS4xMjYgMS4xMjdIMy4xMjZBMS4xMjYgMS4xMjYgMCAwIDEgMiAxMC42NzRWOC45MDZabTEuMjUyLjEyNXYxLjUxOGg0LjIxN1Y5LjAzMUgzLjI1MlptLS4xMjYgNC40MDJjLS42MjIgMC0xLjEyNi41MDQtMS4xMjYgMS4xMjZ2MS43NjhjMCAuNjIyLjUwNCAxLjEyNyAxLjEyNiAxLjEyN2g0LjQ2OGMuNjIyIDAgMS4xMjYtLjUwNSAxLjEyNi0xLjEyN1YxNC41NmMwLS42MjItLjUwNC0xLjEyNi0xLjEyNi0xLjEyNkgzLjEyNlptLjEyNiAyLjc3di0xLjUxOGg0LjIxN3YxLjUxN0gzLjI1MloiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogIDxwYXRoIGQ9Im0xMi4wNSAxNC44MTguNzI4LS43MjhhLjYyNi42MjYgMCAwIDAtLjg4NS0uODg2bC0xLjYxOSAxLjYyYS44OC44OCAwIDAgMCAwIDEuMjQ2bDEuNjIgMS42MmEuNjI1LjYyNSAwIDEgMCAuODg0LS44ODZsLS43MzQtLjczNGgzLjgyOEEyLjEyOCAyLjEyOCAwIDAgMCAxOCAxMy45NDJWNS42NGEyLjEyOCAyLjEyOCAwIDAgMC0yLjEyOC0yLjEyOGgtNS4yNDZhLjYyNi42MjYgMCAxIDAgMCAxLjI1Mmg1LjI0NmMuNDg0IDAgLjg3Ny4zOTIuODc3Ljg3NnY4LjMwMmEuODc2Ljg3NiAwIDAgMS0uODc3Ljg3NkgxMi4wNVoiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Reorder = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-reorder',
        'staticon-Reorder',
        className
      ),
      ...props,
    })
);
Reorder.displayName = 'Reorder'

export default Reorder;
