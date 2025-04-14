
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M2.375 4.76c0-.903.731-1.634 1.634-1.634h11.983c.902 0 1.634.731 1.634 1.634v1.175c0 .71-.454 1.315-1.087 1.54v7.265a2.134 2.134 0 0 1-2.133 2.133H5.594A2.134 2.134 0 0 1 3.46 14.74V7.475a1.634 1.634 0 0 1-1.085-1.54V4.76Zm2.353 2.809h10.544v7.17a.866.866 0 0 1-.866.867H5.594a.866.866 0 0 1-.866-.866V7.569Zm-.72-3.176a.366.366 0 0 0-.366.367v1.175c0 .203.164.367.367.367h11.983a.366.366 0 0 0 .366-.367V4.76a.366.366 0 0 0-.366-.367H4.009Zm4.299 4.84a.634.634 0 1 0 0 1.268h3.386a.634.634 0 0 0 0-1.267H8.307Z","clip-rule":"evenodd"}]]

/**
 * @component @name Inventory
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMi4zNzUgNC43NmMwLS45MDMuNzMxLTEuNjM0IDEuNjM0LTEuNjM0aDExLjk4M2MuOTAyIDAgMS42MzQuNzMxIDEuNjM0IDEuNjM0djEuMTc1YzAgLjcxLS40NTQgMS4zMTUtMS4wODcgMS41NHY3LjI2NWEyLjEzNCAyLjEzNCAwIDAgMS0yLjEzMyAyLjEzM0g1LjU5NEEyLjEzNCAyLjEzNCAwIDAgMSAzLjQ2IDE0Ljc0VjcuNDc1YTEuNjM0IDEuNjM0IDAgMCAxLTEuMDg1LTEuNTRWNC43NlptMi4zNTMgMi44MDloMTAuNTQ0djcuMTdhLjg2Ni44NjYgMCAwIDEtLjg2Ni44NjdINS41OTRhLjg2Ni44NjYgMCAwIDEtLjg2Ni0uODY2VjcuNTY5Wm0tLjcyLTMuMTc2YS4zNjYuMzY2IDAgMCAwLS4zNjYuMzY3djEuMTc1YzAgLjIwMy4xNjQuMzY3LjM2Ny4zNjdoMTEuOTgzYS4zNjYuMzY2IDAgMCAwIC4zNjYtLjM2N1Y0Ljc2YS4zNjYuMzY2IDAgMCAwLS4zNjYtLjM2N0g0LjAwOVptNC4yOTkgNC44NGEuNjM0LjYzNCAwIDEgMCAwIDEuMjY4aDMuMzg2YS42MzQuNjM0IDAgMCAwIDAtMS4yNjdIOC4zMDdaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Inventory = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-inventory',
        'staticon-Inventory',
        className
      ),
      ...props,
    })
);
Inventory.displayName = 'Inventory'

export default Inventory;
