
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"d":"M5.749 15.375V4.625a.625.625 0 0 0-1.25 0v10.75a.625.625 0 1 0 1.25 0Z"}],["path",{"fill-rule":"evenodd","d":"M13.231 4.358c.892-.766 2.271-.132 2.271 1.043v9.222c0 1.176-1.38 1.809-2.271 1.043l-5.368-4.61a1.375 1.375 0 0 1 0-2.087l5.368-4.61Zm1.021 1.043a.125.125 0 0 0-.207-.095L8.678 9.917a.125.125 0 0 0 0 .19l5.369 4.61c.08.07.206.013.206-.094V5.401Z","clip-rule":"evenodd"}]]

/**
 * @component @name SkipLeft
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZD0iTTUuNzQ5IDE1LjM3NVY0LjYyNWEuNjI1LjYyNSAwIDAgMC0xLjI1IDB2MTAuNzVhLjYyNS42MjUgMCAxIDAgMS4yNSAwWiIvPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjIzMSA0LjM1OGMuODkyLS43NjYgMi4yNzEtLjEzMiAyLjI3MSAxLjA0M3Y5LjIyMmMwIDEuMTc2LTEuMzggMS44MDktMi4yNzEgMS4wNDNsLTUuMzY4LTQuNjFhMS4zNzUgMS4zNzUgMCAwIDEgMC0yLjA4N2w1LjM2OC00LjYxWm0xLjAyMSAxLjA0M2EuMTI1LjEyNSAwIDAgMC0uMjA3LS4wOTVMOC42NzggOS45MTdhLjEyNS4xMjUgMCAwIDAgMCAuMTlsNS4zNjkgNC42MWMuMDguMDcuMjA2LjAxMy4yMDYtLjA5NFY1LjQwMVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const SkipLeft = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-skip-left',
        'staticon-SkipLeft',
        className
      ),
      ...props,
    })
);
SkipLeft.displayName = 'SkipLeft'

export default SkipLeft;
