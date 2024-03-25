import styled, { css } from "styled-components";

const ButtonBox = styled.button`
  border-radius: 50%;
  padding: var(--spacing-xs);

  svg {
    width: 16px;
    height: 16px;
    color: var(--color-icon);
  }

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: default;
      svg {
        color: var(--color-icon-disabled);
      }
    `}

  ${({ disabled }) =>
    !disabled &&
    css`
      &:hover {
        background-color: var(--color-bg-highlight);
      }
    `}
`;

function IconButton({ icon, onClick, disabled, label }) {
  return (
    <ButtonBox onClick={onClick} disabled={disabled} aria-label={label}>
      {icon}
    </ButtonBox>
  );
}

export default IconButton;
