
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M2.25 6.52A2.75 2.75 0 0 1 5 3.77h10.764a2.75 2.75 0 0 1 2.75 2.75v2.7h.986a2.25 2.25 0 0 1 2.25 2.25v4.73a2.25 2.25 0 0 1-2.072 2.244v1.07a1 1 0 0 1-1.603.797l-2.394-1.81a.25.25 0 0 0-.15-.05h-3.31a2.25 2.25 0 0 1-2.25-2.25v-.456l-3.074 2.083A1 1 0 0 1 5.338 17v-1.565H5a2.75 2.75 0 0 1-2.75-2.75V6.52Zm16.265 6.165V10.72h.985a.75.75 0 0 1 .75.75v4.73a.75.75 0 0 1-.75.75h-.322a1 1 0 0 0-1 1v.559l-1.592-1.204a1.75 1.75 0 0 0-1.056-.354h-3.31a.75.75 0 0 1-.75-.75v-.766h4.294a2.75 2.75 0 0 0 2.75-2.75ZM5 5.27c-.69 0-1.25.56-1.25 1.25v6.166c0 .69.56 1.25 1.25 1.25h.586c.69 0 1.25.56 1.25 1.25v.872l2.878-1.95a1 1 0 0 1 .56-.172h5.49c.69 0 1.25-.56 1.25-1.25V6.52c0-.69-.56-1.25-1.25-1.25H5Zm1.378 3.525a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm7.008 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm-3.004-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z","clip-rule":"evenodd"}]]

/**
 * @component @name Discussion
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMi4yNSA2LjUyQTIuNzUgMi43NSAwIDAgMSA1IDMuNzdoMTAuNzY0YTIuNzUgMi43NSAwIDAgMSAyLjc1IDIuNzV2Mi43aC45ODZhMi4yNSAyLjI1IDAgMCAxIDIuMjUgMi4yNXY0LjczYTIuMjUgMi4yNSAwIDAgMS0yLjA3MiAyLjI0NHYxLjA3YTEgMSAwIDAgMS0xLjYwMy43OTdsLTIuMzk0LTEuODFhLjI1LjI1IDAgMCAwLS4xNS0uMDVoLTMuMzFhMi4yNSAyLjI1IDAgMCAxLTIuMjUtMi4yNXYtLjQ1NmwtMy4wNzQgMi4wODNBMSAxIDAgMCAxIDUuMzM4IDE3di0xLjU2NUg1YTIuNzUgMi43NSAwIDAgMS0yLjc1LTIuNzVWNi41MlptMTYuMjY1IDYuMTY1VjEwLjcyaC45ODVhLjc1Ljc1IDAgMCAxIC43NS43NXY0LjczYS43NS43NSAwIDAgMS0uNzUuNzVoLS4zMjJhMSAxIDAgMCAwLTEgMXYuNTU5bC0xLjU5Mi0xLjIwNGExLjc1IDEuNzUgMCAwIDAtMS4wNTYtLjM1NGgtMy4zMWEuNzUuNzUgMCAwIDEtLjc1LS43NXYtLjc2Nmg0LjI5NGEyLjc1IDIuNzUgMCAwIDAgMi43NS0yLjc1Wk01IDUuMjdjLS42OSAwLTEuMjUuNTYtMS4yNSAxLjI1djYuMTY2YzAgLjY5LjU2IDEuMjUgMS4yNSAxLjI1aC41ODZjLjY5IDAgMS4yNS41NiAxLjI1IDEuMjV2Ljg3MmwyLjg3OC0xLjk1YTEgMSAwIDAgMSAuNTYtLjE3Mmg1LjQ5Yy42OSAwIDEuMjUtLjU2IDEuMjUtMS4yNVY2LjUyYzAtLjY5LS41Ni0xLjI1LTEuMjUtMS4yNUg1Wm0xLjM3OCAzLjUyNWExIDEgMCAxIDAgMCAyIDEgMSAwIDAgMCAwLTJabTcuMDA4IDFhMSAxIDAgMSAxIDIgMCAxIDEgMCAwIDEtMiAwWm0tMy4wMDQtMWExIDEgMCAxIDAgMCAyIDEgMSAwIDAgMCAwLTJaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Discussion = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-discussion',
        'staticon-Discussion',
        className
      ),
      ...props,
    })
);
Discussion.displayName = 'Discussion'

export default Discussion;
