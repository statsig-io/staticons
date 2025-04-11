
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M11.81 4.692a.25.25 0 0 1 .339 0l6.457 5.936h-1.914c-.69 0-1.25.56-1.25 1.25v3.604a.25.25 0 0 1-.25.25H8.768a.25.25 0 0 1-.25-.25v-3.604c0-.69-.56-1.25-1.25-1.25H5.39l6.42-5.936Zm1.354-1.104a1.75 1.75 0 0 0-2.373.003l-6.888 6.37c-.835.772-.289 2.167.849 2.167h2.266v3.354c0 .967.783 1.75 1.75 1.75h6.424a1.75 1.75 0 0 0 1.75-1.75v-3.354h2.305c1.14 0 1.685-1.399.846-2.17l-6.929-6.37ZM7.77 19.374a.75.75 0 0 0 0 1.5h8.416a.75.75 0 0 0 0-1.5H7.77Z","clip-rule":"evenodd"}]]

/**
 * @component @name Upgrade
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTEuODEgNC42OTJhLjI1LjI1IDAgMCAxIC4zMzkgMGw2LjQ1NyA1LjkzNmgtMS45MTRjLS42OSAwLTEuMjUuNTYtMS4yNSAxLjI1djMuNjA0YS4yNS4yNSAwIDAgMS0uMjUuMjVIOC43NjhhLjI1LjI1IDAgMCAxLS4yNS0uMjV2LTMuNjA0YzAtLjY5LS41Ni0xLjI1LTEuMjUtMS4yNUg1LjM5bDYuNDItNS45MzZabTEuMzU0LTEuMTA0YTEuNzUgMS43NSAwIDAgMC0yLjM3My4wMDNsLTYuODg4IDYuMzdjLS44MzUuNzcyLS4yODkgMi4xNjcuODQ5IDIuMTY3aDIuMjY2djMuMzU0YzAgLjk2Ny43ODMgMS43NSAxLjc1IDEuNzVoNi40MjRhMS43NSAxLjc1IDAgMCAwIDEuNzUtMS43NXYtMy4zNTRoMi4zMDVjMS4xNCAwIDEuNjg1LTEuMzk5Ljg0Ni0yLjE3bC02LjkyOS02LjM3Wk03Ljc3IDE5LjM3NGEuNzUuNzUgMCAwIDAgMCAxLjVoOC40MTZhLjc1Ljc1IDAgMCAwIDAtMS41SDcuNzdaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Upgrade = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-upgrade',
        'staticon-Upgrade',
        className
      ),
      ...props,
    })
);
Upgrade.displayName = 'Upgrade'

export default Upgrade;
