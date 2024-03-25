import styled, { css } from "styled-components";
import { AdjustmentsHorizontalIcon, ArrowLongDownIcon, ArrowLongUpIcon } from "@heroicons/react/24/solid";

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 120px;

  @media (max-width: 1024px) {
    padding: 96px;
  }
  @media (max-width: 768px) {
    padding: 64px;
  }
  @media (max-width: 480px) {
    padding: 32px;
  }
`;

const iconStyle = css`
  width: 16px;
  height: 16px;
  color: var(--color-icon);
`;

export const AdjustmentsHorizontalIconStyled = styled(AdjustmentsHorizontalIcon)`
  ${iconStyle};
`;

export const ArrowLongUpIconStyled = styled(ArrowLongUpIcon)`
  ${iconStyle};
`;

export const ArrowLongDownIconStyled = styled(ArrowLongDownIcon)`
  ${iconStyle};
`;
