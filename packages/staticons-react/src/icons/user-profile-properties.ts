
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M6.002 5.749c-.69 0-1.25.56-1.25 1.25L4.75 17c0 .69.56 1.25 1.25 1.25h1.246c.367-1.255 1.2-2.582 2.474-3.336a3.396 3.396 0 1 1 4.57-.007c1.275.753 2.103 2.085 2.467 3.343h1.242c.69 0 1.25-.56 1.25-1.25l.004-8.249c0-.69-.56-1.25-1.25-1.25h-5.616a1.75 1.75 0 0 1-1.156-.436L9.804 5.81a.25.25 0 0 0-.165-.062H6.002Zm9.173 12.502c-.52-1.345-1.643-2.455-3.164-2.455-1.522 0-2.657 1.112-3.183 2.455h6.347ZM3.252 6.998a2.75 2.75 0 0 1 2.75-2.749H9.64c.425 0 .836.155 1.156.436L12.22 5.94a.25.25 0 0 0 .165.062h5.616a2.75 2.75 0 0 1 2.75 2.75l-.003 8.25a2.75 2.75 0 0 1-2.75 2.75h-12A2.75 2.75 0 0 1 3.249 17l.003-10.002ZM12 10.503a1.896 1.896 0 1 0 0 3.792 1.896 1.896 0 0 0 0-3.792Z","clip-rule":"evenodd"}]]

/**
 * @component @name UserProfileProperties
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNi4wMDIgNS43NDljLS42OSAwLTEuMjUuNTYtMS4yNSAxLjI1TDQuNzUgMTdjMCAuNjkuNTYgMS4yNSAxLjI1IDEuMjVoMS4yNDZjLjM2Ny0xLjI1NSAxLjItMi41ODIgMi40NzQtMy4zMzZhMy4zOTYgMy4zOTYgMCAxIDEgNC41Ny0uMDA3YzEuMjc1Ljc1MyAyLjEwMyAyLjA4NSAyLjQ2NyAzLjM0M2gxLjI0MmMuNjkgMCAxLjI1LS41NiAxLjI1LTEuMjVsLjAwNC04LjI0OWMwLS42OS0uNTYtMS4yNS0xLjI1LTEuMjVoLTUuNjE2YTEuNzUgMS43NSAwIDAgMS0xLjE1Ni0uNDM2TDkuODA0IDUuODFhLjI1LjI1IDAgMCAwLS4xNjUtLjA2Mkg2LjAwMlptOS4xNzMgMTIuNTAyYy0uNTItMS4zNDUtMS42NDMtMi40NTUtMy4xNjQtMi40NTUtMS41MjIgMC0yLjY1NyAxLjExMi0zLjE4MyAyLjQ1NWg2LjM0N1pNMy4yNTIgNi45OThhMi43NSAyLjc1IDAgMCAxIDIuNzUtMi43NDlIOS42NGMuNDI1IDAgLjgzNi4xNTUgMS4xNTYuNDM2TDEyLjIyIDUuOTRhLjI1LjI1IDAgMCAwIC4xNjUuMDYyaDUuNjE2YTIuNzUgMi43NSAwIDAgMSAyLjc1IDIuNzVsLS4wMDMgOC4yNWEyLjc1IDIuNzUgMCAwIDEtMi43NSAyLjc1aC0xMkEyLjc1IDIuNzUgMCAwIDEgMy4yNDkgMTdsLjAwMy0xMC4wMDJaTTEyIDEwLjUwM2ExLjg5NiAxLjg5NiAwIDEgMCAwIDMuNzkyIDEuODk2IDEuODk2IDAgMCAwIDAtMy43OTJaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const UserProfileProperties = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-user-profile-properties',
        'staticon-UserProfileProperties',
        className
      ),
      ...props,
    })
);
UserProfileProperties.displayName = 'UserProfileProperties'

export default UserProfileProperties;
