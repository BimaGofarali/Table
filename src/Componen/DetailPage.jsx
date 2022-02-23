import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import "./DetailPage.css";
import { getTicket } from "../store/action/ticket";
function DetailPage() {
  const dispatch = useDispatch();
  const { Ticket} = useSelector((state)=>state.reducerTicket.listTicket);
console.log(Ticket)
  useEffect(() => {
    dispatch(getTicket());
  }, [dispatch]);
  return (
    <>
      <div>
        <button className="button-add mt-2" type="sumbit">
          Add
        </button>
        <Table striped bordered hover size="sm">
          <thead>
            
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>{" "}
      </div>
    </>
  );
}

export default DetailPage;
