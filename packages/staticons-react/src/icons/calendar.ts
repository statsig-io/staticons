
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M5.224 2.629v-1.01a.62.62 0 1 0-1.24 0v1.01H2.86A1.859 1.859 0 0 0 1 4.487v8.655C1 14.169 1.832 15 2.859 15H13.14A1.859 1.859 0 0 0 15 13.14V4.488a1.859 1.859 0 0 0-1.859-1.858h-1.143V1.62a.62.62 0 1 0-1.24 0v1.01H5.224ZM2.859 3.868a.62.62 0 0 0-.62.62v1.247h11.522V4.487a.62.62 0 0 0-.62-.62H2.86Zm-.62 9.274V6.975h11.522v6.167a.62.62 0 0 1-.62.62H2.86a.62.62 0 0 1-.62-.62Zm5.182-4.818a.62.62 0 0 0 0 1.239h.538V11.8a.62.62 0 0 0 1.24 0V9.096a.772.772 0 0 0-.773-.772H7.421Z","clip-rule":"evenodd"}]]

/**
 * @component @name Calendar
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNS4yMjQgMi42Mjl2LTEuMDFhLjYyLjYyIDAgMSAwLTEuMjQgMHYxLjAxSDIuODZBMS44NTkgMS44NTkgMCAwIDAgMSA0LjQ4N3Y4LjY1NUMxIDE0LjE2OSAxLjgzMiAxNSAyLjg1OSAxNUgxMy4xNEExLjg1OSAxLjg1OSAwIDAgMCAxNSAxMy4xNFY0LjQ4OGExLjg1OSAxLjg1OSAwIDAgMC0xLjg1OS0xLjg1OGgtMS4xNDNWMS42MmEuNjIuNjIgMCAxIDAtMS4yNCAwdjEuMDFINS4yMjRaTTIuODU5IDMuODY4YS42Mi42MiAwIDAgMC0uNjIuNjJ2MS4yNDdoMTEuNTIyVjQuNDg3YS42Mi42MiAwIDAgMC0uNjItLjYySDIuODZabS0uNjIgOS4yNzRWNi45NzVoMTEuNTIydjYuMTY3YS42Mi42MiAwIDAgMS0uNjIuNjJIMi44NmEuNjIuNjIgMCAwIDEtLjYyLS42MlptNS4xODItNC44MThhLjYyLjYyIDAgMCAwIDAgMS4yMzloLjUzOFYxMS44YS42Mi42MiAwIDAgMCAxLjI0IDBWOS4wOTZhLjc3Mi43NzIgMCAwIDAtLjc3My0uNzcySDcuNDIxWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Calendar = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-calendar',
        'staticon-Calendar',
        className
      ),
      ...props,
    })
);
Calendar.displayName = 'Calendar'

export default Calendar;
