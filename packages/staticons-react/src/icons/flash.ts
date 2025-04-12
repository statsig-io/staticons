
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M7.954 2.18 2.89 8.62a.064.064 0 0 0-.016.035c0 .01 0 .024.008.039a.076.076 0 0 0 .026.03c.006.004.016.01.038.01h4.018c.602 0 1.09.488 1.089 1.09l-.004 3.993 5.06-6.437a.065.065 0 0 0 .017-.035.077.077 0 0 0-.008-.04.077.077 0 0 0-.026-.03.064.064 0 0 0-.038-.009l-4.004.003a1.09 1.09 0 0 1-1.09-1.087L7.954 2.18ZM7.26 1.042C7.897.23 9.202.68 9.203 1.713L9.21 6.02l3.843-.003c1.103 0 1.72 1.27 1.04 2.137l-5.35 6.803c-.639.813-1.945.36-1.944-.673l.004-4.3H2.946c-1.103 0-1.72-1.27-1.038-2.136l5.35-6.805Z","clip-rule":"evenodd"}]]

/**
 * @component @name Flash
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNy45NTQgMi4xOCAyLjg5IDguNjJhLjA2NC4wNjQgMCAwIDAtLjAxNi4wMzVjMCAuMDEgMCAuMDI0LjAwOC4wMzlhLjA3Ni4wNzYgMCAwIDAgLjAyNi4wM2MuMDA2LjAwNC4wMTYuMDEuMDM4LjAxaDQuMDE4Yy42MDIgMCAxLjA5LjQ4OCAxLjA4OSAxLjA5bC0uMDA0IDMuOTkzIDUuMDYtNi40MzdhLjA2NS4wNjUgMCAwIDAgLjAxNy0uMDM1LjA3Ny4wNzcgMCAwIDAtLjAwOC0uMDQuMDc3LjA3NyAwIDAgMC0uMDI2LS4wMy4wNjQuMDY0IDAgMCAwLS4wMzgtLjAwOWwtNC4wMDQuMDAzYTEuMDkgMS4wOSAwIDAgMS0xLjA5LTEuMDg3TDcuOTU0IDIuMThaTTcuMjYgMS4wNDJDNy44OTcuMjMgOS4yMDIuNjggOS4yMDMgMS43MTNMOS4yMSA2LjAybDMuODQzLS4wMDNjMS4xMDMgMCAxLjcyIDEuMjcgMS4wNCAyLjEzN2wtNS4zNSA2LjgwM2MtLjYzOS44MTMtMS45NDUuMzYtMS45NDQtLjY3M2wuMDA0LTQuM0gyLjk0NmMtMS4xMDMgMC0xLjcyLTEuMjctMS4wMzgtMi4xMzZsNS4zNS02LjgwNVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Flash = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-flash',
        'staticon-Flash',
        className
      ),
      ...props,
    })
);
Flash.displayName = 'Flash'

export default Flash;
