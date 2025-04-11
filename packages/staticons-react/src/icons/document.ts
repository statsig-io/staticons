
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M5.877 5.749c0-.69.56-1.25 1.25-1.25h5.16v3.352a2.25 2.25 0 0 0 2.25 2.25h3.587v8.15c0 .69-.56 1.25-1.25 1.25H7.127c-.69 0-1.25-.56-1.25-1.25V5.749ZM17.68 8.601l-3.89-3.752-.003-.003v3.005c0 .414.336.75.75.75h3.143ZM7.127 3a2.75 2.75 0 0 0-2.75 2.75v12.502a2.75 2.75 0 0 0 2.75 2.75h9.747a2.75 2.75 0 0 0 2.75-2.75V9.559a2.75 2.75 0 0 0-.841-1.98l-3.95-3.81a2.75 2.75 0 0 0-1.91-.77H7.127Zm.874 13.255a.75.75 0 0 1 .75-.75h3.747a.75.75 0 1 1 0 1.5H8.751a.75.75 0 0 1-.75-.75Zm.75-3.753a.75.75 0 0 0 0 1.5h6.251a.75.75 0 1 0 0-1.5h-6.25Z","clip-rule":"evenodd"}]]

/**
 * @component @name Document
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNS44NzcgNS43NDljMC0uNjkuNTYtMS4yNSAxLjI1LTEuMjVoNS4xNnYzLjM1MmEyLjI1IDIuMjUgMCAwIDAgMi4yNSAyLjI1aDMuNTg3djguMTVjMCAuNjktLjU2IDEuMjUtMS4yNSAxLjI1SDcuMTI3Yy0uNjkgMC0xLjI1LS41Ni0xLjI1LTEuMjVWNS43NDlaTTE3LjY4IDguNjAxbC0zLjg5LTMuNzUyLS4wMDMtLjAwM3YzLjAwNWMwIC40MTQuMzM2Ljc1Ljc1Ljc1aDMuMTQzWk03LjEyNyAzYTIuNzUgMi43NSAwIDAgMC0yLjc1IDIuNzV2MTIuNTAyYTIuNzUgMi43NSAwIDAgMCAyLjc1IDIuNzVoOS43NDdhMi43NSAyLjc1IDAgMCAwIDIuNzUtMi43NVY5LjU1OWEyLjc1IDIuNzUgMCAwIDAtLjg0MS0xLjk4bC0zLjk1LTMuODFhMi43NSAyLjc1IDAgMCAwLTEuOTEtLjc3SDcuMTI3Wm0uODc0IDEzLjI1NWEuNzUuNzUgMCAwIDEgLjc1LS43NWgzLjc0N2EuNzUuNzUgMCAxIDEgMCAxLjVIOC43NTFhLjc1Ljc1IDAgMCAxLS43NS0uNzVabS43NS0zLjc1M2EuNzUuNzUgMCAwIDAgMCAxLjVoNi4yNTFhLjc1Ljc1IDAgMSAwIDAtMS41aC02LjI1WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Document = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-document',
        'staticon-Document',
        className
      ),
      ...props,
    })
);
Document.displayName = 'Document'

export default Document;
