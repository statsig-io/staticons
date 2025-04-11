
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M6.125 20.626a2.75 2.75 0 0 1-2.75-2.75V6.123a2.75 2.75 0 0 1 2.75-2.75h11.75a2.75 2.75 0 0 1 2.75 2.75v11.753a2.75 2.75 0 0 1-2.75 2.75H6.125Zm-1.25-2.75c0 .69.56 1.25 1.25 1.25h8.627V4.873H6.125c-.69 0-1.25.56-1.25 1.25v11.753ZM16.252 4.873v14.253h1.623c.69 0 1.25-.56 1.25-1.25V6.123c0-.69-.56-1.25-1.25-1.25h-1.623Zm-4.259 3.932a.75.75 0 0 0-1.057-.08l-2.709 2.327a1.25 1.25 0 0 0 0 1.896l2.709 2.326a.75.75 0 1 0 .977-1.137L9.425 12l2.488-2.137a.75.75 0 0 0 .08-1.058Z","clip-rule":"evenodd"}]]

/**
 * @component @name OpenPanel
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNi4xMjUgMjAuNjI2YTIuNzUgMi43NSAwIDAgMS0yLjc1LTIuNzVWNi4xMjNhMi43NSAyLjc1IDAgMCAxIDIuNzUtMi43NWgxMS43NWEyLjc1IDIuNzUgMCAwIDEgMi43NSAyLjc1djExLjc1M2EyLjc1IDIuNzUgMCAwIDEtMi43NSAyLjc1SDYuMTI1Wm0tMS4yNS0yLjc1YzAgLjY5LjU2IDEuMjUgMS4yNSAxLjI1aDguNjI3VjQuODczSDYuMTI1Yy0uNjkgMC0xLjI1LjU2LTEuMjUgMS4yNXYxMS43NTNaTTE2LjI1MiA0Ljg3M3YxNC4yNTNoMS42MjNjLjY5IDAgMS4yNS0uNTYgMS4yNS0xLjI1VjYuMTIzYzAtLjY5LS41Ni0xLjI1LTEuMjUtMS4yNWgtMS42MjNabS00LjI1OSAzLjkzMmEuNzUuNzUgMCAwIDAtMS4wNTctLjA4bC0yLjcwOSAyLjMyN2ExLjI1IDEuMjUgMCAwIDAgMCAxLjg5NmwyLjcwOSAyLjMyNmEuNzUuNzUgMCAxIDAgLjk3Ny0xLjEzN0w5LjQyNSAxMmwyLjQ4OC0yLjEzN2EuNzUuNzUgMCAwIDAgLjA4LTEuMDU4WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const OpenPanel = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-open-panel',
        'staticon-OpenPanel',
        className
      ),
      ...props,
    })
);
OpenPanel.displayName = 'OpenPanel'

export default OpenPanel;
