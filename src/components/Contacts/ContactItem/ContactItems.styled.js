import styled from 'styled-components';

export const ContactCard = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  :not(:last-child) {
    margin-bottom: 10px;
  }
`;
export const Name = styled.span`
  font-weight: 600;
`;
export const Number = styled.span`
  font-weight: 700;
`;
export const DeleteBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  border-radius: 5px;
  height: 30px;
  padding: 17px 40px;
  margin-left: 10px;
  border: none;
  background-color: #9e9e99;
  color: white;
  cursor: pointer;
`;
