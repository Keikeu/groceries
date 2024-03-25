import { Cell, HeaderCell, Main, Row, Table, TableHead, TableLabel, TableWrap } from "./Groceries.styles";
import TableHeaderLabel from "./components/TableHeaderLabel";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Groceries({
  groceryItems,
  // sorting
  onSortClick,
  sortBy,
  sortOrder,
  // filtering
  showSectionFilters,
  setShowSectionFilters,
  sections,
  activeFilters,
  clearActiveFilters,
  onFilterChange,
  // pagination
  firstIndex,
  lastIndex,
  canGoPrevious,
  canGoNext,
  goPreviousPage,
  goNextPage,
  setRowsPerPage,
}) {
  return (
    <Main>
      <Header
        showSectionFilters={showSectionFilters}
        setShowSectionFilters={setShowSectionFilters}
        sections={sections}
        activeFilters={activeFilters}
        onFilterChange={onFilterChange}
        clearActiveFilters={clearActiveFilters}
      />

      <TableWrap>
        <Table>
          <TableHead>
            <tr>
              <HeaderCell>
                <TableHeaderLabel name="name" onSortClick={onSortClick} sortOrder={sortOrder} sortBy={sortBy}>
                  Name
                </TableHeaderLabel>
              </HeaderCell>
              <HeaderCell>
                <TableHeaderLabel name="section" onSortClick={onSortClick} sortOrder={sortOrder} sortBy={sortBy}>
                  Section
                </TableHeaderLabel>
              </HeaderCell>
              <HeaderCell>
                <TableHeaderLabel name="price" onSortClick={onSortClick} sortOrder={sortOrder} sortBy={sortBy}>
                  Price &#40;€&#41;
                </TableHeaderLabel>
              </HeaderCell>
              <HeaderCell>
                <TableHeaderLabel name="pricePer100" onSortClick={onSortClick} sortOrder={sortOrder} sortBy={sortBy}>
                  Price / 100 g &#40;€&#41;
                </TableHeaderLabel>
              </HeaderCell>
            </tr>
          </TableHead>
          <tbody>
            {groceryItems.slice(firstIndex, lastIndex + 1).map((item) => (
              <Row key={item.id}>
                <HeaderCell>
                  <TableLabel>{item.name}</TableLabel>
                </HeaderCell>
                <Cell>
                  <TableLabel>{item.section}</TableLabel>
                </Cell>
                <Cell>
                  <TableLabel style={{ textAlign: "right" }}>{item.price}</TableLabel>
                </Cell>
                <Cell>
                  <TableLabel style={{ textAlign: "right" }}>{item.pricePer100}</TableLabel>
                </Cell>
              </Row>
            ))}
          </tbody>
        </Table>
      </TableWrap>

      <Footer
        groceryItems={groceryItems}
        firstIndex={firstIndex}
        lastIndex={lastIndex}
        goPreviousPage={goPreviousPage}
        goNextPage={goNextPage}
        canGoPrevious={canGoPrevious}
        canGoNext={canGoNext}
        setRowsPerPage={setRowsPerPage}
      />
    </Main>
  );
}

export default Groceries;
