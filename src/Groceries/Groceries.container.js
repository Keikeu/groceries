import { useCallback, useEffect, useMemo, useState } from "react";
import { groceryItems } from "../mockData.js";
import Groceries from "./Groceries";

function calculatePricePer100(price, weight) {
  return (price / (weight * 10)).toFixed(2);
}

export const SORT_ORDER = {
  ASC: "asc",
  DESC: "desc",
};

function GroceriesContainer() {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [sortBy, setSortBy] = useState();
  const [sortOrder, setSortOrder] = useState(SORT_ORDER.ASC);

  const [showSectionFilters, setShowSectionFilters] = useState(false);
  const [activeFilters, setActiveFilters] = useState([]);

  const processedGroceryItems = useMemo(() => {
    return groceryItems
      .filter((item) => activeFilters.length === 0 || activeFilters.includes(item.section))
      .map((item) => ({ ...item, pricePer100: calculatePricePer100(item.price, item.weight) }))
      .sort((a, b) => {
        if (sortBy) {
          if (sortOrder === SORT_ORDER.ASC) {
            return a[sortBy] > b[sortBy] ? 1 : -1;
          } else {
            return a[sortBy] < b[sortBy] ? 1 : -1;
          }
        } else {
          return 0;
        }
      });
  }, [sortBy, sortOrder, activeFilters]);

  useEffect(() => {
    setPage(1);
  }, [rowsPerPage, sortBy, sortOrder, activeFilters]);

  const sections = useMemo(() => {
    return groceryItems.reduce((acc, item) => {
      if (!acc.includes(item.section)) {
        acc.push(item.section);
      }
      return acc;
    }, []);
  }, []);

  const firstIndex = useMemo(() => {
    return (page - 1) * rowsPerPage;
  }, [page, rowsPerPage]);

  const lastIndex = useMemo(() => {
    return Math.min(processedGroceryItems.length, page * rowsPerPage) - 1;
  }, [page, rowsPerPage, processedGroceryItems]);

  const canGoPrevious = useMemo(() => {
    return page > 1;
  }, [page]);

  const canGoNext = useMemo(() => {
    return page < Math.ceil(processedGroceryItems.length / rowsPerPage);
  }, [page, rowsPerPage, processedGroceryItems]);

  const goPreviousPage = useCallback(() => {
    if (canGoPrevious) {
      setPage(page - 1);
    }
  }, [page, canGoPrevious]);

  const goNextPage = useCallback(() => {
    if (canGoNext) {
      setPage(page + 1);
    }
  }, [page, canGoNext]);

  function onSortClick(column) {
    // asc --> desc --> null
    if (column === sortBy) {
      if (sortOrder === SORT_ORDER.ASC) {
        setSortOrder(SORT_ORDER.DESC);
      } else if (sortOrder === SORT_ORDER.DESC) {
        setSortBy(null);
      }
    } else {
      setSortBy(column);
      setSortOrder(SORT_ORDER.ASC);
    }
  }

  function onFilterChange(section) {
    if (activeFilters.includes(section)) {
      setActiveFilters((filters) => filters.filter((filter) => filter !== section));
    } else {
      setActiveFilters((filters) => [...filters, section]);
    }
  }

  function clearActiveFilters() {
    setActiveFilters([]);
  }

  return (
    <Groceries
      groceryItems={processedGroceryItems}
      // sorting
      onSortClick={onSortClick}
      sortBy={sortBy}
      sortOrder={sortOrder}
      // filtering
      showSectionFilters={showSectionFilters}
      setShowSectionFilters={setShowSectionFilters}
      sections={sections}
      activeFilters={activeFilters}
      clearActiveFilters={clearActiveFilters}
      onFilterChange={onFilterChange}
      // pagination
      firstIndex={firstIndex}
      lastIndex={lastIndex}
      canGoPrevious={canGoPrevious}
      canGoNext={canGoNext}
      goPreviousPage={goPreviousPage}
      goNextPage={goNextPage}
      setRowsPerPage={setRowsPerPage}
    />
  );
}

export default GroceriesContainer;
