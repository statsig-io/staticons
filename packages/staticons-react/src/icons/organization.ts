
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","d":"M8.357 5.322a.625.625 0 0 0 0-1.25H7.23a.625.625 0 1 0 0 1.25h1.127Zm-2.861-.625a.575.575 0 0 1-.575.574H3.794a.575.575 0 1 1 0-1.149h1.127c.318 0 .575.257.575.575Zm.05 2.278c0 .345-.28.625-.625.625H3.794a.625.625 0 0 1 0-1.25h1.127c.345 0 .625.28.625.625Zm3.436-.001c0 .346-.28.625-.625.625H7.23a.625.625 0 1 1 0-1.25h1.127c.345 0 .625.28.625.625Z"}],["path",{"fill":"#000","fill-rule":"evenodd","d":"m6.076 1 3.58.005a1.625 1.625 0 0 1 1.622 1.625v1.896l2.823 1.117c.62.246 1.026.845 1.026 1.511v6.218c0 .898-.728 1.626-1.626 1.625l-2.91-.002a.798.798 0 0 1-.09.005l-3.035-.006a.775.775 0 0 1-.774-.775v-2.16H5.46v2.16a.775.775 0 0 1-.773.775L1.65 15a.775.775 0 0 1-.777-.775V2.63c0-.897.726-1.624 1.623-1.625L6.076 1Zm5.202 12.745V5.87l2.362.935a.375.375 0 0 1 .237.35v6.217a.375.375 0 0 1-.375.375l-2.224-.002ZM10.028 2.63v11.114h-.655v.004l-1.43-.003v-2.162a.775.775 0 0 0-.776-.775H4.984a.775.775 0 0 0-.775.775v2.162l-2.086.004V2.629c0-.206.168-.374.375-.374l3.577-.005h.001l3.578.005c.207 0 .374.168.374.375Z","clip-rule":"evenodd"}]]

/**
 * @component @name Organization
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTguMzU3IDUuMzIyYS42MjUuNjI1IDAgMCAwIDAtMS4yNUg3LjIzYS42MjUuNjI1IDAgMSAwIDAgMS4yNWgxLjEyN1ptLTIuODYxLS42MjVhLjU3NS41NzUgMCAwIDEtLjU3NS41NzRIMy43OTRhLjU3NS41NzUgMCAxIDEgMC0xLjE0OWgxLjEyN2MuMzE4IDAgLjU3NS4yNTcuNTc1LjU3NVptLjA1IDIuMjc4YzAgLjM0NS0uMjguNjI1LS42MjUuNjI1SDMuNzk0YS42MjUuNjI1IDAgMCAxIDAtMS4yNWgxLjEyN2MuMzQ1IDAgLjYyNS4yOC42MjUuNjI1Wm0zLjQzNi0uMDAxYzAgLjM0Ni0uMjguNjI1LS42MjUuNjI1SDcuMjNhLjYyNS42MjUgMCAxIDEgMC0xLjI1aDEuMTI3Yy4zNDUgMCAuNjI1LjI4LjYyNS42MjVaIi8+CiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJtNi4wNzYgMSAzLjU4LjAwNWExLjYyNSAxLjYyNSAwIDAgMSAxLjYyMiAxLjYyNXYxLjg5NmwyLjgyMyAxLjExN2MuNjIuMjQ2IDEuMDI2Ljg0NSAxLjAyNiAxLjUxMXY2LjIxOGMwIC44OTgtLjcyOCAxLjYyNi0xLjYyNiAxLjYyNWwtMi45MS0uMDAyYS43OTguNzk4IDAgMCAxLS4wOS4wMDVsLTMuMDM1LS4wMDZhLjc3NS43NzUgMCAwIDEtLjc3NC0uNzc1di0yLjE2SDUuNDZ2Mi4xNmEuNzc1Ljc3NSAwIDAgMS0uNzczLjc3NUwxLjY1IDE1YS43NzUuNzc1IDAgMCAxLS43NzctLjc3NVYyLjYzYzAtLjg5Ny43MjYtMS42MjQgMS42MjMtMS42MjVMNi4wNzYgMVptNS4yMDIgMTIuNzQ1VjUuODdsMi4zNjIuOTM1YS4zNzUuMzc1IDAgMCAxIC4yMzcuMzV2Ni4yMTdhLjM3NS4zNzUgMCAwIDEtLjM3NS4zNzVsLTIuMjI0LS4wMDJaTTEwLjAyOCAyLjYzdjExLjExNGgtLjY1NXYuMDA0bC0xLjQzLS4wMDN2LTIuMTYyYS43NzUuNzc1IDAgMCAwLS43NzYtLjc3NUg0Ljk4NGEuNzc1Ljc3NSAwIDAgMC0uNzc1Ljc3NXYyLjE2MmwtMi4wODYuMDA0VjIuNjI5YzAtLjIwNi4xNjgtLjM3NC4zNzUtLjM3NGwzLjU3Ny0uMDA1aC4wMDFsMy41NzguMDA1Yy4yMDcgMCAuMzc0LjE2OC4zNzQuMzc1WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Organization = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-organization',
        'staticon-Organization',
        className
      ),
      ...props,
    })
);
Organization.displayName = 'Organization'

export default Organization;
