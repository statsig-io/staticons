
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M3.812 2.927a.626.626 0 1 0-.885.885L7.11 7.994l-4.181 4.182a.626.626 0 0 0 .884.885l4.182-4.182 4.182 4.182a.626.626 0 0 0 .885-.885L8.879 7.994l4.182-4.182a.626.626 0 0 0-.885-.885L7.994 7.11 3.812 2.927Z","clip-rule":"evenodd"}]]

/**
 * @component @name Cross
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMy44MTIgMi45MjdhLjYyNi42MjYgMCAxIDAtLjg4NS44ODVMNy4xMSA3Ljk5NGwtNC4xODEgNC4xODJhLjYyNi42MjYgMCAwIDAgLjg4NC44ODVsNC4xODItNC4xODIgNC4xODIgNC4xODJhLjYyNi42MjYgMCAwIDAgLjg4NS0uODg1TDguODc5IDcuOTk0bDQuMTgyLTQuMTgyYS42MjYuNjI2IDAgMCAwLS44ODUtLjg4NUw3Ljk5NCA3LjExIDMuODEyIDIuOTI3WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Cross = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-cross',
        'staticon-Cross',
        className
      ),
      ...props,
    })
);
Cross.displayName = 'Cross'

export default Cross;
