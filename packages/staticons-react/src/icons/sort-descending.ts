
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","d":"M17.234 16.511V6.159a.75.75 0 1 1 1.5 0V16.5l1.86-1.864a.749.749 0 0 1 1.062 0 .753.753 0 0 1 0 1.063l-2.44 2.444a1.747 1.747 0 0 1-2.474 0l-2.435-2.44a.753.753 0 0 1 0-1.063.749.749 0 0 1 1.061 0l1.866 1.87ZM2.875 5.974a.75.75 0 0 0 0 1.504h10.838a.75.75 0 0 0 0-1.504H2.876Zm-.75 6.077a.75.75 0 0 1 .75-.752h7.363a.75.75 0 0 1 0 1.504H2.875a.75.75 0 0 1-.75-.752Zm0 5.252a.75.75 0 0 1 .75-.752h3.752a.75.75 0 0 1 0 1.504H2.875a.75.75 0 0 1-.75-.752Z"}]]

/**
 * @component @name SortDescending
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTE3LjIzNCAxNi41MTFWNi4xNTlhLjc1Ljc1IDAgMSAxIDEuNSAwVjE2LjVsMS44Ni0xLjg2NGEuNzQ5Ljc0OSAwIDAgMSAxLjA2MiAwIC43NTMuNzUzIDAgMCAxIDAgMS4wNjNsLTIuNDQgMi40NDRhMS43NDcgMS43NDcgMCAwIDEtMi40NzQgMGwtMi40MzUtMi40NGEuNzUzLjc1MyAwIDAgMSAwLTEuMDYzLjc0OS43NDkgMCAwIDEgMS4wNjEgMGwxLjg2NiAxLjg3Wk0yLjg3NSA1Ljk3NGEuNzUuNzUgMCAwIDAgMCAxLjUwNGgxMC44MzhhLjc1Ljc1IDAgMCAwIDAtMS41MDRIMi44NzZabS0uNzUgNi4wNzdhLjc1Ljc1IDAgMCAxIC43NS0uNzUyaDcuMzYzYS43NS43NSAwIDAgMSAwIDEuNTA0SDIuODc1YS43NS43NSAwIDAgMS0uNzUtLjc1MlptMCA1LjI1MmEuNzUuNzUgMCAwIDEgLjc1LS43NTJoMy43NTJhLjc1Ljc1IDAgMCAxIDAgMS41MDRIMi44NzVhLjc1Ljc1IDAgMCAxLS43NS0uNzUyWiIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const SortDescending = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-sort-descending',
        'staticon-SortDescending',
        className
      ),
      ...props,
    })
);
SortDescending.displayName = 'SortDescending'

export default SortDescending;
