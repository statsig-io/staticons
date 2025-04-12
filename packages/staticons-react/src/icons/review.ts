
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M3.865 3h-.593a.772.772 0 0 0-.772.771v8.463c0 .426.346.772.772.772h3.166a4.404 4.404 0 0 1 4.904-6.325v-2.91A.772.772 0 0 0 10.57 3h-.592A1.402 1.402 0 0 1 8.6 4.14H5.24A1.402 1.402 0 0 1 3.866 3Zm6.11-1.25h.595a2.02 2.02 0 0 1 2.022 2.021v3.412a4.404 4.404 0 1 1-5.182 7.073H3.272a2.022 2.022 0 0 1-2.022-2.022V3.771c0-1.117.905-2.022 2.022-2.022h.596A1.402 1.402 0 0 1 5.242.624H8.6a1.4 1.4 0 0 1 1.374 1.125Zm-4.884.275a.15.15 0 0 1 .15-.151h3.36c.083 0 .151.068.151.151v.713a.151.151 0 0 1-.151.151H5.24a.151.151 0 0 1-.15-.15v-.714Zm2.1 8.947a3.154 3.154 0 1 0 6.309 0 3.154 3.154 0 0 0-6.309 0Zm3.686-1.52a.625.625 0 1 0-1.25 0v1.505a.625.625 0 0 0 .352.578l1.268.732a.625.625 0 1 0 .624-1.082l-.994-.574V9.45Z","clip-rule":"evenodd"}]]

/**
 * @component @name Review
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMy44NjUgM2gtLjU5M2EuNzcyLjc3MiAwIDAgMC0uNzcyLjc3MXY4LjQ2M2MwIC40MjYuMzQ2Ljc3Mi43NzIuNzcyaDMuMTY2YTQuNDA0IDQuNDA0IDAgMCAxIDQuOTA0LTYuMzI1di0yLjkxQS43NzIuNzcyIDAgMCAwIDEwLjU3IDNoLS41OTJBMS40MDIgMS40MDIgMCAwIDEgOC42IDQuMTRINS4yNEExLjQwMiAxLjQwMiAwIDAgMSAzLjg2NiAzWm02LjExLTEuMjVoLjU5NWEyLjAyIDIuMDIgMCAwIDEgMi4wMjIgMi4wMjF2My40MTJhNC40MDQgNC40MDQgMCAxIDEtNS4xODIgNy4wNzNIMy4yNzJhMi4wMjIgMi4wMjIgMCAwIDEtMi4wMjItMi4wMjJWMy43NzFjMC0xLjExNy45MDUtMi4wMjIgMi4wMjItMi4wMjJoLjU5NkExLjQwMiAxLjQwMiAwIDAgMSA1LjI0Mi42MjRIOC42YTEuNCAxLjQgMCAwIDEgMS4zNzQgMS4xMjVabS00Ljg4NC4yNzVhLjE1LjE1IDAgMCAxIC4xNS0uMTUxaDMuMzZjLjA4MyAwIC4xNTEuMDY4LjE1MS4xNTF2LjcxM2EuMTUxLjE1MSAwIDAgMS0uMTUxLjE1MUg1LjI0YS4xNTEuMTUxIDAgMCAxLS4xNS0uMTV2LS43MTRabTIuMSA4Ljk0N2EzLjE1NCAzLjE1NCAwIDEgMCA2LjMwOSAwIDMuMTU0IDMuMTU0IDAgMCAwLTYuMzA5IDBabTMuNjg2LTEuNTJhLjYyNS42MjUgMCAxIDAtMS4yNSAwdjEuNTA1YS42MjUuNjI1IDAgMCAwIC4zNTIuNTc4bDEuMjY4LjczMmEuNjI1LjYyNSAwIDEgMCAuNjI0LTEuMDgybC0uOTk0LS41NzRWOS40NVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
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
