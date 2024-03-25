import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--spacing-lg);
  width: 100%;
`;

export const TableWrap = styled.div`
  overflow: auto;
  border: 1px solid var(--color-border-subtle) inset;
`;

export const Table = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
`;

export const TableHead = styled.thead`
  position: sticky;
  top: 0;
  background-color: var(--color-bg);
`;

export const Row = styled.tr`
  &:hover {
    background-color: var(--color-bg-highlight);
  }
`;

export const HeaderCell = styled.th`
  width: 25%;
  min-width: 136px;
  border: 1px solid var(--color-border-subtle);
  text-align: left;
`;

export const Cell = styled.td`
  width: 25%;
  min-width: 136px;
  border: 1px solid var(--color-border-subtle);
`;

export const TableLabel = styled.span`
  display: block;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  color: var(--color-text);
  padding: var(--spacing-lg);
`;
