
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","d":"M11.749 12.875v-9.75a.625.625 0 1 1 1.25 0v9.75a.625.625 0 1 1-1.25 0Z"}],["path",{"fill":"#000","fill-rule":"evenodd","d":"M4.859 2.827c-.73-.627-1.858-.109-1.858.853v8.67c0 .961 1.129 1.48 1.858.853l5.046-4.335a1.125 1.125 0 0 0 0-1.707L4.86 2.827Zm-.608 9.25V3.953l4.73 4.063-4.73 4.063Z","clip-rule":"evenodd"}]]

/**
 * @component @name SkipRight
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTExLjc0OSAxMi44NzV2LTkuNzVhLjYyNS42MjUgMCAxIDEgMS4yNSAwdjkuNzVhLjYyNS42MjUgMCAxIDEtMS4yNSAwWiIvPgogIDxwYXRoIGZpbGw9IiMwMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTQuODU5IDIuODI3Yy0uNzMtLjYyNy0xLjg1OC0uMTA5LTEuODU4Ljg1M3Y4LjY3YzAgLjk2MSAxLjEyOSAxLjQ4IDEuODU4Ljg1M2w1LjA0Ni00LjMzNWExLjEyNSAxLjEyNSAwIDAgMCAwLTEuNzA3TDQuODYgMi44MjdabS0uNjA4IDkuMjVWMy45NTNsNC43MyA0LjA2My00LjczIDQuMDYzWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const SkipRight = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-skip-right',
        'staticon-SkipRight',
        className
      ),
      ...props,
    })
);
SkipRight.displayName = 'SkipRight'

export default SkipRight;
