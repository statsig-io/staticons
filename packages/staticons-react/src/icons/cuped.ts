
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M8 .628c.973 0 1.656.45 2.175 1.099.463.58.826 1.356 1.186 2.129l.055.118c.78 1.672 1.696 3.56 3.797 4.915a.625.625 0 0 1-.677 1.05c-2.43-1.566-3.47-3.759-4.253-5.437l-.014-.03c-.397-.85-.703-1.505-1.07-1.964-.34-.425-.69-.63-1.199-.63-.509 0-.859.205-1.199.63-.367.46-.673 1.114-1.07 1.963l-.014.031C4.934 6.18 3.894 8.372 1.465 9.94a.625.625 0 1 1-.678-1.05c2.101-1.355 3.017-3.243 3.798-4.915l.055-.118c.36-.773.722-1.55 1.185-2.13C6.345 1.079 7.028.629 8 .629ZM7.182 12.22a.775.775 0 0 1 0 1.096L5.31 15.189a.625.625 0 1 1-.884-.884l.91-.91H1.131a.625.625 0 0 1 0-1.25h4.207l-.91-.91a.625.625 0 0 1 .884-.884l1.87 1.87Zm1.63 0 1.872-1.871a.625.625 0 1 1 .884.884l-.911.91h4.213a.625.625 0 1 1 0 1.25h-4.213l.911.912a.625.625 0 0 1-.884.884l-1.872-1.872a.775.775 0 0 1 0-1.096Z","clip-rule":"evenodd"}]]

/**
 * @component @name Cuped
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOCAuNjI4Yy45NzMgMCAxLjY1Ni40NSAyLjE3NSAxLjA5OS40NjMuNTguODI2IDEuMzU2IDEuMTg2IDIuMTI5bC4wNTUuMTE4Yy43OCAxLjY3MiAxLjY5NiAzLjU2IDMuNzk3IDQuOTE1YS42MjUuNjI1IDAgMCAxLS42NzcgMS4wNWMtMi40My0xLjU2Ni0zLjQ3LTMuNzU5LTQuMjUzLTUuNDM3bC0uMDE0LS4wM2MtLjM5Ny0uODUtLjcwMy0xLjUwNS0xLjA3LTEuOTY0LS4zNC0uNDI1LS42OS0uNjMtMS4xOTktLjYzLS41MDkgMC0uODU5LjIwNS0xLjE5OS42My0uMzY3LjQ2LS42NzMgMS4xMTQtMS4wNyAxLjk2M2wtLjAxNC4wMzFDNC45MzQgNi4xOCAzLjg5NCA4LjM3MiAxLjQ2NSA5Ljk0YS42MjUuNjI1IDAgMSAxLS42NzgtMS4wNWMyLjEwMS0xLjM1NSAzLjAxNy0zLjI0MyAzLjc5OC00LjkxNWwuMDU1LS4xMThjLjM2LS43NzMuNzIyLTEuNTUgMS4xODUtMi4xM0M2LjM0NSAxLjA3OSA3LjAyOC42MjkgOCAuNjI5Wk03LjE4MiAxMi4yMmEuNzc1Ljc3NSAwIDAgMSAwIDEuMDk2TDUuMzEgMTUuMTg5YS42MjUuNjI1IDAgMSAxLS44ODQtLjg4NGwuOTEtLjkxSDEuMTMxYS42MjUuNjI1IDAgMCAxIDAtMS4yNWg0LjIwN2wtLjkxLS45MWEuNjI1LjYyNSAwIDAgMSAuODg0LS44ODRsMS44NyAxLjg3Wm0xLjYzIDAgMS44NzItMS44NzFhLjYyNS42MjUgMCAxIDEgLjg4NC44ODRsLS45MTEuOTFoNC4yMTNhLjYyNS42MjUgMCAxIDEgMCAxLjI1aC00LjIxM2wuOTExLjkxMmEuNjI1LjYyNSAwIDAgMS0uODg0Ljg4NGwtMS44NzItMS44NzJhLjc3NS43NzUgMCAwIDEgMC0xLjA5NloiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Cuped = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-cuped',
        'staticon-Cuped',
        className
      ),
      ...props,
    })
);
Cuped.displayName = 'Cuped'

export default Cuped;
