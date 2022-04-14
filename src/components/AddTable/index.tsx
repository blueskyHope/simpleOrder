import React, { useState } from 'react';
import { StyledHead, StyledContent } from '../../shared/ModalTable';
import { Card, CardHeading, CardHeader, CardBody, CardFooter } from '../../shared/Card';
import { Wrapper, TableContent, TableHead } from './styles';
import { SearchGroup } from '../../shared/Search';
import { Button, TextButton, ApproveButton } from '../../shared/Button';
import { Input } from '../../shared/Input';
import { Text } from '../../shared/Text';
import AvocadoHass from '../../assets/images/Avocado Hass.jpg';
import { PrintIcon, ClearButton, CheckButton, SearchIcon } from '../../shared/Icons';

const tableData = {
  header: ['', 'Product name', 'Brand', 'Packing', 'Price($)', 'Qt.'],
  content: [
    {
      thumbnail: AvocadoHass,
      productname: 'Chicken Breast Fillets, Boneless matuumaMarinated 6 Ounce Raw, Invivid',
      brand: 'Hormel Black Labelmany',
      price: '$60',
      quantity: '15',
      total: '3000'
    },
    {
      thumbnail: AvocadoHass,
      productname: 'Chicken Breast Fillets, Boneless matuumaMarinated 6 Ounce Raw, Invivid',
      brand: 'Hormel Black Labelmany',
      price: '$60',
      quantity: '15',
      total: '3000'
    },
    {
      thumbnail: AvocadoHass,
      productname: 'Chicken Breast Fillets, Boneless matuumaMarinated 6 Ounce Raw, Invivid',
      brand: 'Hormel Black Labelmany',
      price: '$60',
      quantity: '15',
      total: '3000'
    },
    {
      thumbnail: AvocadoHass,
      productname: 'Chicken Breast Fillets, Boneless matuumaMarinated 6 Ounce Raw, Invivid',
      brand: 'Hormel Black Labelmany',
      price: '$60',
      quantity: '15',
      total: '3000'
    },
    {
      thumbnail: AvocadoHass,
      productname: 'Chicken Breast Fillets, Boneless matuumaMarinated 6 Ounce Raw, Invivid',
      brand: 'Hormel Black Labelmany',
      price: '$60',
      quantity: '15',
      total: '3000'
    },
    {
      thumbnail: AvocadoHass,
      productname: 'Chicken Breast Fillets, Boneless matuumaMarinated 6 Ounce Raw, Invivid',
      brand: 'Hormel Black Labelmany',
      price: '$60',
      quantity: '15',
      total: '3000'
    },
    {
      thumbnail: AvocadoHass,
      productname: 'Chicken Breast Fillets, Boneless matuumaMarinated 6 Ounce Raw, Invivid',
      brand: 'Hormel Black Labelmany',
      price: '$60',
      quantity: '15',
      total: '3000'
    },
    {
      thumbnail: AvocadoHass,
      productname: 'Chicken Breast Fillets, Boneless matuumaMarinated 6 Ounce Raw, Invivid',
      brand: 'Hormel Black Labelmany',
      price: '$60',
      quantity: '15',
      total: '3000'
    }
  ]
};

const AddTable: React.FC = () => {
  return (
    <>
      <Card>
        <CardHeading>Search Products from Sysco's catalog and add quantity</CardHeading>
        <CardHeader>
          <Wrapper width="38%" flexDirection="row">
            <SearchGroup placeholder="Search..."></SearchGroup>
          </Wrapper>
        </CardHeader>
        <CardBody>
          <TableHead>
            <StyledHead>
              <thead>
                <tr>
                  {tableData.header.map((item) => (
                    <th>{item}</th>
                  ))}
                </tr>
              </thead>
            </StyledHead>
          </TableHead>
          <TableContent>
            <StyledContent>
              <tbody>
                {tableData.content.map((row) => (
                  <tr>
                    <td>
                      <img src={row.thumbnail} alt="Logo" />
                    </td>
                    <td>{row.productname}</td>
                    <td>{row.brand}</td>
                    <td>{row.price}</td>
                    <td>
                      <Input value={row.price} />
                    </td>
                    <td>
                      <Input value={row.quantity} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </StyledContent>
          </TableContent>
        </CardBody>
        <CardFooter>
          <Wrapper flexDirection="row">
            <Text>Total: 1 product</Text>
          </Wrapper>
          <Wrapper flexDirection="row">
            <Button>Back</Button>
            <ApproveButton>Add</ApproveButton>
          </Wrapper>
        </CardFooter>
      </Card>
    </>
  );
};

export default AddTable;
