
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M6.125 20.606a2.75 2.75 0 0 1-2.75-2.75V6.117a2.75 2.75 0 0 1 2.75-2.75h11.75a2.75 2.75 0 0 1 2.75 2.75v11.74a2.75 2.75 0 0 1-2.75 2.75h-2.239a.754.754 0 0 1-.268 0H6.124Zm10.127-1.5h1.623c.69 0 1.25-.56 1.25-1.25V6.117c0-.69-.56-1.25-1.25-1.25h-1.623v14.24Zm-1.5-14.239v14.24H6.125c-.69 0-1.25-.56-1.25-1.25V6.116c0-.69.56-1.25 1.25-1.25h8.627ZM8.003 8.795a.75.75 0 0 1 1.058-.08l2.708 2.323a1.25 1.25 0 0 1 0 1.897L9.06 15.26a.75.75 0 1 1-.977-1.138l2.487-2.134-2.487-2.134a.75.75 0 0 1-.08-1.058Z","clip-rule":"evenodd"}]]

/**
 * @component @name ClosePanel
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNi4xMjUgMjAuNjA2YTIuNzUgMi43NSAwIDAgMS0yLjc1LTIuNzVWNi4xMTdhMi43NSAyLjc1IDAgMCAxIDIuNzUtMi43NWgxMS43NWEyLjc1IDIuNzUgMCAwIDEgMi43NSAyLjc1djExLjc0YTIuNzUgMi43NSAwIDAgMS0yLjc1IDIuNzVoLTIuMjM5YS43NTQuNzU0IDAgMCAxLS4yNjggMEg2LjEyNFptMTAuMTI3LTEuNWgxLjYyM2MuNjkgMCAxLjI1LS41NiAxLjI1LTEuMjVWNi4xMTdjMC0uNjktLjU2LTEuMjUtMS4yNS0xLjI1aC0xLjYyM3YxNC4yNFptLTEuNS0xNC4yMzl2MTQuMjRINi4xMjVjLS42OSAwLTEuMjUtLjU2LTEuMjUtMS4yNVY2LjExNmMwLS42OS41Ni0xLjI1IDEuMjUtMS4yNWg4LjYyN1pNOC4wMDMgOC43OTVhLjc1Ljc1IDAgMCAxIDEuMDU4LS4wOGwyLjcwOCAyLjMyM2ExLjI1IDEuMjUgMCAwIDEgMCAxLjg5N0w5LjA2IDE1LjI2YS43NS43NSAwIDEgMS0uOTc3LTEuMTM4bDIuNDg3LTIuMTM0LTIuNDg3LTIuMTM0YS43NS43NSAwIDAgMS0uMDgtMS4wNThaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const ClosePanel = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-close-panel',
        'staticon-ClosePanel',
        className
      ),
      ...props,
    })
);
ClosePanel.displayName = 'ClosePanel'

export default ClosePanel;
