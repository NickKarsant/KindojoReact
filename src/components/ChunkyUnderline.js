import React from 'react';
import styled from '@emotion/styled';

const StyledChunkyUnderline = styled.span`
      background-image: linear-gradient(#2B85FF 0%, #2B85FF 100%);
      background-repeat: repeat-x;
      background-position: 0 0.7em;
      background-size: 16px 18px;
  `;

export const ChunkyUnderline = ({
  children,
}) => <StyledChunkyUnderline>{children}</StyledChunkyUnderline>;


