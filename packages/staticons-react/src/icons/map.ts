
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"m6.499 3.314-.002 8.36L9.5 12.686v-8.36l-3-1.012Zm4.25 1.013v8.36l3-1.013.001-8.36-3 1.013Zm-5.502 7.347.002-8.36L2.25 4.328l-.002 8.36 2.998-1.013Zm.108-9.715a1.625 1.625 0 0 1 1.04 0l3.61 1.219a.375.375 0 0 0 .24 0l3.6-1.215a.875.875 0 0 1 1.156.829l-.002 9.151c0 .376-.24.71-.596.83l-3.758 1.268a1.625 1.625 0 0 1-1.04 0l-3.612-1.218a.376.376 0 0 0-.24 0l-3.6 1.215A.875.875 0 0 1 1 13.208l.002-9.15c0-.376.24-.71.595-.83l3.76-1.269Z","clip-rule":"evenodd"}]]

/**
 * @component @name Map
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJtNi40OTkgMy4zMTQtLjAwMiA4LjM2TDkuNSAxMi42ODZ2LTguMzZsLTMtMS4wMTJabTQuMjUgMS4wMTN2OC4zNmwzLTEuMDEzLjAwMS04LjM2LTMgMS4wMTNabS01LjUwMiA3LjM0Ny4wMDItOC4zNkwyLjI1IDQuMzI4bC0uMDAyIDguMzYgMi45OTgtMS4wMTNabS4xMDgtOS43MTVhMS42MjUgMS42MjUgMCAwIDEgMS4wNCAwbDMuNjEgMS4yMTlhLjM3NS4zNzUgMCAwIDAgLjI0IDBsMy42LTEuMjE1YS44NzUuODc1IDAgMCAxIDEuMTU2LjgyOWwtLjAwMiA5LjE1MWMwIC4zNzYtLjI0LjcxLS41OTYuODNsLTMuNzU4IDEuMjY4YTEuNjI1IDEuNjI1IDAgMCAxLTEuMDQgMGwtMy42MTItMS4yMThhLjM3Ni4zNzYgMCAwIDAtLjI0IDBsLTMuNiAxLjIxNUEuODc1Ljg3NSAwIDAgMSAxIDEzLjIwOGwuMDAyLTkuMTVjMC0uMzc2LjI0LS43MS41OTUtLjgzbDMuNzYtMS4yNjlaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Map = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-map',
        'staticon-Map',
        className
      ),
      ...props,
    })
);
Map.displayName = 'Map'

export default Map;
