
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M7.89 2.376h.002l3.767.005a1.875 1.875 0 0 1 1.873 1.875v1.971l3.034 1.204a1.875 1.875 0 0 1 1.183 1.743v6.571c0 1.037-.84 1.876-1.876 1.875l-3.356-.002a1.181 1.181 0 0 1-.112.005l-2.656-.005a1.125 1.125 0 0 1-1.123-1.125v-2.098h-1.47v2.098c0 .62-.502 1.124-1.123 1.125l-2.655.005a1.125 1.125 0 0 1-1.128-1.125V4.256c0-1.034.838-1.873 1.873-1.875l3.767-.005Zm5.642 13.993V7.572l2.573 1.02a.625.625 0 0 1 .394.582v6.571c0 .346-.28.626-.625.625l-2.342-.001Zm-1.25-12.113v12.112h-.778v.004l-1.628-.003v-2.447a.778.778 0 0 0-.777-.777H6.684a.778.778 0 0 0-.778.777v2.447l-2.406.004V4.256c0-.345.28-.624.625-.625l3.765-.005h.002l3.766.005c.345 0 .624.28.624.625Zm-5.03 2.117c0 .345-.28.625-.626.625H5.391a.625.625 0 0 1 0-1.25h1.235c.345 0 .625.28.625.625Zm0 2.501c0 .345-.28.625-.626.625H5.391a.625.625 0 0 1 0-1.25h1.235c.345 0 .625.28.625.625Zm3.139-1.876a.625.625 0 1 0 0-1.25H9.156a.625.625 0 0 0 0 1.25h1.235Zm.625 1.876c0 .345-.28.625-.625.625H9.156a.625.625 0 0 1 0-1.25h1.235c.345 0 .625.28.625.625Z","clip-rule":"evenodd"}]]

/**
 * @component @name Organization
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNy44OSAyLjM3NmguMDAybDMuNzY3LjAwNWExLjg3NSAxLjg3NSAwIDAgMSAxLjg3MyAxLjg3NXYxLjk3MWwzLjAzNCAxLjIwNGExLjg3NSAxLjg3NSAwIDAgMSAxLjE4MyAxLjc0M3Y2LjU3MWMwIDEuMDM3LS44NCAxLjg3Ni0xLjg3NiAxLjg3NWwtMy4zNTYtLjAwMmExLjE4MSAxLjE4MSAwIDAgMS0uMTEyLjAwNWwtMi42NTYtLjAwNWExLjEyNSAxLjEyNSAwIDAgMS0xLjEyMy0xLjEyNXYtMi4wOThoLTEuNDd2Mi4wOThjMCAuNjItLjUwMiAxLjEyNC0xLjEyMyAxLjEyNWwtMi42NTUuMDA1YTEuMTI1IDEuMTI1IDAgMCAxLTEuMTI4LTEuMTI1VjQuMjU2YzAtMS4wMzQuODM4LTEuODczIDEuODczLTEuODc1bDMuNzY3LS4wMDVabTUuNjQyIDEzLjk5M1Y3LjU3MmwyLjU3MyAxLjAyYS42MjUuNjI1IDAgMCAxIC4zOTQuNTgydjYuNTcxYzAgLjM0Ni0uMjguNjI2LS42MjUuNjI1bC0yLjM0Mi0uMDAxWm0tMS4yNS0xMi4xMTN2MTIuMTEyaC0uNzc4di4wMDRsLTEuNjI4LS4wMDN2LTIuNDQ3YS43NzguNzc4IDAgMCAwLS43NzctLjc3N0g2LjY4NGEuNzc4Ljc3OCAwIDAgMC0uNzc4Ljc3N3YyLjQ0N2wtMi40MDYuMDA0VjQuMjU2YzAtLjM0NS4yOC0uNjI0LjYyNS0uNjI1bDMuNzY1LS4wMDVoLjAwMmwzLjc2Ni4wMDVjLjM0NSAwIC42MjQuMjguNjI0LjYyNVptLTUuMDMgMi4xMTdjMCAuMzQ1LS4yOC42MjUtLjYyNi42MjVINS4zOTFhLjYyNS42MjUgMCAwIDEgMC0xLjI1aDEuMjM1Yy4zNDUgMCAuNjI1LjI4LjYyNS42MjVabTAgMi41MDFjMCAuMzQ1LS4yOC42MjUtLjYyNi42MjVINS4zOTFhLjYyNS42MjUgMCAwIDEgMC0xLjI1aDEuMjM1Yy4zNDUgMCAuNjI1LjI4LjYyNS42MjVabTMuMTM5LTEuODc2YS42MjUuNjI1IDAgMSAwIDAtMS4yNUg5LjE1NmEuNjI1LjYyNSAwIDAgMCAwIDEuMjVoMS4yMzVabS42MjUgMS44NzZjMCAuMzQ1LS4yOC42MjUtLjYyNS42MjVIOS4xNTZhLjYyNS42MjUgMCAwIDEgMC0xLjI1aDEuMjM1Yy4zNDUgMCAuNjI1LjI4LjYyNS42MjVaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
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
