import { useEffect,useState } from "react";
import { Table, Paper,TableHead,TableContainer, TableRow, TableCell,TableBody } from "@mui/material";

export default function ChildrenActivities() {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetchActivities().then(data => setActivities(data));
    }, [])
  return (
<TableContainer component={Paper} sx={{width: 650}}>
      <Table  aria-label="simple table" >
        <TableHead>
          <TableRow >
            <TableCell>Activity Name</TableCell>
            <TableCell align="right">Internet Link</TableCell>
            <TableCell align="right">Min Age</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {activities.map(([id,name,link,id2,minAge]) => (
            <TableRow
              key={name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{name}</TableCell>
              <TableCell align="right"><a href={"http://" + link} target="_blank" rel="noreferrer">{link}</a></TableCell>
              <TableCell align="right">{minAge}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}



async function fetchActivities(){
    const response = await fetch("http://localhost:8080/customers/children");
    const data = await response.json();
    console.log(data)
    return data;
}