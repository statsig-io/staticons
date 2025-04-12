
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","d":"M8 11.895a1.326 1.326 0 1 0 0-2.653 1.326 1.326 0 0 0 0 2.653Z"}],["path",{"fill":"#000","fill-rule":"evenodd","d":"M4.413 4.216v1.472h-1.29c-1.036 0-1.875.84-1.875 1.875V13.5c0 1.036.839 1.875 1.875 1.875h9.754c1.036 0 1.875-.84 1.875-1.875V7.563c0-1.036-.84-1.875-1.875-1.875h-1.29V4.216a3.587 3.587 0 1 0-7.174 0Zm1.25 0v1.472h4.674V4.216a2.337 2.337 0 1 0-4.674 0Zm-2.54 2.722a.625.625 0 0 0-.625.625V13.5c0 .345.28.625.625.625h9.754c.345 0 .625-.28.625-.625V7.563a.625.625 0 0 0-.625-.625H3.123Z","clip-rule":"evenodd"}]]

/**
 * @component @name Private
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTggMTEuODk1YTEuMzI2IDEuMzI2IDAgMSAwIDAtMi42NTMgMS4zMjYgMS4zMjYgMCAwIDAgMCAyLjY1M1oiLz4KICA8cGF0aCBmaWxsPSIjMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00LjQxMyA0LjIxNnYxLjQ3MmgtMS4yOWMtMS4wMzYgMC0xLjg3NS44NC0xLjg3NSAxLjg3NVYxMy41YzAgMS4wMzYuODM5IDEuODc1IDEuODc1IDEuODc1aDkuNzU0YzEuMDM2IDAgMS44NzUtLjg0IDEuODc1LTEuODc1VjcuNTYzYzAtMS4wMzYtLjg0LTEuODc1LTEuODc1LTEuODc1aC0xLjI5VjQuMjE2YTMuNTg3IDMuNTg3IDAgMSAwLTcuMTc0IDBabTEuMjUgMHYxLjQ3Mmg0LjY3NFY0LjIxNmEyLjMzNyAyLjMzNyAwIDEgMC00LjY3NCAwWm0tMi41NCAyLjcyMmEuNjI1LjYyNSAwIDAgMC0uNjI1LjYyNVYxMy41YzAgLjM0NS4yOC42MjUuNjI1LjYyNWg5Ljc1NGMuMzQ1IDAgLjYyNS0uMjguNjI1LS42MjVWNy41NjNhLjYyNS42MjUgMCAwIDAtLjYyNS0uNjI1SDMuMTIzWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Private = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-private',
        'staticon-Private',
        className
      ),
      ...props,
    })
);
Private.displayName = 'Private'

export default Private;
