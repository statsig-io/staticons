
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M10.16 2.31a.625.625 0 0 1 .884 0l1.516 1.516a.876.876 0 0 1 0 1.238l-1.516 1.517a.625.625 0 1 1-.885-.885l.585-.585a6.752 6.752 0 0 0-6.812 9.662.625.625 0 1 1-1.126.548 8.003 8.003 0 0 1 8.02-11.459l-.667-.667a.625.625 0 0 1 0-.885Zm3.576 3.088c.2-.282.59-.348.872-.148a8.063 8.063 0 0 1 2.598 10.054.626.626 0 0 1-1.126-.545 6.811 6.811 0 0 0-2.196-8.489.625.625 0 0 1-.148-.872Zm-2.523 3.37c-.51-1.003-1.943-1.003-2.453 0l-.856 1.683-1.866.294c-1.111.176-1.554 1.538-.758 2.333l1.337 1.335-.297 1.865c-.177 1.111.982 1.953 1.984 1.442l1.683-.86 1.682.86c1.002.51 2.16-.331 1.984-1.442l-.297-1.865 1.337-1.335c.796-.795.353-2.157-.758-2.332l-1.866-.295-.856-1.683Zm-1.337.567a.124.124 0 0 1 .222 0l.943 1.854c.127.25.367.425.644.468l2.055.324c.1.016.14.14.069.211l-1.473 1.47a.875.875 0 0 0-.245.758l.326 2.055a.124.124 0 0 1-.18.13l-1.852-.946a.876.876 0 0 0-.796 0l-1.854.946a.124.124 0 0 1-.18-.13l.328-2.055a.876.876 0 0 0-.246-.757l-1.473-1.47a.124.124 0 0 1 .069-.212l2.055-.324a.875.875 0 0 0 .644-.468l.944-1.854Z","clip-rule":"evenodd"}]]

/**
 * @component @name Autotune
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTAuMTYgMi4zMWEuNjI1LjYyNSAwIDAgMSAuODg0IDBsMS41MTYgMS41MTZhLjg3Ni44NzYgMCAwIDEgMCAxLjIzOGwtMS41MTYgMS41MTdhLjYyNS42MjUgMCAxIDEtLjg4NS0uODg1bC41ODUtLjU4NWE2Ljc1MiA2Ljc1MiAwIDAgMC02LjgxMiA5LjY2Mi42MjUuNjI1IDAgMSAxLTEuMTI2LjU0OCA4LjAwMyA4LjAwMyAwIDAgMSA4LjAyLTExLjQ1OWwtLjY2Ny0uNjY3YS42MjUuNjI1IDAgMCAxIDAtLjg4NVptMy41NzYgMy4wODhjLjItLjI4Mi41OS0uMzQ4Ljg3Mi0uMTQ4YTguMDYzIDguMDYzIDAgMCAxIDIuNTk4IDEwLjA1NC42MjYuNjI2IDAgMCAxLTEuMTI2LS41NDUgNi44MTEgNi44MTEgMCAwIDAtMi4xOTYtOC40ODkuNjI1LjYyNSAwIDAgMS0uMTQ4LS44NzJabS0yLjUyMyAzLjM3Yy0uNTEtMS4wMDMtMS45NDMtMS4wMDMtMi40NTMgMGwtLjg1NiAxLjY4My0xLjg2Ni4yOTRjLTEuMTExLjE3Ni0xLjU1NCAxLjUzOC0uNzU4IDIuMzMzbDEuMzM3IDEuMzM1LS4yOTcgMS44NjVjLS4xNzcgMS4xMTEuOTgyIDEuOTUzIDEuOTg0IDEuNDQybDEuNjgzLS44NiAxLjY4Mi44NmMxLjAwMi41MSAyLjE2LS4zMzEgMS45ODQtMS40NDJsLS4yOTctMS44NjUgMS4zMzctMS4zMzVjLjc5Ni0uNzk1LjM1My0yLjE1Ny0uNzU4LTIuMzMybC0xLjg2Ni0uMjk1LS44NTYtMS42ODNabS0xLjMzNy41NjdhLjEyNC4xMjQgMCAwIDEgLjIyMiAwbC45NDMgMS44NTRjLjEyNy4yNS4zNjcuNDI1LjY0NC40NjhsMi4wNTUuMzI0Yy4xLjAxNi4xNC4xNC4wNjkuMjExbC0xLjQ3MyAxLjQ3YS44NzUuODc1IDAgMCAwLS4yNDUuNzU4bC4zMjYgMi4wNTVhLjEyNC4xMjQgMCAwIDEtLjE4LjEzbC0xLjg1Mi0uOTQ2YS44NzYuODc2IDAgMCAwLS43OTYgMGwtMS44NTQuOTQ2YS4xMjQuMTI0IDAgMCAxLS4xOC0uMTNsLjMyOC0yLjA1NWEuODc2Ljg3NiAwIDAgMC0uMjQ2LS43NTdsLTEuNDczLTEuNDdhLjEyNC4xMjQgMCAwIDEgLjA2OS0uMjEybDIuMDU1LS4zMjRhLjg3NS44NzUgMCAwIDAgLjY0NC0uNDY4bC45NDQtMS44NTRaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Autotune = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-autotune',
        'staticon-Autotune',
        className
      ),
      ...props,
    })
);
Autotune.displayName = 'Autotune'

export default Autotune;
