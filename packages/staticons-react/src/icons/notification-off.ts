
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M3.168 4.048c-.145.4-.24.824-.279 1.266l-.224 2.574a1.25 1.25 0 0 1-.206.585l-.62.931a2.758 2.758 0 0 0-.464 1.53 1.84 1.84 0 0 0 1.839 1.84h1.723C5.194 14.198 6.489 15.25 8 15.25c1.511 0 2.806-1.052 3.063-2.477h.83l2.294 2.294a.623.623 0 0 0 .88-.881l-1.563-1.563a1.853 1.853 0 0 0 1.121-1.702c0-.537-.155-1.061-.447-1.511l-.606-.937a1.25 1.25 0 0 1-.196-.57l-.226-2.588A5 5 0 0 0 8.169.749H7.87c-1.688 0-3.193.84-4.1 2.139L1.812.932a.623.623 0 1 0-.88.88l2.235 2.236Zm.967 1.375L3.91 7.997a2.5 2.5 0 0 1-.41 1.17l-.622.93a1.508 1.508 0 0 0-.253.838c0 .325.264.588.589.588h7.429l-6.46-6.46a3.784 3.784 0 0 0-.048.36Zm.537-1.633 7.733 7.733h.368c.332 0 .602-.27.602-.602 0-.295-.085-.584-.246-.832l-.606-.936a2.5 2.5 0 0 1-.393-1.142l-.225-2.588A3.75 3.75 0 0 0 8.169 2H7.87a3.75 3.75 0 0 0-3.198 1.79Zm1.555 8.99C6.462 13.473 7.15 14 8 14c.85 0 1.538-.526 1.773-1.22H6.227Z","clip-rule":"evenodd"}]]

/**
 * @component @name NotificationOff
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMy4xNjggNC4wNDhjLS4xNDUuNC0uMjQuODI0LS4yNzkgMS4yNjZsLS4yMjQgMi41NzRhMS4yNSAxLjI1IDAgMCAxLS4yMDYuNTg1bC0uNjIuOTMxYTIuNzU4IDIuNzU4IDAgMCAwLS40NjQgMS41MyAxLjg0IDEuODQgMCAwIDAgMS44MzkgMS44NGgxLjcyM0M1LjE5NCAxNC4xOTggNi40ODkgMTUuMjUgOCAxNS4yNWMxLjUxMSAwIDIuODA2LTEuMDUyIDMuMDYzLTIuNDc3aC44M2wyLjI5NCAyLjI5NGEuNjIzLjYyMyAwIDAgMCAuODgtLjg4MWwtMS41NjMtMS41NjNhMS44NTMgMS44NTMgMCAwIDAgMS4xMjEtMS43MDJjMC0uNTM3LS4xNTUtMS4wNjEtLjQ0Ny0xLjUxMWwtLjYwNi0uOTM3YTEuMjUgMS4yNSAwIDAgMS0uMTk2LS41N2wtLjIyNi0yLjU4OEE1IDUgMCAwIDAgOC4xNjkuNzQ5SDcuODdjLTEuNjg4IDAtMy4xOTMuODQtNC4xIDIuMTM5TDEuODEyLjkzMmEuNjIzLjYyMyAwIDEgMC0uODguODhsMi4yMzUgMi4yMzZabS45NjcgMS4zNzVMMy45MSA3Ljk5N2EyLjUgMi41IDAgMCAxLS40MSAxLjE3bC0uNjIyLjkzYTEuNTA4IDEuNTA4IDAgMCAwLS4yNTMuODM4YzAgLjMyNS4yNjQuNTg4LjU4OS41ODhoNy40MjlsLTYuNDYtNi40NmEzLjc4NCAzLjc4NCAwIDAgMC0uMDQ4LjM2Wm0uNTM3LTEuNjMzIDcuNzMzIDcuNzMzaC4zNjhjLjMzMiAwIC42MDItLjI3LjYwMi0uNjAyIDAtLjI5NS0uMDg1LS41ODQtLjI0Ni0uODMybC0uNjA2LS45MzZhMi41IDIuNSAwIDAgMS0uMzkzLTEuMTQybC0uMjI1LTIuNTg4QTMuNzUgMy43NSAwIDAgMCA4LjE2OSAySDcuODdhMy43NSAzLjc1IDAgMCAwLTMuMTk4IDEuNzlabTEuNTU1IDguOTlDNi40NjIgMTMuNDczIDcuMTUgMTQgOCAxNGMuODUgMCAxLjUzOC0uNTI2IDEuNzczLTEuMjJINi4yMjdaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const NotificationOff = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-notification-off',
        'staticon-NotificationOff',
        className
      ),
      ...props,
    })
);
NotificationOff.displayName = 'NotificationOff'

export default NotificationOff;
