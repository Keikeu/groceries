import styled from "styled-components";

const SelectBox = styled.select`
  padding: var(--spacing-sm);
  gap: var(--spacing-sm);
  color: var(--color-text);

  &:hover {
    background-color: var(--color-bg-highlight);
  }
`;

function Select({ name, onChange, options }) {
  return (
    <SelectBox name={name} onChange={onChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </SelectBox>
  );
}

export default Select;
