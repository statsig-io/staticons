
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","d":"M8.794 1.08a1.124 1.124 0 0 0-1.59 0l-1.94 1.94a.625.625 0 0 0 .883.884l1.229-1.229v4.793H2.583l1.325-1.325a.625.625 0 1 0-.884-.883L1.08 7.205a1.124 1.124 0 0 0 0 1.59l1.94 1.94a.624.624 0 1 0 .884-.883L2.768 8.717h4.608v4.607l-1.232-1.231a.624.624 0 1 0-.883.883l1.945 1.945c.439.439 1.15.439 1.59 0l1.94-1.94a.624.624 0 1 0-.883-.884l-1.228 1.229v-4.61h4.606l-1.139 1.139a.625.625 0 0 0 .883.883l1.946-1.945a1.124 1.124 0 0 0 0-1.59l-1.941-1.94a.624.624 0 1 0-.883.883l1.321 1.321H8.625v-4.79l1.23 1.23a.624.624 0 1 0 .884-.883L8.794 1.08Z"}]]

/**
 * @component @name Drag2
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTguNzk0IDEuMDhhMS4xMjQgMS4xMjQgMCAwIDAtMS41OSAwbC0xLjk0IDEuOTRhLjYyNS42MjUgMCAwIDAgLjg4My44ODRsMS4yMjktMS4yMjl2NC43OTNIMi41ODNsMS4zMjUtMS4zMjVhLjYyNS42MjUgMCAxIDAtLjg4NC0uODgzTDEuMDggNy4yMDVhMS4xMjQgMS4xMjQgMCAwIDAgMCAxLjU5bDEuOTQgMS45NGEuNjI0LjYyNCAwIDEgMCAuODg0LS44ODNMMi43NjggOC43MTdoNC42MDh2NC42MDdsLTEuMjMyLTEuMjMxYS42MjQuNjI0IDAgMSAwLS44ODMuODgzbDEuOTQ1IDEuOTQ1Yy40MzkuNDM5IDEuMTUuNDM5IDEuNTkgMGwxLjk0LTEuOTRhLjYyNC42MjQgMCAxIDAtLjg4My0uODg0bC0xLjIyOCAxLjIyOXYtNC42MWg0LjYwNmwtMS4xMzkgMS4xMzlhLjYyNS42MjUgMCAwIDAgLjg4My44ODNsMS45NDYtMS45NDVhMS4xMjQgMS4xMjQgMCAwIDAgMC0xLjU5bC0xLjk0MS0xLjk0YS42MjQuNjI0IDAgMSAwLS44ODMuODgzbDEuMzIxIDEuMzIxSDguNjI1di00Ljc5bDEuMjMgMS4yM2EuNjI0LjYyNCAwIDEgMCAuODg0LS44ODNMOC43OTQgMS4wOFoiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Drag2 = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-drag2',
        'staticon-Drag2',
        className
      ),
      ...props,
    })
);
Drag2.displayName = 'Drag2'

export default Drag2;
