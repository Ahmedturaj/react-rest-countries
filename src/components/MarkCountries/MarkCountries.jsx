

const MarkCountries = ({country}) => {
    return (
        <div style={{ border:'2px solid lightGreen', borderTopLeftRadius:'10px', borderBottomLeftRadius:'15px'}}>
          <div style={{display:'flex', gap:'5px', alignItems:'center', justifyContent:'center'}}>
          <h4>countries:</h4> 
          <h5> {country?.name?.common},</h5>
          </div>
          <div style={{display:'flex', gap:'5px', alignItems:'center', justifyContent:'center'}}>
          <h4>Capital:</h4> 
          <h5> {country?.capital},</h5>
          </div>
        </div>
    );
};

export default MarkCountries;