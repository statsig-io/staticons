
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M3.503 6.248a2.75 2.75 0 0 1 2.75-2.75h11.503a2.75 2.75 0 0 1 2.75 2.75v7.935a2.75 2.75 0 0 1-.81 1.95l-3.584 3.565a2.75 2.75 0 0 1-1.94.8h-7.92a2.75 2.75 0 0 1-2.75-2.75v-11.5Zm2.75-1.25c-.69 0-1.25.56-1.25 1.25v11.5c0 .69.56 1.25 1.25 1.25h7.25v-3.249a2.25 2.25 0 0 1 2.25-2.25h3.253V6.248c0-.69-.56-1.25-1.25-1.25H6.253Zm8.801 13.636a1.263 1.263 0 0 1-.05.048v-2.933a.75.75 0 0 1 .75-.75h2.948c-.02.024-.042.047-.065.07l-3.583 3.565Zm.198-7.133a.75.75 0 1 0 0-1.5H7.75a.75.75 0 0 0 0 1.5h7.503Zm.75-3.752a.75.75 0 0 1-.75.75H7.75a.75.75 0 1 1 0-1.5h7.503a.75.75 0 0 1 .75.75Zm-4.765 6.747a.75.75 0 0 0 0-1.5H7.75a.75.75 0 0 0 0 1.5h3.488Z","clip-rule":"evenodd"}]]

/**
 * @component @name Description
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMy41MDMgNi4yNDhhMi43NSAyLjc1IDAgMCAxIDIuNzUtMi43NWgxMS41MDNhMi43NSAyLjc1IDAgMCAxIDIuNzUgMi43NXY3LjkzNWEyLjc1IDIuNzUgMCAwIDEtLjgxIDEuOTVsLTMuNTg0IDMuNTY1YTIuNzUgMi43NSAwIDAgMS0xLjk0LjhoLTcuOTJhMi43NSAyLjc1IDAgMCAxLTIuNzUtMi43NXYtMTEuNVptMi43NS0xLjI1Yy0uNjkgMC0xLjI1LjU2LTEuMjUgMS4yNXYxMS41YzAgLjY5LjU2IDEuMjUgMS4yNSAxLjI1aDcuMjV2LTMuMjQ5YTIuMjUgMi4yNSAwIDAgMSAyLjI1LTIuMjVoMy4yNTNWNi4yNDhjMC0uNjktLjU2LTEuMjUtMS4yNS0xLjI1SDYuMjUzWm04LjgwMSAxMy42MzZhMS4yNjMgMS4yNjMgMCAwIDEtLjA1LjA0OHYtMi45MzNhLjc1Ljc1IDAgMCAxIC43NS0uNzVoMi45NDhjLS4wMi4wMjQtLjA0Mi4wNDctLjA2NS4wN2wtMy41ODMgMy41NjVabS4xOTgtNy4xMzNhLjc1Ljc1IDAgMSAwIDAtMS41SDcuNzVhLjc1Ljc1IDAgMCAwIDAgMS41aDcuNTAzWm0uNzUtMy43NTJhLjc1Ljc1IDAgMCAxLS43NS43NUg3Ljc1YS43NS43NSAwIDEgMSAwLTEuNWg3LjUwM2EuNzUuNzUgMCAwIDEgLjc1Ljc1Wm0tNC43NjUgNi43NDdhLjc1Ljc1IDAgMCAwIDAtMS41SDcuNzVhLjc1Ljc1IDAgMCAwIDAgMS41aDMuNDg4WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Description = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-description',
        'staticon-Description',
        className
      ),
      ...props,
    })
);
Description.displayName = 'Description'

export default Description;
