import styled from 'styled-components';

export const Form = styled.form`
  padding: 20px;
  display: flex;
  row-gap: 20px;
  font-size: 1.2em;
  flex-direction: column;
  gap: 10px;
  background-color: #ddd;
  border-radius: 10px;
  margin-bottom: 24px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  height: 40px;
  width: 100%;
  padding: 0 10px 0 10px;
  &::placeholder {
    font-size: 12px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  background-color: #4b4b4b;
  color: white;
  font-size: 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 50px;
`;
