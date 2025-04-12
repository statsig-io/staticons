
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M7.217 1.367a.878.878 0 0 1 1.566 0l1.84 3.618 4.01.632a.878.878 0 0 1 .484 1.489l-2.873 2.868.638 4.009a.878.878 0 0 1-1.266.92L8 13.057l-3.616 1.846a.878.878 0 0 1-1.266-.92l.638-4.009L.884 7.106a.878.878 0 0 1 .483-1.489l4.01-.632 1.84-3.618ZM8 2.587 6.406 5.722a.878.878 0 0 1-.646.469l-3.474.548 2.489 2.484c.199.2.29.482.246.76l-.552 3.472L7.6 11.857a.878.878 0 0 1 .798 0l3.132 1.598-.552-3.472a.878.878 0 0 1 .246-.76l2.489-2.484-3.474-.548a.878.878 0 0 1-.646-.47L8 2.588Z","clip-rule":"evenodd"}]]

/**
 * @component @name FavoriteLined
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNy4yMTcgMS4zNjdhLjg3OC44NzggMCAwIDEgMS41NjYgMGwxLjg0IDMuNjE4IDQuMDEuNjMyYS44NzguODc4IDAgMCAxIC40ODQgMS40ODlsLTIuODczIDIuODY4LjYzOCA0LjAwOWEuODc4Ljg3OCAwIDAgMS0xLjI2Ni45Mkw4IDEzLjA1N2wtMy42MTYgMS44NDZhLjg3OC44NzggMCAwIDEtMS4yNjYtLjkybC42MzgtNC4wMDlMLjg4NCA3LjEwNmEuODc4Ljg3OCAwIDAgMSAuNDgzLTEuNDg5bDQuMDEtLjYzMiAxLjg0LTMuNjE4Wk04IDIuNTg3IDYuNDA2IDUuNzIyYS44NzguODc4IDAgMCAxLS42NDYuNDY5bC0zLjQ3NC41NDggMi40ODkgMi40ODRjLjE5OS4yLjI5LjQ4Mi4yNDYuNzZsLS41NTIgMy40NzJMNy42IDExLjg1N2EuODc4Ljg3OCAwIDAgMSAuNzk4IDBsMy4xMzIgMS41OTgtLjU1Mi0zLjQ3MmEuODc4Ljg3OCAwIDAgMSAuMjQ2LS43NmwyLjQ4OS0yLjQ4NC0zLjQ3NC0uNTQ4YS44NzguODc4IDAgMCAxLS42NDYtLjQ3TDggMi41ODhaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const FavoriteLined = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-favorite-lined',
        'staticon-FavoriteLined',
        className
      ),
      ...props,
    })
);
FavoriteLined.displayName = 'FavoriteLined'

export default FavoriteLined;
