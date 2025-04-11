
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M16.064 4.58a.75.75 0 0 1 .986-.394C19.973 5.439 22 8.483 22 12c0 3.517-2.027 6.561-4.95 7.814a.75.75 0 1 1-.591-1.38C18.805 17.43 20.5 14.944 20.5 12c0-2.945-1.695-5.43-4.041-6.435a.75.75 0 0 1-.395-.985Zm-.752 4.11a.75.75 0 0 1 .987-.388c1.387.604 2.322 2.053 2.322 3.698s-.935 3.095-2.322 3.698a.75.75 0 1 1-.599-1.376c.806-.35 1.42-1.236 1.42-2.322 0-1.085-.614-1.972-1.42-2.322a.75.75 0 0 1-.388-.988ZM11.82 5.81a.25.25 0 0 1 .421.18v11.993a.25.25 0 0 1-.421.181l-2.485-2.342a2.75 2.75 0 0 0-1.886-.75h-2.7c-.69 0-1.25-.56-1.25-1.25v-3.666c0-.69.56-1.25 1.25-1.25h2.7a2.75 2.75 0 0 0 1.888-.751l2.484-2.346Zm1.921.18c0-1.534-1.835-2.325-2.951-1.271L8.307 7.065a1.25 1.25 0 0 1-.858.34h-2.7a2.75 2.75 0 0 0-2.75 2.75v3.668a2.75 2.75 0 0 0 2.75 2.75h2.7c.32 0 .626.121.858.34l2.485 2.343c1.116 1.052 2.95.261 2.95-1.273V5.99Z","clip-rule":"evenodd"}]]

/**
 * @component @name VolumeUp
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTYuMDY0IDQuNThhLjc1Ljc1IDAgMCAxIC45ODYtLjM5NEMxOS45NzMgNS40MzkgMjIgOC40ODMgMjIgMTJjMCAzLjUxNy0yLjAyNyA2LjU2MS00Ljk1IDcuODE0YS43NS43NSAwIDEgMS0uNTkxLTEuMzhDMTguODA1IDE3LjQzIDIwLjUgMTQuOTQ0IDIwLjUgMTJjMC0yLjk0NS0xLjY5NS01LjQzLTQuMDQxLTYuNDM1YS43NS43NSAwIDAgMS0uMzk1LS45ODVabS0uNzUyIDQuMTFhLjc1Ljc1IDAgMCAxIC45ODctLjM4OGMxLjM4Ny42MDQgMi4zMjIgMi4wNTMgMi4zMjIgMy42OThzLS45MzUgMy4wOTUtMi4zMjIgMy42OThhLjc1Ljc1IDAgMSAxLS41OTktMS4zNzZjLjgwNi0uMzUgMS40Mi0xLjIzNiAxLjQyLTIuMzIyIDAtMS4wODUtLjYxNC0xLjk3Mi0xLjQyLTIuMzIyYS43NS43NSAwIDAgMS0uMzg4LS45ODhaTTExLjgyIDUuODFhLjI1LjI1IDAgMCAxIC40MjEuMTh2MTEuOTkzYS4yNS4yNSAwIDAgMS0uNDIxLjE4MWwtMi40ODUtMi4zNDJhMi43NSAyLjc1IDAgMCAwLTEuODg2LS43NWgtMi43Yy0uNjkgMC0xLjI1LS41Ni0xLjI1LTEuMjV2LTMuNjY2YzAtLjY5LjU2LTEuMjUgMS4yNS0xLjI1aDIuN2EyLjc1IDIuNzUgMCAwIDAgMS44ODgtLjc1MWwyLjQ4NC0yLjM0NlptMS45MjEuMThjMC0xLjUzNC0xLjgzNS0yLjMyNS0yLjk1MS0xLjI3MUw4LjMwNyA3LjA2NWExLjI1IDEuMjUgMCAwIDEtLjg1OC4zNGgtMi43YTIuNzUgMi43NSAwIDAgMC0yLjc1IDIuNzV2My42NjhhMi43NSAyLjc1IDAgMCAwIDIuNzUgMi43NWgyLjdjLjMyIDAgLjYyNi4xMjEuODU4LjM0bDIuNDg1IDIuMzQzYzEuMTE2IDEuMDUyIDIuOTUuMjYxIDIuOTUtMS4yNzNWNS45OVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const VolumeUp = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-volume-up',
        'staticon-VolumeUp',
        className
      ),
      ...props,
    })
);
VolumeUp.displayName = 'VolumeUp'

export default VolumeUp;
