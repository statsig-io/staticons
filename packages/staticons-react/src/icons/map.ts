
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"m8.25 4.554-.003 9.69 3.502 1.201v-9.69l-3.5-1.201ZM13 5.756v9.69l3.498-1.203.002-9.69L13 5.757Zm-6.003 8.488L7 4.554 3.502 5.756l-.002 9.69 3.497-1.203Zm.019-11.017a1.875 1.875 0 0 1 1.218 0l3.938 1.352a.625.625 0 0 0 .406 0l3.682-1.264c.73-.251 1.49.292 1.49 1.064l-.002 9.954c0 .48-.305.907-.76 1.063l-4.004 1.377a1.875 1.875 0 0 1-1.218 0l-3.94-1.353a.625.625 0 0 0-.406 0l-3.68 1.264a1.125 1.125 0 0 1-1.49-1.064l.002-9.953c0-.48.305-.908.76-1.064l4.004-1.376Z","clip-rule":"evenodd"}]]

/**
 * @component @name Map
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJtOC4yNSA0LjU1NC0uMDAzIDkuNjkgMy41MDIgMS4yMDF2LTkuNjlsLTMuNS0xLjIwMVpNMTMgNS43NTZ2OS42OWwzLjQ5OC0xLjIwMy4wMDItOS42OUwxMyA1Ljc1N1ptLTYuMDAzIDguNDg4TDcgNC41NTQgMy41MDIgNS43NTZsLS4wMDIgOS42OSAzLjQ5Ny0xLjIwM1ptLjAxOS0xMS4wMTdhMS44NzUgMS44NzUgMCAwIDEgMS4yMTggMGwzLjkzOCAxLjM1MmEuNjI1LjYyNSAwIDAgMCAuNDA2IDBsMy42ODItMS4yNjRjLjczLS4yNTEgMS40OS4yOTIgMS40OSAxLjA2NGwtLjAwMiA5Ljk1NGMwIC40OC0uMzA1LjkwNy0uNzYgMS4wNjNsLTQuMDA0IDEuMzc3YTEuODc1IDEuODc1IDAgMCAxLTEuMjE4IDBsLTMuOTQtMS4zNTNhLjYyNS42MjUgMCAwIDAtLjQwNiAwbC0zLjY4IDEuMjY0YTEuMTI1IDEuMTI1IDAgMCAxLTEuNDktMS4wNjRsLjAwMi05Ljk1M2MwLS40OC4zMDUtLjkwOC43Ni0xLjA2NGw0LjAwNC0xLjM3NloiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Map = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-map',
        'staticon-Map',
        className
      ),
      ...props,
    })
);
Map.displayName = 'Map'

export default Map;
