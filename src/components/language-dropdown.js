const Languageoption = (props) => {
    return(
        <div style={{marginTop:'50px'}}>
            <select onChange={props.onChange}>
                <option>Select Language</option>
                <option value={'en'}>English</option>
                <option value={'bangla'}>Bangla</option>
                <option value={'marathi'}>Marathi</option>
                <option value={'hindi'}>Hindi</option>
                <option value={'telugu'}>Telugu</option>
            </select>
        </div>
    )
}
export default Languageoption;