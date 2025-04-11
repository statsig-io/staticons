
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","d":"M12 6.125a.75.75 0 0 1 .75.75v4.374h4.376a.75.75 0 0 1 0 1.5H12.75v4.378a.75.75 0 0 1-1.5 0V12.75H6.874a.75.75 0 0 1 0-1.5h4.378V6.874a.75.75 0 0 1 .75-.75Z"}],["path",{"fill":"#000","fill-rule":"evenodd","d":"M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-1.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z","clip-rule":"evenodd"}]]

/**
 * @component @name Plus
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTEyIDYuMTI1YS43NS43NSAwIDAgMSAuNzUuNzV2NC4zNzRoNC4zNzZhLjc1Ljc1IDAgMCAxIDAgMS41SDEyLjc1djQuMzc4YS43NS43NSAwIDAgMS0xLjUgMFYxMi43NUg2Ljg3NGEuNzUuNzUgMCAwIDEgMC0xLjVoNC4zNzhWNi44NzRhLjc1Ljc1IDAgMCAxIC43NS0uNzVaIi8+CiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTIgMjFhOSA5IDAgMSAwIDAtMTggOSA5IDAgMCAwIDAgMThabTAtMS41YTcuNSA3LjUgMCAxIDAgMC0xNSA3LjUgNy41IDAgMCAwIDAgMTVaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Plus = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-plus',
        'staticon-Plus',
        className
      ),
      ...props,
    })
);
Plus.displayName = 'Plus'

export default Plus;
