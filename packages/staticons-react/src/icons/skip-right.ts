
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","d":"M16.75 18.125a.75.75 0 0 0 1.5 0V5.875a.75.75 0 0 0-1.5 0v12.25Z"}],["path",{"fill":"#000","fill-rule":"evenodd","d":"M8.64 5.591c-1.135-.974-2.89-.168-2.89 1.328v10.103c0 1.496 1.755 2.302 2.89 1.327l5.881-5.051a1.75 1.75 0 0 0 0-2.655L8.641 5.59ZM7.25 6.92a.25.25 0 0 1 .413-.19l5.88 5.052a.25.25 0 0 1 0 .379l-5.88 5.051a.25.25 0 0 1-.413-.19V6.92Z","clip-rule":"evenodd"}]]

/**
 * @component @name SkipRight
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTE2Ljc1IDE4LjEyNWEuNzUuNzUgMCAwIDAgMS41IDBWNS44NzVhLjc1Ljc1IDAgMCAwLTEuNSAwdjEyLjI1WiIvPgogIDxwYXRoIGZpbGw9IiMwMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTguNjQgNS41OTFjLTEuMTM1LS45NzQtMi44OS0uMTY4LTIuODkgMS4zMjh2MTAuMTAzYzAgMS40OTYgMS43NTUgMi4zMDIgMi44OSAxLjMyN2w1Ljg4MS01LjA1MWExLjc1IDEuNzUgMCAwIDAgMC0yLjY1NUw4LjY0MSA1LjU5Wk03LjI1IDYuOTJhLjI1LjI1IDAgMCAxIC40MTMtLjE5bDUuODggNS4wNTJhLjI1LjI1IDAgMCAxIDAgLjM3OWwtNS44OCA1LjA1MWEuMjUuMjUgMCAwIDEtLjQxMy0uMTlWNi45MloiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const SkipRight = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-skip-right',
        'staticon-SkipRight',
        className
      ),
      ...props,
    })
);
SkipRight.displayName = 'SkipRight'

export default SkipRight;
