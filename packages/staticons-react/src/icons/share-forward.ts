
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M7.878 2.147c0-.675.81-1.025 1.307-.566l6.191 5.717a.768.768 0 0 1 0 1.131l-6.191 5.715c-.498.459-1.307.108-1.307-.566V10.39c-1.127.07-2.01.34-2.863.862-.995.61-1.986 1.586-3.272 3.1-.467.55-1.392.221-1.367-.52.104-3.037 1.292-5.158 2.882-6.523a8.314 8.314 0 0 1 4.62-1.944V2.147Zm1.254 1.086v2.578a.777.777 0 0 1-.762.774c-1.316.031-2.961.524-4.292 1.666-1.062.912-1.946 2.256-2.295 4.167.89-.961 1.711-1.698 2.574-2.226 1.198-.735 2.44-1.045 3.988-1.065a.775.775 0 0 1 .787.772v2.593l5.015-4.629-5.015-4.63Z","clip-rule":"evenodd"}]]

/**
 * @component @name ShareForward
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNy44NzggMi4xNDdjMC0uNjc1LjgxLTEuMDI1IDEuMzA3LS41NjZsNi4xOTEgNS43MTdhLjc2OC43NjggMCAwIDEgMCAxLjEzMWwtNi4xOTEgNS43MTVjLS40OTguNDU5LTEuMzA3LjEwOC0xLjMwNy0uNTY2VjEwLjM5Yy0xLjEyNy4wNy0yLjAxLjM0LTIuODYzLjg2Mi0uOTk1LjYxLTEuOTg2IDEuNTg2LTMuMjcyIDMuMS0uNDY3LjU1LTEuMzkyLjIyMS0xLjM2Ny0uNTIuMTA0LTMuMDM3IDEuMjkyLTUuMTU4IDIuODgyLTYuNTIzYTguMzE0IDguMzE0IDAgMCAxIDQuNjItMS45NDRWMi4xNDdabTEuMjU0IDEuMDg2djIuNTc4YS43NzcuNzc3IDAgMCAxLS43NjIuNzc0Yy0xLjMxNi4wMzEtMi45NjEuNTI0LTQuMjkyIDEuNjY2LTEuMDYyLjkxMi0xLjk0NiAyLjI1Ni0yLjI5NSA0LjE2Ny44OS0uOTYxIDEuNzExLTEuNjk4IDIuNTc0LTIuMjI2IDEuMTk4LS43MzUgMi40NC0xLjA0NSAzLjk4OC0xLjA2NWEuNzc1Ljc3NSAwIDAgMSAuNzg3Ljc3MnYyLjU5M2w1LjAxNS00LjYyOS01LjAxNS00LjYzWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const ShareForward = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-share-forward',
        'staticon-ShareForward',
        className
      ),
      ...props,
    })
);
ShareForward.displayName = 'ShareForward'

export default ShareForward;
