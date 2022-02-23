import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import "./DetailPage.css";
import { getDetail } from "../store/action/Detail";
function DetailPage() {
  const dispatch = useDispatch();
  const { Ticket } = useSelector(
    (state) => state.reducerDetail.listTicket
  );
  useEffect(() => {
    dispatch(getDetail());
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
