import styled from "styled-components";


export const FormContainer = styled.form`
  margin-top: 40px;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const InputForm = styled.input`
    border: 1px solid #545f7d;
    border-radius: 8px;
    display: inline-flex;
    align-items: center;
    margin-bottom: 30px;
    box-sizing: border-box;
    overflow: hidden;
    transition: 0.3s ease;
    position: relative;
    outline: none;
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.colors.primary};
    padding: 12px 20px;
    &:focus-within {
        border: 2px solid #545f7d;
      }
    &:hover {
    border-color: #5c068c;
    }
    
    &::-webkit-input-placeholder {
        font-family: inherit;
        color: #545f7d;
        font-weight: 400;
        font-size: 14px;
    }
    
`;

export const InputSelect = styled.select`
    border: 1px solid #545f7d;
    border-radius: 8px;
    display: inline-flex;
    align-items: center;
    margin-bottom: 30px;
    box-sizing: border-box;
    overflow: hidden;
    transition: 0.3s ease;
    position: relative;
    color: ${({ theme }) => theme.colors.primary};
    outline: none;
    width: 100%;
    height: 100%;
    padding: 12px 20px;
    &:focus-within {
        border: 2px solid #545f7d;
      }
    &:hover {
    border-color: #5c068c;
    }
    
    &::-webkit-input-placeholder {
        font-family: inherit;
        color: #545f7d;
        font-weight: 400;
        font-size: 14px;
    }
    
`;
export const CheckboxField = styled.div`  
    margin-bottom: 30px;
    display: inline-flex;
    flex-direction: row;
    gap: 4;
    label {
        color: ${({ theme }) => theme.colors.primary};
    }
    input {
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        width: 20px;
        height: 20px;
        position: relative;
        border: 1px solid #545f7d; 
        border-radius: 4px;
        &:before {
            content: '';
            position: absolute;
            top: 0px;
            left: 2px;
            width: 8px;
            height: 8px;
            border: 4px solid #5c068c; 
            border-top: none;
            border-right:none;
            transform: rotate(-46deg);
            opacity: 0;
          }
        
          &:checked:before {
            opacity: 1; 
          }
        
    }

`;

export const ButtonContainer = styled.button`  
   
    box-sizing: border-box;
    display: inline-block;
    color: white;
    background-color: #5c068c;
    font-size: 16px;
    line-height: 1.5;
    font-weight: 500;
    padding: 10px 18px;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s ease;
    border: none;
    outline: none;
    width: 100%;

`;