
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M18.243 4.65H5.751a2.755 2.755 0 0 0-2.75 2.76l.005 9.232a2.755 2.755 0 0 0 2.75 2.758H18.25A2.755 2.755 0 0 0 21 16.639l-.006-9.231a2.755 2.755 0 0 0-2.75-2.758ZM5.751 6.155h12.492c.69 0 1.25.561 1.25 1.253v.595l-6.78 4.722a1.247 1.247 0 0 1-1.426 0L4.501 8v-.59c0-.693.56-1.255 1.25-1.255ZM4.502 9.833l.004 6.808c0 .693.56 1.254 1.25 1.254H18.25c.69 0 1.25-.562 1.25-1.255l-.004-6.806-5.928 4.127a2.742 2.742 0 0 1-3.135 0l-5.93-4.128Z","clip-rule":"evenodd"}]]

/**
 * @component @name Email
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTguMjQzIDQuNjVINS43NTFhMi43NTUgMi43NTUgMCAwIDAtMi43NSAyLjc2bC4wMDUgOS4yMzJhMi43NTUgMi43NTUgMCAwIDAgMi43NSAyLjc1OEgxOC4yNUEyLjc1NSAyLjc1NSAwIDAgMCAyMSAxNi42MzlsLS4wMDYtOS4yMzFhMi43NTUgMi43NTUgMCAwIDAtMi43NS0yLjc1OFpNNS43NTEgNi4xNTVoMTIuNDkyYy42OSAwIDEuMjUuNTYxIDEuMjUgMS4yNTN2LjU5NWwtNi43OCA0LjcyMmExLjI0NyAxLjI0NyAwIDAgMS0xLjQyNiAwTDQuNTAxIDh2LS41OWMwLS42OTMuNTYtMS4yNTUgMS4yNS0xLjI1NVpNNC41MDIgOS44MzNsLjAwNCA2LjgwOGMwIC42OTMuNTYgMS4yNTQgMS4yNSAxLjI1NEgxOC4yNWMuNjkgMCAxLjI1LS41NjIgMS4yNS0xLjI1NWwtLjAwNC02LjgwNi01LjkyOCA0LjEyN2EyLjc0MiAyLjc0MiAwIDAgMS0zLjEzNSAwbC01LjkzLTQuMTI4WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Email = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-email',
        'staticon-Email',
        className
      ),
      ...props,
    })
);
Email.displayName = 'Email'

export default Email;
