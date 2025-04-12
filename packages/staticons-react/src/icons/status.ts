
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M8.625 3.99a.625.625 0 0 1-1.25 0V1.125a.625.625 0 1 1 1.25 0V3.99Zm0 10.886a.625.625 0 1 1-1.25 0V12.01a.625.625 0 1 1 1.25 0v2.866ZM.5 8c0 .345.28.625.625.625H3.99a.625.625 0 1 0 0-1.25H1.125A.625.625 0 0 0 .5 8Zm11.51.625a.625.625 0 1 1 0-1.25h2.866a.625.625 0 1 1 0 1.25H12.01Zm-9.314 4.68c.244.244.64.244.884 0l2.026-2.027a.625.625 0 0 0-.884-.883L2.696 12.42a.625.625 0 0 0 0 .883Zm8.581-7.698a.625.625 0 0 1-.884-.884l2.026-2.026a.625.625 0 0 1 .884.884l-2.026 2.026Zm-8.581-2.91a.625.625 0 0 0 0 .884l2.026 2.026a.625.625 0 0 0 .884-.883L3.58 2.698a.625.625 0 0 0-.884 0Zm7.697 8.582a.625.625 0 1 1 .884-.884l2.026 2.026a.625.625 0 1 1-.884.884l-2.026-2.026Z","clip-rule":"evenodd"}]]

/**
 * @component @name Status
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOC42MjUgMy45OWEuNjI1LjYyNSAwIDAgMS0xLjI1IDBWMS4xMjVhLjYyNS42MjUgMCAxIDEgMS4yNSAwVjMuOTlabTAgMTAuODg2YS42MjUuNjI1IDAgMSAxLTEuMjUgMFYxMi4wMWEuNjI1LjYyNSAwIDEgMSAxLjI1IDB2Mi44NjZaTS41IDhjMCAuMzQ1LjI4LjYyNS42MjUuNjI1SDMuOTlhLjYyNS42MjUgMCAxIDAgMC0xLjI1SDEuMTI1QS42MjUuNjI1IDAgMCAwIC41IDhabTExLjUxLjYyNWEuNjI1LjYyNSAwIDEgMSAwLTEuMjVoMi44NjZhLjYyNS42MjUgMCAxIDEgMCAxLjI1SDEyLjAxWm0tOS4zMTQgNC42OGMuMjQ0LjI0NC42NC4yNDQuODg0IDBsMi4wMjYtMi4wMjdhLjYyNS42MjUgMCAwIDAtLjg4NC0uODgzTDIuNjk2IDEyLjQyYS42MjUuNjI1IDAgMCAwIDAgLjg4M1ptOC41ODEtNy42OThhLjYyNS42MjUgMCAwIDEtLjg4NC0uODg0bDIuMDI2LTIuMDI2YS42MjUuNjI1IDAgMCAxIC44ODQuODg0bC0yLjAyNiAyLjAyNlptLTguNTgxLTIuOTFhLjYyNS42MjUgMCAwIDAgMCAuODg0bDIuMDI2IDIuMDI2YS42MjUuNjI1IDAgMCAwIC44ODQtLjg4M0wzLjU4IDIuNjk4YS42MjUuNjI1IDAgMCAwLS44ODQgMFptNy42OTcgOC41ODJhLjYyNS42MjUgMCAxIDEgLjg4NC0uODg0bDIuMDI2IDIuMDI2YS42MjUuNjI1IDAgMSAxLS44ODQuODg0bC0yLjAyNi0yLjAyNloiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Status = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-status',
        'staticon-Status',
        className
      ),
      ...props,
    })
);
Status.displayName = 'Status'

export default Status;
