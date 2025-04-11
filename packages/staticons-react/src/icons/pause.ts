
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","d":"M14.75 9v6a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 1.5 0Zm-4 6V9a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0Z"}],["path",{"fill":"#000","fill-rule":"evenodd","d":"M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18Zm0-1.5a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z","clip-rule":"evenodd"}]]

/**
 * @component @name Pause
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTE0Ljc1IDl2NmEuNzUuNzUgMCAwIDEtMS41IDBWOWEuNzUuNzUgMCAwIDEgMS41IDBabS00IDZWOWEuNzUuNzUgMCAwIDAtMS41IDB2NmEuNzUuNzUgMCAwIDAgMS41IDBaIi8+CiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTIgMjFhOSA5IDAgMSAxIDAtMTggOSA5IDAgMCAxIDAgMThabTAtMS41YTcuNSA3LjUgMCAxIDEgMC0xNSA3LjUgNy41IDAgMCAxIDAgMTVaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Pause = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-pause',
        'staticon-Pause',
        className
      ),
      ...props,
    })
);
Pause.displayName = 'Pause'

export default Pause;
