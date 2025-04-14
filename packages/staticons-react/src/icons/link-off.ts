
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M3.07 2.187a.625.625 0 0 0-.884.884l6.929 6.928-1.698 1.698a.626.626 0 1 0 .885.885L10 10.884l6.937 6.937a.625.625 0 0 0 .884-.884L10.883 10l1.7-1.7a.626.626 0 0 0-.885-.885l-1.7 1.7L3.07 2.187Zm1.597 7.522a3.976 3.976 0 1 0 5.624 5.624l.857-.858a.626.626 0 0 1 .886.885l-.858.858a5.228 5.228 0 0 1-7.394-7.394l.858-.858a.626.626 0 0 1 .885.885l-.858.858Zm3.301-4.186a.626.626 0 0 1 0-.885l.858-.858a5.228 5.228 0 1 1 7.394 7.394l-.858.858a.626.626 0 1 1-.885-.885l.858-.858A3.976 3.976 0 1 0 9.71 4.665l-.858.858a.626.626 0 0 1-.885 0Z","clip-rule":"evenodd"}]]

/**
 * @component @name LinkOff
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMy4wNyAyLjE4N2EuNjI1LjYyNSAwIDAgMC0uODg0Ljg4NGw2LjkyOSA2LjkyOC0xLjY5OCAxLjY5OGEuNjI2LjYyNiAwIDEgMCAuODg1Ljg4NUwxMCAxMC44ODRsNi45MzcgNi45MzdhLjYyNS42MjUgMCAwIDAgLjg4NC0uODg0TDEwLjg4MyAxMGwxLjctMS43YS42MjYuNjI2IDAgMCAwLS44ODUtLjg4NWwtMS43IDEuN0wzLjA3IDIuMTg3Wm0xLjU5NyA3LjUyMmEzLjk3NiAzLjk3NiAwIDEgMCA1LjYyNCA1LjYyNGwuODU3LS44NThhLjYyNi42MjYgMCAwIDEgLjg4Ni44ODVsLS44NTguODU4YTUuMjI4IDUuMjI4IDAgMCAxLTcuMzk0LTcuMzk0bC44NTgtLjg1OGEuNjI2LjYyNiAwIDAgMSAuODg1Ljg4NWwtLjg1OC44NThabTMuMzAxLTQuMTg2YS42MjYuNjI2IDAgMCAxIDAtLjg4NWwuODU4LS44NThhNS4yMjggNS4yMjggMCAxIDEgNy4zOTQgNy4zOTRsLS44NTguODU4YS42MjYuNjI2IDAgMSAxLS44ODUtLjg4NWwuODU4LS44NThBMy45NzYgMy45NzYgMCAxIDAgOS43MSA0LjY2NWwtLjg1OC44NThhLjYyNi42MjYgMCAwIDEtLjg4NSAwWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const LinkOff = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-link-off',
        'staticon-LinkOff',
        className
      ),
      ...props,
    })
);
LinkOff.displayName = 'LinkOff'

export default LinkOff;
