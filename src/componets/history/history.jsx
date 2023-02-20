import { Accordion, AccordionDetails, AccordionSummary, Collapse, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import axios from "../../axios/axios";
import { Box } from '@mui/system';

const History = () => {

  const [userHistory, setUserHistory] = useState([])
  
  useEffect(async () => {
    const token = localStorage?.getItem("token");
    const wishlist = await axios.get("/user/history", {
      headers: { Authorization: `Bearer ${token}` },
    });

    setUserHistory(wishlist?.data[0]?.history)
  }, [])


  console.log(userHistory);
  return (
    <Box className=' d-flex container col-7 border'>
      <TableContainer>
        <Table aria-label="collapsible table">
          <TableBody>
            {userHistory.map((row) => (
              <Accordion key={row.id}>
                <AccordionSummary expandIcon={<ExpandCircleDownIcon />}>
                  <TableCell />
                  <TableCell><b>Order History</b></TableCell>
                </AccordionSummary>
                <AccordionDetails>
                  {row.shoppingList.map((item) => (
                    <>
                      <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Quantity</TableCell>
                        <TableCell>Total Price</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.quantity}</TableCell>
                        <TableCell>{item.totalPrice}</TableCell>
                      </TableRow>
                    </>
                  ))}
                </AccordionDetails>
              </Accordion>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </Box>
  )
}

export default History