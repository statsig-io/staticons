
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M5.986 5.207 8.105 3.26v9.425l-2.119-1.947a1.875 1.875 0 0 0-1.268-.494H2.376a.625.625 0 0 1-.625-.625V6.326c0-.345.28-.625.625-.625h2.342c.47 0 .923-.177 1.268-.494Zm3.369-2.231c0-.98-1.165-1.491-1.886-.829L5.14 4.286a.625.625 0 0 1-.423.165H2.376A1.874 1.874 0 0 0 .501 6.326v3.293c0 1.036.84 1.875 1.875 1.875h2.342c.157 0 .307.059.423.165l2.328 2.138c.721.663 1.886.151 1.886-.828V2.976Zm5.961 2.715a.625.625 0 0 1 0 .884l-1.425 1.426 1.425 1.425a.625.625 0 0 1-.883.884l-1.426-1.425-1.425 1.425a.625.625 0 1 1-.884-.884l1.425-1.425-1.425-1.425a.625.625 0 1 1 .884-.884l1.425 1.425 1.426-1.426a.625.625 0 0 1 .883 0Z","clip-rule":"evenodd"}]]

/**
 * @component @name VolumeOff
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNS45ODYgNS4yMDcgOC4xMDUgMy4yNnY5LjQyNWwtMi4xMTktMS45NDdhMS44NzUgMS44NzUgMCAwIDAtMS4yNjgtLjQ5NEgyLjM3NmEuNjI1LjYyNSAwIDAgMS0uNjI1LS42MjVWNi4zMjZjMC0uMzQ1LjI4LS42MjUuNjI1LS42MjVoMi4zNDJjLjQ3IDAgLjkyMy0uMTc3IDEuMjY4LS40OTRabTMuMzY5LTIuMjMxYzAtLjk4LTEuMTY1LTEuNDkxLTEuODg2LS44MjlMNS4xNCA0LjI4NmEuNjI1LjYyNSAwIDAgMS0uNDIzLjE2NUgyLjM3NkExLjg3NCAxLjg3NCAwIDAgMCAuNTAxIDYuMzI2djMuMjkzYzAgMS4wMzYuODQgMS44NzUgMS44NzUgMS44NzVoMi4zNDJjLjE1NyAwIC4zMDcuMDU5LjQyMy4xNjVsMi4zMjggMi4xMzhjLjcyMS42NjMgMS44ODYuMTUxIDEuODg2LS44MjhWMi45NzZabTUuOTYxIDIuNzE1YS42MjUuNjI1IDAgMCAxIDAgLjg4NGwtMS40MjUgMS40MjYgMS40MjUgMS40MjVhLjYyNS42MjUgMCAwIDEtLjg4My44ODRsLTEuNDI2LTEuNDI1LTEuNDI1IDEuNDI1YS42MjUuNjI1IDAgMSAxLS44ODQtLjg4NGwxLjQyNS0xLjQyNS0xLjQyNS0xLjQyNWEuNjI1LjYyNSAwIDEgMSAuODg0LS44ODRsMS40MjUgMS40MjUgMS40MjYtMS40MjZhLjYyNS42MjUgMCAwIDEgLjg4MyAwWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const VolumeOff = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-volume-off',
        'staticon-VolumeOff',
        className
      ),
      ...props,
    })
);
VolumeOff.displayName = 'VolumeOff'

export default VolumeOff;
