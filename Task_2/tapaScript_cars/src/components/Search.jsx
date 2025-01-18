import PropTypes from 'prop-types';
function Search({searchTerm, onSerachTerm}) {
    
    return(
        <div>
            <input className="border " type="text" placeholder="Search cars..." value={searchTerm} onChange={(e)=>onSerachTerm(e.target.value)}/>
        </div>
    )
}
Search.propTypes = {
    searchTerm: PropTypes.string,
    onSerachTerm: PropTypes.func
}
export default Search