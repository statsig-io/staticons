
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M3.749 7a2.75 2.75 0 0 1 2.75-2.75h11.003A2.75 2.75 0 0 1 20.252 7v8.247h.498c.69 0 1.25.56 1.25 1.25v.501a2.751 2.751 0 0 1-2.75 2.751H4.75A2.751 2.751 0 0 1 2 17v-.502c0-.69.56-1.25 1.25-1.25h.499V7Zm0 9.748H3.5v.25c0 .69.56 1.25 1.25 1.25h14.498a1.25 1.25 0 0 0 1.251-1.25v-.25H3.749ZM18.752 7v8.247H5.249V7c0-.69.56-1.25 1.25-1.25h11.003c.69 0 1.25.56 1.25 1.25Zm-5.761 1.779a.75.75 0 0 0 0-1.5h-2a.75.75 0 0 0 0 1.5h2Z","clip-rule":"evenodd"}]]

/**
 * @component @name Computer
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMy43NDkgN2EyLjc1IDIuNzUgMCAwIDEgMi43NS0yLjc1aDExLjAwM0EyLjc1IDIuNzUgMCAwIDEgMjAuMjUyIDd2OC4yNDdoLjQ5OGMuNjkgMCAxLjI1LjU2IDEuMjUgMS4yNXYuNTAxYTIuNzUxIDIuNzUxIDAgMCAxLTIuNzUgMi43NTFINC43NUEyLjc1MSAyLjc1MSAwIDAgMSAyIDE3di0uNTAyYzAtLjY5LjU2LTEuMjUgMS4yNS0xLjI1aC40OTlWN1ptMCA5Ljc0OEgzLjV2LjI1YzAgLjY5LjU2IDEuMjUgMS4yNSAxLjI1aDE0LjQ5OGExLjI1IDEuMjUgMCAwIDAgMS4yNTEtMS4yNXYtLjI1SDMuNzQ5Wk0xOC43NTIgN3Y4LjI0N0g1LjI0OVY3YzAtLjY5LjU2LTEuMjUgMS4yNS0xLjI1aDExLjAwM2MuNjkgMCAxLjI1LjU2IDEuMjUgMS4yNVptLTUuNzYxIDEuNzc5YS43NS43NSAwIDAgMCAwLTEuNWgtMmEuNzUuNzUgMCAwIDAgMCAxLjVoMloiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Computer = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-computer',
        'staticon-Computer',
        className
      ),
      ...props,
    })
);
Computer.displayName = 'Computer'

export default Computer;
