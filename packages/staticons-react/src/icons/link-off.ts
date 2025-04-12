
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M1.813.932a.623.623 0 1 0-.88.881L7.117 8 5.642 9.475a.625.625 0 0 0 .883.884l1.477-1.477 6.185 6.185a.623.623 0 1 0 .88-.88L8.884 8.002l1.475-1.476a.625.625 0 1 0-.884-.883L8 7.118 1.813.932Zm1.458 6.854a3.495 3.495 0 0 0 4.943 4.943l.768-.768a.625.625 0 0 1 .883.884l-.768.767a4.744 4.744 0 1 1-6.71-6.71l.768-.767a.625.625 0 0 1 .884.883l-.768.768ZM6.135 4.04a.625.625 0 0 1 0-.884l.768-.767a4.744 4.744 0 1 1 6.71 6.71l-.768.767a.625.625 0 1 1-.884-.883l.768-.768A3.495 3.495 0 0 0 7.786 3.27l-.768.768a.625.625 0 0 1-.883 0Z","clip-rule":"evenodd"}]]

/**
 * @component @name LinkOff
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMS44MTMuOTMyYS42MjMuNjIzIDAgMSAwLS44OC44ODFMNy4xMTcgOCA1LjY0MiA5LjQ3NWEuNjI1LjYyNSAwIDAgMCAuODgzLjg4NGwxLjQ3Ny0xLjQ3NyA2LjE4NSA2LjE4NWEuNjIzLjYyMyAwIDEgMCAuODgtLjg4TDguODg0IDguMDAybDEuNDc1LTEuNDc2YS42MjUuNjI1IDAgMSAwLS44ODQtLjg4M0w4IDcuMTE4IDEuODEzLjkzMlptMS40NTggNi44NTRhMy40OTUgMy40OTUgMCAwIDAgNC45NDMgNC45NDNsLjc2OC0uNzY4YS42MjUuNjI1IDAgMCAxIC44ODMuODg0bC0uNzY4Ljc2N2E0Ljc0NCA0Ljc0NCAwIDEgMS02LjcxLTYuNzFsLjc2OC0uNzY3YS42MjUuNjI1IDAgMCAxIC44ODQuODgzbC0uNzY4Ljc2OFpNNi4xMzUgNC4wNGEuNjI1LjYyNSAwIDAgMSAwLS44ODRsLjc2OC0uNzY3YTQuNzQ0IDQuNzQ0IDAgMSAxIDYuNzEgNi43MWwtLjc2OC43NjdhLjYyNS42MjUgMCAxIDEtLjg4NC0uODgzbC43NjgtLjc2OEEzLjQ5NSAzLjQ5NSAwIDAgMCA3Ljc4NiAzLjI3bC0uNzY4Ljc2OGEuNjI1LjYyNSAwIDAgMS0uODgzIDBaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const LinkOff = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-link-off',
        'staticon-LinkOff',
        className
      ),
      ...props,
    })
);
LinkOff.displayName = 'LinkOff'

export default LinkOff;
