export default function CardAddress({ address1, address2, city,state_province,postcode,country }) {
    return( 
     <address className="text-start m-3">
        <ul className="list-group">
          <h6
            className="ps-3 bg-secondary list-group-item m-0"
            style={{ '--bs-bg-opacity': 0.075 }}
          >
            Address:
          </h6>
          <li className="list-group-item">{address1}</li>
          <li className="list-group-item">{address2}</li>
          <li className="list-group-item">{city}</li>
          <li className="list-group-item">{state_province}</li>
          <li className="list-group-item">{postcode}</li>
          <li className="list-group-item">{country}</li>
        </ul>
      </address>
    );
  }