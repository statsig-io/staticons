
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M2.877 3.126a.625.625 0 0 0-.625.625l-.003 8.497c0 .346.28.626.625.626h10.249c.345 0 .625-.28.625-.625l.003-6.594a.625.625 0 0 0-.625-.625H8.24c-.334 0-.65-.149-.864-.405l-1.25-1.499h-3.25Zm-1.875.624c0-1.035.84-1.874 1.875-1.874h3.308c.333 0 .65.148.864.404l1.25 1.5h4.827C14.16 3.78 15 4.62 15 5.655l-.003 6.594c0 1.036-.84 1.875-1.875 1.875H2.874a1.875 1.875 0 0 1-1.875-1.876l.003-8.498Z","clip-rule":"evenodd"}]]

/**
 * @component @name Project
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMi44NzcgMy4xMjZhLjYyNS42MjUgMCAwIDAtLjYyNS42MjVsLS4wMDMgOC40OTdjMCAuMzQ2LjI4LjYyNi42MjUuNjI2aDEwLjI0OWMuMzQ1IDAgLjYyNS0uMjguNjI1LS42MjVsLjAwMy02LjU5NGEuNjI1LjYyNSAwIDAgMC0uNjI1LS42MjVIOC4yNGMtLjMzNCAwLS42NS0uMTQ5LS44NjQtLjQwNWwtMS4yNS0xLjQ5OWgtMy4yNVptLTEuODc1LjYyNGMwLTEuMDM1Ljg0LTEuODc0IDEuODc1LTEuODc0aDMuMzA4Yy4zMzMgMCAuNjUuMTQ4Ljg2NC40MDRsMS4yNSAxLjVoNC44MjdDMTQuMTYgMy43OCAxNSA0LjYyIDE1IDUuNjU1bC0uMDAzIDYuNTk0YzAgMS4wMzYtLjg0IDEuODc1LTEuODc1IDEuODc1SDIuODc0YTEuODc1IDEuODc1IDAgMCAxLTEuODc1LTEuODc2bC4wMDMtOC40OThaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Project = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-project',
        'staticon-Project',
        className
      ),
      ...props,
    })
);
Project.displayName = 'Project'

export default Project;
