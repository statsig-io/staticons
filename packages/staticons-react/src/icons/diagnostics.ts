
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M2.403 6.783a.628.628 0 0 1 .13-.013h2.539l1.246-2.886c.292-.68 1.279-.601 1.462.115l1.31 5.124.825-1.889a.775.775 0 0 1 .71-.464h2.555a5.413 5.413 0 0 0-10.777.013ZM13.156 8.02h-2.22l-1.254 2.87c-.295.675-1.278.596-1.46-.119L6.913 5.657l-.818 1.895a.775.775 0 0 1-.712.468H2.532a.629.629 0 0 1-.106-.01 5.414 5.414 0 0 0 10.73.01ZM1.125 7.294a6.667 6.667 0 1 1 11.326 4.768l2.24 2.24a.627.627 0 0 1-.886.887l-2.335-2.334A6.667 6.667 0 0 1 1.125 7.294Z","clip-rule":"evenodd"}]]

/**
 * @component @name Diagnostics
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMi40MDMgNi43ODNhLjYyOC42MjggMCAwIDEgLjEzLS4wMTNoMi41MzlsMS4yNDYtMi44ODZjLjI5Mi0uNjggMS4yNzktLjYwMSAxLjQ2Mi4xMTVsMS4zMSA1LjEyNC44MjUtMS44ODlhLjc3NS43NzUgMCAwIDEgLjcxLS40NjRoMi41NTVhNS40MTMgNS40MTMgMCAwIDAtMTAuNzc3LjAxM1pNMTMuMTU2IDguMDJoLTIuMjJsLTEuMjU0IDIuODdjLS4yOTUuNjc1LTEuMjc4LjU5Ni0xLjQ2LS4xMTlMNi45MTMgNS42NTdsLS44MTggMS44OTVhLjc3NS43NzUgMCAwIDEtLjcxMi40NjhIMi41MzJhLjYyOS42MjkgMCAwIDEtLjEwNi0uMDEgNS40MTQgNS40MTQgMCAwIDAgMTAuNzMuMDFaTTEuMTI1IDcuMjk0YTYuNjY3IDYuNjY3IDAgMSAxIDExLjMyNiA0Ljc2OGwyLjI0IDIuMjRhLjYyNy42MjcgMCAwIDEtLjg4Ni44ODdsLTIuMzM1LTIuMzM0QTYuNjY3IDYuNjY3IDAgMCAxIDEuMTI1IDcuMjk0WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Diagnostics = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-diagnostics',
        'staticon-Diagnostics',
        className
      ),
      ...props,
    })
);
Diagnostics.displayName = 'Diagnostics'

export default Diagnostics;
