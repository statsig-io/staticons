
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M4.124 3.376c-.621 0-1.125.504-1.125 1.125V6c0 .621.504 1.125 1.125 1.125h11.752c.622 0 1.125-.504 1.125-1.125V4.501c0-.621-.503-1.125-1.125-1.125H4.124Zm.125 2.499V4.626h11.502v1.249H4.25ZM2.999 9.25c0-.621.504-1.125 1.125-1.125h9.003c.62 0 1.124.504 1.124 1.125v1.499c0 .621-.503 1.125-1.124 1.125H4.123a1.125 1.125 0 0 1-1.125-1.125V9.25Zm1.25.125v1.249h8.753V9.375H4.248Zm-1.25 4.624c0-.621.504-1.125 1.125-1.125H8.98c.621 0 1.125.504 1.125 1.125v1.5c0 .62-.504 1.124-1.125 1.124H4.124a1.125 1.125 0 0 1-1.125-1.125V14Zm1.25.125v1.25h4.606v-1.25H4.25Z","clip-rule":"evenodd"}]]

/**
 * @component @name HorizontalBar
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNC4xMjQgMy4zNzZjLS42MjEgMC0xLjEyNS41MDQtMS4xMjUgMS4xMjVWNmMwIC42MjEuNTA0IDEuMTI1IDEuMTI1IDEuMTI1aDExLjc1MmMuNjIyIDAgMS4xMjUtLjUwNCAxLjEyNS0xLjEyNVY0LjUwMWMwLS42MjEtLjUwMy0xLjEyNS0xLjEyNS0xLjEyNUg0LjEyNFptLjEyNSAyLjQ5OVY0LjYyNmgxMS41MDJ2MS4yNDlINC4yNVpNMi45OTkgOS4yNWMwLS42MjEuNTA0LTEuMTI1IDEuMTI1LTEuMTI1aDkuMDAzYy42MiAwIDEuMTI0LjUwNCAxLjEyNCAxLjEyNXYxLjQ5OWMwIC42MjEtLjUwMyAxLjEyNS0xLjEyNCAxLjEyNUg0LjEyM2ExLjEyNSAxLjEyNSAwIDAgMS0xLjEyNS0xLjEyNVY5LjI1Wm0xLjI1LjEyNXYxLjI0OWg4Ljc1M1Y5LjM3NUg0LjI0OFptLTEuMjUgNC42MjRjMC0uNjIxLjUwNC0xLjEyNSAxLjEyNS0xLjEyNUg4Ljk4Yy42MjEgMCAxLjEyNS41MDQgMS4xMjUgMS4xMjV2MS41YzAgLjYyLS41MDQgMS4xMjQtMS4xMjUgMS4xMjRINC4xMjRhMS4xMjUgMS4xMjUgMCAwIDEtMS4xMjUtMS4xMjVWMTRabTEuMjUuMTI1djEuMjVoNC42MDZ2LTEuMjVINC4yNVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const HorizontalBar = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-horizontal-bar',
        'staticon-HorizontalBar',
        className
      ),
      ...props,
    })
);
HorizontalBar.displayName = 'HorizontalBar'

export default HorizontalBar;
