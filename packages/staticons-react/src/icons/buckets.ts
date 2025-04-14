
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M4.947 2.931a.625.625 0 0 0-.883 0L2.182 4.813a.625.625 0 0 0 0 .883l1.882 1.882a.625.625 0 0 0 .883-.884l-.814-.814h11.734l-.814.814a.625.625 0 1 0 .884.884l1.881-1.882a.625.625 0 0 0 0-.883L15.937 2.93a.625.625 0 0 0-.884.884l.814.815H4.133l.814-.815a.625.625 0 0 0 0-.884Zm1.629 13.195c0 .622-.504 1.125-1.125 1.125H3.353a1.125 1.125 0 0 1-1.125-1.125v-5.742a.625.625 0 1 1 1.25 0v5.617h1.848v-5.617a.625.625 0 1 1 1.25 0v5.742Zm4.473 1.125c.621 0 1.125-.503 1.125-1.125v-5.742a.625.625 0 1 0-1.25 0v5.617H9.076v-5.617a.625.625 0 1 0-1.25 0v5.742c0 .622.504 1.125 1.125 1.125h2.098Zm5.597 0c.622 0 1.125-.503 1.125-1.125v-5.742a.625.625 0 0 0-1.25 0v5.617h-1.847v-5.617a.625.625 0 1 0-1.25 0v5.742c0 .622.503 1.125 1.125 1.125h2.097Z","clip-rule":"evenodd"}]]

/**
 * @component @name Buckets
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNC45NDcgMi45MzFhLjYyNS42MjUgMCAwIDAtLjg4MyAwTDIuMTgyIDQuODEzYS42MjUuNjI1IDAgMCAwIDAgLjg4M2wxLjg4MiAxLjg4MmEuNjI1LjYyNSAwIDAgMCAuODgzLS44ODRsLS44MTQtLjgxNGgxMS43MzRsLS44MTQuODE0YS42MjUuNjI1IDAgMSAwIC44ODQuODg0bDEuODgxLTEuODgyYS42MjUuNjI1IDAgMCAwIDAtLjg4M0wxNS45MzcgMi45M2EuNjI1LjYyNSAwIDAgMC0uODg0Ljg4NGwuODE0LjgxNUg0LjEzM2wuODE0LS44MTVhLjYyNS42MjUgMCAwIDAgMC0uODg0Wm0xLjYyOSAxMy4xOTVjMCAuNjIyLS41MDQgMS4xMjUtMS4xMjUgMS4xMjVIMy4zNTNhMS4xMjUgMS4xMjUgMCAwIDEtMS4xMjUtMS4xMjV2LTUuNzQyYS42MjUuNjI1IDAgMSAxIDEuMjUgMHY1LjYxN2gxLjg0OHYtNS42MTdhLjYyNS42MjUgMCAxIDEgMS4yNSAwdjUuNzQyWm00LjQ3MyAxLjEyNWMuNjIxIDAgMS4xMjUtLjUwMyAxLjEyNS0xLjEyNXYtNS43NDJhLjYyNS42MjUgMCAxIDAtMS4yNSAwdjUuNjE3SDkuMDc2di01LjYxN2EuNjI1LjYyNSAwIDEgMC0xLjI1IDB2NS43NDJjMCAuNjIyLjUwNCAxLjEyNSAxLjEyNSAxLjEyNWgyLjA5OFptNS41OTcgMGMuNjIyIDAgMS4xMjUtLjUwMyAxLjEyNS0xLjEyNXYtNS43NDJhLjYyNS42MjUgMCAwIDAtMS4yNSAwdjUuNjE3aC0xLjg0N3YtNS42MTdhLjYyNS42MjUgMCAxIDAtMS4yNSAwdjUuNzQyYzAgLjYyMi41MDMgMS4xMjUgMS4xMjUgMS4xMjVoMi4wOTdaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Buckets = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-buckets',
        'staticon-Buckets',
        className
      ),
      ...props,
    })
);
Buckets.displayName = 'Buckets'

export default Buckets;
