
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M13.14 5.383c-.288-.159-.651-.26-1.14-.26-.489 0-.852.101-1.14.26-.291.16-.546.401-.784.74-.499.71-.848 1.724-1.284 3.023l-.021.061c-.842 2.506-1.936 5.76-5.225 7.993a.75.75 0 1 1-.842-1.24c2.85-1.936 3.811-4.75 4.666-7.292l.022-.065c.406-1.21.817-2.434 1.457-3.343.336-.479.752-.896 1.287-1.191.538-.297 1.157-.446 1.864-.446.707 0 1.326.15 1.864.446.535.295.95.712 1.287 1.191.64.91 1.051 2.134 1.457 3.343l.022.065c.855 2.542 1.816 5.356 4.666 7.291a.75.75 0 0 1-.842 1.241c-3.289-2.232-4.383-5.487-5.225-7.993l-.02-.061c-.437-1.299-.786-2.314-1.285-3.023-.238-.339-.493-.58-.784-.74ZM3.125 18.877a.75.75 0 0 0 0 1.5h17.75a.75.75 0 0 0 0-1.5H3.125Z","clip-rule":"evenodd"}]]

/**
 * @component @name Distribution
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTMuMTQgNS4zODNjLS4yODgtLjE1OS0uNjUxLS4yNi0xLjE0LS4yNi0uNDg5IDAtLjg1Mi4xMDEtMS4xNC4yNi0uMjkxLjE2LS41NDYuNDAxLS43ODQuNzQtLjQ5OS43MS0uODQ4IDEuNzI0LTEuMjg0IDMuMDIzbC0uMDIxLjA2MWMtLjg0MiAyLjUwNi0xLjkzNiA1Ljc2LTUuMjI1IDcuOTkzYS43NS43NSAwIDEgMS0uODQyLTEuMjRjMi44NS0xLjkzNiAzLjgxMS00Ljc1IDQuNjY2LTcuMjkybC4wMjItLjA2NWMuNDA2LTEuMjEuODE3LTIuNDM0IDEuNDU3LTMuMzQzLjMzNi0uNDc5Ljc1Mi0uODk2IDEuMjg3LTEuMTkxLjUzOC0uMjk3IDEuMTU3LS40NDYgMS44NjQtLjQ0Ni43MDcgMCAxLjMyNi4xNSAxLjg2NC40NDYuNTM1LjI5NS45NS43MTIgMS4yODcgMS4xOTEuNjQuOTEgMS4wNTEgMi4xMzQgMS40NTcgMy4zNDNsLjAyMi4wNjVjLjg1NSAyLjU0MiAxLjgxNiA1LjM1NiA0LjY2NiA3LjI5MWEuNzUuNzUgMCAwIDEtLjg0MiAxLjI0MWMtMy4yODktMi4yMzItNC4zODMtNS40ODctNS4yMjUtNy45OTNsLS4wMi0uMDYxYy0uNDM3LTEuMjk5LS43ODYtMi4zMTQtMS4yODUtMy4wMjMtLjIzOC0uMzM5LS40OTMtLjU4LS43ODQtLjc0Wk0zLjEyNSAxOC44NzdhLjc1Ljc1IDAgMCAwIDAgMS41aDE3Ljc1YS43NS43NSAwIDAgMCAwLTEuNUgzLjEyNVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Distribution = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-distribution',
        'staticon-Distribution',
        className
      ),
      ...props,
    })
);
Distribution.displayName = 'Distribution'

export default Distribution;
