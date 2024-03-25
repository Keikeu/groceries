import styled from "styled-components";
import { AdjustmentsHorizontalIconStyled } from "../../App.styles";
import Button from "commons/components/Button";
import Checkbox from "commons/components/Checkbox";

const Box = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-sm);
  flex-wrap: wrap;
`;

const Title = styled.h2`
  font-size: 15px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.02em;
`;

const SectionFiltersPopover = styled.div`
  position: absolute;
  top: 40px;
  right: 0;
  z-index: var(--z-index-above);
  display: flex;
  flex-direction: column;
  padding: var(--spacing-sm);
  gap: var(--spacing-sm);
  background-color: var(--color-bg);
  box-shadow: var(--shadow-lg);
  border-radius: var(--radius-popover);
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
`;

function Header({
  showSectionFilters,
  setShowSectionFilters,
  sections,
  activeFilters,
  onFilterChange,
  clearActiveFilters,
}) {
  return (
    <Box>
      <Title>Today's groceries</Title>
      <Button aria-expanded={showSectionFilters} onClick={() => setShowSectionFilters((show) => !show)}>
        <AdjustmentsHorizontalIconStyled />
        Filter by section
      </Button>

      {showSectionFilters && (
        <SectionFiltersPopover>
          {sections.map((section) => (
            <Checkbox
              key={section}
              label={section}
              value={activeFilters.includes(section)}
              onChange={() => onFilterChange(section)}
            />
          ))}
          <Button onClick={clearActiveFilters}>Clear selection</Button>
        </SectionFiltersPopover>
      )}
    </Box>
  );
}

export default Header;
