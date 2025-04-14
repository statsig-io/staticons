
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"d":"M7.206 3.252a.625.625 0 1 1 0-1.25h5.588a.625.625 0 1 1 0 1.25H7.206Zm1.073 5.114c.345 0 .625.28.625.625v4.725a.625.625 0 0 1-1.25 0V8.99c0-.345.28-.625.625-.625Zm3.441 0c.346 0 .626.28.626.625v4.725a.625.625 0 0 1-1.25 0V8.99c0-.345.28-.625.625-.625Z"}],["path",{"fill-rule":"evenodd","d":"M3.125 4.553a.625.625 0 1 0 0 1.25h.48l.696 10.214a2.125 2.125 0 0 0 2.12 1.981h7.158a2.125 2.125 0 0 0 2.12-1.98l.696-10.215h.48a.625.625 0 1 0 0-1.25H3.125Zm12.017 1.25H4.858l.69 10.13a.875.875 0 0 0 .873.815h7.158c.46 0 .842-.357.873-.816l.69-10.129Z","clip-rule":"evenodd"}]]

/**
 * @component @name Delete
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZD0iTTcuMjA2IDMuMjUyYS42MjUuNjI1IDAgMSAxIDAtMS4yNWg1LjU4OGEuNjI1LjYyNSAwIDEgMSAwIDEuMjVINy4yMDZabTEuMDczIDUuMTE0Yy4zNDUgMCAuNjI1LjI4LjYyNS42MjV2NC43MjVhLjYyNS42MjUgMCAwIDEtMS4yNSAwVjguOTljMC0uMzQ1LjI4LS42MjUuNjI1LS42MjVabTMuNDQxIDBjLjM0NiAwIC42MjYuMjguNjI2LjYyNXY0LjcyNWEuNjI1LjYyNSAwIDAgMS0xLjI1IDBWOC45OWMwLS4zNDUuMjgtLjYyNS42MjUtLjYyNVoiLz4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zLjEyNSA0LjU1M2EuNjI1LjYyNSAwIDEgMCAwIDEuMjVoLjQ4bC42OTYgMTAuMjE0YTIuMTI1IDIuMTI1IDAgMCAwIDIuMTIgMS45ODFoNy4xNThhMi4xMjUgMi4xMjUgMCAwIDAgMi4xMi0xLjk4bC42OTYtMTAuMjE1aC40OGEuNjI1LjYyNSAwIDEgMCAwLTEuMjVIMy4xMjVabTEyLjAxNyAxLjI1SDQuODU4bC42OSAxMC4xM2EuODc1Ljg3NSAwIDAgMCAuODczLjgxNWg3LjE1OGMuNDYgMCAuODQyLS4zNTcuODczLS44MTZsLjY5LTEwLjEyOVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Delete = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-delete',
        'staticon-Delete',
        className
      ),
      ...props,
    })
);
Delete.displayName = 'Delete'

export default Delete;
