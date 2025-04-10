import { AddressAutofill } from '@mapbox/search-js-react';

const MyAddressForm = () => {
  return (
    <form >
      <AddressAutofill
        accessToken='pk.eyJ1IjoiMjIxMTEwMTEzMiIsImEiOiJjbTc3cWhldXIxMmZyMnJzZ3F4ZGp6YTZuIn0.vOl6F3cJgJ0qV505fDe58w'
      >
        <input type="text" name="address-1" autocomplete="address-line1" className='bg-slate-300 border-solid rounded-md '/>
        {/* <input type="text" name="address-2" autocomplete="address-line2" />
        <input type="text" name="city" autocomplete="address-level2" />
        <input type="text" name="state" autocomplete="address-level1" />
        <input type="text" name="zip" autocomplete="postal-code" /> */}
      </AddressAutofill>
    </form>
  )
}

export default MyAddressForm
