
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M5.918 3.612a2.31 2.31 0 1 0 0 4.621 2.31 2.31 0 0 0 0-4.621Zm-1.061 2.31a1.06 1.06 0 1 1 2.121 0 1.06 1.06 0 0 1-2.121 0Z","clip-rule":"evenodd"}],["path",{"fill":"#000","fill-rule":"evenodd","d":"M3.001 14.873a1.875 1.875 0 0 1-1.875-1.875V3.002c0-1.036.84-1.875 1.875-1.875h9.998c1.035 0 1.875.84 1.875 1.875v9.996c0 1.035-.84 1.875-1.875 1.875H3Zm0-1.25a.625.625 0 0 1-.557-.34l2.293-2.67a.57.57 0 0 1 .865 0l.91 1.059a1.023 1.023 0 0 0 1.552 0l2.235-2.602a.57.57 0 0 1 .866 0l2.459 2.862v1.066c0 .345-.28.625-.625.625H3ZM13.624 3.002v7.012l-1.511-1.758a1.82 1.82 0 0 0-2.762 0l-2.063 2.401L6.55 9.8a1.82 1.82 0 0 0-2.761 0l-1.413 1.645V3.002c0-.345.28-.625.625-.625h9.998c.345 0 .625.28.625.625Z","clip-rule":"evenodd"}]]

/**
 * @component @name Image
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNS45MTggMy42MTJhMi4zMSAyLjMxIDAgMSAwIDAgNC42MjEgMi4zMSAyLjMxIDAgMCAwIDAtNC42MjFabS0xLjA2MSAyLjMxYTEuMDYgMS4wNiAwIDEgMSAyLjEyMSAwIDEuMDYgMS4wNiAwIDAgMS0yLjEyMSAwWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMy4wMDEgMTQuODczYTEuODc1IDEuODc1IDAgMCAxLTEuODc1LTEuODc1VjMuMDAyYzAtMS4wMzYuODQtMS44NzUgMS44NzUtMS44NzVoOS45OThjMS4wMzUgMCAxLjg3NS44NCAxLjg3NSAxLjg3NXY5Ljk5NmMwIDEuMDM1LS44NCAxLjg3NS0xLjg3NSAxLjg3NUgzWm0wLTEuMjVhLjYyNS42MjUgMCAwIDEtLjU1Ny0uMzRsMi4yOTMtMi42N2EuNTcuNTcgMCAwIDEgLjg2NSAwbC45MSAxLjA1OWExLjAyMyAxLjAyMyAwIDAgMCAxLjU1MiAwbDIuMjM1LTIuNjAyYS41Ny41NyAwIDAgMSAuODY2IDBsMi40NTkgMi44NjJ2MS4wNjZjMCAuMzQ1LS4yOC42MjUtLjYyNS42MjVIM1pNMTMuNjI0IDMuMDAydjcuMDEybC0xLjUxMS0xLjc1OGExLjgyIDEuODIgMCAwIDAtMi43NjIgMGwtMi4wNjMgMi40MDFMNi41NSA5LjhhMS44MiAxLjgyIDAgMCAwLTIuNzYxIDBsLTEuNDEzIDEuNjQ1VjMuMDAyYzAtLjM0NS4yOC0uNjI1LjYyNS0uNjI1aDkuOTk4Yy4zNDUgMCAuNjI1LjI4LjYyNS42MjVaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Image = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-image',
        'staticon-Image',
        className
      ),
      ...props,
    })
);
Image.displayName = 'Image'

export default Image;
