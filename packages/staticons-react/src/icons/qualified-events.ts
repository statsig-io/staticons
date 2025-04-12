
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M4.417 1.123v.8h4.81v-.8a.625.625 0 1 1 1.25 0v.8h.81c1.036 0 1.875.84 1.875 1.876v3.2a4.535 4.535 0 1 1-6.41 5.653H2.375A1.875 1.875 0 0 1 .5 10.777V3.799c0-1.036.84-1.875 1.875-1.875h.793v-.8a.625.625 0 1 1 1.25-.001Zm7.495 4.793v.615a4.535 4.535 0 0 0-5.462 4.871H2.374a.625.625 0 0 1-.625-.625V5.916h10.163Zm0-1.25v-.867a.625.625 0 0 0-.625-.625H2.374a.625.625 0 0 0-.625.625v.867h10.163Zm-.947 9.587a3.285 3.285 0 1 0 0-6.571 3.285 3.285 0 0 0 0 6.57Zm2.08-3.674a.625.625 0 0 0-.883-.884l-1.793 1.792-.789-.79a.625.625 0 1 0-.884.885l1.055 1.054a.875.875 0 0 0 1.237 0l2.058-2.057Z","clip-rule":"evenodd"}]]

/**
 * @component @name QualifiedEvents
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNC40MTcgMS4xMjN2LjhoNC44MXYtLjhhLjYyNS42MjUgMCAxIDEgMS4yNSAwdi44aC44MWMxLjAzNiAwIDEuODc1Ljg0IDEuODc1IDEuODc2djMuMmE0LjUzNSA0LjUzNSAwIDEgMS02LjQxIDUuNjUzSDIuMzc1QTEuODc1IDEuODc1IDAgMCAxIC41IDEwLjc3N1YzLjc5OWMwLTEuMDM2Ljg0LTEuODc1IDEuODc1LTEuODc1aC43OTN2LS44YS42MjUuNjI1IDAgMSAxIDEuMjUtLjAwMVptNy40OTUgNC43OTN2LjYxNWE0LjUzNSA0LjUzNSAwIDAgMC01LjQ2MiA0Ljg3MUgyLjM3NGEuNjI1LjYyNSAwIDAgMS0uNjI1LS42MjVWNS45MTZoMTAuMTYzWm0wLTEuMjV2LS44NjdhLjYyNS42MjUgMCAwIDAtLjYyNS0uNjI1SDIuMzc0YS42MjUuNjI1IDAgMCAwLS42MjUuNjI1di44NjdoMTAuMTYzWm0tLjk0NyA5LjU4N2EzLjI4NSAzLjI4NSAwIDEgMCAwLTYuNTcxIDMuMjg1IDMuMjg1IDAgMCAwIDAgNi41N1ptMi4wOC0zLjY3NGEuNjI1LjYyNSAwIDAgMC0uODgzLS44ODRsLTEuNzkzIDEuNzkyLS43ODktLjc5YS42MjUuNjI1IDAgMSAwLS44ODQuODg1bDEuMDU1IDEuMDU0YS44NzUuODc1IDAgMCAwIDEuMjM3IDBsMi4wNTgtMi4wNTdaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const QualifiedEvents = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-qualified-events',
        'staticon-QualifiedEvents',
        className
      ),
      ...props,
    })
);
QualifiedEvents.displayName = 'QualifiedEvents'

export default QualifiedEvents;
