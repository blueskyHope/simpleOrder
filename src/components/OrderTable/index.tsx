import React, { useState } from 'react';
import { StyledTable } from '../../shared/Table';
import { Card, CardHeader, CardBody } from '../../shared/Card';
import { Wrapper } from './styles';
import { SearchGroup } from '../../shared/Search';
import { Button, TextButton } from '../../shared/Button';
import AvocadoHass from '../../assets/images/Avocado Hass.jpg';
import { PrintIcon, ClearButton, CheckButton, SearchIcon } from '../../shared/Icons';

const tableData = {
  header: ['', 'Product name', 'Brand', 'Price', 'Quantity', 'Total', 'Status'],
  content: [
    {
      thumbnail: AvocadoHass,
      productname: 'Chicken Breast Fillets, Boneless matuumaMarinated 6 Ounce Raw, Invivid',
      brand: 'Hormel Black Labelmany',
      price: '$60',
      quantity: '15',
      total: '3000',
      status: '',
      check: 0
    },
    {
      thumbnail: AvocadoHass,
      productname: 'Chicken Breast Fillets, Boneless matuumaMarinated 6 Ounce Raw, Invivid',
      brand: 'Hormel Black Labelmany',
      price: '$60',
      quantity: '15',
      total: '3000',
      status: '',
      check: 1
    },
    {
      thumbnail: AvocadoHass,
      productname: 'Chicken Breast Fillets, Boneless matuumaMarinated 6 Ounce Raw, Invivid',
      brand: 'Hormel Black Labelmany',
      price: '$60',
      quantity: '15',
      total: '3000',
      status: '',
      check: 2
    },
    {
      thumbnail: AvocadoHass,
      productname: 'Chicken Breast Fillets, Boneless matuumaMarinated 6 Ounce Raw, Invivid',
      brand: 'Hormel Black Labelmany',
      price: '$60',
      quantity: '15',
      total: '3000',
      status: '',
      check: 0
    },
    {
      thumbnail: AvocadoHass,
      productname: 'Chicken Breast Fillets, Boneless matuumaMarinated 6 Ounce Raw, Invivid',
      brand: 'Hormel Black Labelmany',
      price: '$60',
      quantity: '15',
      total: '3000',
      status: '',
      check: 1
    }
  ]
};

const OrderTable: React.FC = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <Wrapper width="38%" flexDirection="row">
            <SearchGroup placeholder="Search..."></SearchGroup>
          </Wrapper>
          <Wrapper flexDirection="row">
            <Button>Add item</Button>
            <PrintIcon cx="0em 0em 0em 2em"></PrintIcon>
          </Wrapper>
        </CardHeader>
        <CardBody>
          <StyledTable>
            <thead>
              <tr>
                {tableData.header.map((item) => (
                  <th>{item}</th>
                ))}
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {tableData.content.map((row) => (
                <tr>
                  <td>
                    <img src={row.thumbnail} alt="Logo" />
                  </td>
                  <td>{row.productname}</td>
                  <td>{row.brand}</td>
                  <td>{row.price}</td>
                  <td>{row.quantity}</td>
                  <td>{row.total}</td>
                  <td>{row.status}</td>
                  <td>
                    <CheckButton status={row.check} />
                  </td>
                  <td>
                    <ClearButton status={row.check} />
                  </td>
                  <td>
                    <TextButton>Edit</TextButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </StyledTable>
        </CardBody>
      </Card>
    </>
  );
};

export default OrderTable;
