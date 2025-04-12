
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M12.124 13.122V2.874a.625.625 0 0 0-.625-.625L4.5 2.253a.625.625 0 0 0-.625.625v10.248c0 .345.28.625.626.625l6.999-.004c.345 0 .624-.28.624-.625Zm1.25-10.248v10.248a1.875 1.875 0 0 1-1.873 1.875L4.5 15a1.875 1.875 0 0 1-1.876-1.875V2.88c0-1.036.84-1.875 1.874-1.875l7-.005c1.035 0 1.875.839 1.875 1.875Zm-3.523.972c0 .345-.28.625-.625.625H6.774a.625.625 0 1 1 0-1.25h2.452c.346 0 .625.28.625.625ZM8.004 10.83a1 1 0 1 0 0 2.001 1 1 0 0 0 0-2Z","clip-rule":"evenodd"}]]

/**
 * @component @name Mobile
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTIuMTI0IDEzLjEyMlYyLjg3NGEuNjI1LjYyNSAwIDAgMC0uNjI1LS42MjVMNC41IDIuMjUzYS42MjUuNjI1IDAgMCAwLS42MjUuNjI1djEwLjI0OGMwIC4zNDUuMjguNjI1LjYyNi42MjVsNi45OTktLjAwNGMuMzQ1IDAgLjYyNC0uMjguNjI0LS42MjVabTEuMjUtMTAuMjQ4djEwLjI0OGExLjg3NSAxLjg3NSAwIDAgMS0xLjg3MyAxLjg3NUw0LjUgMTVhMS44NzUgMS44NzUgMCAwIDEtMS44NzYtMS44NzVWMi44OGMwLTEuMDM2Ljg0LTEuODc1IDEuODc0LTEuODc1bDctLjAwNWMxLjAzNSAwIDEuODc1LjgzOSAxLjg3NSAxLjg3NVptLTMuNTIzLjk3MmMwIC4zNDUtLjI4LjYyNS0uNjI1LjYyNUg2Ljc3NGEuNjI1LjYyNSAwIDEgMSAwLTEuMjVoMi40NTJjLjM0NiAwIC42MjUuMjguNjI1LjYyNVpNOC4wMDQgMTAuODNhMSAxIDAgMSAwIDAgMi4wMDEgMSAxIDAgMCAwIDAtMloiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Mobile = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-mobile',
        'staticon-Mobile',
        className
      ),
      ...props,
    })
);
Mobile.displayName = 'Mobile'

export default Mobile;
