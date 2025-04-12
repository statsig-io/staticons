
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M2.627 1.627c-1.035 0-1.875.84-1.875 1.875v8.996c0 1.036.84 1.876 1.875 1.876h10.746c1.035 0 1.875-.84 1.875-1.876V3.502c0-1.036-.84-1.875-1.875-1.875H2.627Zm-.625 1.875c0-.345.28-.625.625-.625h10.746c.345 0 .625.28.625.625v8.996c0 .346-.28.626-.625.626H2.627a.625.625 0 0 1-.625-.626V3.502Zm7.482 1.365a.625.625 0 0 0-1.207-.323l-1.768 6.595a.625.625 0 1 0 1.208.324l1.767-6.596Zm.775.987a.625.625 0 0 1 .884 0l1.704 1.704a.625.625 0 0 1 0 .884l-1.704 1.704a.625.625 0 1 1-.884-.884L11.521 8 10.26 6.738a.625.625 0 0 1 0-.884Zm-5.41 0a.625.625 0 0 1 .884.884L4.471 8l1.262 1.262a.625.625 0 1 1-.884.884L3.145 8.442a.625.625 0 0 1 0-.884L4.85 5.854Z","clip-rule":"evenodd"}]]

/**
 * @component @name Code
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMi42MjcgMS42MjdjLTEuMDM1IDAtMS44NzUuODQtMS44NzUgMS44NzV2OC45OTZjMCAxLjAzNi44NCAxLjg3NiAxLjg3NSAxLjg3NmgxMC43NDZjMS4wMzUgMCAxLjg3NS0uODQgMS44NzUtMS44NzZWMy41MDJjMC0xLjAzNi0uODQtMS44NzUtMS44NzUtMS44NzVIMi42MjdabS0uNjI1IDEuODc1YzAtLjM0NS4yOC0uNjI1LjYyNS0uNjI1aDEwLjc0NmMuMzQ1IDAgLjYyNS4yOC42MjUuNjI1djguOTk2YzAgLjM0Ni0uMjguNjI2LS42MjUuNjI2SDIuNjI3YS42MjUuNjI1IDAgMCAxLS42MjUtLjYyNlYzLjUwMlptNy40ODIgMS4zNjVhLjYyNS42MjUgMCAwIDAtMS4yMDctLjMyM2wtMS43NjggNi41OTVhLjYyNS42MjUgMCAxIDAgMS4yMDguMzI0bDEuNzY3LTYuNTk2Wm0uNzc1Ljk4N2EuNjI1LjYyNSAwIDAgMSAuODg0IDBsMS43MDQgMS43MDRhLjYyNS42MjUgMCAwIDEgMCAuODg0bC0xLjcwNCAxLjcwNGEuNjI1LjYyNSAwIDEgMS0uODg0LS44ODRMMTEuNTIxIDggMTAuMjYgNi43MzhhLjYyNS42MjUgMCAwIDEgMC0uODg0Wm0tNS40MSAwYS42MjUuNjI1IDAgMCAxIC44ODQuODg0TDQuNDcxIDhsMS4yNjIgMS4yNjJhLjYyNS42MjUgMCAxIDEtLjg4NC44ODRMMy4xNDUgOC40NDJhLjYyNS42MjUgMCAwIDEgMC0uODg0TDQuODUgNS44NTRaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Code = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-code',
        'staticon-Code',
        className
      ),
      ...props,
    })
);
Code.displayName = 'Code'

export default Code;
