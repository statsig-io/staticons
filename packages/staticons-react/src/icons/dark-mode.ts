
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M9.58 5.059a7.265 7.265 0 1 0 9.36 9.36 7.066 7.066 0 0 1-9.36-9.36Zm1.525-1.114c.237.377.287.896.036 1.348a5.566 5.566 0 0 0 7.566 7.565c.452-.25.971-.2 1.349.037.395.248.688.751.523 1.338A8.765 8.765 0 1 1 9.766 3.421c.587-.165 1.09.128 1.339.524Z","clip-rule":"evenodd"}]]

/**
 * @component @name DarkMode
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOS41OCA1LjA1OWE3LjI2NSA3LjI2NSAwIDEgMCA5LjM2IDkuMzYgNy4wNjYgNy4wNjYgMCAwIDEtOS4zNi05LjM2Wm0xLjUyNS0xLjExNGMuMjM3LjM3Ny4yODcuODk2LjAzNiAxLjM0OGE1LjU2NiA1LjU2NiAwIDAgMCA3LjU2NiA3LjU2NWMuNDUyLS4yNS45NzEtLjIgMS4zNDkuMDM3LjM5NS4yNDguNjg4Ljc1MS41MjMgMS4zMzhBOC43NjUgOC43NjUgMCAxIDEgOS43NjYgMy40MjFjLjU4Ny0uMTY1IDEuMDkuMTI4IDEuMzM5LjUyNFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const DarkMode = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-dark-mode',
        'staticon-DarkMode',
        className
      ),
      ...props,
    })
);
DarkMode.displayName = 'DarkMode'

export default DarkMode;
