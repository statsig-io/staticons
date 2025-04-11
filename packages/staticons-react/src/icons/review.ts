
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M7.393 5.499H6.75c-.69 0-1.25.56-1.25 1.25v10.996c0 .69.56 1.25 1.25 1.25h4.254a5.75 5.75 0 0 1 6.248-8.798V6.75c0-.69-.56-1.25-1.25-1.25h-.643A1.75 1.75 0 0 1 13.627 7H9.125a1.75 1.75 0 0 1-1.732-1.5Zm7.966-1.5h.643a2.75 2.75 0 0 1 2.75 2.75v4.095a5.75 5.75 0 1 1-6.25 9.651H6.75A2.75 2.75 0 0 1 4 17.745V6.749a2.75 2.75 0 0 1 2.75-2.75h.643A1.75 1.75 0 0 1 9.125 2.5h4.502c.881 0 1.61.651 1.732 1.499Zm-6.484.251a.25.25 0 0 1 .25-.25h4.502a.25.25 0 0 1 .25.25v.999a.25.25 0 0 1-.25.25H9.125a.25.25 0 0 1-.25-.25V4.25Zm2.626 11.5a4.25 4.25 0 1 0 8.5 0 4.25 4.25 0 0 0-8.5 0Zm4.877-2.002a.75.75 0 0 0-1.5 0v1.982a.754.754 0 0 0 .39.678l1.713.99a.75.75 0 1 0 .75-1.3l-1.353-.78v-1.57Z","clip-rule":"evenodd"}]]

/**
 * @component @name Review
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNy4zOTMgNS40OTlINi43NWMtLjY5IDAtMS4yNS41Ni0xLjI1IDEuMjV2MTAuOTk2YzAgLjY5LjU2IDEuMjUgMS4yNSAxLjI1aDQuMjU0YTUuNzUgNS43NSAwIDAgMSA2LjI0OC04Ljc5OFY2Ljc1YzAtLjY5LS41Ni0xLjI1LTEuMjUtMS4yNWgtLjY0M0ExLjc1IDEuNzUgMCAwIDEgMTMuNjI3IDdIOS4xMjVhMS43NSAxLjc1IDAgMCAxLTEuNzMyLTEuNVptNy45NjYtMS41aC42NDNhMi43NSAyLjc1IDAgMCAxIDIuNzUgMi43NXY0LjA5NWE1Ljc1IDUuNzUgMCAxIDEtNi4yNSA5LjY1MUg2Ljc1QTIuNzUgMi43NSAwIDAgMSA0IDE3Ljc0NVY2Ljc0OWEyLjc1IDIuNzUgMCAwIDEgMi43NS0yLjc1aC42NDNBMS43NSAxLjc1IDAgMCAxIDkuMTI1IDIuNWg0LjUwMmMuODgxIDAgMS42MS42NTEgMS43MzIgMS40OTlabS02LjQ4NC4yNTFhLjI1LjI1IDAgMCAxIC4yNS0uMjVoNC41MDJhLjI1LjI1IDAgMCAxIC4yNS4yNXYuOTk5YS4yNS4yNSAwIDAgMS0uMjUuMjVIOS4xMjVhLjI1LjI1IDAgMCAxLS4yNS0uMjVWNC4yNVptMi42MjYgMTEuNWE0LjI1IDQuMjUgMCAxIDAgOC41IDAgNC4yNSA0LjI1IDAgMCAwLTguNSAwWm00Ljg3Ny0yLjAwMmEuNzUuNzUgMCAwIDAtMS41IDB2MS45ODJhLjc1NC43NTQgMCAwIDAgLjM5LjY3OGwxLjcxMy45OWEuNzUuNzUgMCAxIDAgLjc1LTEuM2wtMS4zNTMtLjc4di0xLjU3WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Review = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-review',
        'staticon-Review',
        className
      ),
      ...props,
    })
);
Review.displayName = 'Review'

export default Review;
