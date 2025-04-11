
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M9.34 5.526a7 7 0 1 0 8.49 2.595.75.75 0 1 1 1.249-.83 8.5 8.5 0 1 1-7.1-3.793.75.75 0 1 1 .003 1.5 6.941 6.941 0 0 0-2.643.528Z","clip-rule":"evenodd"}]]

/**
 * @component @name Loader
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOS4zNCA1LjUyNmE3IDcgMCAxIDAgOC40OSAyLjU5NS43NS43NSAwIDEgMSAxLjI0OS0uODMgOC41IDguNSAwIDEgMS03LjEtMy43OTMuNzUuNzUgMCAxIDEgLjAwMyAxLjUgNi45NDEgNi45NDEgMCAwIDAtMi42NDMuNTI4WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Loader = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-loader',
        'staticon-Loader',
        className
      ),
      ...props,
    })
);
Loader.displayName = 'Loader'

export default Loader;
