import styled from "styled-components";
import Select from "commons/components/Select";
import IconButton from "commons/components/IconButton";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";

const Box = styled.footer`
  display: flex;
  gap: var(--spacing-sm) var(--spacing-xl);
  color: var(--color-text-subtle);
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  flex-wrap: wrap;
`;

const RowsPerPage = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
`;

const Indexes = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
`;

const rowsPerPageOptions = [
  { value: 10, label: "10" },
  { value: 20, label: "20" },
  { value: 50, label: "50" },
  { value: 100, label: "100" },
];

function Footer({
  groceryItems,
  firstIndex,
  lastIndex,
  goPreviousPage,
  goNextPage,
  canGoPrevious,
  canGoNext,
  setRowsPerPage,
}) {
  return (
    <Box>
      <RowsPerPage>
        <label htmlFor="rowsPerPage">Rows per page:</label>
        <Select
          id="rowsPerPage"
          name="Rows per page"
          onChange={(e) => setRowsPerPage(e.target.value)}
          options={rowsPerPageOptions}
        />
      </RowsPerPage>

      <Indexes>
        <span>
          {firstIndex + 1} - {lastIndex + 1} of {groceryItems.length}
        </span>

        <IconButton
          icon={<ChevronLeftIcon />}
          onClick={goPreviousPage}
          disabled={!canGoPrevious}
          label="Previous page"
        />
        <IconButton icon={<ChevronRightIcon />} onClick={goNextPage} disabled={!canGoNext} label="Next page" />
      </Indexes>
    </Box>
  );
}

export default Footer;
