
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M9.862 1a1.41 1.41 0 0 0-1.41 1.405v3.554a1.41 1.41 0 0 0 1.41 1.405 1.41 1.41 0 0 0 1.411-1.405V2.405A1.41 1.41 0 0 0 9.863 1ZM6.138 15a1.41 1.41 0 0 0 1.41-1.405v-3.554a1.41 1.41 0 0 0-1.41-1.405 1.41 1.41 0 0 0-1.411 1.405v3.554A1.41 1.41 0 0 0 6.137 15Zm7.457-6.547A1.41 1.41 0 0 1 15 9.864a1.41 1.41 0 0 1-1.405 1.41h-3.554a1.41 1.41 0 0 1-1.405-1.41c0-.776.63-1.41 1.405-1.41h3.554ZM1 6.137c0 .776.629 1.41 1.405 1.41h3.554a1.41 1.41 0 0 0 1.405-1.41 1.41 1.41 0 0 0-1.405-1.41H2.405A1.41 1.41 0 0 0 1 6.136ZM4.73 2.41c0 .776.63 1.411 1.406 1.411h1.413V2.405a1.409 1.409 0 0 0-2.818.006Zm8.86 2.32a1.41 1.41 0 0 0-1.412 1.405V7.55h1.417a1.409 1.409 0 0 0-.006-2.819ZM2.41 11.27a1.41 1.41 0 0 0 1.411-1.405V8.45H2.405a1.409 1.409 0 0 0 .006 2.819Zm7.454.909a1.41 1.41 0 1 1-1.413 1.416V12.18h1.413Z","clip-rule":"evenodd"}]]

/**
 * @component @name Slack
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOS44NjIgMWExLjQxIDEuNDEgMCAwIDAtMS40MSAxLjQwNXYzLjU1NGExLjQxIDEuNDEgMCAwIDAgMS40MSAxLjQwNSAxLjQxIDEuNDEgMCAwIDAgMS40MTEtMS40MDVWMi40MDVBMS40MSAxLjQxIDAgMCAwIDkuODYzIDFaTTYuMTM4IDE1YTEuNDEgMS40MSAwIDAgMCAxLjQxLTEuNDA1di0zLjU1NGExLjQxIDEuNDEgMCAwIDAtMS40MS0xLjQwNSAxLjQxIDEuNDEgMCAwIDAtMS40MTEgMS40MDV2My41NTRBMS40MSAxLjQxIDAgMCAwIDYuMTM3IDE1Wm03LjQ1Ny02LjU0N0ExLjQxIDEuNDEgMCAwIDEgMTUgOS44NjRhMS40MSAxLjQxIDAgMCAxLTEuNDA1IDEuNDFoLTMuNTU0YTEuNDEgMS40MSAwIDAgMS0xLjQwNS0xLjQxYzAtLjc3Ni42My0xLjQxIDEuNDA1LTEuNDFoMy41NTRaTTEgNi4xMzdjMCAuNzc2LjYyOSAxLjQxIDEuNDA1IDEuNDFoMy41NTRhMS40MSAxLjQxIDAgMCAwIDEuNDA1LTEuNDEgMS40MSAxLjQxIDAgMCAwLTEuNDA1LTEuNDFIMi40MDVBMS40MSAxLjQxIDAgMCAwIDEgNi4xMzZaTTQuNzMgMi40MWMwIC43NzYuNjMgMS40MTEgMS40MDYgMS40MTFoMS40MTNWMi40MDVhMS40MDkgMS40MDkgMCAwIDAtMi44MTguMDA2Wm04Ljg2IDIuMzJhMS40MSAxLjQxIDAgMCAwLTEuNDEyIDEuNDA1VjcuNTVoMS40MTdhMS40MDkgMS40MDkgMCAwIDAtLjAwNi0yLjgxOVpNMi40MSAxMS4yN2ExLjQxIDEuNDEgMCAwIDAgMS40MTEtMS40MDVWOC40NUgyLjQwNWExLjQwOSAxLjQwOSAwIDAgMCAuMDA2IDIuODE5Wm03LjQ1NC45MDlhMS40MSAxLjQxIDAgMSAxLTEuNDEzIDEuNDE2VjEyLjE4aDEuNDEzWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Slack = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-slack',
        'staticon-Slack',
        className
      ),
      ...props,
    })
);
Slack.displayName = 'Slack'

export default Slack;
