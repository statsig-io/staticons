
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M8 15.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Zm.06-1.25a6.252 6.252 0 0 0 6.12-5.312l-1.098.774a2.5 2.5 0 0 1-2.907-.018l-.66-.478a3.125 3.125 0 0 1-1.287-2.711l.012-.202a.781.781 0 0 0-.978-.8l-.537.14a2.031 2.031 0 0 1-2.542-1.85l-.04-.71A6.239 6.239 0 0 0 1.75 8c0 .688.111 1.35.316 1.969h1.328a.312.312 0 0 0 .26-.141l.543-.824a1.563 1.563 0 0 1 2.634.036l.698 1.128c.49.79.714 1.716.642 2.642l-.112 1.44Zm-1.246-.112.111-1.425a3.125 3.125 0 0 0-.458-1.887l-.699-1.128a.313.313 0 0 0-.526-.007l-.543.824c-.29.44-.78.704-1.305.704H2.64a6.257 6.257 0 0 0 4.173 2.919Zm5.547-5.447 1.859-1.31a6.25 6.25 0 0 0-8.868-5.044l.079 1.385a.78.78 0 0 0 .978.711l.537-.14a2.031 2.031 0 0 1 2.541 2.082l-.011.202a1.875 1.875 0 0 0 .772 1.626l.66.478a1.25 1.25 0 0 0 1.453.01Z","clip-rule":"evenodd"}]]

/**
 * @component @name Public
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOCAxNS41YTcuNSA3LjUgMCAxIDAgMC0xNSA3LjUgNy41IDAgMCAwIDAgMTVabS4wNi0xLjI1YTYuMjUyIDYuMjUyIDAgMCAwIDYuMTItNS4zMTJsLTEuMDk4Ljc3NGEyLjUgMi41IDAgMCAxLTIuOTA3LS4wMThsLS42Ni0uNDc4YTMuMTI1IDMuMTI1IDAgMCAxLTEuMjg3LTIuNzExbC4wMTItLjIwMmEuNzgxLjc4MSAwIDAgMC0uOTc4LS44bC0uNTM3LjE0YTIuMDMxIDIuMDMxIDAgMCAxLTIuNTQyLTEuODVsLS4wNC0uNzFBNi4yMzkgNi4yMzkgMCAwIDAgMS43NSA4YzAgLjY4OC4xMTEgMS4zNS4zMTYgMS45NjloMS4zMjhhLjMxMi4zMTIgMCAwIDAgLjI2LS4xNDFsLjU0My0uODI0YTEuNTYzIDEuNTYzIDAgMCAxIDIuNjM0LjAzNmwuNjk4IDEuMTI4Yy40OS43OS43MTQgMS43MTYuNjQyIDIuNjQybC0uMTEyIDEuNDRabS0xLjI0Ni0uMTEyLjExMS0xLjQyNWEzLjEyNSAzLjEyNSAwIDAgMC0uNDU4LTEuODg3bC0uNjk5LTEuMTI4YS4zMTMuMzEzIDAgMCAwLS41MjYtLjAwN2wtLjU0My44MjRjLS4yOS40NC0uNzguNzA0LTEuMzA1LjcwNEgyLjY0YTYuMjU3IDYuMjU3IDAgMCAwIDQuMTczIDIuOTE5Wm01LjU0Ny01LjQ0NyAxLjg1OS0xLjMxYTYuMjUgNi4yNSAwIDAgMC04Ljg2OC01LjA0NGwuMDc5IDEuMzg1YS43OC43OCAwIDAgMCAuOTc4LjcxMWwuNTM3LS4xNGEyLjAzMSAyLjAzMSAwIDAgMSAyLjU0MSAyLjA4MmwtLjAxMS4yMDJhMS44NzUgMS44NzUgMCAwIDAgLjc3MiAxLjYyNmwuNjYuNDc4YTEuMjUgMS4yNSAwIDAgMCAxLjQ1My4wMVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Public = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-public',
        'staticon-Public',
        className
      ),
      ...props,
    })
);
Public.displayName = 'Public'

export default Public;
