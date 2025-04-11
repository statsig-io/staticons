
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","d":"M16.742 5.911a1.747 1.747 0 0 1 2.475 0l2.439 2.444a.753.753 0 0 1 0 1.063.749.749 0 0 1-1.061 0l-1.86-1.864v10.342a.75.75 0 1 1-1.5 0V7.544l-1.867 1.87a.749.749 0 0 1-1.06 0 .753.753 0 0 1 0-1.063l2.434-2.44Zm-14.617.815a.75.75 0 0 0 .75.752h3.752a.75.75 0 0 0 0-1.504H2.875a.75.75 0 0 0-.75.752Zm0 5.252a.75.75 0 0 0 .75.752h7.363a.75.75 0 0 0 0-1.504H2.875a.75.75 0 0 0-.75.752Zm.75 6.077a.75.75 0 0 1 0-1.504h10.838a.75.75 0 0 1 0 1.504H2.876Z"}]]

/**
 * @component @name SortAscending
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTE2Ljc0MiA1LjkxMWExLjc0NyAxLjc0NyAwIDAgMSAyLjQ3NSAwbDIuNDM5IDIuNDQ0YS43NTMuNzUzIDAgMCAxIDAgMS4wNjMuNzQ5Ljc0OSAwIDAgMS0xLjA2MSAwbC0xLjg2LTEuODY0djEwLjM0MmEuNzUuNzUgMCAxIDEtMS41IDBWNy41NDRsLTEuODY3IDEuODdhLjc0OS43NDkgMCAwIDEtMS4wNiAwIC43NTMuNzUzIDAgMCAxIDAtMS4wNjNsMi40MzQtMi40NFptLTE0LjYxNy44MTVhLjc1Ljc1IDAgMCAwIC43NS43NTJoMy43NTJhLjc1Ljc1IDAgMCAwIDAtMS41MDRIMi44NzVhLjc1Ljc1IDAgMCAwLS43NS43NTJabTAgNS4yNTJhLjc1Ljc1IDAgMCAwIC43NS43NTJoNy4zNjNhLjc1Ljc1IDAgMCAwIDAtMS41MDRIMi44NzVhLjc1Ljc1IDAgMCAwLS43NS43NTJabS43NSA2LjA3N2EuNzUuNzUgMCAwIDEgMC0xLjUwNGgxMC44MzhhLjc1Ljc1IDAgMCAxIDAgMS41MDRIMi44NzZaIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const SortAscending = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-sort-ascending',
        'staticon-SortAscending',
        className
      ),
      ...props,
    })
);
SortAscending.displayName = 'SortAscending'

export default SortAscending;
