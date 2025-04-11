
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M8.194 6.696v-.823c0-.69.56-1.25 1.25-1.25h8.68c.69 0 1.25.56 1.25 1.25v8.681c0 .69-.56 1.25-1.25 1.25h-.819V9.446a2.75 2.75 0 0 0-2.75-2.75h-6.36Zm-1.5 0v-.823a2.75 2.75 0 0 1 2.75-2.75h8.68a2.75 2.75 0 0 1 2.75 2.75v8.681a2.75 2.75 0 0 1-2.75 2.75h-.819v.823a2.75 2.75 0 0 1-2.75 2.75h-8.68a2.75 2.75 0 0 1-2.75-2.75v-8.68a2.75 2.75 0 0 1 2.75-2.75h.82Zm-.819 12.68a1.25 1.25 0 0 1-1.25-1.25v-8.68c0-.69.56-1.25 1.25-1.25h8.68c.69 0 1.25.56 1.25 1.25v8.68c0 .691-.56 1.25-1.25 1.25h-8.68Z","clip-rule":"evenodd"}]]

/**
 * @component @name Copy
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOC4xOTQgNi42OTZ2LS44MjNjMC0uNjkuNTYtMS4yNSAxLjI1LTEuMjVoOC42OGMuNjkgMCAxLjI1LjU2IDEuMjUgMS4yNXY4LjY4MWMwIC42OS0uNTYgMS4yNS0xLjI1IDEuMjVoLS44MTlWOS40NDZhMi43NSAyLjc1IDAgMCAwLTIuNzUtMi43NWgtNi4zNlptLTEuNSAwdi0uODIzYTIuNzUgMi43NSAwIDAgMSAyLjc1LTIuNzVoOC42OGEyLjc1IDIuNzUgMCAwIDEgMi43NSAyLjc1djguNjgxYTIuNzUgMi43NSAwIDAgMS0yLjc1IDIuNzVoLS44MTl2LjgyM2EyLjc1IDIuNzUgMCAwIDEtMi43NSAyLjc1aC04LjY4YTIuNzUgMi43NSAwIDAgMS0yLjc1LTIuNzV2LTguNjhhMi43NSAyLjc1IDAgMCAxIDIuNzUtMi43NWguODJabS0uODE5IDEyLjY4YTEuMjUgMS4yNSAwIDAgMS0xLjI1LTEuMjV2LTguNjhjMC0uNjkuNTYtMS4yNSAxLjI1LTEuMjVoOC42OGMuNjkgMCAxLjI1LjU2IDEuMjUgMS4yNXY4LjY4YzAgLjY5MS0uNTYgMS4yNS0xLjI1IDEuMjVoLTguNjhaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Copy = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-copy',
        'staticon-Copy',
        className
      ),
      ...props,
    })
);
Copy.displayName = 'Copy'

export default Copy;
