
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","d":"M8.749 5.53a.625.625 0 0 0 0-1.25H7.235a.625.625 0 1 0 0 1.25H8.75Z"}],["path",{"fill":"#000","fill-rule":"evenodd","d":"M1.698 3.875C1.698 2.839 2.538 2 3.573 2h8.854c1.036 0 1.875.84 1.875 1.875v6.392h.545c.43 0 .778.348.778.777v.831A2.125 2.125 0 0 1 13.5 14h-11a2.125 2.125 0 0 1-2.125-2.125v-.83c0-.43.348-.778.778-.778h.545V3.875Zm0 7.643v-.001h-.073v.358c0 .483.392.875.875.875h11a.875.875 0 0 0 .875-.875v-.358h-.073v.001H1.698Zm11.354-7.643v6.392H2.948V3.875c0-.345.28-.625.625-.625h8.854c.345 0 .625.28.625.625Z","clip-rule":"evenodd"}]]

/**
 * @component @name Computer
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTguNzQ5IDUuNTNhLjYyNS42MjUgMCAwIDAgMC0xLjI1SDcuMjM1YS42MjUuNjI1IDAgMSAwIDAgMS4yNUg4Ljc1WiIvPgogIDxwYXRoIGZpbGw9IiMwMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEuNjk4IDMuODc1QzEuNjk4IDIuODM5IDIuNTM4IDIgMy41NzMgMmg4Ljg1NGMxLjAzNiAwIDEuODc1Ljg0IDEuODc1IDEuODc1djYuMzkyaC41NDVjLjQzIDAgLjc3OC4zNDguNzc4Ljc3N3YuODMxQTIuMTI1IDIuMTI1IDAgMCAxIDEzLjUgMTRoLTExYTIuMTI1IDIuMTI1IDAgMCAxLTIuMTI1LTIuMTI1di0uODNjMC0uNDMuMzQ4LS43NzguNzc4LS43NzhoLjU0NVYzLjg3NVptMCA3LjY0M3YtLjAwMWgtLjA3M3YuMzU4YzAgLjQ4My4zOTIuODc1Ljg3NS44NzVoMTFhLjg3NS44NzUgMCAwIDAgLjg3NS0uODc1di0uMzU4aC0uMDczdi4wMDFIMS42OThabTExLjM1NC03LjY0M3Y2LjM5MkgyLjk0OFYzLjg3NWMwLS4zNDUuMjgtLjYyNS42MjUtLjYyNWg4Ljg1NGMuMzQ1IDAgLjYyNS4yOC42MjUuNjI1WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Computer = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-computer',
        'staticon-Computer',
        className
      ),
      ...props,
    })
);
Computer.displayName = 'Computer'

export default Computer;
