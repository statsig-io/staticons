
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M2.752 9.753a1.752 1.752 0 1 0 0-3.505 1.752 1.752 0 0 0 0 3.505ZM15 8a1.752 1.752 0 1 1-3.503 0A1.752 1.752 0 0 1 15 8ZM9.75 8a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0Z","clip-rule":"evenodd"}]]

/**
 * @component @name ThreeDot
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMi43NTIgOS43NTNhMS43NTIgMS43NTIgMCAxIDAgMC0zLjUwNSAxLjc1MiAxLjc1MiAwIDAgMCAwIDMuNTA1Wk0xNSA4YTEuNzUyIDEuNzUyIDAgMSAxLTMuNTAzIDBBMS43NTIgMS43NTIgMCAwIDEgMTUgOFpNOS43NSA4YTEuNzUgMS43NSAwIDEgMS0zLjUgMCAxLjc1IDEuNzUgMCAwIDEgMy41IDBaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const ThreeDot = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-three-dot',
        'staticon-ThreeDot',
        className
      ),
      ...props,
    })
);
ThreeDot.displayName = 'ThreeDot'

export default ThreeDot;
