import styled from "styled-components";
import { ArrowLongDownIconStyled, ArrowLongUpIconStyled } from "../../App.styles";
import { SORT_ORDER } from "../Groceries.container";

const Label = styled.h2`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  color: var(--color-text-subtle);
  padding: var(--spacing-md) var(--spacing-lg);
  cursor: pointer;

  &:hover {
    background-color: var(--color-bg-highlight);
  }
`;

function TableHeaderLabel({ name, onSortClick, sortOrder, sortBy, children }) {
  return (
    <Label
      onClick={() => onSortClick(name)}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSortClick(name);
        }
      }}
    >
      {sortBy === name && <>{sortOrder === SORT_ORDER.ASC ? <ArrowLongUpIconStyled /> : <ArrowLongDownIconStyled />}</>}
      {children}
    </Label>
  );
}

export default TableHeaderLabel;
