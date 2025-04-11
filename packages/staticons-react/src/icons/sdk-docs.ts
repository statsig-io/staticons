
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M5.877 5.749c0-.69.56-1.25 1.25-1.25h5.16v3.352a2.25 2.25 0 0 0 2.25 2.25h3.587v8.15c0 .69-.56 1.25-1.25 1.25H7.127c-.69 0-1.25-.56-1.25-1.25V5.749ZM17.68 8.601l-3.89-3.752-.003-.003v3.005c0 .414.336.75.75.75h3.143ZM7.127 3a2.75 2.75 0 0 0-2.75 2.75v12.502a2.75 2.75 0 0 0 2.75 2.75h9.747a2.75 2.75 0 0 0 2.75-2.75V9.559a2.75 2.75 0 0 0-.841-1.98l-3.95-3.81a2.75 2.75 0 0 0-1.91-.77H7.127Zm6.036 9.515a.789.789 0 0 1 1.083 0l2.092 2.006a.713.713 0 0 1 0 1.038l-2.092 2.006a.789.789 0 0 1-1.083 0 .713.713 0 0 1 0-1.038l1.55-1.487-1.55-1.487a.713.713 0 0 1 0-1.038Zm-3.408 0a.789.789 0 0 1 1.083 0 .713.713 0 0 1 0 1.038l-1.55 1.487 1.55 1.487a.713.713 0 0 1 0 1.038.789.789 0 0 1-1.083 0l-2.092-2.006a.713.713 0 0 1 0-1.038l2.092-2.006Z","clip-rule":"evenodd"}]]

/**
 * @component @name SdkDocs
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNS44NzcgNS43NDljMC0uNjkuNTYtMS4yNSAxLjI1LTEuMjVoNS4xNnYzLjM1MmEyLjI1IDIuMjUgMCAwIDAgMi4yNSAyLjI1aDMuNTg3djguMTVjMCAuNjktLjU2IDEuMjUtMS4yNSAxLjI1SDcuMTI3Yy0uNjkgMC0xLjI1LS41Ni0xLjI1LTEuMjVWNS43NDlaTTE3LjY4IDguNjAxbC0zLjg5LTMuNzUyLS4wMDMtLjAwM3YzLjAwNWMwIC40MTQuMzM2Ljc1Ljc1Ljc1aDMuMTQzWk03LjEyNyAzYTIuNzUgMi43NSAwIDAgMC0yLjc1IDIuNzV2MTIuNTAyYTIuNzUgMi43NSAwIDAgMCAyLjc1IDIuNzVoOS43NDdhMi43NSAyLjc1IDAgMCAwIDIuNzUtMi43NVY5LjU1OWEyLjc1IDIuNzUgMCAwIDAtLjg0MS0xLjk4bC0zLjk1LTMuODFhMi43NSAyLjc1IDAgMCAwLTEuOTEtLjc3SDcuMTI3Wm02LjAzNiA5LjUxNWEuNzg5Ljc4OSAwIDAgMSAxLjA4MyAwbDIuMDkyIDIuMDA2YS43MTMuNzEzIDAgMCAxIDAgMS4wMzhsLTIuMDkyIDIuMDA2YS43ODkuNzg5IDAgMCAxLTEuMDgzIDAgLjcxMy43MTMgMCAwIDEgMC0xLjAzOGwxLjU1LTEuNDg3LTEuNTUtMS40ODdhLjcxMy43MTMgMCAwIDEgMC0xLjAzOFptLTMuNDA4IDBhLjc4OS43ODkgMCAwIDEgMS4wODMgMCAuNzEzLjcxMyAwIDAgMSAwIDEuMDM4bC0xLjU1IDEuNDg3IDEuNTUgMS40ODdhLjcxMy43MTMgMCAwIDEgMCAxLjAzOC43ODkuNzg5IDAgMCAxLTEuMDgzIDBsLTIuMDkyLTIuMDA2YS43MTMuNzEzIDAgMCAxIDAtMS4wMzhsMi4wOTItMi4wMDZaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const SdkDocs = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-sdk-docs',
        'staticon-SdkDocs',
        className
      ),
      ...props,
    })
);
SdkDocs.displayName = 'SdkDocs'

export default SdkDocs;
