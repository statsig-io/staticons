
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"d":"M3.873 2.501a.625.625 0 1 0 0 1.25h12.254a.625.625 0 0 0 0-1.25H3.873Zm5.333 2.844a1.123 1.123 0 0 1 1.59 0l2.122 2.122a.625.625 0 0 1-.883.884l-1.407-1.407v6.138l1.406-1.406a.625.625 0 1 1 .884.884l-2.123 2.123c-.44.44-1.151.44-1.59 0L7.082 12.56a.625.625 0 0 1 .883-.884l1.412 1.412V6.94l-1.41 1.412a.625.625 0 0 1-.884-.884l2.123-2.123Zm-5.958 11.53c0-.346.28-.625.625-.625h12.254a.625.625 0 0 1 0 1.25H3.873a.625.625 0 0 1-.625-.625Z"}]]

/**
 * @component @name Expand
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZD0iTTMuODczIDIuNTAxYS42MjUuNjI1IDAgMSAwIDAgMS4yNWgxMi4yNTRhLjYyNS42MjUgMCAwIDAgMC0xLjI1SDMuODczWm01LjMzMyAyLjg0NGExLjEyMyAxLjEyMyAwIDAgMSAxLjU5IDBsMi4xMjIgMi4xMjJhLjYyNS42MjUgMCAwIDEtLjg4My44ODRsLTEuNDA3LTEuNDA3djYuMTM4bDEuNDA2LTEuNDA2YS42MjUuNjI1IDAgMSAxIC44ODQuODg0bC0yLjEyMyAyLjEyM2MtLjQ0LjQ0LTEuMTUxLjQ0LTEuNTkgMEw3LjA4MiAxMi41NmEuNjI1LjYyNSAwIDAgMSAuODgzLS44ODRsMS40MTIgMS40MTJWNi45NGwtMS40MSAxLjQxMmEuNjI1LjYyNSAwIDAgMS0uODg0LS44ODRsMi4xMjMtMi4xMjNabS01Ljk1OCAxMS41M2MwLS4zNDYuMjgtLjYyNS42MjUtLjYyNWgxMi4yNTRhLjYyNS42MjUgMCAwIDEgMCAxLjI1SDMuODczYS42MjUuNjI1IDAgMCAxLS42MjUtLjYyNVoiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Expand = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-expand',
        'staticon-Expand',
        className
      ),
      ...props,
    })
);
Expand.displayName = 'Expand'

export default Expand;
