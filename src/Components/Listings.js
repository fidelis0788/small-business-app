import { Table, TableHead, TableBody, TableRow, TableCell, Container } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import { red } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';

const Listings = (props) => {
  return (
    <div>
      <Container maxWidth="lg" className="listings-container">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell >Description</TableCell>
              <TableCell >Hours</TableCell>
              <TableCell >Address</TableCell>
              {props.isLoggedIn ? 
                  <TableCell>Delete</TableCell>
                : null}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.listings.map(listing => (
              <TableRow key={listing.id}>
                <TableCell >
                  <Link to={`/details/${listing.id}`}>{listing.name}</Link>
                </TableCell>
                <TableCell>{listing.description}</TableCell>
                <TableCell>{listing.operating_hours}</TableCell>
                <TableCell>{listing.address}</TableCell>
                {props.isLoggedIn ? 
                  <TableCell><Delete onClick ={() => props.deleteListing(listing.id)} style={{ color: red[300]}} /></TableCell>
                : null}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
    </div>
  )
}


export default Listings;