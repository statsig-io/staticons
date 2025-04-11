
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M9.252 20.75A2.75 2.75 0 0 1 6.502 18V6a2.75 2.75 0 0 1 2.75-2.75h5.496A2.75 2.75 0 0 1 17.498 6v12a2.75 2.75 0 0 1-2.75 2.75H9.252ZM8.002 18c0 .691.56 1.25 1.25 1.25h5.496c.69 0 1.25-.559 1.25-1.25v-2.627H8.002v2.628Zm0-4.127h7.996v-3.746H8.002v3.746Zm0-5.246h7.996V6c0-.69-.56-1.25-1.25-1.25H9.252c-.69 0-1.25.56-1.25 1.25v2.627ZM5.3 9.365a.75.75 0 0 0-.75-.75h-.674a1.5 1.5 0 0 0-1.5 1.5v3.747a1.5 1.5 0 0 0 1.5 1.5h.674a.75.75 0 0 0 0-1.5h-.674v-3.747h.674a.75.75 0 0 0 .75-.75Zm13.4 0a.75.75 0 0 1 .75-.75h.673a1.5 1.5 0 0 1 1.5 1.5v3.747a1.5 1.5 0 0 1-1.5 1.5h-.673a.75.75 0 0 1 0-1.5h.673v-3.747h-.673a.75.75 0 0 1-.75-.75Z","clip-rule":"evenodd"}]]

/**
 * @component @name Column
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOS4yNTIgMjAuNzVBMi43NSAyLjc1IDAgMCAxIDYuNTAyIDE4VjZhMi43NSAyLjc1IDAgMCAxIDIuNzUtMi43NWg1LjQ5NkEyLjc1IDIuNzUgMCAwIDEgMTcuNDk4IDZ2MTJhMi43NSAyLjc1IDAgMCAxLTIuNzUgMi43NUg5LjI1MlpNOC4wMDIgMThjMCAuNjkxLjU2IDEuMjUgMS4yNSAxLjI1aDUuNDk2Yy42OSAwIDEuMjUtLjU1OSAxLjI1LTEuMjV2LTIuNjI3SDguMDAydjIuNjI4Wm0wLTQuMTI3aDcuOTk2di0zLjc0Nkg4LjAwMnYzLjc0NlptMC01LjI0Nmg3Ljk5NlY2YzAtLjY5LS41Ni0xLjI1LTEuMjUtMS4yNUg5LjI1MmMtLjY5IDAtMS4yNS41Ni0xLjI1IDEuMjV2Mi42MjdaTTUuMyA5LjM2NWEuNzUuNzUgMCAwIDAtLjc1LS43NWgtLjY3NGExLjUgMS41IDAgMCAwLTEuNSAxLjV2My43NDdhMS41IDEuNSAwIDAgMCAxLjUgMS41aC42NzRhLjc1Ljc1IDAgMCAwIDAtMS41aC0uNjc0di0zLjc0N2guNjc0YS43NS43NSAwIDAgMCAuNzUtLjc1Wm0xMy40IDBhLjc1Ljc1IDAgMCAxIC43NS0uNzVoLjY3M2ExLjUgMS41IDAgMCAxIDEuNSAxLjV2My43NDdhMS41IDEuNSAwIDAgMS0xLjUgMS41aC0uNjczYS43NS43NSAwIDAgMSAwLTEuNWguNjczdi0zLjc0N2gtLjY3M2EuNzUuNzUgMCAwIDEtLjc1LS43NVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Column = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-column',
        'staticon-Column',
        className
      ),
      ...props,
    })
);
Column.displayName = 'Column'

export default Column;
