import styled from "styled-components";

const Box = styled.label`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm);
  cursor: pointer;

  &:hover {
    background-color: var(--color-bg-highlight);
  }
`;

function Checkbox({ label, value, onChange }) {
  return (
    <Box
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onChange(e);
        }
      }}
    >
      <input type="checkbox" id={label} name={label} checked={value} onChange={onChange} tabIndex={-1} />
      {label}
    </Box>
  );
}

export default Checkbox;
