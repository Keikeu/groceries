import styled from "styled-components";

const ButtonBox = styled.button`
  display: flex;
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-table);
  padding: var(--spacing-sm) var(--spacing-lg) var(--spacing-sm) var(--spacing-lg);
  box-shadow: var(--shadow-sm);
  gap: var(--spacing-sm);

  &:hover {
    background-color: var(--color-bg-highlight);
  }
`;

function Button({ children, onClick, ...rest }) {
  return (
    <ButtonBox onClick={onClick} {...rest}>
      {children}
    </ButtonBox>
  );
}

export default Button;
