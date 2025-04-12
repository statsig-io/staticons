
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M1.197 8.294a1.82 1.82 0 0 0 1.683 2.063c.028.424.205.84.53 1.164a1.81 1.81 0 0 0 1.166.53c.029.425.206.84.53 1.165.323.324.738.5 1.162.53a1.824 1.824 0 0 0 3.109 1.164l5.008-5.01a4.658 4.658 0 0 0 0-6.587l-1.6-1.6a3.948 3.948 0 0 0-5.072-.431 3.852 3.852 0 0 0-4.973.403L1.375 3.051a3.843 3.843 0 0 0-.178 5.243Zm.67-1.198 3.55-3.552a.626.626 0 0 1 .947.072l2.14 1.956a.714.714 0 1 0 .96-1.057L7.205 2.478a2.6 2.6 0 0 0-3.58.092L2.26 3.936a2.592 2.592 0 0 0-.394 3.16ZM5.87 4.86 2.6 8.132a.572.572 0 1 0 .81.81l2.283-2.283a.626.626 0 1 1 .885.885L4.294 9.827a.572.572 0 0 0 .81.81l2.283-2.284a.626.626 0 0 1 .887.886L5.99 11.522a.572.572 0 0 0 .773.843l.033-.034 2.283-2.284a.626.626 0 0 1 .888.001.626.626 0 0 1 0 .885l-2.283 2.283a1.861 1.861 0 0 1-.036.035.572.572 0 0 0 .843.774l5.009-5.01a3.407 3.407 0 0 0 0-4.817l-1.6-1.6a2.697 2.697 0 0 0-3.203-.459l1.604 1.447a1.965 1.965 0 1 1-2.643 2.91L5.871 4.86Z","clip-rule":"evenodd"}]]

/**
 * @component @name Collaboration
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMS4xOTcgOC4yOTRhMS44MiAxLjgyIDAgMCAwIDEuNjgzIDIuMDYzYy4wMjguNDI0LjIwNS44NC41MyAxLjE2NGExLjgxIDEuODEgMCAwIDAgMS4xNjYuNTNjLjAyOS40MjUuMjA2Ljg0LjUzIDEuMTY1LjMyMy4zMjQuNzM4LjUgMS4xNjIuNTNhMS44MjQgMS44MjQgMCAwIDAgMy4xMDkgMS4xNjRsNS4wMDgtNS4wMWE0LjY1OCA0LjY1OCAwIDAgMCAwLTYuNTg3bC0xLjYtMS42YTMuOTQ4IDMuOTQ4IDAgMCAwLTUuMDcyLS40MzEgMy44NTIgMy44NTIgMCAwIDAtNC45NzMuNDAzTDEuMzc1IDMuMDUxYTMuODQzIDMuODQzIDAgMCAwLS4xNzggNS4yNDNabS42Ny0xLjE5OCAzLjU1LTMuNTUyYS42MjYuNjI2IDAgMCAxIC45NDcuMDcybDIuMTQgMS45NTZhLjcxNC43MTQgMCAxIDAgLjk2LTEuMDU3TDcuMjA1IDIuNDc4YTIuNiAyLjYgMCAwIDAtMy41OC4wOTJMMi4yNiAzLjkzNmEyLjU5MiAyLjU5MiAwIDAgMC0uMzk0IDMuMTZaTTUuODcgNC44NiAyLjYgOC4xMzJhLjU3Mi41NzIgMCAxIDAgLjgxLjgxbDIuMjgzLTIuMjgzYS42MjYuNjI2IDAgMSAxIC44ODUuODg1TDQuMjk0IDkuODI3YS41NzIuNTcyIDAgMCAwIC44MS44MWwyLjI4My0yLjI4NGEuNjI2LjYyNiAwIDAgMSAuODg3Ljg4Nkw1Ljk5IDExLjUyMmEuNTcyLjU3MiAwIDAgMCAuNzczLjg0M2wuMDMzLS4wMzQgMi4yODMtMi4yODRhLjYyNi42MjYgMCAwIDEgLjg4OC4wMDEuNjI2LjYyNiAwIDAgMSAwIC44ODVsLTIuMjgzIDIuMjgzYTEuODYxIDEuODYxIDAgMCAxLS4wMzYuMDM1LjU3Mi41NzIgMCAwIDAgLjg0My43NzRsNS4wMDktNS4wMWEzLjQwNyAzLjQwNyAwIDAgMCAwLTQuODE3bC0xLjYtMS42YTIuNjk3IDIuNjk3IDAgMCAwLTMuMjAzLS40NTlsMS42MDQgMS40NDdhMS45NjUgMS45NjUgMCAxIDEtMi42NDMgMi45MUw1Ljg3MSA0Ljg2WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Collaboration = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-collaboration',
        'staticon-Collaboration',
        className
      ),
      ...props,
    })
);
Collaboration.displayName = 'Collaboration'

export default Collaboration;
